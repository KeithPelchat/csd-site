import { siteConfig } from '@/config/site'

interface LocalBusinessJsonLdProps {
  overrides?: {
    name?: string
    description?: string
    url?: string
  }
}

export function LocalBusinessJsonLd({ overrides }: LocalBusinessJsonLdProps = {}) {
  const { business, seo, social } = siteConfig

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${seo.siteUrl}/#business`,
    name: overrides?.name || business.name,
    description: overrides?.description || business.description,
    url: overrides?.url || seo.siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],
    priceRange: '$$',
    image: `${seo.siteUrl}${seo.ogImage}`,
    logo: `${seo.siteUrl}${siteConfig.branding.logo}`,
    sameAs: [
      social.facebook,
      social.instagram,
      social.linkedin,
      social.google
    ],
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: `${area}, Tennessee`
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dumpster Rental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Dumpster Rental',
            description: 'Roll-off dumpster rental for home cleanouts, renovations, and DIY projects'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Dumpster Rental',
            description: 'Dumpster rental for commercial properties and business waste management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Dumpster Rental',
            description: 'Heavy-duty dumpsters for construction sites, demolition, and contractor projects'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const { seo, business } = siteConfig

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seo.siteUrl}/#website`,
    url: seo.siteUrl,
    name: business.name,
    description: seo.description,
    publisher: {
      '@id': `${seo.siteUrl}/#business`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seo.siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const { seo } = siteConfig

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${seo.siteUrl}${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface FAQJsonLdProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
  image?: string
  priceRange?: string
}

export function ServiceJsonLd({ name, description, url, image, priceRange }: ServiceJsonLdProps) {
  const { seo, business } = siteConfig

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url.startsWith('http') ? url : `${seo.siteUrl}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      '@id': `${seo.siteUrl}/#business`
    },
    areaServed: {
      '@type': 'State',
      name: 'Tennessee'
    },
    ...(image && { image: image.startsWith('http') ? image : `${seo.siteUrl}${image}` }),
    ...(priceRange && { priceRange })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
