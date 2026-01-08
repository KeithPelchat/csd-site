import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getServiceBySlug } from '@/config/services'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental Nashville | Home Cleanouts & Renovations',
  description: 'Simple residential dumpster rental in Nashville. Perfect for spring cleaning, renovations, and home projects. Choose your size, we deliver & haul away.',
  keywords: 'residential dumpster rental Nashville, home dumpster rental, junk removal Nashville, roll off dumpster home',
  alternates: {
    canonical: 'https://csdwaste.com/services/residential-dumpsters',
  },
}

export default function ResidentialDumpstersPage() {
  const service = getServiceBySlug('residential-dumpsters')
  const schema = getServiceSchema(
    'Residential Dumpster Rental',
    'Residential Dumpster Rental Nashville',
    'Residential dumpster rental services in Nashville for home cleanouts, renovations, moving, garage cleanouts, and DIY projects. 10, 15, 20, and 30 yard dumpsters available.'
  )
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Residential Dumpsters', url: '/services/residential-dumpsters' },
  ])

  const perfectFor = [
    'Spring cleaning marathons',
    'Garage and attic cleanouts',
    'Home renovation debris',
    'Landscaping projects',
    'Moving day purges',
    'Estate cleanouts',
    'Neighborhood cleanup events',
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
            <li className="text-black font-medium">Residential Dumpsters</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Residential Dumpster Rental Made Simple
            </h1>
            <p className="text-xl text-[#D32F2F] font-medium mb-6">
              From Spring Cleaning to Full Home Renovations
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Planning a home cleanout, renovation, or major decluttering project? The hardest part isn&apos;t deciding what to toss—it&apos;s figuring out what to do with all that junk once you&apos;ve decided. That&apos;s exactly where a residential dumpster rental in Nashville changes everything.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Skip the multiple trips to the dump. Forget about cramming everything into your regular trash pickup. Instead, have a spacious roll-off dumpster delivered right to your driveway, fill it at your own pace, and let us haul it all away when you&apos;re done.
            </p>
            <AngledButton href="/contact">
              Reserve Your Dumpster
            </AngledButton>
          </div>

          {/* Service Image */}
          <div className="relative h-80 lg:h-auto rounded-lg overflow-hidden">
            <Image
              src="/images/services/residential.jpg"
              alt="Residential Dumpster Rental Nashville"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stress-Free Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Stress-Free Junk Removal for Homeowners
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Choose the container size that matches your project scope. Load it up throughout the week without rushing. Then simply schedule your pickup and we&apos;ll handle the disposal—it&apos;s that straightforward. No complicated logistics, no stress, just clean results.
          </p>

          {/* Perfect For List */}
          <h3 className="text-xl font-bold text-black mb-4">Perfect for:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {perfectFor.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#D32F2F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right-Sized Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Right-Sized Solutions for Every Project
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether you&apos;re clearing out a single room or gutting an entire house, Clean Site Dumpsters has the residential rental solution that fits. Our team helps you select the ideal size based on your project scope, so you&apos;re not paying for space you don&apos;t need—or running out of room halfway through.
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

        {/* CTA Section */}
        <div className="bg-[#D32F2F] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Reclaim Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Order your residential dumpster online now and get your project started this week.
          </p>
          <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
            Get Started Now
          </AngledButton>
        </div>
      </Container>
      </div>
    </>
  )
}
