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
import { HamburgerIcon, HumburgerIcon} from '@chakra-ui/icons'

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')
    return (
        <NextLink href={href}
           p={2}
           bg={active ? 'glassTeal' : undefined}
           color={active ? '#202023': inactiveColor}
           >
            {children}
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40','#20202380')}
            style={{backdropFilter:'blur(10px)'}}
            zIndex={1}
            {...props}
        >
        <Container 
            display="flex" 
            p={2} 
            maxW="container.md"
            wrap="wrap" 
            align="center" 
            justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo/>
                </Heading>
            

            <Stack
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none',md: 'flex'}}
            width={{base: 'full',md:'auto'}}
            alignItems="center"
            flexGrow={ 1}
            mt={{base: 4, nmd: 0}}
            spacing={15}
            >
                <LinkItem href='/works' path={path}>
                Works
                </LinkItem>
                <LinkItem href='/posts' path={path}>
                Posts
                </LinkItem>
            </Stack>
            </Flex>
            <Box flex={1} align="right">
                <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant={"outline"} aria-aria-label='Options'></MenuButton>
                        <MenuList>
                            <MenuItem as={NextLink} href="/">About</MenuItem>
                            <MenuItem as={NextLink} href="/works">Works</MenuItem>
                            <MenuItem as={NextLink} href="/posts">Posts</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Container>
        </Box>
    )
}

export default Navbar