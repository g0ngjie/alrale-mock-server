import React from "react";
import { Form, Input, Modal, Radio, Select } from "antd";

export default class RouterForm extends React.Component {

  state = {
    form: React.createRef()
  }

  setIsModalVisible(val) {
    this.props.setModalShow(val);
  }

  async handleOk() {
    try {
      const values = await this.state.form.current.validateFields();
      this.props.setRows({ ...values, index: Date.now() });
      this.state.form.current.resetFields()
      this.setIsModalVisible(false);
    } catch (err) {
      return
    }
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isRouterEdit) {
      const { method, path, tag, summary } = props.routerValues
      state.form.current.setFieldsValue({ method, path, tag, summary });
    }
    return null
  }

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
            ref={this.state.form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 17,
            }}
            layout="horizontal"
            initialValues={{ method: 'get', tag: 'Default' }}
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
            <Form.Item label="Tag" name="tag" rules={[{ required: true, message: '路由地址' }]}>
              <Select style={{ width: 120 }} >
                {
                  this.props.tags.map((tag, index) => {
                    return <Select.Option key={index} value={tag.name}>{tag.name}</Select.Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item label="概要" name="summary">
              <Input.TextArea placeholder="概要" />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
