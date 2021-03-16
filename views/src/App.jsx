import "./App.scss";
import React from "react";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";
import { headerInfos } from "./utils/data";

export default class App extends React.Component {
  state = {}

  constructor() {
    super()
    this.state = { infos: { info: {} } }
  }

  componentDidMount() {
    this.setState({
      infos: headerInfos
    })
  }



  render() {
    return (<div className="container">
      <div className="columns">
        <HeadInfo infos={this.state.infos}></HeadInfo>
        <SortableTable></SortableTable>
      </div>
    </div>);
  }
}
