import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { serviceAreas } from '@/config/areas'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Service Areas | Dumpster Rental Across Middle Tennessee | Clean Site Dumpsters',
  description: 'Clean Site Dumpsters serves Nashville, Franklin, Brentwood, Hendersonville, Murfreesboro, and Mount Juliet with fast, reliable dumpster rental. Same-day and next-day delivery available.',
  keywords: 'dumpster rental Nashville, dumpster rental Franklin, dumpster rental Murfreesboro, dumpster rental Hendersonville, Middle Tennessee dumpster rental, Davidson County dumpster',
  openGraph: {
    title: 'Dumpster Rental Across Middle Tennessee | Clean Site Dumpsters',
    description: 'Serving 6 cities with fast, reliable dumpster rental service. Same-day and next-day delivery available.',
    url: 'https://csdwaste.com/service-areas',
    type: 'website',
  },
}

interface CityData {
  county: string
  image: string
  alt: string
  attribution?: {
    text: string
    url: string
  }
}

const cityData: Record<string, CityData> = {
  nashville: {
    county: 'Davidson County',
    image: '/images/areas/nashville.jpg',
    alt: 'Nashville skyline at sunset',
  },
  franklin: {
    county: 'Williamson County',
    image: '/images/areas/franklin.jpg',
    alt: 'Historic downtown Franklin Tennessee',
  },
  brentwood: {
    county: 'Williamson County',
    image: '/images/areas/brentwood.jpg',
    alt: 'Brentwood Tennessee neighborhood',
    attribution: {
      text: 'CBL Properties',
      url: 'https://www.cblproperties.com/',
    },
  },
  hendersonville: {
    county: 'Sumner County',
    image: '/images/areas/hendersonville.jpg',
    alt: 'Hendersonville Tennessee lakeside view',
    attribution: {
      text: 'Sugarlandfanatic, CC BY-SA 3.0',
      url: 'https://commons.wikimedia.org/w/index.php?curid=6897598',
    },
  },
  murfreesboro: {
    county: 'Rutherford County',
    image: '/images/areas/murfreesboro.jpg',
    alt: 'Murfreesboro Tennessee downtown square',
  },
  'mount-juliet': {
    county: 'Wilson County',
    image: '/images/areas/mount-juliet.jpg',
    alt: 'Mount Juliet Tennessee Providence area',
    attribution: {
      text: 'MtJulietEditor96, CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/w/index.php?curid=47603674',
    },
  },
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-wide text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Dumpster Rental Across Middle Tennessee
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Serving 6 Cities with Fast, Reliable Service
            </p>
          </div>
        </Container>
      </section>

      {/* Intro + Map Section */}
      <section className="py-16 bg-white">
        <Container>
          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              {siteConfig.business.name} proudly serves homeowners, businesses, and contractors
              throughout Middle Tennessee with same-day and next-day delivery.
            </p>
          </div>

          {/* Static Map with Service Area Pins */}
          <div className="w-full max-w-5xl mx-auto mb-12">
            <Image
              src={`https://maps.googleapis.com/maps/api/staticmap?center=36.1,-86.6&zoom=9&size=1200x500&scale=2&markers=color:red%7Clabel:N%7C36.1627,-86.7816&markers=color:red%7Clabel:F%7C35.9251,-86.8689&markers=color:red%7Clabel:B%7C36.0331,-86.7828&markers=color:red%7Clabel:H%7C36.3048,-86.6200&markers=color:red%7Clabel:M%7C35.8456,-86.3903&markers=color:red%7Clabel:MJ%7C36.2000,-86.5186&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
              alt="Clean Site Dumpsters service areas across Middle Tennessee - Nashville, Franklin, Brentwood, Hendersonville, Murfreesboro, Mount Juliet"
              width={1200}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-[#D32F2F]">6</div>
              <div className="font-body text-sm md:text-base text-gray-600">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-[#D32F2F]">5</div>
              <div className="font-body text-sm md:text-base text-gray-600">Counties</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-[#D32F2F]">24/7</div>
              <div className="font-body text-sm md:text-base text-gray-600">Service</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-4">
              Cities We Serve
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Click on any area below to learn more about our services in your location.
            </p>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => {
              const data = cityData[area.slug]
              return (
                <Link
                  key={area.id}
                  href={`/service-areas/${area.slug}`}
                  className="group relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gray-800">
                    <Image
                      src={data?.image || '/images/areas/placeholder.jpg'}
                      alt={data?.alt || `${area.name} Tennessee`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl mb-1">
                      {area.name}
                    </h3>
                    <p className="font-body text-sm text-white/80 mb-3">
                      {data?.county}
                    </p>
                    <p className="font-body text-sm leading-relaxed text-white/90 mb-4 line-clamp-2">
                      {area.description}
                    </p>
                    <span className="inline-block bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-xs px-5 py-2 rounded hover:bg-[#B71C1C] transition-colors">
                      View Details
                    </span>
                  </div>

                  {/* Image Attribution */}
                  {data?.attribution && (
                    <span
                      className="absolute top-2 right-2 font-body text-[10px] text-white/50 bg-black/30 px-1.5 py-0.5 rounded"
                      title={`Photo: ${data.attribution.text}`}
                    >
                      {data.attribution.text.split(',')[0]}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Don't See Your Area */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl lg:text-4xl text-black mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              We&apos;re expanding! Give us a call – we may already serve your area or can accommodate special requests.
            </p>
            <a
              href={siteConfig.business.phoneLink}
              className="inline-flex items-center gap-2 bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-[#B71C1C] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.business.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Find Your Service Area and Order Today
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Same-day and next-day delivery available. Order online 24/7 or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={siteConfig.business.phoneLink}
                className="bg-white text-[#D32F2F] font-heading font-semibold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {siteConfig.business.phone}
              </a>
              <Link
                href="/contact"
                className="bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-gray-900 transition-colors"
              >
                Submit a Request
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Credits */}
      <section className="py-4 bg-gray-100">
        <Container>
          <p className="font-body text-xs text-gray-500 text-center">
            Photo credits:{' '}
            <a href="https://www.cblproperties.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              Brentwood: CBL Properties
            </a>
            {' | '}
            <a href="https://commons.wikimedia.org/w/index.php?curid=6897598" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              Hendersonville: Sugarlandfanatic, CC BY-SA 3.0
            </a>
            {' | '}
            <a href="https://commons.wikimedia.org/w/index.php?curid=47603674" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              Mount Juliet: MtJulietEditor96, CC BY-SA 4.0
            </a>
          </p>
        </Container>
      </section>
    </>
  )
}
