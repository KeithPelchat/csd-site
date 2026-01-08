import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { services } from '@/config/services'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services Nashville | Clean Site Dumpsters',
  description: 'Residential, commercial, and construction dumpster rental services in Nashville. Roll off dumpsters with 24/7 online ordering and scheduling.',
  keywords: 'dumpster rental Nashville, clean site dumpster Nashville, Nashville dumpster rental services, roll off dumpster Nashville',
}

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Dumpster Rental Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From small home cleanouts to large construction projects, we have the right dumpster for every job. Order online 24/7!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-3">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Sizes */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Available Sizes
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">Starting at</span>
                    <div className="text-2xl font-bold text-[#D32F2F]">
                      ${service.pricing.starting}
                      <span className="text-sm text-gray-500 font-normal">/{service.pricing.unit}</span>
                    </div>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block px-6 py-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-medium rounded transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
