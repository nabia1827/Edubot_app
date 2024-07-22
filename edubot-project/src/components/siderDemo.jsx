import { siderStyle } from '../utils/demoUtils/demoStyles';
import logo from '../assets/edubotLogo.svg'
import { Row, Col, Flex, Layout, Menu, Typography, Avatar, Badge, Space, Input, Button, ConfigProvider } from 'antd';
const { Sider} = Layout;
const { Text} = Typography;
import {
    MessageOutlined,
    AlignLeftOutlined

} from '@ant-design/icons';

function SiderDemo() {

    return (
        <>
            <Sider width="20%" style={siderStyle} collapsible >
                <div className='logo-container'>
                    <img src={logo} alt="Logo" className='logo-svg' />
                </div>

                <Text style={{ fontFamily: 'Poppins', color: 'white' }}>
                    CHATS
                </Text>
                <Menu style={{ backgroundColor: 'transparent' }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<MessageOutlined />} >

                        Nuevo Chat
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AlignLeftOutlined />} style={{ textAlign: 'left' }}>
                        [Sup] Prof. Juan Perez 2A
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AlignLeftOutlined />} style={{ textAlign: 'left' }}>
                        [Sup] Prof. Ana Rodriguez 2A
                    </Menu.Item>
                    <Menu.Item key="4" icon={<AlignLeftOutlined />} style={{ textAlign: 'left' }}>
                        [Gest] Sesiones de Matematica
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );

}

export default SiderDemo;