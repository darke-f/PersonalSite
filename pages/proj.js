import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoop } from '@fortawesome/free-solid-svg-icons'


const Proj = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" variant="section-head">
                    Projects
                </Heading>
                <Section delay={0.1}>
                    <Paragraph>
                        This page is a work in progres, stay tuned!
                    </Paragraph>
                </Section>
            </Container> 
        </Layout>
    )
}

export default Proj