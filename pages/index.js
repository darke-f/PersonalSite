import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
    return  (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign="center" css={{backdropFilter: 'blur(10px)'}}>
                    Hi, welcome to my personal website!
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Ariiq Firanda
                        </Heading>
                        <p> Aspiring Data Scientist</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="full"  src="/images/pphoto.jpg" alt="Profile Photo"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        How do you do! My name is Ariiq Firanda Naufal or Ariiq for short. On this site you&apos;ll find info and tidbis about me ranging from employment, interests, what I&apos;m currently working on, and everything in between.
                        You can use the navbar at the top of the page to navigate to different sections, you can also use the button on the top right to change the viewing mode from day to night and vice versa. 
                        The website will periodically be updated when there is new info. Have fun exploring the site!
                    </Paragraph>
                </Section>
            </Container> 
        </Layout>
    )
}

export default Page