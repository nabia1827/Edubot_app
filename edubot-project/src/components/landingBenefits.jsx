import { motion, useAnimation } from 'framer-motion';
import { slideInRightVariants } from '../utils/landingUtils/landingVariants';
import { featuresCardsBoxStyle } from '../utils/landingUtils/landingStyles';
import { BounceCard, CardTitle } from './bounceCard';
import { Flex, Typography, Row, Col } from 'antd';
import bc1 from '../assets/bc1.png'
import bc2 from '../assets/bc2.png'
import bc3 from '../assets/bc3.png'
import bc4 from '../assets/bc4.png'

const { Text, Title } = Typography;

function LandingBenefits() {
    return (
        <>
            <div style={{ padding: '0 8%', backgroundColor: 'white' }} id='benefitsEDUBOT'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={slideInRightVariants}
                    style={featuresCardsBoxStyle}
                >
                    <Flex vertical gap={0} align='center' style={{ width: '100%' }}>
                        <Text className='subtitle-cards'>¿Que hace diferente y único a</Text>
                        <Text className='title-cards'>EDUbot?</Text>

                        <Row style={{ width: '100%' }} align={'middle'} justify={'center'}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <BounceCard className={"bounce-box"}>
                                    <CardTitle>Facilidad de Uso</CardTitle>
                                    <Text className='subtitle-bouncy'>Interfaz intuitiva que garantiza accesibilidad para todos los usuarios.</Text>
                                    <div className="bounce-card-content gradient-skyblue">
                                        <img src={bc1} alt="Logo" style={{ height: '96%' }} />

                                    </div>
                                </BounceCard>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <BounceCard className={"bounce-box"}>
                                    <CardTitle>Adaptabilidad</CardTitle>
                                    <Text className='subtitle-bouncy'>App flexible que satisface diversas necesidades educativas específicas de cada institución.</Text>
                                    <div className="bounce-card-content gradient-violet">
                                        <img src={bc2} alt="Logo" style={{ height: '96%' }} />
                                    </div>
                                </BounceCard>
                            </Col>
                        </Row>

                        <Row style={{ width: '100%' }} align={'middle'} justify={'center'}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <BounceCard className={"bounce-box"}>
                                    <CardTitle>Inteligencia Artificial</CardTitle>
                                    <Text className='subtitle-bouncy'>Utilizamos IA y procesamiento del lenguaje natural para una solución sofisticada y efectiva.</Text>
                                    <div className="bounce-card-content gradient-violet">
                                        <img src={bc3} alt="Logo" style={{ height: '96%' }} />
                                    </div>
                                </BounceCard>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                <BounceCard className={"bounce-box"}>
                                    <CardTitle>Cumplimiento Normativo</CardTitle>
                                    <Text className='subtitle-bouncy'>Cumplimiento de regulaciones locales de protección de datos y privacidad.</Text>
                                    <div className="bounce-card-content gradient-skyblue">
                                        <img src={bc4} alt="Logo" style={{ height: '96%' }} />
                                    </div>
                                </BounceCard>
                            </Col>
                        </Row>


                    </Flex>

                </motion.div>
            </div>

        </>
    );


}

export default LandingBenefits;