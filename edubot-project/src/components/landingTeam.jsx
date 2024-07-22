import creator1 from '../assets/creator1.png'
import creator2 from '../assets/creator2.png'
import creator3 from '../assets/creator3.png'
import { motion, useAnimation } from 'framer-motion';
import { fadeInVariants } from '../utils/landingUtils/landingVariants';
import { featuresCardsBoxStyle } from '../utils/landingUtils/landingStyles';
import { Flex,Typography,Row, Col } from 'antd';
const { Text, Title } = Typography;

const teamMembers = [
    {
        key: 'nabia',
        name: 'Nabia Pachas',
        title: 'Frontend Developer',
        image: creator1
    },
    {
        key: 'jose',
        name: 'Jose Ambrosio',
        title: 'Business Chief',
        image: creator2
    },
    {
        key: 'kevin',
        name: 'Kevin Ortiz',
        title: 'Backend Developer',
        image: creator3
    }
];

function LandingTeam() {
    return (
        <>
            <div style={{ padding: '0 8%', backgroundColor: 'white' }} id='teamEDUBOT'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={fadeInVariants}
                    style={featuresCardsBoxStyle}
                >
                    <Flex vertical gap={0} align='center' style={{ width: '100%' }}>
                        <Text className='subtitle-cards'>Nuestro</Text>
                        <Text className='title-cards'>Equipo EDUbot</Text>
                        <Row style={{ width: '100%' }}>
                            {teamMembers.map(member => (
                                <Col key={member.key} span={8} style={{ padding: '1.0em' }}>
                                    <Flex vertical gap={'small'} justify='center' align='center'>
                                        <img src={member.image} alt="Logo" style={{ width: '70%' }} />
                                        <Text className='creator-title'>{member.name}</Text>
                                        <Text className='creator-subtitle'>{member.title}</Text>
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

export default LandingTeam;