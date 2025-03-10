import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Customer Experience Solutions',
  description:
    'Tailored packages to meet your business needs across the African market.',
  plans: [
    {
      id: 'starter',
      title: 'Starter',
      description: 'Essential customer support for growing businesses.',
      price: 'From $2,500/month',
      features: [
        {
          title: 'Multichannel support (email & chat)',
        },
        {
          title: 'Basic AI chatbot integration',
        },
        {
          title: 'Business hours coverage (8/5)',
        },
        {
          title: 'Monthly performance reports',
        },
        {
          title: 'Up to 2 languages supported',
        },
        {
          title: 'Standard SLA response times',
        },
        {
          title: '30-day pilot program available',
        },
      ],
      action: {
        href: 'mailto:Kayodeadetosoye@gmail.com',
        label: 'Get Started'
      },
    },
    {
      id: 'professional',
      title: 'Professional',
      description: 'Comprehensive CX solution for established businesses.',
      price: 'From $5,000/month',
      isRecommended: true,
      features: [
        {
          title: 'Full multichannel support (phone, email, chat, social)',
        },
        {
          title: 'Advanced AI chatbot & self-service',
        },
        {
          title: 'Extended hours coverage (16/7)',
        },
        {
          title: 'Weekly analytics & performance reviews',
        },
        {
          title: 'Up to 5 languages supported',
        },
        {
          title: 'Priority SLA response times',
        },
        {
          title: 'Technical support & IT helpdesk',
        },
        {
          title: 'Custom reporting dashboard',
        },
        {
          title: 'Dedicated account manager',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'mailto:Kayodeadetosoye@gmail.com',
        label: 'Contact Sales'
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Full-scale BPO and CX transformation for large organizations.',
      price: 'Custom Pricing',
      features: [
        {
          title: 'Complete CX & BPO solution',
        },
        {
          title: '24/7 multilingual support',
        },
        {
          title: 'Custom AI development & integration',
        },
        {
          title: 'Full back-office operations',
        },
        {
          title: 'Unlimited languages supported',
        },
        {
          title: 'Performance-based pricing options',
        },
        {
          title: 'Strategic CX consulting',
        },
        {
          title: 'Dedicated operations team',
        },
        {
          title: 'Custom tech stack integration',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'mailto:Kayodeadetosoye@gmail.com',
        label: 'Schedule Consultation'
      },
    },
  ],
}