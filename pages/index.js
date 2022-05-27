import { Container, Box, Heading, Image, useColorModeValue, Center, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
    return  (
        <Layout>
            <Container>
                <Center maxW='xs' borderRadius="lg" bg={useColorModeValue('#58939C', 'white')} p={1} pt={2} mb={4} textAlign="center" marginX="auto" css={{backdropFilter: 'blur(10px)'}}>
                    <Text fontSize={32} fontWeight="bold" mr={2} color={useColorModeValue('#F0B1CD', '#E8C245')}>Hi!</Text> 
                    <Text color={useColorModeValue('white', 'black')}>Welcome to my personal website</Text>
                </Center>
                <Box display={{sm:'flex'}}>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} mr={{sm: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="full"  src="/images/pphoto.jpeg" alt="Profile Photo"/>
                    </Box>
                    <Box flexGrow={1} marginY="auto">
                        <Heading as="h2" variant="page-title">
                            Ariiq Firanda
                        </Heading>
                        <p> Aspiring Data Scientist</p>
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