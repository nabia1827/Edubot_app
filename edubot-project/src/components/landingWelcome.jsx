import { Breadcrumb, Flex, Typography } from "antd";
import { motion, useAnimation } from 'framer-motion';
import { welcomeBoxStyle, hoverCardsBoxStyle } from "../utils/landingUtils/landingStyles";
import { hoverSecondaryButtonStyle, enableSecondaryButtonStyle } from "../utils/landingUtils/animationUtils";
const { Text, Title } = Typography;
import HoverDevCards from "./hoverDevCards";
import welcomeImg from '../assets/edubotW1.png'

function LandingWelcome() {
    return (
        <>
            <div style={{ padding: '0 8%' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <motion.div

                    style={welcomeBoxStyle}
                >
                    <Flex gap={'middle'} style={{ height: '100%' }} align='center' justify='space-between'>
                        <Flex vertical gap={0} align='flex-start' style={{ width: '40%', textAlign: 'left' }}>
                            <Text className='subtitle-welcome'>Descubre a</Text>
                            <Text className='title-welcome'>EDUbot App</Text>
                            <Text className='text-welcome'>Un asistente virtual destinado a facilitar el trabajo de directores y subdirectores de colegios estatales en Perú. </Text>
                            <motion.button
                                whileHover={hoverSecondaryButtonStyle}
                                whileTap={{ scale: 0.9 }}
                                style={enableSecondaryButtonStyle}
                            >
                                Ver más
                            </motion.button>

                        </Flex>
                        <img src={welcomeImg} alt="Logo" style={{ width: '41vw' }} />
                    </Flex>
                </motion.div>
                <motion.div

                    style={hoverCardsBoxStyle}
                >
                    <HoverDevCards></HoverDevCards>
                </motion.div>
            </div>
        </>
    );

}
export default LandingWelcome;