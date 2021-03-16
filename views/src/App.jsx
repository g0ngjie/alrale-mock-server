import "./App.scss";
import React from "react";
import SortableTable from "./components/Table/index";
import HeadInfo from "./components/HeadInfo/index";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className="container">
      <div className="columns">
        <HeadInfo></HeadInfo>
        <SortableTable></SortableTable>
      </div>
    </div>);
  }
}
