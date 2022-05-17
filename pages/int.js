import { Container, Box, Heading, Divider, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExpLoc } from '../components/experience'
import { GridF, GridH, GridC } from '../components/grid-item'

import thumbFOp from '../public/images/fnv/opening.gif'
import thumbFW from '../public/images/fnv/wasteland.gif'
import thumbFV from '../public/images/fnv/vulpes.gif'
import thumbFJ from '../public/images/fnv/josh.gif'
import thumbHB from '../public/images/h3/become.gif'
import thumbHT from '../public/images/h3/target.gif'
import thumbHM from '../public/images/h3/map.gif'
import thumbCB from '../public/images/cooking/burger.jpg'
import thumbCBC from '../public/images/cooking/butterchicken.jpg'
import thumbCC from '../public/images/cooking/carbonara.jpg'
import thumbCCR from '../public/images/cooking/croffle.jpg'
import thumbCPC from '../public/images/cooking/pannacotta.jpg'
import thumbCSES from '../public/images/cooking/saltedeggshrimp.jpg'
import thumbCSP from '../public/images/cooking/seafoodplatter.jpg'

const Int = () => {
    return (
        <Layout title="Interest">
            <Container maxW="3xl">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign="center" css={{backdropFilter: 'blur(10px)'}}>
                    Welcome to the interest page! Obviously i have more interests than what&apos;ll be shown below like music, movies, etc. But if i include everything here, it&apos;s gonna be waaaaay too long. So i opt to choose two that&apos;ll be included.
                    Anyway, carry on!
                </Box>
                    <Box>
                        <Box display={{md:'flex'}}>
                            <Heading as="h3" variant="section-head">
                                Gaming
                            </Heading>
                        </Box>
                        <Section delay={0.1}>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <Paragraph> 
                                        Surprise, surprise someone that dabbles in computers likes gaming. Well what can i say? Playing games is a great pass time activity, something that anyone at any age can enjoy, also comes with
                                        many benefits for cognitive improvement. I&apos;ve been playing games ever since kindergarten, then was on the home pc. All the classic like 3d pinball, chip&apos;s challege etc. But the first game that
                                        really set me on the path was the sims 1. I was amazed back then that a game was able to be all that, seems silly now but back in the 2000&apos;s boy oh boy. Since then i&apos;ve been playing a lot of
                                        games with varying genres. Still no favorite genre, because I&apos;d always find myself liking all sorts of different games from different genres. Below is some highlight from the gaming section.
                                    </Paragraph>
                                </Box>
                            </Box>
                        </Section>
                        <Section delay={0.2}>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <ExpLoc>What&apos;s your favorite game?</ExpLoc>
                                    <Paragraph>
                                        Easy, Fallout New Vegas. It still hasn&apos;t changed even after all this years. For those of you who are not familiar, fallout new vegas (FNV) is a game that is
                                        set in a post nuclear war world, during the year 2281 within the region surrounding the former city of Las Vegas (now called "New Vegas"). FNV is a action rpg game which many consider as the best in
                                        the genre, and also the best game ever made. Why you may ask? Well i&apos;d say go play it for yourself and find out. But in summary, the games has a superb atmosphere and wolrd building, tons and tons of
                                        interesting characters, amazing story, actually fun politics (shocker i know) and tons of other stuff while allowing the player to essentially play the game in any way they see fit. After more than a
                                        decade though, the graphics is not pretty outdated, and some gameplay elements are too but i still encourage you to check it out for yourself!
                                    </Paragraph>
                                </Box>
                            </Box>
                            <SimpleGrid mt={8} columns={[2,2]} gap={6}>
                            <GridF thumbnail={thumbFOp} title="Game opening" />
                            <GridF thumbnail={thumbFW} title="Mojave Wasteland" />
                            <GridF thumbnail={thumbFV} title="Legion Frumentarii" />
                            <GridF thumbnail={thumbFJ} title='"The burned man"' />
                            </SimpleGrid>
                        </Section>
                        <Section delay={0.3}>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <ExpLoc>What are you playing right now?</ExpLoc>
                                    <Paragraph> 
                                        This one&apos;s a tough question, since i change games somewhat often. If i had to pick one, the game that i&apos;m playing the most right now is Hitman 3. Hitman 3 as you can tell it the 3rd installment in the reboot
                                        of the hitman series. You play as Agent 47, a professional assassin, and you are tasked to eliminate targets in each level. What&apos;s cool about this game is that it&apos;s essentially a puzzle game with stealth mechanics.
                                        With the tagline "the world is your weapon" you are able to use anything in the environtment to help you in eliminating your target, which really encourages creativity, whilst also adding basically making the game
                                        infinitely replayable. If that sounds interesting to you, i&apos;d recommend you check it out!
                                    </Paragraph>
                                </Box>
                            </Box>
                            <SimpleGrid mt={8} columns={[1]} gap={6}>
                            <GridH thumbnail={thumbHB} title="Become a professional assassin" />
                            <GridH thumbnail={thumbHT} title='"Partners of Providence"' />
                            <GridH thumbnail={thumbHM} title="Hitman 3 maps" />
                            </SimpleGrid>
                        </Section>
                        <Divider mt={3} mb={6} />
                        <Section delay={0.4}>
                            <Box display={{md:'flex'}}>
                                <Heading as="h3" variant="section-head">
                                    Cooking
                                </Heading>
                            </Box>
                            <Box display={{md:'flex'}}>
                                <Box flexGrow={1}>
                                    <Paragraph> 
                                        I have had an interest in cooking ever since i was just a kid. Back then i wanted to be a chef when i grew up, but that didn&apos;t pan out and i did kind of stopped cooking for quite a long time. However,
                                        during my time in university i got back into cooking and really enjoyed it. I like making different types of food, but my favorite things to make has to be Italian food which includes your different kinds
                                        of pasta, lasagna, also their desserts like tiramisu and panna cotta. I&apos;m still in the phase where my proirity is the taste of the food but not really the presentation, im working on it though. You can see
                                        some of the dishes i&apos;ve made below.
                                    </Paragraph>
                                </Box>
                            </Box>
                            <SimpleGrid mt={8} columns={[1,3]} gap={6}>
                            <GridF thumbnail={thumbCB} title="Burger" />
                            <GridF thumbnail={thumbCBC} title="Butter Chicken" />
                            <GridF thumbnail={thumbCC} title="Spaghetti Carbonara" />
                            <GridF thumbnail={thumbCCR} title="Croffle" />
                            <GridF thumbnail={thumbCPC} title="Panna Cotta" />
                            <GridF thumbnail={thumbCSES} title="Salted egg shrimp" />
                            </SimpleGrid>
                            <SimpleGrid mt={8} columns={[1]} gap={6}>
                            <GridC thumbnail={thumbCSP} title="Seafood Platter" />
                            </SimpleGrid>
                        </Section>
                    </Box>
            </Container> 
        </Layout>
    )
}

export default Int