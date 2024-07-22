import { useState } from 'react'
import { Row, Col, Flex, Layout, Menu, Typography, Avatar, Badge, Space, Input, Button, ConfigProvider } from 'antd';
import user from '../assets/user.jpg';
import {
    AntDesignOutlined
} from '@ant-design/icons';
import LoaderMessage from './loaderMessage';
const { Paragraph, Text, Link } = Typography;

function BotOptions(props) {
    const { buttons, action } = props;
    const boxStyle = {
        width: '100%',
        minHeight: 20,
        borderRadius: 6,

    };

    const onClickOption = (buttonPayload) => {
        action(buttonPayload)
    }

    return (
        <>
            {buttons !== null && (
                <Flex align='center' justify='flex-start' style={boxStyle}>
                    <Avatar size={36} style={{ marginRight: '3px', marginLeft: '5px', backgroundColor: '#F4F8FF' }} />

                    <div className='bot-options-box'>
                        <Flex wrap gap="small">
                            {buttons.map((item, index) => (
                                <Button key={index} type="primary" onClick={() => onClickOption(item.payload)}>
                                    {item.title}
                                </Button>
                            ))}
                        </Flex>
                    </div>
                </Flex>
            )

            }
        </>
    );
}

export default BotOptions;