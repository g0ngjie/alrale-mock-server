import "./App.scss";
import React from "react";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import RouterForm from "./components/Router/index";
import { headerInfos } from "./utils/data";
import { Button } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

export default class App extends React.Component {
  state = {};

  constructor() {
    super();
    this.state = {
      infos: { info: {} },
      isShow: false,
      list: [],
    };
  }

  setModalShow(bool) {
    this.setState({ isShow: bool });
  }

  setRows(row) {
    const _list = this.state.list;
    const newList = [];
    console.log(_list.length, '_list.length');
    if (_list.length === 0) {
      newList.push({ ...row, index: Date.now() })
      this.setState({ list: newList });
    } else {
      for (let i = 0; i < _list.length; i++) {
        const item = _list[i];
        newList.push({ ...item, index: Date.now() });
      }
      newList.push({ ...row, index: row.index + _list.length })
      // const newList = _list.map(item => item.index = Date.now())
      // console.log(newList);
      // newList.push({ ...row, index: Date.now() });
      // _list.push({ ...row, index: Date.now() });
      console.log(newList, 'newList');
      this.setState({ list: newList });
    }
  }

  componentDidMount() {
    this.setState({
      infos: headerInfos,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <HeadInfo infos={this.state.infos} />
          <SortableTable list={this.state.list} />
          <Button
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
            setRows={(list) => this.setRows(list)}
            setModalShow={(bool) => this.setModalShow(bool)}
            isShow={this.state.isShow}
          />
        </div>
      </div>
    );
  }
}
