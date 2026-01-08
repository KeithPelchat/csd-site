import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { services } from '@/config/services'

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Our Dumpster Rental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From home cleanouts to major construction projects, we have the right dumpster for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#D32F2F] hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                {/* Service Name */}
                <h3 className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#D32F2F] transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Sizes */}
                <div className="mb-6">
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

                {/* Pricing */}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-[#D32F2F]">
                    ${service.pricing.starting}
                  </span>
                  <span className="text-sm text-gray-500">/{service.pricing.unit}</span>
                </div>

                {/* Learn More Arrow */}
                <div className="mt-6 flex items-center text-[#D32F2F] font-medium">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
