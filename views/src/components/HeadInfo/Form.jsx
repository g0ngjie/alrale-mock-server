import React from "react";
import { Form, Input, Modal } from "antd";

export default class InfoForm extends React.Component {
  state = {
    form: null,
  };

  setIsModalVisible(val) {
    this.props.setModalShow(val);
  }

  handleOk = () => {
    const {
      title,
      version,
      host,
      basePath,
      description,
    } = this.state.form.current.getFieldsValue([
      "title",
      "version",
      "host",
      "description",
      "basePath",
    ]);
    this.props.setInfos({
      host,
      basePath,
      info: { title, version, description },
    });
    this.setIsModalVisible(false);
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isShow) {
      const { host, info, basePath } = props.infos;
      const { version, title, description } = info;
      setTimeout(() => {
        state.form.current?.setFieldsValue({
          host,
          basePath,
          version,
          title,
          description,
        });
      }, 100);
    }
    return null;
  }

  componentDidMount() {
    this.state.form = React.createRef();
  }

  render() {
    return (
      <>
        <Modal
          title="基础信息"
          style={{ top: 20 }}
          visible={this.props.isShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"
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
            initialValues={{
              version: "1.0.0",
            }}
          >
            <Form.Item label="标题" name="title">
              <Input placeholder="接口文档" />
            </Form.Item>
            <Form.Item label="版本" name="version">
              <Input placeholder="版本" />
            </Form.Item>
            <Form.Item label="Host" name="host">
              <Input addonBefore="http://" placeholder="host" />
            </Form.Item>
            <Form.Item label="Prefix" name="basePath">
              <Input placeholder="路径请求前缀" />
            </Form.Item>
            <Form.Item label="描述" name="description">
              <Input.TextArea placeholder="描述信息" />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
