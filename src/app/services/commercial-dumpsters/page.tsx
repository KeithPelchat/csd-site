import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getServiceBySlug } from '@/config/services'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Nashville | Business Waste Management',
  description: 'Reliable commercial dumpster rental for Nashville businesses. Apartment complexes, restaurants, retail, auto shops & more. Professional waste management you can trust.',
  keywords: 'commercial dumpster rental Nashville, business dumpster rental, waste management Nashville, commercial waste removal',
  alternates: {
    canonical: 'https://csdwaste.com/services/commercial-dumpsters',
  },
}

export default function CommercialDumpstersPage() {
  const service = getServiceBySlug('commercial-dumpsters')
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

  const industries = [
    'Apartment complexes and property management',
    'Retail stores and shopping centers',
    'Auto repair and body shops',
    'Restaurants, bars, and hospitality',
    'Coffee shops and cafes',
    'Office buildings and warehouses',
    'Healthcare facilities',
    'And countless other Nashville businesses',
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
            <li className="text-black font-medium">Commercial Dumpsters</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Commercial Waste Management That Keeps Your Business Running
            </h1>
            <p className="text-xl text-[#D32F2F] font-medium mb-6">
              Reliable Dumpster Rentals for Nashville Businesses
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your business can&apos;t afford waste management headaches. Overflowing trash creates safety hazards. Debris piling up makes a terrible impression on customers. And waiting days for a pickup throws your entire operation off schedule.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Clean Site Dumpsters provides commercial dumpster rental solutions that keep your Nashville business running smoothly—without the drama.
            </p>
            <AngledButton href="/contact">
              Get a Commercial Quote
            </AngledButton>
          </div>

          {/* Service Image */}
          <div className="relative h-80 lg:h-auto rounded-lg overflow-hidden">
            <Image
              src="/images/services/commercial.jpg"
              alt="Commercial Dumpster Rental Nashville"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            We take time to understand your business operations, assess your waste volume, and recommend the ideal dumpster size and pickup schedule. Then we deliver consistent, reliable service so waste removal becomes one less thing you have to manage.
          </p>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Dependable Service Across Industries
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Business owners trust Clean Site Dumpsters because we show up when promised and handle waste removal professionally every single time. Whether you&apos;re managing ongoing commercial waste or handling a one-time renovation project, we&apos;ve got the capacity and reliability your business demands.
          </p>

          <h3 className="text-xl font-bold text-black mb-4">Industries We Serve:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 p-3 bg-black text-white rounded-lg">
                <svg className="w-5 h-5 text-[#D32F2F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When you partner with Clean Site Dumpsters for commercial waste management, you&apos;ll know exactly what you&apos;re paying from day one. No hidden fees buried in invoices. No surprise charges for delivery or fuel. Just straightforward, honest pricing for professional Nashville dumpster rental services.
          </p>

          {/* Available Sizes */}
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

        {/* Value Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            We&apos;re not the cheapest option—we&apos;re the most reliable one. And for businesses that can&apos;t afford downtime or service failures, that makes all the difference.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[#D32F2F] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Keep Your Business Running Smoothly
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Clean Site Dumpsters for all your commercial waste management needs.
          </p>
          <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
            Request Commercial Service
          </AngledButton>
        </div>
      </Container>
      </div>
    </>
  )
}
