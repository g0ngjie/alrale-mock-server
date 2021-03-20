import React from "react";
import { Form, Modal } from "antd";
import { sleep } from "@alrale/common-lib";
import CodeBox from "./CodeBox";

export default class Condition extends React.Component {

  state = {}

  constructor(props) {
    super(props)
    this.state.form = React.createRef()
  }

  async handleOk() {
    try {
      const condition = await this.state.form.current.getFieldValue('condition');
      this.props.setRows({ condition });
      this.state.form.current.resetFields()
      this.props.setModalShow(false);
    } catch (err) {
      return
    }
  };

  handleCancel = () => {
    this.state.form.current.resetFields()
    this.props.setModalShow(false);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isRouterEdit) {
      const { condition = '' } = props.routerValues
      sleep(100, () => {
        state.form.current.setFieldsValue({
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
    const { condition } = this.props.routerValues || {}
    return (
      <>
        <Modal
          title="条件"
          style={{ top: 20 }}
          visible={this.props.isShow}
          onOk={() => this.handleOk()}
          onCancel={this.handleCancel}
          width="700px"
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
            <Form.Item label="条件返回" name="condition">
              <CodeBox code={condition} name="condition" onChange={(code) => this.handleCodeChange(code, 'condition')} />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
