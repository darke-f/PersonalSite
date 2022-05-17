import { Container, Box, Heading, Image, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'


const Edu = () => {
    return (
        <Layout>
            <Container maxW="lg">
                    <Box>
                        <Box display={{md:'flex'}}>
                            <Heading as="h3" variant="section-head">
                                Education
                            </Heading>
                        </Box>
                        <Divider mt={3} mb={6} />
                        <Section delay={0.1}>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <p style={{fontWeight: "bold"}}>2022 - Institut Teknologi Sepuluh Nopember (ITS) Surabaya </p>
                                    <Paragraph> Institut Teknologi Sepuluh Nopember or (ITS) is where i got my bachelors degree in Computer Science. I graduated with a GPA of 3.75/4.00.</Paragraph>
                                </Box>
                                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="full"  src="/images/its.gif" alt="ITS"/>
                                </Box>
                            </Box>
                        </Section>
                        <Divider my={6} />
                        <Section delay={0.2}>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <p style={{fontWeight: "bold"}}>2019 - Okanagan College Canada (OC)</p>
                                    <Paragraph> 
                                        On 2019 i got the Canada-ASEAN Scholarhips and Educational Exchanges for Development (SEED) from the Canadian Bureau for International Education. I spent 1 semester in Okanagan College
                                        from August to January of 2019. 
                                    </Paragraph>
                                </Box>
                                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="3xl"  src="/images/oc.png" alt="Okanagan College"/>
                                </Box>
                            </Box>
                        </Section>
                    </Box>
            </Container> 
        </Layout>
    )
}

export default Edu