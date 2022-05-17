import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridF = ({ title, thumbnail }) => (
    <Box w="100%" align="center">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="empty" loading="lazy" width={480} height={360} />
        <Text mt={2}>{title}</Text>
    </Box>
)

export const GridH = ({ title, thumbnail }) => (
    <Box w="100%" align="center">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="empty" loading="lazy" />
        <Text mt={2}>{title}</Text>
    </Box>
)

export const GridC = ({ title, thumbnail }) => (
    <Box w="100%" align="center">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="empty" loading="lazy" width={480} height={160} />
        <Text mt={2}>{title}</Text>
    </Box>
)

export const GridItemStyle = () => (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  )