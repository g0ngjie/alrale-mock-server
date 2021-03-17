import React from "react";
import { Form, Input, Modal, Radio } from "antd";

export default class RouterForm extends React.Component {
  form = React.createRef();

  state = {
    data: {},
  };
  setIsModalVisible(val) {
    this.props.setModalShow(val);
  }

  async handleOk() {
    try {
      const values = await this.form.current.validateFields();
      this.props.setRows({ ...values, index: Date.now() });
      this.form.current.resetFields()
      this.setIsModalVisible(false);
    } catch (err) {
      return
    }
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  render() {
    return (
      <>
        <Modal
          title="接口文件"
          style={{ top: 20 }}
          visible={this.props.isShow}
          onOk={() => this.handleOk()}
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
            initialValues={{
              method: 'get'
            }}
          >
            <Form.Item label="Path" name="path" rules={[{ required: true, message: '路由地址' }]}>
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
