import { Container, Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I&apos;m a data scientist based in Colorado!
        </Box>
        <Box display={{mx:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Trevor Ward
                </Heading>
                <p>Product Design and Data Science</p>
            </Box>
        </Box>
    </Container>
    )
}

export default Page