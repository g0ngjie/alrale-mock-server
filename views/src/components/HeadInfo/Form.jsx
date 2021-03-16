import React from 'react';
import {
    Form,
    Input,
    Modal
} from 'antd';

export default class InfoForm extends React.Component {

    setIsModalVisible(val) {
        this.props.setModalShow(val)
    }

    handleOk = () => {
        this.setIsModalVisible(false);
    };

    handleCancel = () => {
        this.setIsModalVisible(false);
    };

    render() {
        return (
            <>
                <Modal title="基础信息" style={{ top: 20 }} visible={this.props.isShow} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 17,
                        }}
                        layout="horizontal"
                    // initialValues={{
                    //     size: 'small',
                    // }}
                    // size='small'
                    >
                        <Form.Item label="标题">
                            <Input placeholder="接口文档" />
                        </Form.Item>
                        <Form.Item label="版本">
                            <Input defaultValue='1.0.0' placeholder="版本" />
                        </Form.Item>
                        <Form.Item label="Prefix">
                            <Input placeholder="路径请求前缀" />
                        </Form.Item>
                        <Form.Item label="描述">
                            <Input.TextArea placeholder="描述信息" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}