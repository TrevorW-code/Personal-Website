import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection , BioYear  } from '../components/bio'


const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
            Hi! I&apos;m a data scientist based in Colorado!
        </Box>
        <Box display={{mx:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Trevor Ward
                </Heading>
                <p>Product Design and Data Science</p>
            </Box>
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align = "center"
            >
                <Image 
                borderColor= "whiteAlpha.800" 
                borderWidth={2} 
                borderStyle= "solid" 
                maxWidth = "100px" 
                display="inline-block" 
                borderRadius="full" 
                src="images/trevy.jpg" 
                alt="Profile Image"/>
            </Box>
        </Box>
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title"> 
            Work
        </Heading>
            <Paragraph>
                Trevor is a full-stack developer and data scientist based out of Denver, Colorado. He is primarily focused on reducing bias in AI, as well as automating logistic processes. Learn more about his work experience by checking out his {' '}
                <Link href='https://www.linkedin.com/in/trevorward001/'>Linkedin</Link>
                .
            </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                    My Portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant= "section-title">
              Bio  
            </Heading>
            <BioSection>
                <BioYear>2000</BioYear>Born in Richmond, Virginia.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>First Internship at Blueprint, Boulder
            </BioSection> 
            <BioSection>
                <BioYear>2022</BioYear>Started Working part-time at Rippey.AI
            </BioSection> 
            <BioSection>
                <BioYear>2023</BioYear>Graudated University of Colorado Boulder with a BS in Information Science
            </BioSection> 
            <BioSection>
                <BioYear>2023 - Present</BioYear>Head of Data Science at Rippey.AI
            </BioSection> 
        </Section>
    </Container>
    )
}

export default Page