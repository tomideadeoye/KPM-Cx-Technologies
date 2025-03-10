'use client'

import { Center, Heading, VStack, Button } from '@chakra-ui/react'
import { Section } from 'components/section'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import Link from 'next/link'

export default function Login() {
  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <VStack spacing={6}>
            <Heading>Login Coming Soon</Heading>
            <Button as={Link} href="/">
              Return Home
            </Button>
          </VStack>
        </PageTransition>
      </Center>
    </Section>
  )
}
