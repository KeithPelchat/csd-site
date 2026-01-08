import { SiteConfig } from '@/types/config'

export const siteConfig: SiteConfig = {
  business: {
    name: 'Clean Site Dumpsters',
    tagline: "Nashville's All-In-One Dumpster Rental Solution",
    description: 'Professional dumpster rental services for residential, commercial, and construction projects in Nashville and surrounding areas.',
    phone: '615.717.2200',
    phoneLink: 'tel:+16157172200',
    email: 'info@csdwaste.com',
    address: {
      street: '609 Newsome Street',
      city: 'Nashville',
      state: 'TN',
      zip: '37211',
      country: 'US'
    },
    geo: {
      latitude: 36.1115,
      longitude: -86.7631
    },
    hours: {
      weekdays: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },
  branding: {
    logo: '/images/logo.png',
    colors: {
      primary: '#D32F2F',
      secondary: '#000000',
      accent: '#FFD700',
      background: '#FFFFFF',
      text: '#000000'
    },
    fonts: {
      heading: 'system-ui, sans-serif',
      body: 'system-ui, sans-serif'
    }
  },
  seo: {
    siteUrl: 'https://csdwaste.com',
    title: 'Dumpster Rental Nashville | Clean Site Dumpsters',
    description: 'Nashville dumpster rental services for residential, commercial, and construction projects. Roll off dumpster Nashville with 24/7 online ordering.',
    keywords: 'dumpster rental Nashville, clean site dumpster Nashville, Nashville dumpster rental services, roll off dumpster Nashville',
    ogImage: '/images/og-image.jpg',
    twitterHandle: '@cleansitedump'
  },
  social: {
    facebook: 'https://facebook.com/cleansitedumpsters',
    instagram: 'https://instagram.com/cleansitedumpsters',
    linkedin: 'https://linkedin.com/company/cleansitedumpsters',
    google: 'https://g.page/cleansitedumpsters'
  },
  features: {
    blog: false,
    onlineBooking: true,
    onlinePayment: true,
    quoteCalculator: true
  },
  serviceAreas: [
    'Nashville',
    'Franklin',
    'Murfreesboro',
    'Hendersonville',
    'Brentwood',
    'Gallatin',
    'Lebanon',
    'Mount Juliet',
    'Smyrna',
    'La Vergne',
    'Spring Hill',
    'Columbia'
  ]
}
