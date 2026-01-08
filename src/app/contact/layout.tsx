import { Metadata } from 'next'
import { getContactSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | Clean Site Dumpsters Nashville',
  description: 'Contact Clean Site Dumpsters for dumpster rental in Nashville. Get a free quote, order online 24/7, or call 615.717.2200.',
  keywords: 'contact dumpster rental Nashville, clean site dumpster Nashville, Nashville dumpster rental quote, roll off dumpster Nashville',
  alternates: {
    canonical: 'https://csdwaste.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = getContactSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
