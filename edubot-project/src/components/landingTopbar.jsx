import logoFont from '../assets/edubotFontLg.svg'
import React, { useState } from 'react';
import { Flex, Layout, Menu, Row, Col, Grid,Button, Drawer } from "antd";
import { hoverButtonStyle, enableButtonStyle } from '../utils/landingUtils/animationUtils';
import { motion, useAnimation } from 'framer-motion';
import { MenuOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const menuItems = [
    { key: '0', label: 'Funcionalidades', link:'#featuresEDUBOT' },
    { key: '1', label: 'Beneficios', link:'#benefitsEDUBOT' },
    { key: '2', label: 'Planes y Precios', link:'#pricingEDUBOT' },
    { key: '3', label: 'Equipo', link:'#teamEDUBOT' },
    { key: '4', label: 'Contacto' , link:'#contactEDUBOT'}
];
const { useBreakpoint } = Grid;
import { useNavigate } from 'react-router-dom';

function LandingTopBar() {
    const screens = useBreakpoint();
    const navigate = useNavigate();
    const isSmScreen = screens.md !== undefined && screens.md;
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
      setDrawerVisible(true);
    };
  
    const closeDrawer = () => {
      setDrawerVisible(false);
    };

    const onClickDemo = () =>{
        navigate('/demo');
    }

    return (
        <>
            {isSmScreen ?
                (
                    <Flex gap={'middle'} align='center' style={{ height: '100%' }} justify='space-between'>
                        <Flex gap={'middle'} align='center' style={{ height: '100%' }} justify='flex-start'>
                            <img src={logoFont} alt="Logo" style={{ height: '70%' }} />
                            <Menu style={{ backgroundColor: 'white', width: '80%', height: '65%' }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                                {menuItems.map(item => (
                                    <Menu.Item key={item.key} className='landing-item'>
                                        <Row style={{ height: '100%', fontFamily: 'Poppins', fontSize: '1vw' }} align={'middle'}>
                                            <a href={item.link}>{item.label}</a>
                                        </Row>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Flex>
                        <motion.button
                            whileHover={hoverButtonStyle}
                            whileTap={{ scale: 0.9 }}
                            style={enableButtonStyle}
                            onClick={onClickDemo}
                        >
                            Probar Demo
                        </motion.button>


                    </Flex>
                )
                : (

                    <Flex gap={'middle'} align='center' style={{ height: '100%' }} justify='space-between'>
                        <Flex gap={'middle'} align='center' style={{ height: '100%' }} justify='flex-start'>
                            <img src={logoFont} alt="Logo" style={{ height: '70%' }} />
                            <Button icon={<MenuOutlined />} onClick={showDrawer} />
                            <Drawer
                                title="Menu"
                                placement="left"
                                onClose={closeDrawer}
                                visible={drawerVisible}
                                style={{backgroundColor:'#001529', color:'white'}}
                            >
                                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
                                    {menuItems.map(item => (
                                        <Menu.Item key={item.key}>
                                            <a href={item.link}>{item.label}</a>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Drawer>
                        </Flex>
                        <motion.button
                            whileHover={hoverButtonStyle}
                            whileTap={{ scale: 0.9 }}
                            style={enableButtonStyle}
                            onClick={onClickDemo}
                        >
                            Probar Demo
                        </motion.button>


                    </Flex>

                )}

        </>
    );




}

export default LandingTopBar;