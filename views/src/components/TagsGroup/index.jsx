import React from "react";
import { Button, Input, Popover } from "antd";
import {
  BorderLeftOutlined,
  CheckSquareOutlined,
  StopOutlined,
} from "@ant-design/icons";

export default class TagsGroup extends React.Component {
  inpRef = React.createRef(null);

  state = {
    isEdit: false,
    tagName: "",
  };

  handleOk() {
    if (this.state.tagName) this.props.setTags(this.state.tagName);
    this.setState({ isEdit: false });
  }

  handleKeyDown(e) {
    const { keyCode, target } = e;
    if (keyCode === 13 && target.value) {
      this.props.setTags(target.value);
      this.setState({ isEdit: false, tagName: "" });
    }
  }

  handleBlur(e) {
    const { target } = e;
    if (target.value) this.props.setTags(target.value);
    this.setState({ isEdit: false, tagName: "" });
  }

  handleChange(e) {
    this.setState({ tagName: e.target.value });
  }

  handleEdit() {
    this.setState({ isEdit: true }, () => this.inpRef.current.focus());
  }

  // 选中
  handleCheck(tag, index) {
    this.props.updateTagsStatus(tag, index);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          marginBottom: "10px",
          flexWrap: "wrap",
        }}
      >
        {this.props.tags.map((tag, index) => {
          return (
            <Popover
              key={index}
              size="small"
              content={
                <a onClick={() => this.props.removeTag(index)}>remove</a>
              }
              trigger="hover"
              visible={tag.visible}
              onVisibleChange={(bool) =>
                this.props.tagVisibleChange(index, bool)
              }
            >
              <Button
                disabled={this.props.loading}
                type={tag.focus && "primary"}
                size="small"
                style={{ marginRight: 8, marginBottom: 8 }}
                onClick={() => this.handleCheck(tag, index)}
              >
                {tag.name}
              </Button>
            </Popover>
          );
        })}
        {this.state.isEdit ? (
          <>
            <Input
              ref={this.inpRef}
              size="small"
              onKeyDown={(e) => this.handleKeyDown(e)}
              onBlur={(e) => this.handleBlur(e)}
              placeholder="tag name"
              onChange={(e) => this.handleChange(e)}
              style={{ width: 80, marginRight: 5 }}
            />
            <Button
              disabled={this.props.loading}
              size="small"
              onClick={() => this.handleOk()}
              icon={<CheckSquareOutlined style={{ color: "#F56C6C" }} />}
            />
          </>
        ) : (
          <Button
            disabled={this.props.loading}
            size="small"
            onClick={() => this.handleEdit()}
            icon={<BorderLeftOutlined style={{ color: "#F56C6C" }} />}
          />
        )}
        <Button
          disabled={this.props.loading}
          size="small"
          onClick={() => this.props.tagsClearAll()}
          style={{ marginLeft: 8 }}
          icon={<StopOutlined />}
        />
      </div>
    );
  }
}
