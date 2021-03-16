import "./App.scss";
import React from "react";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import RouterForm from "./components/Router/index";
import { headerInfos } from "./utils/data";
import { Button } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

export default class App extends React.Component {
  state = {}

  constructor() {
    super()
    this.state = {
      infos: { info: {} },
      isShow: false
    }
  }

  setModalShow(bool) {
    this.setState({ isShow: bool })
  }

  componentDidMount() {
    this.setState({
      infos: headerInfos
    })
  }



  render() {
    return (<div className="container">
      <div className="columns">
        <HeadInfo infos={this.state.infos} />
        <SortableTable />
        <Button
          size="small"
          type="ghost"
          icon={
            <AlignCenterOutlined style={{ color: 'rgba(255,255,255,0.9)' }} />
          }
          onClick={() => this.setModalShow(true)}
          style={{ marginTop: '20px', width: '50px' }}
        />
        <RouterForm setModalShow={(bool) => this.setModalShow(bool)} isShow={this.state.isShow} />
      </div>
    </div>);
  }
}
