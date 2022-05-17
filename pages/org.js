import { Container, Box, Heading, Image, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExpLoc, ExpTitle } from '../components/experience'


const Org = () => {
    return (
        <Layout>
            <Container maxW="3xl">
                    <Box>
                        <Box display={{md:'flex'}}>
                            <Heading as="h3" variant="section-head">
                                Organizational Experience
                            </Heading>
                        </Box>
                        <Divider mt={3} mb={6} />
                        <Section delay={0.1}>
                            <Box display={{md:'flex'}}>
                                <Box flexShrink={0} mt={{base: 4, md: 0}} mr={{md: 6}} align="center">
                                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="lg"  src="/images/hmtc.png" alt="HMTC" />
                                </Box>
                                <Box flexGrow={1}>
                                    <ExpLoc>HMTC ITS</ExpLoc>
                                    <ExpTitle>Staff of Student Wellfare Department (Aug 2017 - July 2018)</ExpTitle>
                                    <Paragraph>
                                        As a member of the staff in the student wellfare department (or Kesma for those of you who speak bahasa) i was given the responsibility to be in charge of overseeing the Posko Kesehatan event 
                                        held by the student wellfare department. Also, every staff has the responsibility to help in maintaining the overall student wellfare whenever possible.
                                    </Paragraph>
                                    <ExpTitle>Head of Student Wellfare Department (Dec 2018 - Nov 2019)</ExpTitle>
                                    <Paragraph>
                                        After the period in which i was a staff member, i took up a new responsibility as the head of department. I was in charge of 15 staffs which i personally picked. Making sure that the three deliverables 
                                        which includes health, education, and economics are met for all the students in the Informatics department. Achieving this trough various programs that was ran by the student wellfare department.
                                    </Paragraph>
                                </Box>
                            </Box>
                        </Section>
                        <Divider my={6} />
                        <Section delay={0.2}>
                            <Box display={{md:'flex'}}>
                                <Box flexShrink={0} mt={{base: 4, md: 0}} mr={{md: 6}} align="center">
                                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="3xl"  src="/images/schematics.jpeg" alt="Schematics"/>
                                </Box>
                                <Box flexGrow={1}>
                                    <ExpLoc>Schematics ITS</ExpLoc>
                                    <ExpTitle>Schematics 2017 & 2018, Staff of the Web and Secretariat Divison (May 2017 - Feb 2019)</ExpTitle>
                                    <Paragraph> 
                                        For both Schematics 2017 and 2018 i was a staff member of the web and secretariat division. The web and secretariat division is responsible for designing and maintaining the webpage for Schematics. 
                                        Inputting and keeping track of participants data. Taking care of the registration process for all events in Schematics.
                                    </Paragraph>
                                </Box>
                            </Box>
                        </Section>
                        <Divider my={6} />
                        <Section delay={0.3}>
                            <Box display={{md:'flex'}}>
                                <Box flexShrink={0} mt={{base: 4, md: 0}} mr={{md: 6}} align="center">
                                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderstyle="solid" maxWidth="100px" display="inline-block" borderRadius="3xl"  src="/images/aiesecsby.jpg" alt="AIESEC"/>
                                </Box>
                                <Box flexGrow={1}>
                                    <ExpLoc>AIESEC in Surabaya</ExpLoc>
                                    <ExpTitle>Organizing Comitee of Explore East Java 2.0 (Feb 2017 - Sep 2017)</ExpTitle>
                                    <Paragraph>
                                        My part as organizing comitee in this project was in the division of quality and development (QnD). My responsibilites included being charge of keeping track of the Exchange Participants, Host Family and Local 
                                        Volunteers. Running the event that has been scheduled. As a guide for the Exchange Participant. And as a middle man if a problem were to occur between participants.
                                    </Paragraph>
                                    <ExpTitle>Manager of OGTE‘s Human Resources and Development (Feb 2018 - Jul 2019)</ExpTitle>
                                    <Paragraph>
                                        As the manager of the OGTE HRnD department, i was in charge of 2 staffs. My responsibilites include conducting interviews of the OGTE program internship applicants to make sure they meet the required standards. 
                                        Training the intern which have passed the interview on how to make a proper CV. And makes sure the interns are up to code by International standards.
                                    </Paragraph>
                                </Box>
                            </Box>
                        </Section>
                    </Box>
            </Container> 
        </Layout>
    )
}

export default Org