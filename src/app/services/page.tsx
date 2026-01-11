import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services Nashville | Residential, Commercial, Construction',
  description: 'Choose the right dumpster service for your project. Residential, commercial, and construction dumpster rentals in Nashville with 24/7 online ordering.',
  keywords: 'dumpster rental Nashville, residential dumpster Nashville, commercial dumpster Nashville, construction dumpster Nashville, roll off dumpster services',
  openGraph: {
    title: 'Choose the Right Dumpster Service | Clean Site Dumpsters',
    description: 'Residential, commercial, or construction - we have the right dumpster for your project. Nashville dumpster rental services.',
    url: 'https://csdwaste.com/services',
    type: 'website',
  },
}

const serviceFAQs = [
  {
    question: 'Can I use a residential dumpster for a small construction project?',
    answer: 'Yes, for small projects like a bathroom remodel or deck replacement, a residential dumpster works great. However, if you have heavy materials like concrete, brick, or large amounts of roofing shingles, we recommend a construction dumpster designed for heavier debris.',
  },
  {
    question: "What's the difference between commercial and construction dumpsters?",
    answer: 'Commercial dumpsters are designed for ongoing business waste management with scheduled pickups, while construction dumpsters are built for heavy-duty debris from job sites. Construction dumpsters can handle concrete, roofing materials, and demolition debris that commercial dumpsters cannot.',
  },
  {
    question: 'Do you offer regular pickup schedules for businesses?',
    answer: 'Absolutely! We offer flexible scheduling options for commercial customers including weekly, bi-weekly, or monthly pickups. We can also arrange on-call service when you need it. Contact us to set up a schedule that works for your business.',
  },
  {
    question: 'How do I know which dumpster size I need?',
    answer: 'For small cleanouts or single-room projects, a 10-yard is usually sufficient. Medium projects like garage cleanouts or small renovations work well with 15-20 yard dumpsters. Large construction or whole-home renovations typically need 30+ yards. Give us a call and we can help you choose the right size.',
  },
]

const serviceIcons = {
  residential: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  commercial: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  construction: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
}

const serviceUseCases = {
  residential: [
    'Spring cleaning & decluttering',
    'Home renovations & remodels',
    'Moving & estate cleanouts',
    'Garage & basement cleanouts',
    'Yard waste & landscaping',
  ],
  commercial: [
    'Retail store cleanouts',
    'Office renovations',
    'Warehouse cleanups',
    'Property management',
    'Scheduled waste pickup',
  ],
  construction: [
    'New home construction',
    'Demolition projects',
    'Roofing & siding jobs',
    'Concrete & heavy debris',
    'Job site waste management',
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-wide text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Choose the Right Dumpster Service
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Residential, Commercial, or Construction – We&apos;ve Got You Covered
            </p>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Not sure which dumpster service you need? We offer three specialized solutions
              for different project types. Choose the one that matches your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Three Service Cards */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Card Header with Icon */}
                <div className="bg-[#D32F2F] p-8 text-center">
                  <div className="text-white mb-4 flex justify-center">
                    {serviceIcons[service.id as keyof typeof serviceIcons]}
                  </div>
                  <h2 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl text-white">
                    {service.name}
                  </h2>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Use Cases */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {serviceUseCases[service.id as keyof typeof serviceUseCases].map((useCase, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-body text-sm md:text-base text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sizes */}
                  <div className="mb-6">
                    <span className="font-body font-semibold text-sm uppercase tracking-wide text-gray-500">
                      Available Sizes
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded font-body"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm py-3 px-6 rounded hover:bg-gray-900 transition-colors w-full text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-4">
              Which Service Is Right for Me?
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Use this quick guide to find the perfect dumpster service for your project.
            </p>
          </div>

          {/* Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Residential */}
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D32F2F] transition-colors">
              <div className="text-[#D32F2F] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold uppercase tracking-wide text-xl text-black mb-3">
                Cleaning Out Your House?
              </h3>
              <p className="font-body text-base text-gray-600 mb-4">
                Spring cleaning, moving, renovations, or decluttering projects.
              </p>
              <Link
                href="/services/residential-dumpsters"
                className="font-heading font-semibold uppercase tracking-wide text-sm text-[#D32F2F] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-2"
              >
                Residential Dumpsters
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D32F2F] transition-colors">
              <div className="text-[#D32F2F] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold uppercase tracking-wide text-xl text-black mb-3">
                Managing Business Waste?
              </h3>
              <p className="font-body text-base text-gray-600 mb-4">
                Retail cleanouts, office renovations, or ongoing waste management.
              </p>
              <Link
                href="/services/commercial-dumpsters"
                className="font-heading font-semibold uppercase tracking-wide text-sm text-[#D32F2F] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-2"
              >
                Commercial Dumpsters
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Construction */}
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D32F2F] transition-colors">
              <div className="text-[#D32F2F] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold uppercase tracking-wide text-xl text-black mb-3">
                Running a Job Site?
              </h3>
              <p className="font-body text-base text-gray-600 mb-4">
                New builds, demolition, roofing, or heavy construction debris.
              </p>
              <Link
                href="/services/construction-dumpsters"
                className="font-heading font-semibold uppercase tracking-wide text-sm text-[#D32F2F] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-2"
              >
                Construction Dumpsters
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-4">
              Common Questions About Our Services
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={serviceFAQs} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Still Not Sure?
            </h2>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Give us a call and we&apos;ll help you choose the right dumpster for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={siteConfig.business.phoneLink}
                className="bg-white text-[#D32F2F] font-heading font-semibold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {siteConfig.business.phone}
              </a>
              <Link
                href="/contact"
                className="bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-gray-900 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
