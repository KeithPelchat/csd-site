import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getServiceBySlug, getAllServiceSlugs } from '@/config/services'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.name} | Clean Site Dumpsters`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
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
            <li className="text-[#000000] font-medium">{service.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              {service.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {service.description}
            </p>

            {/* Available Sizes */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#000000] mb-4">Available Sizes</h2>
              <div className="flex flex-wrap gap-3">
                {service.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-6 py-3 bg-[#000000] text-white font-medium rounded-lg"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#000000] mb-4">What&apos;s Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-[#D32F2F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <AngledButton href="/contact">
              Get a Free Quote
            </AngledButton>
          </div>

          {/* Right Column - Pricing Card */}
          <div>
            <div className="bg-[#000000] text-white rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Pricing</h3>

              <div className="mb-6">
                <span className="text-gray-400">Starting at</span>
                <div className="text-5xl font-bold text-[#D32F2F]">
                  ${service.pricing.starting}
                  <span className="text-lg text-gray-400 font-normal">/{service.pricing.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Delivery included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pickup included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Disposal fees included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible rental periods
                </li>
              </ul>

              <a
                href="tel:6157172200"
                className="block w-full py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-center font-bold rounded transition-colors"
              >
                Call 615.717.2200
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
