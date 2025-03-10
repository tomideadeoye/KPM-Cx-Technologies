'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
// import Image from 'next/image'
import {
  FiArrowRight, FiMapPin, FiCpu, FiGlobe, FiTrendingDown ,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp, FiPhone, FiShoppingCart,
  FiHeadphones, FiMessageSquare, FiUsers, FiServer, FiBarChart2, FiDollarSign, FiLayers 

} from 'react-icons/fi'
import { } from '@chakra-ui/react'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import {  SimpleGrid,  Badge, useColorModeValue} from '@chakra-ui/react'
import { FaRobot, FaGlobe, FaChartLine, FaHandshake } from 'react-icons/fa'


const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      {/* <TestimonialsSection /> */}

      <PricingSection />

      <FaqSection />
    </Box>
  )
}
const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Revolutionizing
                <Br /> Customer Experience in Africa
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                KPM Cx Technologies delivers <Em>AI-powered solutions</Em>
                <Br /> that transform how businesses connect with customers <Br />{' '}
                across the African continent.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Text fontWeight="bold" fontSize="lg">Trusted by leading brands in: Fintech, Telecom and E-commerce</Text>
              
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
              <ButtonLink colorScheme="primary" size="lg" href="mailto:Kayodeadetosoye@gmail.com">
                  Contact Us
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="/case-studies"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View Case Studies
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/bpo.png"
                  width={1200}
                  height={762}
                  alt="KPM Cx Technologies Customer Experience Dashboard"
                 
               
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Localized Expertise',
            icon: FiMapPin,
            description: 'Deep understanding of African customer behavior and market nuances.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'AI-Driven Solutions',
            icon: FiCpu,
            description:
              'Enhance efficiency and reduce costs with intelligent chatbots and analytics.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Multilingual Support',
            icon: FiGlobe,
            description:
              'Cater to diverse linguistic needs across the African continent.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Cost Efficiency',
            icon: FiTrendingDown,
            description:
              'Competitive pricing compared to international BPO providers without compromising quality.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.600, purple.600)',
    'linear(to-r, blue.500, purple.500)'
  )
  
  const testimonialBg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Container maxW="container.xl" py={20} id="services">
      {/* Value Proposition */}
      <Box mb={16} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>
          Revolutionizing Customer Experience & BPO in Africa
        </Heading>
        <Text fontSize="xl" maxW="3xl" mx="auto">
          Our AI-powered solutions combine local expertise with cutting-edge technology to deliver exceptional customer experiences across multiple channels and languages.
        </Text>
      </Box>

      {/* Key Differentiators */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={20}>
        <VStack align="start" p={6} borderRadius="md" boxShadow="md">
          <Icon as={FaRobot} w={10} h={10} color="blue.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>
            AI-Driven Automation
          </Heading>
          <Text>
            Enhance efficiency and reduce costs with intelligent chatbots, automated workflows, and predictive analytics.
          </Text>
        </VStack>

        <VStack align="start" p={6} borderRadius="md" boxShadow="md">
          <Icon as={FaGlobe} w={10} h={10} color="blue.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>
            Multilingual Support
          </Heading>
          <Text>
            Cater to Africa's diverse linguistic landscape with support for multiple languages across all communication channels.
          </Text>
        </VStack>

        <VStack align="start" p={6} borderRadius="md" boxShadow="md">
          <Icon as={FaChartLine} w={10} h={10} color="blue.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>
            Performance Metrics
          </Heading>
          <Text>
            Track and improve customer satisfaction with AI-driven analytics and comprehensive reporting dashboards.
          </Text>
        </VStack>

        <VStack align="start" p={6} borderRadius="md" boxShadow="md">
          <Icon as={FaHandshake} w={10} h={10} color="blue.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>
            Localized Expertise
          </Heading>
          <Text>
            Deep understanding of African customer behavior and market needs that global BPO providers simply can't match.
          </Text>
        </VStack>
      </SimpleGrid>

      {/* Testimonial */}
      <Box 
        p={8} 
        mb={16} 
        borderRadius="lg" 
        bg={testimonialBg}
        boxShadow="lg"
        textAlign="center"
      >
        {/* <Text fontSize="xl" fontStyle="italic">
          "KPM Cx Technologies transformed our customer support operation. Their AI-powered solutions and local expertise helped us reduce costs by 30% while improving customer satisfaction scores by 25%."
        </Text>
        <Text mt={4} fontWeight="bold">
          - Chief Customer Officer, Leading African Fintech Company
        </Text> */}
      </Box>

      {/* Services Overview */}
      <Box mb={16} id='innovation'>
        <Heading as="h3" size="lg" mb={6}>
          Comprehensive CX & BPO Solutions
        </Heading>
        <Text fontSize="lg" mb={8}>
          We provide end-to-end customer experience management and business process outsourcing services tailored to the African market.
        </Text>
        
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
          {[
            'Multichannel Support',
            'AI Chatbots',
            'Technical Support',
            'IT Helpdesk',
            'Data Entry',
            'HR Support',
            'Finance Operations',
            'Administrative Tasks',
            'Analytics & Reporting',
            'Multilingual Service',
            'Customer Satisfaction',
            'Performance Metrics',
            'Process Optimization',
            'CX Consulting',
            'Training Programs',
            'Quality Assurance',
          ].map((value) => (
            <Box 
              key={value} 
              p={3} 
              borderRadius="md" 
              bg="gray.100" 
              _dark={{ bg: 'gray.700' }}
              fontWeight="medium"
            >
              {value}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="insights"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Revolutionizing
          <Br /> Customer Experience in Africa.
        </Heading>
      }
      description={
        <>
          KPM Cx Technologies offers comprehensive CX and BPO solutions designed specifically for African markets.
          <Br />
          Our AI-powered services help businesses deliver exceptional customer experiences while reducing operational costs.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Multichannel Support',
          icon: FiHeadphones,
          description:
            'Provide seamless customer service across phone, chat, email, and social media channels with our trained professionals.',
          variant: 'inline',
        },
        {
          title: 'AI-Powered Chatbots',
          icon: FiMessageSquare,
          description:
            'Deploy intelligent self-service solutions that handle routine inquiries, reducing costs while maintaining high customer satisfaction.',
          variant: 'inline',
        },
        {
          title: 'Technical Support',
          icon: FiServer,
          description:
            'Offer reliable IT helpdesk services to resolve technical issues quickly and efficiently for your customers.',
          variant: 'inline',
        },
        {
          title: 'Multilingual Capabilities',
          icon: FiGlobe,
          description:
            'Support diverse linguistic needs across Africa with our team of multilingual customer service professionals.',
          variant: 'inline',
        },
        {
          title: 'Analytics & Insights',
          icon: FiBarChart2,
          description:
            'Leverage AI-driven analytics to continuously monitor and improve customer satisfaction metrics and operational efficiency.',
          variant: 'inline',
        },
        {
          title: 'Back-Office Operations',
          icon: FiLayers,
          description:
            'Streamline data entry, HR support, finance, and administrative functions with our skilled professionals.',
          variant: 'inline',
        },
        {
          title: 'Automation Solutions',
          icon: FiCpu,
          description:
            'Implement process automation to enhance efficiency, reduce errors, and allow your team to focus on high-value activities.',
          variant: 'inline',
        },
        {
          title: 'Cost-Effective Pricing',
          icon: FiDollarSign,
          description:
            'Enjoy competitive rates compared to international BPO providers without compromising on service quality.',
          variant: 'inline',
        },
        {
          title: 'Localized Expertise',
          icon: FiUsers,
          description: (
            <>
              Benefit from our deep understanding of African markets and customer behavior, ensuring culturally appropriate and effective customer interactions.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}



const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {/* VAT may be applicable depending on your location. */}
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
