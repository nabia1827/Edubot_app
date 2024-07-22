import { useState } from 'react'
import { Row, Col, Flex, Layout, Menu, Typography, Avatar, Badge, Space, Input, Button, ConfigProvider } from 'antd';
import user from '../assets/user.jpg';
import {
    AntDesignOutlined
} from '@ant-design/icons';
import LoaderMessage from './loaderMessage';

const { Paragraph, Text, Link } = Typography;
function BotMessage(props) {
    const { message,prevAutor } = props;
    const boxStyle = {
        width: '100%',
        minHeight: 80,
        borderRadius: 6,
        marginBottom:'0.5em',
    };

    return (
        <>
            <Flex align='center' justify='flex-start' style={boxStyle}>
                {prevAutor !== 'bot' ? (
                    <Avatar size={36} style={{ backgroundColor: '#5178FB', marginRight: '3px', marginLeft: '5px' }} icon={<AntDesignOutlined />} />
                ) : (
                    <Avatar size={36} style={{ marginRight: '3px', marginLeft: '5px', backgroundColor: '#F4F8FF' }} />
                )
                }
                
                <div className='bot-message-box'>
                    {message === '' ? (
                        <LoaderMessage></LoaderMessage>
                    ) : (
                        <Paragraph style={{ fontFamily: 'Poppins', fontSize: '0.9em', margin: '0',whiteSpace: 'pre-wrap' }}>
                            
                            {message}
                        </Paragraph>
                    )

                    }
                </div>


            </Flex>


        </>
    )
}
export default BotMessage;