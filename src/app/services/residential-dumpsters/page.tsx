import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { dumpsterSizes } from '@/config/dumpsters'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental Nashville | Clean Site Dumpsters',
  description: 'Simple residential dumpster rental in Nashville. Perfect for spring cleaning, renovations, and home projects. Choose your size, we deliver & haul away. Starting at $349.',
  keywords: 'residential dumpster rental nashville, home cleanout dumpster, renovation dumpster, nashville junk removal',
  alternates: {
    canonical: 'https://csdwaste.com/services/residential-dumpsters',
  },
}

export default function ResidentialDumpstersPage() {
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
    'Home renovation debris',
    'Moving day purges',
    'Neighborhood cleanup events',
    'Garage and attic cleanouts',
    'Landscaping projects',
    'Estate cleanouts',
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

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/construction/construction-4.jpg"
            alt="Residential dumpster rental in Nashville driveway"
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
              RESIDENTIAL DUMPSTER RENTAL MADE SIMPLE
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              From Spring Cleaning to Full Home Renovations
            </p>
            <AngledButton href="/contact">
              RESERVE YOUR DUMPSTER
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
              <li className="text-gray-900 font-medium" aria-current="page">Residential Dumpsters</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Planning a home cleanout, renovation, or major decluttering project? The hardest part isn&apos;t deciding what to toss—it&apos;s figuring out what to do with all that junk once you&apos;ve decided. That&apos;s exactly where a residential dumpster rental in Nashville changes everything.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Skip the multiple trips to the dump. Forget about cramming everything into your regular trash pickup. Instead, have a spacious roll-off dumpster delivered right to your driveway, fill it at your own pace, and let us haul it all away when you&apos;re done.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Prop Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-8">
              STRESS-FREE JUNK REMOVAL FOR HOMEOWNERS
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-10">
              Choose the container size that matches your project scope. Load it up throughout the week without rushing. Then simply schedule your pickup and we&apos;ll handle the disposal—it&apos;s that straightforward. No complicated logistics, no stress, just clean results.
            </p>

            {/* Perfect For List */}
            <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-6">
              PERFECT FOR:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perfectFor.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#D32F2F] flex-shrink-0"
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
                  <span className="font-body text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Sizing Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              RIGHT-SIZED SOLUTIONS FOR EVERY PROJECT
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re clearing out a single room or gutting an entire house, Clean Site Dumpsters has the residential rental solution that fits. Our team helps you select the ideal size based on your project scope, so you&apos;re not paying for space you don&apos;t need—or running out of room halfway through.
            </p>
          </div>

          {/* Dumpster Size Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dumpsterSizes.map((dumpster, index) => (
              <div
                key={dumpster.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${
                  index === 1 ? 'border-[#D32F2F] relative' : 'border-transparent'
                }`}
              >
                {/* Most Popular Badge */}
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-xs px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                {/* Dumpster Image */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={dumpster.image}
                    alt={`${dumpster.name} for residential projects`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl text-black mb-2">
                    {dumpster.size} DUMPSTER
                  </h3>
                  <p className="font-body text-sm text-gray-500 mb-4">
                    {dumpster.capacity}
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

                  {/* Best For */}
                  <div className="mb-6">
                    <p className="font-body text-xs text-gray-500 uppercase tracking-wide mb-2">Best For:</p>
                    <ul className="space-y-1">
                      {dumpster.best_for.map((use) => (
                        <li key={use} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-[#D32F2F] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-body text-sm text-gray-700">{use}</span>
                        </li>
                      ))}
                    </ul>
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-6">
              READY TO RECLAIM YOUR SPACE?
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8">
              Order your residential dumpster online now and get your project started this week.
            </p>
            <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
              GET STARTED NOW
            </AngledButton>
          </div>
        </Container>
      </section>
    </>
  )
}
