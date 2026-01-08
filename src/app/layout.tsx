import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

const { business, seo, social } = siteConfig

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D32F2F',
}

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${business.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seo.siteUrl,
    siteName: business.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${business.name} - Dumpster Rental Nashville`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
    creator: seo.twitterHandle,
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/site.webmanifest',

  // Verification (add your verification codes here)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },

  // Alternates
  alternates: {
    canonical: seo.siteUrl,
  },

  // Category
  category: 'Business',

  // Other meta
  other: {
    // Geo meta tags for local SEO
    'geo.region': `US-${business.address.state}`,
    'geo.placename': business.address.city,
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,

    // Business info
    'business:contact_data:street_address': business.address.street,
    'business:contact_data:locality': business.address.city,
    'business:contact_data:region': business.address.state,
    'business:contact_data:postal_code': business.address.zip,
    'business:contact_data:country_name': 'United States',
    'business:contact_data:phone_number': business.phone,
    'business:contact_data:email': business.email,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* JSON-LD Structured Data */}
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
