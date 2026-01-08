export interface SiteConfig {
  business: {
    name: string
    tagline: string
    description: string
    phone: string
    phoneLink: string
    email: string
    address: {
      street: string
      city: string
      state: string
      zip: string
      country: string
    }
    geo: {
      latitude: number
      longitude: number
    }
    hours: {
      weekdays: string
      saturday: string
      sunday: string
    }
  }
  branding: {
    logo: string
    colors: {
      primary: string
      secondary: string
      accent: string
      background: string
      text: string
    }
    fonts: {
      heading: string
      body: string
    }
  }
  seo: {
    siteUrl: string
    title: string
    description: string
    keywords: string
    ogImage: string
    twitterHandle: string
  }
  social: {
    facebook: string
    instagram: string
    linkedin: string
    google: string
  }
  features: {
    blog: boolean
    onlineBooking: boolean
    onlinePayment: boolean
    quoteCalculator: boolean
  }
  serviceAreas: string[]
}

export interface ServiceConfig {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  image: string
  sizes: string[]
  pricing: {
    starting: number
    unit: string
  }
  features: string[]
}

export interface ServiceAreaConfig {
  id: string
  name: string
  slug: string
  description: string
  zip_codes: string[]
  coordinates: {
    lat: number
    lng: number
  }
  featured: boolean
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: NavigationItem[]
}

export interface NavigationConfig {
  main: NavigationItem[]
  footer: {
    services: NavigationItem[]
    company: NavigationItem[]
  }
}
