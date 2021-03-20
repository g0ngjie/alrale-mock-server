import { Table, Tag, Button } from "antd";
import React from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined, DeleteOutlined, EditOutlined, RetweetOutlined } from "@ant-design/icons";
import arrayMove from "array-move";

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));

const columns = [
  {
    title: "#",
    dataIndex: "sort",
    width: 30,
    render: () => <DragHandle />,
  }, {
    title: "Path",
    dataIndex: "path",
    ellipsis: true
  }, {
    title: "Method",
    dataIndex: "method",
    render: (method, index) => {
      const _conf = {
        'GET': '#61affe',
        'POST': '#49cc90',
        'PUT': '#fca130',
        'DELETE': '#F56C6C',
      }
      return <Tag style={{ color: _conf[method.toUpperCase()] }} key={index}> {method.toUpperCase()} </Tag>
    },
  }, {
    title: "Tag",
    dataIndex: "tag",
    render: (tag, index) => (
      <Tag color="cyan" key={index}>
        {tag.toUpperCase()}
      </Tag>
    ),
  }, {
    title: "概要",
    dataIndex: "summary",
    ellipsis: true,
  }, {
    title: '参数',
    dataIndex: "parameters",
    ellipsis: true
  }, {
    title: '响应',
    dataIndex: "responses",
    ellipsis: true
  }, {
    title: '条件',
    dataIndex: "condition",
    ellipsis: true
  }, {
    title: 'operation',
    dataIndex: 'operation',
    width: '150px',
    render: (_, record, index) => {
      return (<>
        <Button type="text" onClick={() => record.edit(index)} icon={<EditOutlined />} style={{ marginRight: 10, color: '#67C23A' }} ></Button>
        <Button type="text" onClick={() => record.editCondition(index)} icon={<RetweetOutlined />} style={{ marginRight: 10, color: '#E6A23C' }} ></Button>
        <Button type="text" onClick={() => record.remove(index)} icon={<DeleteOutlined />} danger></Button>
      </>)
    }
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
      <div style={{ width: '100%' }}>
        <Table
          loading={this.props.loading}
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
