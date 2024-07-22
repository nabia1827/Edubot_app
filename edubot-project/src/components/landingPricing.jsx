import { motion, useAnimation } from 'framer-motion';
import { fadeInVariants } from '../utils/landingUtils/landingVariants';
import { featuresCardsBoxStyle, pricingPlanBoxStyle } from '../utils/landingUtils/landingStyles';
import { Flex, Typography, Row, Col } from 'antd';
const { Text, Title } = Typography;
import PlanButton from './planButton';
import PlanItem from './planItem';

const pricingPlans = [
    {
        key: 'free',
        name: 'Free',
        description: 'Todo para empezar',
        price: 'S/. 0',
        color: '#000000',
        items: [
            'Monitoreo de docentes',
            'Gestión educativa',
            '10 consultas diarias x usuario'
        ]
    },
    {
        key: 'starter',
        name: 'Starter',
        description: 'Servicio Medio',
        price: 'S/. 100',
        color: '#5271FF',
        items: [
            'Monitoreo de docentes',
            'Gestión educativa',
            'Cronograma de monitoreo',
            'Único usuario',
            '20 consultas diarias x usuario'
        ]
    },
    {
        key: 'premium',
        name: 'Premium',
        description: 'Servicio Completo',
        price: 'S/. 120',
        color: '#47B7D9',
        items: [
            'Monitoreo de docentes',
            'Gestión educativa',
            'Cronograma de monitoreo',
            'Generación de gráficos estadísticos',
            'Multiusuario 5',
            '50 consultas diarias x usuario'
        ]
    }
];

function LandingPricing() {
    return (
        <>
            <div style={{ padding: '0 8%', backgroundColor: '#F1F5F9' }} id='pricingEDUBOT'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={fadeInVariants}
                    style={featuresCardsBoxStyle}
                >
                    <Flex vertical gap={0} align='center' style={{ width: '100%' }}>
                        <Text className='subtitle-cards'>Nuestros</Text>
                        <Text className='title-cards'>Planes y Precios</Text>
                        <Row style={{ width: '100%' }}>
                            {pricingPlans.map(plan => (
                                <Col key={plan.key} xs={24} sm={24} md={8} lg={8} xl={8} style={{ padding: '1.0em', height: '500px' }}>
                                    <Flex style={pricingPlanBoxStyle} vertical gap={'small'} justify='space-between'>
                                        <Flex vertical gap={'small'} align='flex-start' justify='center'>
                                            <Text className='princing-plan-name' style={{ color: plan.color }}>{plan.name}</Text>
                                            <Text className='princing-plan-description'>{plan.description}</Text>

                                            <Flex style={{ width: '100%', padding: '1.0em 0' }} justify='flex-start' align='center'>
                                                <Text className='princing-plan-price' style={{ color: plan.color }}>{plan.price}</Text>
                                                <Text className='princing-plan-fr' style={{ color: plan.color }}>/ mes</Text>
                                            </Flex>
                                            {plan.items.map((item, index) => (
                                                <PlanItem key={index} message={item}></PlanItem>
                                            ))}
                                        </Flex>

                                        <PlanButton primaryColor={plan.color} hoverColor={plan.color}></PlanButton>
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
export default LandingPricing;