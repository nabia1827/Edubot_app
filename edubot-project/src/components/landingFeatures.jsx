import { motion, useAnimation } from 'framer-motion';
import { slideInLeftVariants } from '../utils/landingUtils/landingVariants';
import { featuresCardsBoxStyle } from '../utils/landingUtils/landingStyles';
import { Flex, Typography, Col, Row } from 'antd';
const { Text, Title } = Typography;
import { MessageFilled, SendOutlined, MailOutlined } from '@ant-design/icons';
const bannerItems = [
    {
        key: '1',
        icon: <MessageFilled style={{ fontSize: '40px', color: 'white' }} />,
        title: 'Conversaciones 24/7',
        text: 'Edubot es tu asistente personal basado en IA, puedes chatear con él en cualquier momento del día y hacerle todas las preguntas que requieras.'
    },
    {
        key: '2',
        icon: <MessageFilled style={{ fontSize: '40px', color: 'white' }} />,
        title: 'Gestión Educativa',
        text: 'Edubot puede conectarse con el Google Drive del colegio y acceder a la información de los documentos, informes o reportes que este contenga.'
    },
    {
        key: '3',
        icon: <MessageFilled style={{ fontSize: '40px', color: 'white' }} />,
        title: 'Monitoreo de docentes',
        text: 'Edubot puede ayudarte en el rellenado de las fichas de monitoreo docente especificadas por el MINEDU y la generación de los reportes respectivos.'
    },
    {
        key: '4',
        icon: <MessageFilled style={{ fontSize: '40px', color: 'white' }} />,
        title: 'Emails y Notificaciones',
        text: 'Edubot puede automatizar el envío de correos dirigidos a la plana docente con respecto a temáticas de gestión educativa y monitoreo docente.'
    }
];

function LandingFeatures(props) {
    const {controls} = props;
    return (
        <>
            <div style={{ padding: '0 8%', backgroundColor: '#D7ECFF' }} id='featuresEDUBOT'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={slideInLeftVariants}
                    style={featuresCardsBoxStyle}
                >
                    <Flex vertical gap={0} align='center' style={{ width: '100%' }}>
                        <Text className='subtitle-cards'>Nuestras</Text>
                        <Text className='title-cards'>Funcionalidades</Text>
                        <Row style={{ width: '100%' }}>
                            {bannerItems.map(item => (
                                <Col key={item.key} xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: '1.5em' }}>
                                    <Flex vertical gap={'small'} align='center'>
                                        <motion.div className='banner-icon-box' animate={controls}>
                                            {item.icon}
                                        </motion.div>
                                        <Text className='banner-title'>{item.title}</Text>
                                        <Text className='banner-text'>{item.text}</Text>
                                    </Flex>
                                </Col>
                            ))}
                        </Row>

                    </Flex>

                </motion.div>
            </div>
        </>
    );
}

export default LandingFeatures;