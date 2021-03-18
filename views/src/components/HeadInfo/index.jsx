import { Typography, Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';
import React from 'react'
import './index.scss'
const { Title, Paragraph, Text } = Typography
import InfoForm from "./Form";
export default class HeadInfo extends React.Component {

    state = { isShow: false }

    setModalShow(bool) {
        this.setState({ isShow: bool })
    }

    render() {
        const { infos } = this.props
        const { info, host: baseUrl } = infos
        return (
            <div className="header-info-container">
                <div className="header-title-container">
                    <Title level={2}>{info.title}</Title>
                    <Button disabled={this.props.loading} size="small" className="btn" onClick={() => this.setState({ isShow: true })} icon={<LeftSquareOutlined />} />
                </div>
                <Text type="secondary">Version: {info.version}</Text>
                <br />
                <Text>[Base URL: {baseUrl}]</Text>
                <Paragraph>{info.description}</Paragraph>
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