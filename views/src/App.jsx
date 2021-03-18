import "./App.scss";
import React from "react";
import { } from "@alrale";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import RouterForm from "./components/Router/index";
import TagsGroup from "./components/TagsGroup";
import { headerInfos } from "./utils/data";
import { Button, Upload } from "antd";
import { AlignCenterOutlined, UploadOutlined } from "@ant-design/icons";

export default class App extends React.Component {
  state = {};

  constructor() {
    super();
    this.state = {
      infos: headerInfos,
      isShow: false,
      list: [],
      tags: [{ name: 'Default', focus: true, visible: false }],
      routerValues: null,
      isRouterEdit: false,
      editRouterIndex: null,
      loading: false,
      host: ''
    };
  }

  setModalShow(bool) {
    this.setState({ isShow: bool, isRouterEdit: false, routerValues: null });
  }

  removeRow(index) {
    const { list } = this.state
    list.splice(index, 1)
    const newList = list.map(item => {
      return {
        ...item,
        index: item.index + Math.random().toString().substr(2, 3)
      }
    })
    this.setState({ list: newList })
  }

  editRow(index) {
    const { list } = this.state
    this.setState({
      routerValues: list[index],
      isRouterEdit: true,
      editRouterIndex: index
    }, () => this.setState({ isShow: true }))
  }

  setRows(row) {
    const { list: _list, isRouterEdit, editRouterIndex } = this.state;
    row.remove = (index) => this.removeRow(index)
    row.edit = (index) => this.editRow(index)
    if (isRouterEdit) {
      _list[editRouterIndex] = row
      const newList = _list.map(item => {
        return {
          ...item,
          index: item.index + Math.random().toString().substr(2, 3)
        }
      })
      this.setState({ list: newList });
    } else this.setState({ list: [..._list, row] });
  }

  setTags(tagName) {
    const { tags } = this.state
    tags.push({ name: tagName, focus: true })
    this.setState({ tags })
  }

  updateTagsStatus(index) {
    const { tags } = this.state
    tags[index].focus = !tags[index].focus
    this.setState({ tags })
  }

  removeTag(index) {
    const { tags } = this.state
    tags.splice(index, 1)
    this.setState({ tags })
  }

  tagVisibleChange(index, bool) {
    const { tags } = this.state
    tags[index].visible = bool
    this.setState({ tags })
  }

  updateRows(rows) {
    this.setState({ list: rows })
  }

  setInfos(infos) {
    this.setState({ infos: { ...this.state.infos, ...infos } })
  }

  /**下载 */
  handleDownload() {
    const { infos, list } = this.state
    const swagger = { ...infos, paths: {} }
    list.forEach(router => {
      const { path, method, tag, summary } = router
      swagger.paths[path] = {
        [method]: {
          summary,
          tags: [tag],
          produces: ["application/json"],
          parameters: [{}],
          responses: {}
        }
      }
    })
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,module.exports = ' + JSON.stringify(swagger, null, '\t'))
    element.setAttribute('download', 'mock.js')
    element.style.display = 'none'
    element.click()
  }

  handleUpload(info) {
    this.setState({ loading: true })
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.setState({ loading: false })
      const { file } = info
      const { ok, data } = file.response
      if (ok) {
        const { swagger, info, schemes, paths = [] } = data;
        paths.forEach(router => {
          const { path, method, tag, summary } = router
        })
        this.setState({ infos: { swagger, info, schemes }, list: [] }, () => {
          this.setState()
        })
        // this.setRows
      }
    } else if (info.file.status === 'error') {
      console.log('error')
    }
  }

  async init() {
    const { ok, data } = (await fetch('http://localhost:8090/port')).json()
    if (ok) this.setState({ host: `http://localhost:${data}` })
  }

  componentDidMount() {
    this.init()
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div style={{ display: 'flex', position: 'fixed', top: 25, right: 25 }}>
            <Upload onPreview name="file" method="POST" action={`${this.state.host}/upload`} onChange={(info) => this.handleUpload(info)}>
              <Button disabled={this.state.loading} type="primary" icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Button disabled={this.state.loading} type="primary" style={{ marginLeft: 20 }} danger>Sync</Button>
            <Button disabled={this.state.loading} type="primary" style={{ marginLeft: 20 }} onClick={() => this.handleDownload()}>Download</Button>
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
            updateTagsStatus={(index) => this.updateTagsStatus(index)}
            removeTag={(index) => this.removeTag(index)}
            tagVisibleChange={(index, bool) => this.tagVisibleChange(index, bool)}
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
            list={this.state.list}
            tags={this.state.tags}
            setRows={(list) => this.setRows(list)}
            setModalShow={(bool) => this.setModalShow(bool)}
            isShow={this.state.isShow}
            isRouterEdit={this.state.isRouterEdit}
            routerValues={this.state.routerValues}
          />
        </div>
      </div>
    );
  }
}
