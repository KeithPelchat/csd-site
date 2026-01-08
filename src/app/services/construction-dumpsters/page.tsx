import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getServiceBySlug } from '@/config/services'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Nashville | Contractor-Grade Service',
  description: 'Heavy-duty construction dumpster rental built for real job sites. Fast ordering, flexible scheduling, reliable service. Built by contractors for contractors.',
  keywords: 'construction dumpster rental Nashville, contractor dumpster, job site dumpster, construction debris removal Nashville',
  alternates: {
    canonical: 'https://csdwaste.com/services/construction-dumpsters',
  },
}

export default function ConstructionDumpstersPage() {
  const service = getServiceBySlug('construction-dumpsters')
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

  const projectTypes = [
    'New home construction',
    'Commercial building projects',
    'Demolition and teardown',
    'Roofing replacements',
    'Major renovations and remodels',
    'Concrete and heavy debris',
    'Multi-unit developments',
  ]

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
      <div className="py-20">
        <Container>
          {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-[#D32F2F]">Services</Link>
            </li>
            <li>/</li>
            <li className="text-black font-medium">Construction Dumpsters</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Construction Dumpster Rental Built for Serious Job Sites
            </h1>
            <p className="text-xl text-[#D32F2F] font-medium mb-6">
              Heavy-Duty Waste Management for Contractors and Builders
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              On an active construction site, proper debris management isn&apos;t just convenient—it&apos;s critical for safety, efficiency, and staying on schedule. One overflowing dumpster or missed pickup can halt your entire crew&apos;s productivity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Clean Site Dumpsters provides construction dumpster rentals designed to handle the demands of real job sites, from residential remodels to large-scale commercial builds.
            </p>
            <AngledButton href="/contact">
              Get a Construction Quote
            </AngledButton>
          </div>

          {/* Service Image */}
          <div className="relative h-80 lg:h-auto rounded-lg overflow-hidden">
            <Image
              src="/images/services/construction.jpg"
              alt="Construction Dumpster Rental Nashville"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Contractor Focus Section */}
        <div className="bg-black text-white rounded-lg p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Our founder comes from your world—concrete, construction, job site management. We built this business specifically to solve the waste management problems contractors face every day. The result? Dumpster rental service that actually works the way your job site needs it to.
          </p>
        </div>

        {/* Project Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Built for Every Type of Construction Project
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether you&apos;re framing new homes, demolishing old structures, handling commercial renovations, or managing multi-phase construction projects, we provide roll-off dumpsters sized and scheduled to match your timeline.
          </p>

          <h3 className="text-xl font-bold text-black mb-4">Perfect for:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projectTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-[#D32F2F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fast Ordering Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Fast Ordering. Flexible Scheduling.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Time is money on job sites. That&apos;s why we&apos;ve made ordering your construction dumpster incredibly simple with our 24/7 online platform. Need a dumpster tomorrow? We&apos;ll make it happen. Need to adjust your pickup date? Just let us know. We work on your schedule, not the other way around.
          </p>
        </div>

        {/* Available Sizes */}
        <div className="mb-16">
          <div className="bg-black text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Available Sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service?.sizes.map((size) => (
                <div key={size} className="text-center p-6 border border-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-[#D32F2F] mb-2">{size}</div>
                  <div className="text-gray-400">Dumpster</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Starting at</p>
              <p className="text-4xl font-bold text-[#D32F2F]">
                ${service?.pricing.starting}<span className="text-lg text-gray-400">/{service?.pricing.unit}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            A properly managed construction site with adequate dumpster capacity keeps your crew safe, your project moving, and your client happy. It&apos;s one of the smartest investments you can make.
          </p>
        </div>

        {/* Closing Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <p className="text-xl text-black font-semibold text-center">
            Clean Site Dumpsters provides the most comprehensive and dependable construction dumpster rentals in Nashville. Period. When you can&apos;t afford service failures, choose the company built by contractors who understand exactly what&apos;s at stake.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[#D32F2F] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Keep Your Job Site Clean &amp; Safe
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Order your construction dumpster online 24/7. Fast delivery, reliable pickup.
          </p>
          <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
            Order Your Dumpster Now
          </AngledButton>
        </div>
      </Container>
      </div>
    </>
  )
}
