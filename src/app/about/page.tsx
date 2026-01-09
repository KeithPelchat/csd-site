import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getAboutSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "About Clean Site Dumpsters | Nashville's Contractor-Built Dumpster Company",
  description: 'Founded by Nashville contractors in 2021. Locally owned dumpster rental service built on clear communication, reliability, and real job site experience.',
  keywords: 'Nashville dumpster rental, clean site dumpsters, local dumpster company Nashville, contractor dumpster service',
  alternates: {
    canonical: 'https://csdwaste.com/about',
  },
}

export default function AboutPage() {
  const schema = getAboutSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl text-black mb-4">
            Nashville&apos;s Most Reliable Dumpster Rental Company
          </h1>
          <p className="font-heading text-xl md:text-2xl text-[#D32F2F] font-semibold uppercase tracking-wide">
            Locally Owned. Always Available. Built by Contractors for Contractors.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Opening */}
          <div className="mb-12">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed text-center">
              Frustrated with dumpster companies that don&apos;t communicate? Tired of unreliable service when your project timeline depends on timely debris removal? You&apos;ve found the solution.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              Built from Real Job Site Experience
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Clean Site Dumpsters was born from real job site experience. Founded in 2021 by a Nashville contractor who spent a decade in construction and concrete management, we built this business because we experienced firsthand what happens when dumpster rental companies fail to deliver on their promises.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We saw projects delayed. We dealt with poor communication. We watched contractors struggle with waste management companies that didn&apos;t understand the urgency of keeping job sites clean and safe.
            </p>
            <p className="font-body text-base md:text-lg text-black font-bold leading-relaxed">
              So we created something better.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              As a locally owned Nashville business, we bring a contractor&apos;s perspective to every dumpster rental. Our founder&apos;s background spans construction, roofing, demolition, remodeling, and paving—which means we truly understand what you need before you even ask for it.
            </p>
          </div>

          {/* Communication Is Everything */}
          <div className="mb-12">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              Communication Is Everything
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Clear communication isn&apos;t optional—it&apos;s essential. That&apos;s why we&apos;ve built our entire business model around accessibility and responsiveness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <div className="font-heading text-[#D32F2F] text-3xl md:text-4xl font-bold tracking-wide mb-2">24/7</div>
                <div className="font-body text-gray-300">Online Ordering</div>
              </div>
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <div className="font-heading text-[#D32F2F] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">Instant</div>
                <div className="font-body text-gray-300">Pricing Available</div>
              </div>
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <div className="font-heading text-[#D32F2F] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">Your</div>
                <div className="font-body text-gray-300">Schedule, Not Ours</div>
              </div>
            </div>
          </div>

          {/* Your Time Matters */}
          <div className="mb-12">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              We know that when debris starts piling up on a job site or at your property, every hour counts. That&apos;s why we&apos;ve streamlined everything to get you the right dumpster fast—whether it&apos;s a residential cleanout, commercial property maintenance, or an active construction site.
            </p>
          </div>

          {/* Industries We Understand */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl lg:text-3xl text-black mb-6 text-center">
              Industries We Understand
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Construction', 'Roofing', 'Demolition', 'Remodeling', 'Paving', 'Residential'].map((industry) => (
                <div key={industry} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="bg-black text-white rounded-lg p-8 md:p-12 mb-12">
            <p className="font-body text-base md:text-lg text-gray-300 leading-relaxed text-center">
              If you need a roll-off dumpster in Nashville, TN, and you need it handled right, choose the company built by people who&apos;ve been in your shoes.
            </p>
            <p className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl text-white text-center mt-4">
              Choose Clean Site Dumpsters.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 mb-8">
              Order your dumpster online 24/7 or give us a call.
            </p>
            <AngledButton href="/contact">
              Get Your Dumpster Now
            </AngledButton>
          </div>
        </div>
      </Container>
      </div>
    </>
  )
}
