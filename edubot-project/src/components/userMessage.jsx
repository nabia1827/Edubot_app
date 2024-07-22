import { useState } from 'react'
import { Row, Col, Flex, Layout, Menu, Typography, Avatar, Badge, Space, Input, Button, ConfigProvider } from 'antd';
import user from '../assets/user.jpg';
const { Paragraph, Text, Link } = Typography;
function UserMessage(props) {
    const { message } = props;
    const { prevAutor } = props;
    const boxStyle = {
        width: '100%',
        minHeight: 50,
        borderRadius: 6,
        marginBottom:'0.5em',

    };

    return (
        <>
            <Flex align='center' justify='flex-end' style={boxStyle}>
                <Row className='user-message-box' align={'middle'}>
                    <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }} style={{ fontFamily: 'Poppins', fontSize: '0.9em',margin:'0' }}>
                        {message}
                    </Paragraph>
                </Row>
                {prevAutor !== 'user'?(
                    <Avatar size={36} src={<img src={user} alt="drive" />} style={{ marginRight: '3px', marginLeft: '5px' }} />
                ):(
                    <Avatar size={36} style={{ marginRight: '3px', marginLeft: '5px',backgroundColor:'#F4F8FF' }} />
                )
                }
                

            </Flex>


        </>
    )
}
export default UserMessage;