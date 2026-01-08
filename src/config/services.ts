import { ServiceConfig } from '@/types/config'

export const services: ServiceConfig[] = [
  {
    id: 'residential',
    name: 'Residential Dumpsters',
    slug: 'residential-dumpsters',
    description: 'Perfect for home cleanouts, renovations, and yard waste. Our residential dumpsters make decluttering easy with flexible rental periods and convenient delivery.',
    icon: 'home',
    image: '/images/services/residential.jpg',
    sizes: ['10 Yard', '15 Yard', '20 Yard'],
    pricing: {
      starting: 299,
      unit: 'day'
    },
    features: [
      'Same-day or next-day delivery',
      'Flexible rental periods',
      'Perfect for garage cleanouts',
      'Ideal for home renovations',
      'Yard waste disposal',
      'Estate cleanouts'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Dumpsters',
    slug: 'commercial-dumpsters',
    description: 'Reliable waste management solutions for businesses of all sizes. From retail cleanouts to office renovations, we have the right dumpster for your commercial needs.',
    icon: 'building',
    image: '/images/services/commercial.jpg',
    sizes: ['20 Yard', '30 Yard', '40 Yard'],
    pricing: {
      starting: 399,
      unit: 'day'
    },
    features: [
      'Scheduled pickups available',
      'Multiple dumpster discounts',
      'Flexible billing options',
      'Retail store cleanouts',
      'Office renovations',
      'Warehouse cleanups'
    ]
  },
  {
    id: 'construction',
    name: 'Construction Dumpsters',
    slug: 'construction-dumpsters',
    description: 'Heavy-duty dumpsters built for construction sites. Handle concrete, roofing materials, demolition debris, and more with our rugged construction dumpsters.',
    icon: 'hammer',
    image: '/images/services/construction.jpg',
    sizes: ['20 Yard', '30 Yard', '40 Yard'],
    pricing: {
      starting: 449,
      unit: 'day'
    },
    features: [
      'Heavy debris capable',
      'Concrete disposal',
      'Roofing materials',
      'Demolition debris',
      'New construction waste',
      'Contractor discounts'
    ]
  }
]

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}
