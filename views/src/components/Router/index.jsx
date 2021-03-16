import React from 'react';
import {
    Form,
    Input,
    Modal,
    Radio
} from 'antd';

export default class RouterForm extends React.Component {

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
                <Modal title="接口文件" style={{ top: 20 }} visible={this.props.isShow} onOk={this.handleOk} onCancel={this.handleCancel}>
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
                        <Form.Item label="Path">
                            <Input placeholder="路由地址" />
                        </Form.Item>
                        <Form.Item label="协议">
                            <Radio.Group defaultValue="get">
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