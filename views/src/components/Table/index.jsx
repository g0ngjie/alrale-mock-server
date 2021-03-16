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
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "Path",
    dataIndex: "path",
    className: "drag-visible",
  },
  {
    title: "Method",
    dataIndex: "method",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    index: 0,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    index: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    index: 2,
  },
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

export default class SortableTable extends React.Component {
  state = {
    list: [],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { list } = this.props;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(list),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      console.log("Sorted items: ", newData);
      this.setState({ list: newData });
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

  componentDidMount() {
    this.setState({ list: this.props.list })
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, 'pro');
    this.setState({ list: nextProps.list })
  }

  render() {
    // const { list } = this.state

    return (
      <div className="table-container">
        <Table
          pagination={false}
          dataSource={this.state.list}
          columns={columns}
          // rowKey="index"
          rowKey={function(record) {
            return record.index + Date.now()
          }}
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
