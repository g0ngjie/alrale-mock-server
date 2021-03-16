import { Typography } from 'antd';
import React from 'react'
import './index.scss'
const { Title, Paragraph, Text } = Typography

export default class HeadInfo extends React.Component {

    render() {
        const { infos } = this.props
        const { info, host: baseUrl } = infos
        return (
            <div className="header-info-container">
                <Title level={2}>{info.title}</Title>
                <Text type="secondary">Version: {info.version}</Text>
                <br />
                <Text>[Base URL: {baseUrl}]</Text>
                <Paragraph>{info.description}</Paragraph>
            </div>
        )
    }
}