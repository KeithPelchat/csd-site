import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getAreaBySlug, getAllAreaSlugs } from '@/config/areas'
import { services } from '@/config/services'
import { getServiceAreaSchema, getBreadcrumbSchema } from '@/lib/schema'

interface ServiceAreaPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)

  if (!area) {
    return { title: 'Area Not Found' }
  }

  return {
    title: `Dumpster Rental in ${area.name} TN | Clean Site Dumpsters`,
    description: `Professional dumpster rental services in ${area.name}, Tennessee. ${area.description} Same-day delivery, 24/7 online ordering. Call 615-717-2200.`,
    keywords: `dumpster rental ${area.name}, ${area.name} dumpster rental, roll off dumpster ${area.name}, construction dumpster ${area.name} TN`,
    alternates: {
      canonical: `https://csdwaste.com/service-areas/${slug}`,
    },
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params
  const area = getAreaBySlug(slug)

  if (!area) {
    notFound()
  }

  const schema = getServiceAreaSchema(
    area.name,
    area.coordinates.lat.toString(),
    area.coordinates.lng.toString()
  )
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: area.name, url: `/service-areas/${slug}` },
  ])

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
                <Link href="/service-areas" className="hover:text-[#D32F2F]">Service Areas</Link>
              </li>
              <li>/</li>
              <li className="text-[#000000] font-medium">{area.name}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-[#000000] rounded-lg p-8 md:p-12 mb-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dumpster Rental in {area.name}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {area.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AngledButton href="/contact">
                  Get a Free Quote
                </AngledButton>
                <a
                  href="tel:6157172200"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-[#000000] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  615.717.2200
                </a>
              </div>
            </div>
          </div>

          {/* Services Available */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#000000] mb-8">
              Services Available in {area.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-[#D32F2F] hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-[#000000] mb-2 group-hover:text-[#D32F2F] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <span className="text-xl font-bold text-[#D32F2F]">
                      ${service.pricing.starting}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ZIP Codes */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#000000] mb-4">
              ZIP Codes We Serve in {area.name}
            </h2>
            <p className="text-gray-600 mb-6">
              We provide dumpster rental services to the following ZIP codes in {area.name}:
            </p>
            <div className="flex flex-wrap gap-2">
              {area.zip_codes.map((zip) => (
                <span
                  key={zip}
                  className="inline-block px-4 py-2 bg-white border border-gray-200 rounded text-gray-700 font-mono"
                >
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
