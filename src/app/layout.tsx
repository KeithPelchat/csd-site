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
    // Content Security Policy
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
      font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://cdn.sanity.io https://*.sanity.io;
      frame-src 'self' https://www.google.com;
    `.replace(/\s+/g, ' ').trim(),

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
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
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
