import "./App.css";
import React from "react";
import { uniqueId, stringExtension, randomString } from "@alrale/common-lib";
import { simpleDownload } from "@alrale/downloads";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import RouterForm from "./components/Router/index";
import Condition from "./components/Router/Condition";
import TagsGroup from "./components/TagsGroup";
import { headerInfos } from "./utils/data";
import { Button, Upload, message } from "antd";
import {
  AlignCenterOutlined,
  UploadOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

export default class App extends React.Component {
  state = {};

  constructor() {
    super();

    this.state = {
      infos: headerInfos,
      isShow: false,
      list: [], // table 数据
      cacheTables: [], // 缓存table数据
      tags: [{ name: "Default", focus: true, visible: false }],
      routerValues: {},
      isRouterEdit: false,
      isCondition: false,
      editRouterIndex: null,
      loading: false,
    };
  }

  setModalShow(bool) {
    this.setState(
      { isRouterEdit: false, isCondition: false, routerValues: {} },
      () => {
        this.setState({ isShow: bool });
      }
    );
  }

  removeRow(index) {
    const { list } = this.state;
    list.splice(index, 1);
    const newList = list.map((item) => {
      return {
        ...item,
        index: item.index + Math.random().toString().substr(2, 3),
      };
    });
    this.setState({ list: newList, cacheTables: newList });
  }

  editRow(index, isCondition = false) {
    const { list } = this.state;
    this.setState(
      {
        routerValues: list[index],
        isRouterEdit: !isCondition,
        editRouterIndex: index,
      },
      () => this.setState({ isShow: !isCondition, isCondition })
    );
  }

  // 修改row的code
  updateRowCodeByKey(key, code) {
    const { routerValues } = this.state;
    routerValues[key] = code;
    routerValues.index = uniqueId();
    this.setState({ routerValues });
  }

  setRows(row) {
    const {
      list: _list,
      isRouterEdit,
      isCondition,
      editRouterIndex,
    } = this.state;
    row.remove = (index) => this.removeRow(index);
    row.edit = (index) => this.editRow(index);
    row.editCondition = (index) => this.editRow(index, true);
    if (isRouterEdit) {
      _list[editRouterIndex] = { ..._list[editRouterIndex], ...row };
      const newList = _list.map((item) => {
        return {
          ...item,
          index: uniqueId(),
        };
      });
      this.setState({ list: newList, cacheTables: newList, routerValues: {} });
    } else if (isCondition) {
      _list[editRouterIndex].condition = row.condition;
      const newList = _list.map((item) => {
        return {
          ...item,
          index: uniqueId(),
        };
      });
      this.setState({ list: newList, cacheTables: newList, routerValues: {} });
    } else
      this.setState({ list: [..._list, row], cacheTables: [..._list, row] });
  }

  setTags(tagName) {
    const { tags } = this.state;
    tags.push({ name: tagName, focus: true });
    this.setState({ tags });
  }

  // 清除全部选中条件
  tagsClearAll() {
    const { tags } = this.state;
    tags.forEach((item) => (item.focus = false));
    this.setState({ tags, list: [] });
  }

  updateTagsStatus(_, index) {
    const { tags, cacheTables } = this.state;
    tags[index].focus = !tags[index].focus;

    // 过滤列表
    const filterList = tags.filter((tag) => tag.focus).map((tag) => tag.name);
    const newList = [];
    cacheTables.forEach((row) => {
      if (filterList.includes(row.tag)) {
        newList.push({ ...row, index: uniqueId() });
      }
    });
    this.setState({ list: newList, tags });
  }

  removeTag(index) {
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState({ tags });
  }

  tagVisibleChange(index, bool) {
    const { tags } = this.state;
    tags[index].visible = bool;
    this.setState({ tags });
  }

  updateRows(rows) {
    this.setState({ list: rows });
  }

  setInfos(infos) {
    this.setState({ infos: { ...this.state.infos, ...infos } });
  }

  /**下载 */
  handleDownload() {
    const { infos, list } = this.state;
    const swagger = { ...infos, paths: {} };
    list.forEach((row) => {
      const {
        path,
        method,
        tag,
        summary,
        parameters,
        responses,
        condition,
      } = row;
      swagger.paths[path] = {
        [method]: {
          summary,
          tags: [tag],
          produces: ["application/json"],
          parameters,
          responses,
          condition,
        },
      };
    });
    simpleDownload(
      `module.exports = ${JSON.stringify(swagger, null, "\t")}`,
      `${randomString(5).toLowerCase()}_mock.js`
    );
  }

  handleBeforeUpload(file) {
    this.setState({ loading: true });
    // 判断后缀
    const flag = stringExtension(file.name, ".", "js");
    if (!flag) {
      message.error("请上传js文件");
      this.setState({ loading: false });
      return Promise.reject();
    }
    return Promise.resolve();
  }

  handleUpload(info) {
    if (info.file.status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      this.setState({ loading: false });
      const { file } = info;
      const { ok, data } = file.response;
      if (ok) {
        const { swagger, info, schemes, paths = {}, host, basePath } = data;
        const list = [];
        const tagList = new Set();
        for (const path in paths) {
          const router = { path, index: uniqueId() };
          if (Object.hasOwnProperty.call(paths, path)) {
            const item = paths[path];
            for (const method in item) {
              if (Object.hasOwnProperty.call(item, method)) {
                const {
                  tags,
                  condition,
                  parameters,
                  responses,
                  summary,
                } = item[method];
                router.summary = summary;
                router.method = method;
                router.condition = condition;
                router.parameters = parameters;
                router.responses = responses;
                router.tag = tags[0];
                tagList.add(tags[0]);
              }
            }
          }
          router.remove = (index) => this.removeRow(index);
          router.edit = (index) => this.editRow(index);
          router.editCondition = (index) => this.editRow(index, true);
          list.push(router);
        }
        const tags = [];
        tagList.forEach((tag) =>
          tags.push({ name: tag, focus: true, visible: false })
        );
        this.setState({
          infos: { swagger, info, schemes, host, basePath },
          list,
          cacheTables: list,
          tags,
        });
      }
    } else if (info.file.status === "error") {
      console.log("error");
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container-columns">
          <div
            style={{ display: "flex", position: "fixed", top: 25, right: 25 }}
          >
            <Upload
              beforeUpload={(file) => this.handleBeforeUpload(file)}
              name="file"
              method="POST"
              previewFile={() => Promise.resolve(false)}
              action={`http://${this.state.infos.host}/upload`}
              onChange={(info) => this.handleUpload(info)}
            >
              <Button
                disabled={this.state.loading}
                type="primary"
                icon={<UploadOutlined />}
              />
            </Upload>
            {/* <Button disabled={this.state.loading} type="primary" style={{ marginLeft: 20 }} danger>Sync</Button> */}
            <Button
              disabled={this.state.loading || this.state.list.length === 0}
              type="primary"
              style={{ marginLeft: 10 }}
              icon={<DownloadOutlined />}
              onClick={() => this.handleDownload()}
            />
          </div>
          <HeadInfo
            loading={this.state.loading}
            infos={this.state.infos}
            setInfos={(infos) => this.setInfos(infos)}
          />
          <TagsGroup
            loading={this.state.loading}
            tags={this.state.tags}
            setTags={(tags) => this.setTags(tags)}
            tagsClearAll={() => this.tagsClearAll()}
            updateTagsStatus={(tag, index) => this.updateTagsStatus(tag, index)}
            removeTag={(index) => this.removeTag(index)}
            tagVisibleChange={(index, bool) =>
              this.tagVisibleChange(index, bool)
            }
          />
          <SortableTable
            loading={this.state.loading}
            updateRows={(list) => this.updateRows(list)}
            list={this.state.list}
          />
          <Button
            disabled={this.state.loading}
            size="small"
            type="ghost"
            icon={
              <AlignCenterOutlined style={{ color: "rgba(255,255,255,0.9)" }} />
            }
            onClick={() => this.setModalShow(true)}
            style={{ marginTop: "20px", width: "50px" }}
          />
          <RouterForm
            tags={this.state.tags}
            setRows={(row) => this.setRows(row)}
            setModalShow={(bool) => this.setModalShow(bool)}
            isShow={this.state.isShow}
            isRouterEdit={this.state.isRouterEdit}
            routerValues={this.state.routerValues}
            updateRowCodeByKey={(key, code) =>
              this.updateRowCodeByKey(key, code)
            }
          />
          <Condition
            setRows={(row) => this.setRows(row)}
            setModalShow={(bool) => this.setModalShow(bool)}
            isShow={this.state.isCondition}
            isRouterEdit={this.state.isCondition}
            routerValues={this.state.routerValues}
            updateRowCodeByKey={(key, code) =>
              this.updateRowCodeByKey(key, code)
            }
          />
        </div>
      </div>
    );
  }
}
