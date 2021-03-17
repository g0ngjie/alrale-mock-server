import { Table } from "antd";
import React from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";
import arrayMove from "array-move";
import "./index.css";

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));

const columns = [
  {
    title: "#",
    dataIndex: "sort",
    width: 30,
    render: () => <DragHandle />,
  },
  {
    title: "Path",
    dataIndex: "path",
  },
  {
    title: "Method",
    dataIndex: "method",
  }
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

export default class SortableTable extends React.Component {

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { list } = this.props;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(list),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      this.props.updateRows(newData)
    }
  };

  DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { list } = this.props;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = list.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };

  render() {
    return (
      <div className="table-container">
        <Table
          pagination={false}
          dataSource={this.props.list}
          columns={columns}
          rowKey="index"
          components={{
            body: {
              wrapper: this.DraggableContainer,
              row: this.DraggableBodyRow,
            },
          }}
        />
      </div>
    );
  }
}
