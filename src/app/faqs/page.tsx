import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'FAQs | Clean Site Dumpsters - Dumpster Rental Questions',
  description: 'Frequently asked questions about dumpster rental in Nashville. Pricing, sizes, delivery, prohibited items, and more.',
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

const faqCategories: FAQCategory[] = [
  {
    title: 'GENERAL QUESTIONS',
    items: [
      {
        question: 'What sizes of dumpsters do you offer?',
        answer: 'We offer three sizes: 10 yard, 15 yard, and 20 yard dumpsters. A 10 yard is perfect for small projects, 15 yard for medium renovations, and 20 yard for large construction projects or major cleanouts.',
      },
      {
        question: 'How long can I keep the dumpster?',
        answer: 'Our standard rental periods are 7, 14, or 30 days. If you need it longer, just let us know - we offer flexible extensions.',
      },
      {
        question: 'Do I need a permit to place a dumpster on my property?',
        answer: "If the dumpster is placed on your private property (driveway, yard), you typically don't need a permit. If you need to place it on a public street, you may need a permit from your local municipality. We're happy to guide you through this process.",
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve Nashville, Franklin, Brentwood, Hendersonville, Murfreesboro, Mount Juliet, and surrounding Middle Tennessee communities.',
      },
    ],
  },
  {
    title: 'PRICING & PAYMENT',
    items: [
      {
        question: 'How much does it cost to rent a dumpster?',
        answer: 'Our 10 yard dumpster starts at $349 for 7 days, 15 yard at $439, and 20 yard at $519. We offer transparent pricing with no hidden fees. Prices include delivery, pickup, and disposal up to weight limits.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, and online payments through our secure booking system.',
      },
      {
        question: 'Are there any additional fees I should know about?',
        answer: 'Our prices include delivery, pickup, and disposal within weight limits. Additional fees may apply for overweight loads, prohibited materials, or extended rental periods beyond your contract.',
      },
    ],
  },
  {
    title: 'DELIVERY & PICKUP',
    items: [
      {
        question: 'How quickly can you deliver a dumpster?',
        answer: "We offer same-day and next-day delivery in most cases. When you book online or call us, we'll confirm your delivery window.",
      },
      {
        question: 'Where will the dumpster be placed?',
        answer: "We'll work with you to find the best placement on your property - typically a driveway or flat, accessible area. Our drivers are experienced and will protect your property.",
      },
      {
        question: "What if I'm not home for delivery?",
        answer: "That's fine! As long as we have clear access to the placement location, we can deliver the dumpster even if you're not home. Just provide clear instructions when booking.",
      },
      {
        question: 'How do I schedule a pickup?',
        answer: "Simply call us at 615.717.2200 or contact us through our website when you're ready for pickup. We'll typically pick it up within 24 hours.",
      },
    ],
  },
  {
    title: 'LOADING & USE',
    items: [
      {
        question: 'What can I put in the dumpster?',
        answer: "You can dispose of most household items, construction debris, furniture, appliances, yard waste, and general junk. See our prohibited items list for restrictions.",
      },
      {
        question: "What CAN'T I put in the dumpster?",
        answer: "Prohibited items include: hazardous materials, chemicals, paint, tires, batteries, electronics (e-waste), appliances with refrigerant, and liquids. Contact us if you're unsure about specific items.",
      },
      {
        question: 'Can I overfill the dumpster?',
        answer: 'No - material must stay level with the top of the dumpster for safety during transport. Overfilled dumpsters cannot be picked up and may incur additional fees.',
      },
      {
        question: 'How much weight is included?',
        answer: 'Weight limits vary by dumpster size and rental period. Standard limits are included in your rental price. Additional weight may incur extra charges.',
      },
    ],
  },
  {
    title: 'PROJECT-SPECIFIC',
    items: [
      {
        question: 'What size dumpster do I need for my project?',
        answer: "10 yard: Small bathroom remodel, garage cleanout, small roof. 15 yard: Kitchen remodel, medium renovation, estate cleanout. 20 yard: New construction, large remodel, major demolition. Not sure? Call us - we'll help you choose the right size.",
      },
      {
        question: 'Can I use a dumpster for roofing projects?',
        answer: 'Yes! Dumpsters are perfect for roofing debris. A 15 or 20 yard dumpster typically handles most residential roofing projects.',
      },
      {
        question: 'Do you offer dumpsters for commercial projects?',
        answer: 'Absolutely! We work with contractors, businesses, and property managers on projects of all sizes.',
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl text-white mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Everything You Need to Know About Dumpster Rental
            </p>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <p className="font-body text-base md:text-lg leading-relaxed text-gray-700">
            Have questions about renting a dumpster? We&apos;ve compiled answers to the most common questions our customers ask. Don&apos;t see your question? Give us a call at{' '}
            <a href={siteConfig.business.phoneLink} className="text-[#D32F2F] font-semibold hover:underline">
              {siteConfig.business.phone}
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl text-black mb-6">
                {category.title}
              </h2>
              <div className="space-y-0">
                {category.items.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="border-b border-gray-200 py-4 group"
                  >
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-heading font-semibold text-lg md:text-xl pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-[#D32F2F] text-2xl font-light group-open:rotate-45 transition-transform flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 font-body text-base leading-relaxed text-gray-700">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gray-100 py-16">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl text-black mb-4">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 mb-8">
              Our team is here to help. Give us a call or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                CONTACT US
              </Link>
              <a
                href={siteConfig.business.phoneLink}
                className="inline-block bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-gray-900 transition-colors"
              >
                CALL {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
