import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'KPM Cx Technologies',
    description: 'Revolutionizing Customer Experience & BPO in Africa',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: 'What We Do',
        href: '#services'
      },
      {
        id: 'about',
        label: 'Who We Are',
        href: '#about'
      },
      {
        id: 'insights',
        label: 'Our Insights',
        href: '#insights'
      },
      {
        id: 'innovation',
        label: 'Our Innovation',
        href: '#innovation'
      },
      {
        label: 'Contact Us',
        href: 'mailto:Kayodeadetosoye@gmail.com',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2025 KPM Cx Technologies. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:info@kpmcxtech.com',
        label: 'Contact',
      },
      // {
      //   href: 'https://twitter.com/kpmcxtech',
      //   label: 'Twitter',
      // },
      // {
      //   href: 'https://linkedin.com/company/kpmcxtech',
      //   label: <FaLinkedin size="14" />,
      // },
    ],
  },
  signup: {
    title: 'Transform Your Customer Experience in Africa',
    features: [
      {
        icon: FiCheck,
        title: 'Localized Expertise',
        description: 'Deep understanding of African customer behavior and market needs.',
      },
      {
        icon: FiCheck,
        title: 'AI-Driven Automation',
        description:
          'Enhance efficiency and reduce costs with our intelligent chatbots and analytics.',
      },
      {
        icon: FiCheck,
        title: 'Multilingual Support',
        description:
          'Cater to diverse linguistic needs across the African continent.',
      },
      {
        icon: FiCheck,
        title: 'Cost Efficiency',
        description:
          'Competitive pricing compared to international BPO providers without compromising quality.',
      },
    ],
  },
  metrics: {
    items: [
      {
        value: '$500K',
        label: 'Year 1 Revenue'
      },
      {
        value: '$5M+',
        label: 'Year 3 Projection'
      },
      {
        value: '4+',
        label: 'Key Industries Served'
      }
    ]
  },
  industries: {
    title: 'Industries We Serve',
    items: [
      {
        title: 'Fintech',
        description: 'Supporting the rapidly growing financial technology sector in Africa.'
      },
      {
        title: 'Telecom',
        description: 'Enhancing customer experience for telecommunications providers.'
      },
      {
        title: 'E-commerce',
        description: 'Helping online retailers deliver exceptional customer service.'
      },
      {
        title: 'Healthcare',
        description: 'Supporting patient engagement and administrative efficiency.'
      }
    ]
  }
}

export default siteConfig