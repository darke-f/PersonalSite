import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoop } from '@fortawesome/free-solid-svg-icons'


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" variant="section-head">
                    Employments
                </Heading>
                <Section delay={0.1}>
                    <Paragraph>
                        This page is a dud <FontAwesomeIcon icon={faPoop} />. I haven't done any full time jobs as of now. I've only done internship and freelance work before, which i don't consider as a full time job.
                        When i get a job i'll update this page accordingly, until then stay tuned!
                    </Paragraph>
                </Section>
            </Container> 
        </Layout>
    )
}

export default Works