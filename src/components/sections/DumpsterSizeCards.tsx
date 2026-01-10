'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

interface DumpsterCard {
  id: string
  size: string
  price: number
  image: string
  features: string[]
  popular?: boolean
}

const dumpsterCards: DumpsterCard[] = [
  {
    id: '10-yard',
    size: '10 YD',
    price: 349,
    image: '/images/dumpsters/10-yard.jpg',
    features: [
      'Medium/large kitchen or bath remodel',
      'Large-scale Move-ins, move-outs',
      'Community projects',
      'Flood or fire restoration',
      '1500 sq ft of single layer roof shingles',
    ],
  },
  {
    id: '15-yard',
    size: '15 YD',
    price: 439,
    image: '/images/dumpsters/15-yard.jpg',
    popular: true,
    features: [
      'Home Renovation',
      'Large-scale Move-ins, move-outs',
      'Community projects',
      'Flood or fire restoration',
      '2500 sq ft of single layer roof shingles',
    ],
  },
  {
    id: '20-yard',
    size: '20 YD',
    price: 519,
    image: '/images/dumpsters/20-yard.jpg',
    features: [
      'Large scale home Renovations or New construction',
      'Flood or Fire restoration',
      'Community projects',
      '3500 Sqft of single layer roof shingles',
    ],
  },
]

function FlipCard({ card }: { card: DumpsterCard }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-[480px] lg:h-[520px] cursor-pointer group"
      style={{ perspective: '1000px', WebkitPerspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-600 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transitionDuration: '0.6s',
        }}
      >
        {/* FRONT OF CARD */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden border-4 border-[#D32F2F] shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg) translateZ(1px)',
            WebkitTransform: 'rotateY(0deg) translateZ(1px)',
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={card.image}
              alt={`${card.size} Roll Off Dumpster`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Front Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            {/* Most Popular Badge */}
            {card.popular && (
              <div className="absolute top-4 left-0 right-0 flex justify-center">
                <span className="font-heading bg-[#D32F2F] text-white text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full shadow-lg">
                  Most Popular Size
                </span>
              </div>
            )}

            {/* Size */}
            <div className="font-heading text-6xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              {card.size}
            </div>

            {/* Subtitle */}
            <div className="font-heading text-white/90 font-medium uppercase tracking-wide mt-3 text-center">
              Roll Off Dumpster ${card.price}
            </div>

            {/* Popular text below */}
            {card.popular && (
              <div className="font-body text-white/70 text-sm mt-4">
                Most Popular Size
              </div>
            )}

            {/* Click hint */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="font-body text-white/60 text-sm flex items-center justify-center gap-2 group-hover:text-white/90 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Click for details
              </span>
            </div>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-[#D32F2F] border-4 border-[#D32F2F] shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(0px)',
            WebkitTransform: 'rotateY(180deg) translateZ(0px)',
          }}
        >
          <div className="h-full flex flex-col p-4 md:p-6">
            {/* Size & Price */}
            <div className="text-center mb-3 md:mb-4 shrink-0">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                {card.size} Roll Off Dumpster
              </h3>
              <div className="font-heading text-base md:text-lg text-white/90 font-medium uppercase tracking-wide mt-1">
                ${card.price}
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-2 text-white flex-1 min-h-0">
              {card.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white/80 mt-0.5 shrink-0">•</span>
                  <span className="font-body text-sm md:text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <Link
              href="/contact"
              className="bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm py-3 px-6 rounded hover:bg-gray-900 transition-colors w-full text-center block mt-4 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              Order Now
            </Link>

            {/* Click to flip back hint */}
            <div className="text-center mt-2 shrink-0">
              <span className="font-body text-white/60 text-xs">
                Click to flip back
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DumpsterSizeCards() {
  return (
    <section className="py-20 bg-white" aria-label="Dumpster Sizes">
      <Container>
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black">
            Residential &amp; Commercial Dumpster Services
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-5xl mx-auto mb-12">
          <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed text-center">
            Clean Site Dumpsters was founded with the idea of providing customers with the absolute best experience in residential &amp; commercial dumpster rental. Whether you&apos;re a homeowner or contractor, we have tailored our business to fit your needs. Our affordable dumpsters are ideal for any project, from small to large; we offer an array of sizes with 10-yard, 15-yard, and 20-yard roll off dumpsters. Rent a dumpster for your Nashville construction project! We have you covered from home clean outs, renovation projects, demolition, and new builds. It doesn&apos;t stop there, our trucks are purposely designed to fit in tight spaces, allowing us to deliver a dumpster in some places that others can&apos;t. We are able to maneuver into places with zero lot lines, side yards, alleyways, or even a garage to keep your neighbors happy. In Nashville, our dumpster rental costs range from $349 – $519, depending on the size you need.
          </p>
        </div>

        {/* Three Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {dumpsterCards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="font-heading inline-block bg-black text-white py-4 px-10 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-900 transition-colors shadow-lg"
          >
            Nashville Dumpster Rentals
          </Link>
        </div>
      </Container>
    </section>
  )
}
