import { Typography, Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';
import React from 'react'
const { Title, Paragraph, Text } = Typography
import InfoForm from "./Form";
export default class HeadInfo extends React.Component {

    state = { isShow: false }

    setModalShow(bool) {
        this.setState({ isShow: bool })
    }

    render() {
        const { infos } = this.props
        const { info, host: baseUrl, prefix } = infos
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={2}>{info.title}</Title>
                    <Button disabled={this.props.loading} size="small" style={{ marginLeft: '30px' }} onClick={() => this.setState({ isShow: true })} icon={<LeftSquareOutlined />} />
                </div>
                <Text type="secondary">Version: {info.version}</Text>
                <br />
                <Text type="secondary">Base URL: http://{baseUrl}{prefix || ''}</Text>
                <Paragraph type="secondary">{info.description}</Paragraph>
                <InfoForm
                    setModalShow={(bool) => this.setModalShow(bool)}
                    isShow={this.state.isShow}
                    infos={this.props.infos}
                    setInfos={this.props.setInfos}
                />
            </div>
        )
    }
}