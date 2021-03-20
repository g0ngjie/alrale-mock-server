import React from "react";
import { Form, Input, Modal, Radio, Select } from "antd";
import { sleep, uniqueId } from "@alrale/common-lib";
import CodeBox from "./CodeBox";

export default class RouterForm extends React.Component {

  state = {}

  constructor(props) {
    super(props)
    this.state.form = React.createRef()
  }

  setIsModalVisible(val) {
    this.props.setModalShow(val);
  }

  async handleOk() {
    try {
      const values = await this.state.form.current.validateFields();
      this.props.setRows({ ...values, index: uniqueId() });
      this.state.form.current.resetFields()
      this.setIsModalVisible(false);
    } catch (err) {
      return
    }
  };

  handleCancel = () => {
    this.state.form.current.resetFields()
    this.setIsModalVisible(false);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isRouterEdit) {
      const { method, path, tag, summary, parameters = '', responses = '', condition = '' } = props.routerValues
      sleep(100, () => {
        state.form.current.setFieldsValue({
          method,
          path,
          tag,
          summary,
          parameters,
          responses,
          condition
        })
      })
      return state
    }
    return null
  }

  handleCodeChange(code, key) {
    this.props.updateRowCodeByKey(key, code)
  }

  render() {
    const { parameters, responses, condition } = this.props.routerValues || {}
    return (
      <>
        <Modal
          title="接口文件"
          style={{ top: 20 }}
          visible={this.props.isShow}
          onOk={() => this.handleOk()}
          onCancel={this.handleCancel}
          width="850px"
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
            <Form.Item label="Parameters" name="parameters">
              <CodeBox code={parameters} onChange={(code) => this.handleCodeChange(code, 'parameters')} />
            </Form.Item>
            <Form.Item label="Responses" name="responses">
              <CodeBox code={responses} onChange={(code) => this.handleCodeChange(code, 'responses')} />
            </Form.Item>
            <Form.Item label="条件返回" name="condition">
              <CodeBox code={condition} onChange={(code) => this.handleCodeChange(code, 'condition')} />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
