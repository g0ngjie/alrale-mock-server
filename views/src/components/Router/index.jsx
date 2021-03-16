import React from "react";
import { Form, Input, Modal, Radio, Button } from "antd";

export default class RouterForm extends React.Component {
  form = React.createRef();

  state = {
    data: {},
  };
  setIsModalVisible(val) {
    this.props.setModalShow(val);
  }

  handleOk = () => {
    // console.log(this.form, "form");
    const row = this.form.current.getFieldsValue(["method", "path"]);
    this.props.setRows({...row, index: Date.now()});
    this.setIsModalVisible(false);
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  onValuesChange(changedValues, allValues) {
    //   console.log(changedValues, allValues)
    // this.setState({ data: {...allValues} });
  }

  render() {
    return (
      <>
        <Modal
          title="接口文件"
          style={{ top: 20 }}
          visible={this.props.isShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            ref={this.form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 17,
            }}
            layout="horizontal"
            onValuesChange={this.onValuesChange}
            // initialValues={{
            //     size: 'small',
            // }}
            // size='small'
          >
            <Form.Item label="Path" name="path">
              <Input placeholder="路由地址" />
            </Form.Item>
            <Form.Item label="协议" name="method">
              <Radio.Group>
                <Radio.Button value="get">GET</Radio.Button>
                <Radio.Button value="post">POST</Radio.Button>
                <Radio.Button value="put">PUT</Radio.Button>
                <Radio.Button value="delete">DELETE</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
