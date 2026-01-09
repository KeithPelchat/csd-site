import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { dumpsterSizes } from '@/config/dumpsters'
import { siteConfig } from '@/config/site'
import { getServiceAreaSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Murfreesboro TN | Clean Site Dumpsters',
  description: 'Professional dumpster rental in Murfreesboro, TN. Serving all Rutherford County with same-day delivery. Residential, commercial & construction dumpsters. Call 615-717-2200.',
  keywords: 'dumpster rental murfreesboro tn, murfreesboro dumpster service, roll off dumpster murfreesboro, rutherford county dumpster rental, mtsu dumpster',
  alternates: {
    canonical: 'https://csdwaste.com/service-areas/murfreesboro',
  },
}

export default function MurfreesboroServiceAreaPage() {
  const schema = getServiceAreaSchema('Murfreesboro', '35.8456', '-86.3903')
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Murfreesboro', url: '/service-areas/murfreesboro' },
  ])

  const neighborhoods = [
    'Downtown Murfreesboro',
    'MTSU Campus Area',
    'The Avenue',
    'Gateway',
    'Blackman',
    'Rockvale',
    'Walter Hill',
    'Medical Center Parkway',
    'Old Fort Parkway',
    'Sam Ridley Parkway',
    'Lascassas',
    'Eagleville',
    'Christiana',
    'Smyrna (adjacent)',
    'La Vergne (adjacent)',
  ]

  const whyChooseUs = [
    {
      icon: 'location',
      title: 'LOCAL COMPANY',
      description: 'Middle Tennessee owned and operated',
    },
    {
      icon: 'clock',
      title: 'FAST DELIVERY',
      description: 'Same-day and next-day service available',
    },
    {
      icon: 'dollar',
      title: 'TRANSPARENT PRICING',
      description: 'No hidden fees or surprise charges',
    },
    {
      icon: 'phone',
      title: '24/7 ORDERING',
      description: 'Order online anytime or call us directly',
    },
  ]

  const services = [
    {
      title: 'RESIDENTIAL DUMPSTERS',
      description: 'Home cleanouts, renovations, and moving projects',
      href: '/services/residential-dumpsters',
    },
    {
      title: 'COMMERCIAL DUMPSTERS',
      description: 'Business waste management and property maintenance',
      href: '/services/commercial-dumpsters',
    },
    {
      title: 'CONSTRUCTION DUMPSTERS',
      description: 'Job site debris removal for contractors and builders',
      href: '/services/construction-dumpsters',
    },
  ]

  // Icon component
  const Icon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
      location: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      ),
      clock: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      dollar: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      phone: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
    }
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icons[icon]}
        {icon === 'location' && (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        )}
      </svg>
    )
  }

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

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero BG.png"
            alt="Murfreesboro Tennessee dumpster rental service"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
              DUMPSTER RENTAL IN MURFREESBORO, TN
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Professional Waste Removal Services Throughout Murfreesboro and Rutherford County
            </p>
            <AngledButton href="/contact">
              ORDER YOUR MURFREESBORO DUMPSTER
            </AngledButton>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#D32F2F] transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/service-areas" className="hover:text-[#D32F2F] transition-colors">Service Areas</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Murfreesboro</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Clean Site Dumpsters proudly serves Murfreesboro, Tennessee and all of Rutherford County with reliable dumpster rental services for residential, commercial, and construction projects. From student housing cleanouts near MTSU to new commercial construction along Medical Center Parkway, we provide fast, affordable waste removal solutions for the entire Murfreesboro community.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Area Coverage */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
                SERVING MURFREESBORO AND RUTHERFORD COUNTY
              </h2>
              <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
                We provide fast, reliable dumpster delivery throughout Murfreesboro and the greater Rutherford County area. Whether you&apos;re near MTSU, along the bustling corridors of Medical Center Parkway, or any surrounding community, Clean Site Dumpsters has you covered with same-day and next-day service.
              </p>
            </div>

            <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-8 text-center">
              MURFREESBORO AREAS WE SERVE:
            </h3>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <svg
                    className="w-5 h-5 text-[#D32F2F] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-body text-sm md:text-base text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-base text-gray-600 text-center italic">
              Don&apos;t see your area? Give us a call - we serve all of Rutherford County!
            </p>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-12 text-center">
            WHY MURFREESBORO TRUSTS CLEAN SITE DUMPSTERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={item.icon} />
                </div>
                <h3 className="font-heading font-semibold uppercase tracking-wide text-xl text-black mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              DUMPSTER SERVICES IN MURFREESBORO
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
              From student housing cleanouts to new commercial construction, Clean Site Dumpsters provides the right solution for every Murfreesboro waste removal need.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-base text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-block font-heading font-semibold uppercase tracking-wide text-sm text-[#D32F2F] hover:text-[#B71C1C] transition-colors"
                >
                  LEARN MORE →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              MURFREESBORO DUMPSTER RENTAL PRICING
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-12">
              Transparent, upfront pricing with no hidden fees. All prices include delivery, pickup, and disposal within standard weight limits.
            </p>

            {/* Pricing Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {dumpsterSizes.map((dumpster) => (
                <div
                  key={dumpster.id}
                  className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200"
                >
                  <h3 className="font-heading font-semibold uppercase tracking-wide text-lg text-black mb-2">
                    {dumpster.size} Dumpster
                  </h3>
                  <div className="font-heading font-bold text-2xl md:text-3xl text-[#D32F2F]">
                    ${dumpster.pricing.seven_day}
                    <span className="font-body text-sm text-gray-500 font-normal">/7 days</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-sm text-gray-600 mb-8">
              Extended rental periods available. Call for custom pricing.
            </p>

            <AngledButton href="/contact">
              GET A QUOTE
            </AngledButton>
          </div>
        </Container>
      </section>

      {/* Local Info Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8 text-center">
              MURFREESBORO WASTE DISPOSAL REGULATIONS
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Clean Site Dumpsters handles all disposal in accordance with Murfreesboro and Rutherford County regulations. We work with local facilities to ensure proper waste management and recycling when applicable.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#D32F2F]">
              <p className="font-body text-base text-gray-700 leading-relaxed">
                <strong className="font-semibold">Permit Information:</strong> For most residential driveways in Murfreesboro, no permit is required. If you need to place a dumpster on a public street, you may need a permit from the City of Murfreesboro. We&apos;re happy to guide you through the process.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center text-white max-w-[900px] mx-auto">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-6">
              READY TO ORDER YOUR MURFREESBORO DUMPSTER?
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8">
              Fast, reliable dumpster rental service throughout Murfreesboro and Rutherford County. Order online now or call us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
                ORDER ONLINE NOW
              </AngledButton>
              <a
                href={siteConfig.business.phoneLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#D32F2F] font-heading font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                CALL {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
