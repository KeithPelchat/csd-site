import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { serviceAreas, getFeaturedAreas } from '@/config/areas'

export const metadata: Metadata = {
  title: 'Service Areas | Clean Site Dumpsters',
  description: 'Clean Site Dumpsters serves Nashville, Franklin, Hendersonville, and surrounding areas with reliable dumpster rental services.',
}

export default function ServiceAreasPage() {
  const featuredAreas = getFeaturedAreas()
  const otherAreas = serviceAreas.filter(area => !area.featured)

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Areas We Serve
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing reliable dumpster rental services throughout Middle Tennessee.
          </p>
        </div>

        {/* Featured Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#000000] mb-8 text-center">
            Featured Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAreas.map((area) => (
              <Link
                key={area.id}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#D32F2F] hover:shadow-xl transition-all duration-300"
              >
                {/* Map Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase rounded">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#000000] mb-2 group-hover:text-[#D32F2F] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {area.description}
                  </p>
                  <div className="flex items-center text-[#D32F2F] font-medium">
                    <span>View Details</span>
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
        </div>

        {/* Other Areas */}
        {otherAreas.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#000000] mb-8 text-center">
              Additional Service Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/service-areas/${area.slug}`}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D32F2F] hover:shadow-lg transition-all"
                >
                  <span className="font-medium text-[#000000]">{area.name}</span>
                  <svg className="w-5 h-5 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-[#000000] rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We may still be able to serve your location. Contact us today to check availability in your area.
          </p>
          <a
            href="tel:6157172200"
            className="inline-block px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold rounded transition-colors"
          >
            Call 615.717.2200
          </a>
        </div>
      </Container>
    </div>
  )
}
