import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { dumpsterSizes } from '@/config/dumpsters'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Nashville | Business Waste Management',
  description: 'Reliable commercial dumpster rental for Nashville businesses. Apartment complexes, restaurants, retail, auto shops & more. Professional waste management you can trust. Starting at $349.',
  keywords: 'commercial dumpster rental nashville, business waste management, restaurant dumpster, retail dumpster nashville, office waste removal',
  alternates: {
    canonical: 'https://csdwaste.com/services/commercial-dumpsters',
  },
}

export default function CommercialDumpstersPage() {
  const schema = getServiceSchema(
    'Commercial Dumpster Rental',
    'Commercial Dumpster Rental Nashville',
    'Commercial dumpster rental for Nashville businesses. Reliable waste management for apartment complexes, retail stores, restaurants, office buildings, and more.'
  )
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Commercial Dumpsters', url: '/services/commercial-dumpsters' },
  ])

  const industriesLeft = [
    { name: 'Apartment Complexes & Property Management', icon: 'building' },
    { name: 'Retail Stores & Shopping Centers', icon: 'store' },
    { name: 'Auto Repair & Body Shops', icon: 'wrench' },
    { name: 'Restaurants, Bars & Hospitality', icon: 'utensils' },
  ]

  const industriesRight = [
    { name: 'Coffee Shops & Cafes', icon: 'coffee' },
    { name: 'Office Buildings & Warehouses', icon: 'briefcase' },
    { name: 'Healthcare Facilities', icon: 'hospital' },
    { name: 'And countless other Nashville businesses', icon: 'check' },
  ]

  const commercialDescriptions: Record<string, string> = {
    '10-yard': 'Perfect for small businesses and retail stores',
    '15-yard': 'Ideal for restaurants, offices, and medium businesses',
    '20-yard': 'Best for large facilities and commercial properties',
  }

  const valueProps = [
    {
      icon: 'clock',
      title: '24/7 ORDERING',
      description: 'Order online anytime or call us to schedule your commercial dumpster rental',
    },
    {
      icon: 'calendar',
      title: 'FLEXIBLE SCHEDULING',
      description: 'Choose pickup frequency that works for your business operations',
    },
    {
      icon: 'handshake',
      title: 'RELIABLE SERVICE',
      description: 'Consistent, professional service you can count on every time',
    },
  ]

  // Icon component for industries
  const IndustryIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
      building: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      store: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      ),
      wrench: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      ),
      utensils: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
      coffee: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      ),
      briefcase: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      hospital: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      check: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    }
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icons[icon]}
      </svg>
    )
  }

  // Value prop icon component
  const ValueIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
      clock: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      calendar: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      handshake: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    }
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icons[icon]}
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
            src="/images/commercial-1.jpg"
            alt="Commercial dumpster rental for Nashville businesses"
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
              COMMERCIAL WASTE MANAGEMENT THAT KEEPS YOUR BUSINESS RUNNING
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Reliable Dumpster Rentals for Nashville Businesses
            </p>
            <AngledButton href="/contact">
              GET A QUOTE
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
                <Link href="/services" className="hover:text-[#D32F2F] transition-colors">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Commercial Dumpsters</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Your business can&apos;t afford waste management headaches. Overflowing trash creates safety hazards. Debris piling up makes a terrible impression on customers. And waiting days for a pickup throws your entire operation off schedule.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Clean Site Dumpsters provides commercial dumpster rental solutions that keep your Nashville business running smoothly—without the drama.
            </p>
          </div>
        </Container>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              CUSTOMIZED SOLUTIONS FOR YOUR BUSINESS
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              We take time to understand your business operations, assess your waste volume, and recommend the ideal dumpster size and pickup schedule. Then we deliver consistent, reliable service so waste removal becomes one less thing you have to manage.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
                DEPENDABLE SERVICE ACROSS INDUSTRIES
              </h2>
              <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
                Business owners trust Clean Site Dumpsters because we show up when promised and handle waste removal professionally every single time. Whether you&apos;re managing ongoing commercial waste or handling a one-time renovation project, we&apos;ve got the capacity and reliability your business demands.
              </p>
            </div>

            <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-8 text-center">
              INDUSTRIES WE SERVE
            </h3>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {industriesLeft.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0">
                      <IndustryIcon icon={industry.icon} />
                    </div>
                    <span className="font-body text-base md:text-lg text-gray-700">{industry.name}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {industriesRight.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0">
                      <IndustryIcon icon={industry.icon} />
                    </div>
                    <span className="font-body text-base md:text-lg text-gray-700">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sizing Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              COMMERCIAL DUMPSTER SIZES FOR EVERY NEED
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
              From small retail operations to large commercial facilities, we offer dumpster sizes that match your business requirements. Our team helps you determine the right capacity based on your waste volume and frequency needs.
            </p>
          </div>

          {/* Dumpster Size Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            {dumpsterSizes.map((dumpster, index) => (
              <div
                key={dumpster.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${
                  index === 1 ? 'border-[#D32F2F] relative' : 'border-transparent'
                }`}
              >
                {/* Most Popular Badge */}
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-xs px-3 py-1 rounded-bl-lg z-10">
                    Most Popular
                  </div>
                )}

                {/* Dumpster Image */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={dumpster.image}
                    alt={`${dumpster.name} for commercial projects`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-2">
                    {dumpster.size} DUMPSTER
                  </h3>
                  <p className="font-body text-sm text-gray-500 mb-2">
                    {dumpster.capacity}
                  </p>
                  <p className="font-body text-sm text-gray-600 mb-4 italic">
                    {commercialDescriptions[dumpster.id]}
                  </p>

                  {/* Starting Price */}
                  <div className="mb-4">
                    <span className="font-body text-sm text-gray-500">Starting at</span>
                    <div className="font-heading font-bold text-3xl text-[#D32F2F]">
                      ${dumpster.pricing.seven_day}
                      <span className="font-body text-base text-gray-500 font-normal">/7 days</span>
                    </div>
                  </div>

                  {/* All Pricing Tiers */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="font-body text-xs text-gray-500 uppercase tracking-wide mb-2">All Rental Options:</p>
                    <div className="space-y-1">
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-gray-600">7 Days</span>
                        <span className="font-semibold text-gray-900">${dumpster.pricing.seven_day}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-gray-600">14 Days</span>
                        <span className="font-semibold text-gray-900">${dumpster.pricing.fourteen_day}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-gray-600">30 Days</span>
                        <span className="font-semibold text-gray-900">${dumpster.pricing.thirty_day}</span>
                      </div>
                    </div>
                  </div>

                  {/* Request Service Button */}
                  <AngledButton href="/contact" className="w-full text-center justify-center">
                    REQUEST SERVICE
                  </AngledButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              TRANSPARENT PRICING. NO SURPRISES.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              When you partner with Clean Site Dumpsters for commercial waste management, you&apos;ll know exactly what you&apos;re paying from day one. No hidden fees buried in invoices. No surprise charges for delivery or fuel. Just straightforward, honest pricing for professional Nashville dumpster rental services.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              We&apos;re not the cheapest option—we&apos;re the most reliable one. And for businesses that can&apos;t afford downtime or service failures, that makes all the difference.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Props Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center">
                <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <ValueIcon icon={prop.icon} />
                </div>
                <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-4">
                  {prop.title}
                </h3>
                <p className="font-body text-base text-gray-700 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center text-white max-w-[900px] mx-auto">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-6">
              READY TO SIMPLIFY YOUR WASTE MANAGEMENT?
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8">
              Contact Clean Site Dumpsters today to discuss your commercial dumpster needs. We&apos;ll create a customized solution that keeps your business running smoothly.
            </p>
            <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
              CONTACT US TODAY
            </AngledButton>
          </div>
        </Container>
      </section>
    </>
  )
}
