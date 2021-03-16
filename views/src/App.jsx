import "./App.css";
import React from "react";
import SortableTable from "./components/Table/index";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className="container">
      <SortableTable></SortableTable>
    </div>);
  }
}
