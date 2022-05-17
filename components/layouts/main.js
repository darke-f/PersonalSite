import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Banner from '../banner'

const LoadBanner = dynamic(() => import('../banner'), {
    ssr: false,
    loading: () => <Banner />
})

const Main = ( { children, router } ) => {
    return (
        <Box as ="main" pb={8}>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Ariiq's homepage" />
            <meta name="author" content="Ariiq Firanda" />
            <meta name="author" content="Darle" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta property="og:site_name" content="Ariiq Firanda" />
            <meta name="og:title" content="Ariiq Firanda" />
            <meta property="og:type" content="website" />
            <title> Ariiq - Homepage</title>

        </Head>   

        <Navbar path={router.asPath} />

        <Container maxW="container.lg" pt={14}>
            <LoadBanner />

            {children}
        </Container>
        </Box>
    )
}

export default Main