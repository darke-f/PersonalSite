import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#312A4D', 'black')
    return (
        <NextLink href={href}>
            <Link p={2} color={active ? '#202023' : inactiveColor} target={target} {...props}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    
    return (
        <Box position="fixed" as="nav" w="100%" bgGradient={useColorModeValue('linear(to-b, #D8EFF7 75%, #FFD8BE)', 'linear(to-b, white 75%, #202023)')} opacity="90%" css={{backdropFilter:'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.lg" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/edu" path={path}>
                        Education
                    </LinkItem>
                    <LinkItem href="/org" path={path}>
                        Organizational Experience
                    </LinkItem>
                    <LinkItem href="/int" path={path}>
                        Interests
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} colorScheme={useColorModeValue('pink', 'orange')} size="sm" aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/edu" passHref>
                                    <MenuItem as={Link}>Education</MenuItem>
                                </NextLink>
                                <NextLink href="/org" passHref>
                                    <MenuItem as={Link}>Organization</MenuItem>
                                </NextLink>
                                <NextLink href="/int" passHref>
                                    <MenuItem as={Link}>Interests</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container> 
        </Box>
    )
}

export default Navbar