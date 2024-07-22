import React from 'react';
import { Layout, theme,  } from 'antd';

import { motion, useAnimation } from 'framer-motion';
import LandingTopBar from '../../components/landingTopbar';
import LandingWelcome from '../../components/landingWelcome';
import LandingFeatures from '../../components/landingFeatures';
import LandingBenefits from '../../components/landingBenefits';
import LandingPricing from '../../components/landingPricing';
import LandingTeam from '../../components/landingTeam';
import LandingFooter from '../../components/landingFooter';
const { Header, Content, Footer } = Layout;


function LandingWeb() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const controls = useAnimation();

    const startAnimation = async () => {
        await controls.start({
            background: [
                'linear-gradient(to right, #5178FB, #47BAD8)',
                'linear-gradient(to right, #8b5cf6, #4f46e5)',
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror'
            }
        });
    };

    React.useEffect(() => {
        startAnimation();
    }, []);

    return (
        <>
            <Layout style={{ backgroundColor: 'white' }}>
                <Header style={{ backgroundColor: 'white', height: 64, position: 'sticky', top: 0, zIndex: 1, }} className='landing-header'>
                    <LandingTopBar/>
                </Header>
                <Content >
                    <LandingWelcome/>

                    <LandingFeatures controls={controls}/>

                    <LandingBenefits/>
                    
                    <LandingPricing/>

                    <LandingTeam/>
                    
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#1D399F', color: 'white' }}>
                    <LandingFooter/>
                </Footer>
            </Layout>
        </>
    );

}

export default LandingWeb;