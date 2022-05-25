import { Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

const Banner = () => {

    const bannerImg = `/images/loop${useColorModeValue('.gif','-dark.GIF')}`

    return (
        <Box display="flex" alignItems="center" my={6} justifyContent="center">
            <Image src={bannerImg} width={600} height={300} alt="banner" loading="lazy" />
        </Box>
    )
}

export default Banner