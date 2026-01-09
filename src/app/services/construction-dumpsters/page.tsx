import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { dumpsterSizes } from '@/config/dumpsters'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Nashville | Contractor-Grade Service',
  description: 'Heavy-duty construction dumpster rental built for real job sites. Fast ordering, flexible scheduling, reliable service. Built by contractors for contractors. Starting at $349.',
  keywords: 'construction dumpster rental nashville, contractor dumpster, demolition dumpster, roofing dumpster nashville, job site waste removal',
  alternates: {
    canonical: 'https://csdwaste.com/services/construction-dumpsters',
  },
}

export default function ConstructionDumpstersPage() {
  const schema = getServiceSchema(
    'Construction Dumpster Rental',
    'Construction Dumpster Rental Nashville',
    'Heavy-duty construction dumpster rental for contractors and builders in Nashville. Job site debris management, demolition, roofing, new construction. Same-day delivery available.'
  )
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Construction Dumpsters', url: '/services/construction-dumpsters' },
  ])

  const projectTypesLeft = [
    'New home construction',
    'Commercial building projects',
    'Demolition and teardown',
    'Roofing replacements',
  ]

  const projectTypesRight = [
    'Major renovations and remodels',
    'Concrete and heavy debris',
    'Multi-unit developments',
    'Site preparation and grading',
  ]

  const constructionDescriptions: Record<string, string> = {
    '10-yard': 'Perfect for bathroom/kitchen remodels and small renovations',
    '15-yard': 'Ideal for roofing projects and medium construction jobs',
    '20-yard': 'Best for new construction, demolition, and large-scale projects',
  }

  const valueProps = [
    {
      icon: 'truck',
      title: 'SAME/NEXT DAY DELIVERY',
      description: 'Get your dumpster on-site fast to keep your project on schedule',
    },
    {
      icon: 'hardhat',
      title: 'HEAVY DEBRIS OK',
      description: 'Our dumpsters handle concrete, roofing materials, and construction waste',
    },
    {
      icon: 'calendar',
      title: 'FLEXIBLE SCHEDULING',
      description: 'Adjust pickup dates as your project timeline changes',
    },
  ]

  // Value prop icon component
  const ValueIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
      truck: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      ),
      hardhat: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
      calendar: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
            src="/images/clean-site-construction.jpg"
            alt="Clean Site Dumpsters construction site with dumpster"
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
              CONSTRUCTION DUMPSTER RENTAL BUILT FOR SERIOUS JOB SITES
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Heavy-Duty Waste Management for Contractors and Builders
            </p>
            <AngledButton href="/contact">
              GET YOUR DUMPSTER
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
              <li className="text-gray-900 font-medium" aria-current="page">Construction Dumpsters</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              On an active construction site, proper debris management isn&apos;t just convenient—it&apos;s critical for safety, efficiency, and staying on schedule. One overflowing dumpster or missed pickup can halt your entire crew&apos;s productivity.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Clean Site Dumpsters provides construction dumpster rentals designed to handle the demands of real job sites, from residential remodels to large-scale commercial builds.
            </p>
          </div>
        </Container>
      </section>

      {/* Contractor Focus Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              BUILT BY CONTRACTORS FOR CONTRACTORS
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Our founder comes from your world—concrete, construction, job site management. We built this business specifically to solve the waste management problems contractors face every day. The result? Dumpster rental service that actually works the way your job site needs it to.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Types Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
                BUILT FOR EVERY TYPE OF CONSTRUCTION PROJECT
              </h2>
              <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
                Whether you&apos;re framing new homes, demolishing old structures, handling commercial renovations, or managing multi-phase construction projects, we provide roll-off dumpsters sized and scheduled to match your timeline.
              </p>
            </div>

            <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-8 text-center">
              PERFECT FOR:
            </h3>

            {/* Project Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {/* Left Column */}
              <div className="space-y-4">
                {projectTypesLeft.map((type) => (
                  <div key={type} className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-[#D32F2F] flex-shrink-0"
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
                    <span className="font-body text-base md:text-lg text-gray-700">{type}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {projectTypesRight.map((type) => (
                  <div key={type} className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-[#D32F2F] flex-shrink-0"
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
                    <span className="font-body text-base md:text-lg text-gray-700">{type}</span>
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
              CONTRACTOR-GRADE DUMPSTERS FOR ANY JOB SIZE
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
              From small remodeling jobs to major commercial construction, we have the dumpster capacity you need. Our team understands construction waste and can help you select the right size to handle everything from drywall to concrete debris.
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
                    alt={`${dumpster.name} for construction projects`}
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
                  <p className="font-body text-sm text-gray-600 mb-2 italic">
                    {constructionDescriptions[dumpster.id]}
                  </p>
                  <p className="font-body text-xs text-gray-500 mb-4">
                    Weight limit: {dumpster.weight_limit.toLocaleString()} lbs
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

                  {/* Order Button */}
                  <AngledButton href="/contact" className="w-full text-center justify-center">
                    ORDER NOW
                  </AngledButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ordering Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              FAST ORDERING. FLEXIBLE SCHEDULING.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Time is money on job sites. That&apos;s why we&apos;ve made ordering your construction dumpster incredibly simple with our 24/7 online platform. Need a dumpster tomorrow? We&apos;ll make it happen. Need to adjust your pickup date? Just let us know. We work on your schedule, not the other way around.
            </p>
          </div>
        </Container>
      </section>

      {/* Safety & Efficiency Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              KEEP YOUR JOB SITE SAFE AND EFFICIENT
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              A properly managed construction site with adequate dumpster capacity keeps your crew safe, your project moving, and your client happy. It&apos;s one of the smartest investments you can make.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Clean Site Dumpsters provides the most comprehensive and dependable construction dumpster rentals in Nashville. Period. When you can&apos;t afford service failures, choose the company built by contractors who understand exactly what&apos;s at stake.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Props Section */}
      <section className="py-16 md:py-20">
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
              READY TO STREAMLINE YOUR JOB SITE?
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8">
              Order your construction dumpster today and experience the difference that contractor-focused service makes. Fast delivery, reliable pickup, transparent pricing.
            </p>
            <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
              ORDER YOUR DUMPSTER
            </AngledButton>
          </div>
        </Container>
      </section>
    </>
  )
}
