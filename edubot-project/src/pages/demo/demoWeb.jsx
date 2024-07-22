import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Layout, Input, Button, ConfigProvider, } from 'antd';
import UserMessage from '../../components/userMessage';
import BotMessage from '../../components/botMessage';
import { gradientButtonStyle } from '../../utils/demoUtils/demoStyles';
import { contentStyle, footerStyle, layoutStyle, chatBoxStyle } from '../../utils/demoUtils/demoStyles';
const { Footer, Content } = Layout;
const { TextArea } = Input;
import SiderDemo from '../../components/siderDemo';
import HeaderDemo from '../../components/headerDemo';
import { AudioOutlined, SendOutlined } from '@ant-design/icons';
import BotOptions from '../../components/botOptions';
import { getBotResponse } from '../../store/actions/chatActionAsync';
import { cargarMensajes, agregarMensajeUser, agregarMensajesBot } from '../../store/actions/chatActionSync';

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const example = [
    {
        title: 'Si, dalee',
        payload: 'jsjsjsjsjsjs'
    },
    {
        title: 'Noo, no lo hagas',
        payload: 'jijijijijij'
    },
    {
        title: 'Talvez',
        payload: 'jijijijijij'
    },
    {
        title: 'Ok no, pero veré',
        payload: 'jijijijijij'
    },
    {
        title: 'Voa a pensarlo',
        payload: 'jijijijijij'
    },
]

function DemoWeb() {
    const [value, setValue] = useState('');
    
    const [botIsThinking, setBotIsThinking] = useState(false);
    const messageList = useSelector((state) => state.app.messageList);
    const dispatch = useDispatch();

    const onSend = () => {
        addUserMessage(value)
        setValue('');
    }

    const addUserMessage = (value) => {
        setBotIsThinking(true)
        const newMessage = {
            message: value,
            autor: 'user',
            botones: null,
        }
        dispatch(agregarMensajeUser(newMessage))
        dispatch(getBotResponse(value)).then(() => {
            setBotIsThinking(false);
        }).catch(() => {
                setBotIsThinking(false);
            });



    }

    return (
        <>
            <Layout style={layoutStyle}>
                <SiderDemo />
                <Layout>
                    <HeaderDemo />
                    <Content style={contentStyle}>
                        <Flex align='flex-start' justify='center' style={chatBoxStyle} vertical>



                            {messageList.map((msg, index) => {
                                const prevMsg = index > 0 ? messageList[index - 1] : null;

                                return msg.autor === 'user' ? (
                                    <UserMessage
                                        key={index}
                                        message={msg.message}
                                        prevAutor={prevMsg ? prevMsg.autor : ''}
                                    />
                                ) : (
                                    <>
                                        <BotMessage
                                            key={index}
                                            message={msg.message}
                                            prevAutor={prevMsg ? prevMsg.autor : ''}
                                        />
                                        {msg.botones !== null && msg.botones.length !== 0 && (
                                            <BotOptions buttons={msg.botones} action={addUserMessage} />
                                        )

                                        }
                                    </>
                                );
                            })}
                            {botIsThinking && (
                                <BotMessage key={300} message={''} prevAutor={''} />
                            )
                            }

                        </Flex>
                    </Content>

                    <Footer style={footerStyle}>
                        <Flex gap={'small'} style={{ width: '100%' }}>
                            <TextArea
                                style={{ width: '100%' }}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                size='large'
                                placeholder="Envía un mensaje a Edubot"
                                autoSize={{
                                    minRows: 1,
                                    maxRows: 4,
                                }}

                            />
                            <ConfigProvider theme={gradientButtonStyle}>
                                <Button
                                    type="primary"
                                    icon={<SendOutlined style={{ fontSize: '20px' }} />}
                                    shape='round'
                                    size='large'
                                    onClick={onSend} />

                            </ConfigProvider>
                        </Flex>
                    </Footer>
                </Layout>
            </Layout>
        </>
    );

}

export default DemoWeb;