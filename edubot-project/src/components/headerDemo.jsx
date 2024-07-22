import { headerStyle } from "../utils/demoUtils/demoStyles";
import drive from '../assets/g-drive.svg'
import user from '../assets/user.jpg'
import { Row, Col, Flex, Layout, Menu, Typography, Avatar, Badge, Space, Input, Button, ConfigProvider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;
const { Search, TextArea } = Input;
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
function HeaderDemo() {
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate('/');
    }

    return (
        <>
            <Header style={headerStyle}>
                <Row style={{ height: '100%' }} align="middle" justify="space-between">
                    <Col span={8}>
                        <Row align={'middle'}>
                            <Button type="link" icon={<ArrowLeftOutlined style={{color:'#1D399F'}}/>} onClick={onClickBack} />
                            <Text>
                                <div className='marca'>
                                    EDUbot
                                </div>
                            </Text>
                        </Row>

                    </Col>

                    <Col span={12} >
                        <Row style={{ height: '100%' }} align="middle" justify="end">
                            <Col >
                                <Row justify="end">
                                    <Text style={{ fontFamily: 'Poppins, sans-serif', color: '#9496AA' }} strong>Nabia Pachas Lopez</Text>

                                </Row>
                                <Row justify="end">
                                    <Text style={{ fontFamily: 'Poppins, sans-serif', color: '#9496AA', fontSize: '0.8em' }} type="secondary">I.E. 6082 Los Proceres</Text>
                                </Row>

                            </Col>
                            <Col >
                                <Row align="middle" justify="end">
                                    <Avatar size={36} src={<img src={drive} alt="drive" />} style={{ marginRight: '3px', marginLeft: '5px' }} />
                                    <Badge count={1}>
                                        <Avatar size={36} src={<img src={user} alt="avatar" />} />
                                    </Badge>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </>
    );

}

export default HeaderDemo;