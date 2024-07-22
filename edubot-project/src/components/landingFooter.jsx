import { Flex, Typography, Space, Input,Button, Row,Col } from "antd";
import SocialMediaIcon from "./socialMediaIcon";
const { Text, Title } = Typography;
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function LandingFooter() {
    return (
        <>
            <Row style={{ padding: '0 8%' }} id="contactEDUBOT">
                <Col span={24}>
                    <Flex gap={'small'} align='middle' justify='space-between'>
                        <Flex vertical gap={'small'} align='flex-start' style={{ marginBottom: '8.0em' }}>
                            <Text className='footer-title'>EDUbot</Text>
                            <Text className='footer-subtitle'>Contáctanos</Text>
                            <Text className='footer-text'>+51 962 928 896</Text>

                            <Text className='footer-subtitle'>Ubicanos</Text>
                            <Text className='footer-text'>Av. Universitaria - San Miguel, Perú</Text>

                        </Flex>
                        <Flex vertical gap={'small'} align='flex-start' >
                            <Text className='footer-subtitle'>Dejanos tu correo y enterate más cosas sobre EDUbot</Text>

                            <Space.Compact style={{ width: '30vw' }}>
                                <Input placeholder='email' />
                                <Button type="primary">Submit</Button>
                            </Space.Compact>

                            <Flex gap={'small'} justify='flex-start' align='middle' style={{ marginTop: '1.0em' }}>
                                <SocialMediaIcon icon={<FaFacebook />} link="https://www.facebook.com/profile.php?id=61561516088018" />
                                <SocialMediaIcon icon={<FaTwitter />} link="https://www.twitter.com" />
                                <SocialMediaIcon icon={<FaInstagram />} link="https://www.instagram.com/edubotapp17/" />
                            </Flex>
                        </Flex>


                    </Flex>
                </Col>
                <Col span={24} style={{ fontFamily: 'Poppins', paddingTop: '1.0em', borderWidth: '1px 0 0 0', borderStyle: 'solid', borderColor: 'white' }}>
                    EDUbot ©{new Date().getFullYear()} Created by KNJ Company
                </Col>
            </Row>
        </>
    )
}

export default LandingFooter;