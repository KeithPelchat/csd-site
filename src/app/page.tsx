import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { DumpsterSizeCards } from '@/components/sections/DumpsterSizeCards'
import { AffordableService } from '@/components/sections/AffordableService'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CallOrClickCTA } from '@/components/sections/CallOrClickCTA'
import { Testimonial } from '@/components/sections/Testimonial'
import { ConstructionPhotos } from '@/components/sections/ConstructionPhotos'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { getHomepageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Nashville TN | Roll Off Dumpsters | Clean Site Dumpsters',
  description: 'Nashville dumpster rental made easy. 10, 15, 20 & 30 yard roll-off dumpsters for residential, commercial & construction. 24/7 online ordering, transparent pricing, next-day delivery. Call 615-717-2200.',
  keywords: [
    'dumpster rental Nashville',
    'Nashville dumpster rental',
    'roll off dumpster Nashville',
    'dumpster rental Nashville TN',
    'rent a dumpster Nashville',
    'construction dumpster Nashville',
    'residential dumpster rental Nashville',
    'commercial dumpster Nashville',
    'cheap dumpster rental Nashville',
    'dumpster rental near me Nashville',
    'waste management Nashville',
    'junk removal Nashville',
    '10 yard dumpster Nashville',
    '20 yard dumpster Nashville',
    '30 yard dumpster Nashville',
  ].join(', '),
  openGraph: {
    title: 'Dumpster Rental Nashville TN | Clean Site Dumpsters',
    description: 'Nashville dumpster rental made easy. Roll-off dumpsters for any project. 24/7 online ordering, transparent pricing, next-day delivery available.',
    url: 'https://csdwaste.com',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Site Dumpsters - Nashville Dumpster Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Nashville TN | Clean Site Dumpsters',
    description: 'Nashville dumpster rental made easy. 24/7 online ordering, transparent pricing, next-day delivery.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://csdwaste.com',
  },
}

const homeFAQs = [
  {
    question: 'What size dumpster do I need for my project?',
    answer: 'For small cleanouts and single-room renovations, a 10-yard dumpster is typically sufficient. Medium projects like garage cleanouts or small roofing jobs work well with a 15-20 yard dumpster. Large construction or whole-home renovations usually require a 30-yard dumpster. Contact us for a free consultation to determine the right size for your specific project.',
  },
  {
    question: 'How much does dumpster rental cost in Nashville?',
    answer: 'Dumpster rental prices in Nashville start at $350 for a 10-yard dumpster and vary based on size, rental duration, and debris type. Our pricing is transparent with no hidden fees. All rentals include delivery, pickup, and disposal within the weight limit.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'Standard rental periods are 7 days, but we offer flexible scheduling to match your project timeline. Need it longer? Extensions are available at affordable daily rates. Just let us know your needs and we will work with your schedule.',
  },
  {
    question: 'What can I put in a roll-off dumpster?',
    answer: 'Most household items, construction debris, yard waste, furniture, and general junk can go in our dumpsters. Prohibited items include hazardous materials, batteries, tires, appliances with freon, and certain electronics. Contact us if you are unsure about specific items.',
  },
  {
    question: 'Do you offer same-day or next-day delivery?',
    answer: 'Yes! We offer next-day delivery for most orders placed before 2 PM. Same-day delivery may be available depending on location and availability. Our 24/7 online ordering makes it easy to schedule your delivery at your convenience.',
  },
]

export default function HomePage() {
  const schema = getHomepageSchema()

  return (
    <>
      {/* Comprehensive JSON-LD Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Your Trusted Partner for Dumpster Rental in Nashville
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Looking for reliable dumpster rental in Nashville that won&apos;t let you down? Clean Site Dumpsters delivers the perfect waste removal solution for every project—from weekend home cleanouts to major construction site debris management. Whether you&apos;re tackling a small renovation or managing a commercial job site, we&apos;ve got the right-sized roll-off dumpster to get the job done.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Trust Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Available When You Need Us Most
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              Dealing with junk and debris shouldn&apos;t be complicated. That&apos;s why Clean Site Dumpsters makes waste removal simple with transparent upfront pricing, 24/7 online ordering, and flexible scheduling that works around your timeline.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              No surprises. No hidden fees. Just dependable Nashville dumpster rental services you can count on when you need them most.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Promise Section */}
      <section className="py-16 bg-black text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Clean Site Dumpsters Difference
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Here&apos;s our promise: We show up on time with the right equipment sized for your specific needs. Then we go the extra mile to ensure your project runs smoothly from drop-off to pickup.
            </p>
            <p className="text-xl text-white font-medium">
              That&apos;s what sets us apart as Nashville&apos;s premier dumpster rental service.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Dumpster Size Cards */}
      <DumpsterSizeCards />

      {/* 6. Affordable Service Section */}
      <AffordableService />

      {/* 7. How It Works (5 Steps) */}
      <HowItWorks />

      {/* 8. Call or Click CTA */}
      <CallOrClickCTA />

      {/* 9. Testimonial */}
      <Testimonial />

      {/* 10. Construction Photos */}
      <ConstructionPhotos />

      {/* 11. Final CTA Section */}
      <section className="py-20 bg-[#D32F2F]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Order your dumpster online in seconds. Available 24/7.
            </p>
            <AngledButton href="/contact" className="bg-black hover:bg-gray-900">
              Reserve Your Dumpster Now
            </AngledButton>
          </div>
        </Container>
      </section>
    </>
  )
}
