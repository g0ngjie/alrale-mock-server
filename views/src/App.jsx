import "./App.scss";
import React from "react";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import RouterForm from "./components/Router/index";
import { headerInfos } from "./utils/data";
import { Button, Affix } from "antd";
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
    this.setState({ list: [..._list, row] });
  }

  updateRows(rows) {
    this.setState({ list: rows })
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
          <Affix style={{ position: 'fixed', top: 25, right: 25 }}>
            <Button type="primary" danger>Sync</Button>
            <Button type="primary" style={{ marginLeft: 20 }}>Download</Button>
          </Affix>
          <HeadInfo infos={this.state.infos} />
          <SortableTable updateRows={(list) => this.updateRows(list)} list={this.state.list} />
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
