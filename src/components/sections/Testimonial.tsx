'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

interface TestimonialData {
  quote: string
  author: string
}

const testimonials: TestimonialData[] = [
  {
    quote: "22 years in a home you accumulate lots of junk. These guys are awesome, super easy to work with. I described what I was trying to remove, I knew nothing about dumpsters or what size I needed I explained how much junk I was trying to get rid of. They are on point, they suggested the size I'd need, they were accurate if ever I need a dumpster this is the place I'm going to tell all my friends and family too! Thank you so much.",
    author: "Amber W"
  },
  {
    quote: "Rented this dumpster online. Absolutely had no problems or issues. Paid with a credit card, dropped a note as to where the dumpster was to be placed and wa-la, it was there the next day. Perfect size. I would highly recommend this company. Very reasonable cost and very professional service. A+++",
    author: "Charna E"
  },
  {
    quote: "One of the most professional businesses I've worked with. Pricing was upfront clear, ordering was easy, and there was great communication through texting. The driver was friendly and professional. I was very happy to be able to find a 20 yard dumpster available for my renovation. I would 100% use again and recommend.",
    author: "Jack J"
  },
  {
    quote: "Britt was exceptional! I needed to extended the week we were allocated. Was no problem, the extension was granted immediately. I then found myself in need of a second dumpster. Dumpster was delivered in a matter of a couple of hours and sat exactly where I had requested. The whole process was handled with ease, promptness and professionalism. A wonderful company to do business!",
    author: "Debbi D"
  },
  {
    quote: "Great, very professional. I used them three times they were always on time, made sure to let me know when dropping the dumpster off and giving me a heads up two days before they pick it up. I also asked them to come pick it up early two times and they came the next morning. Highly recommend them!!!",
    author: "Chadi H"
  },
  {
    quote: "We rented a dumpster during our home renovation and really had a great experience with this company. The drop off was hassle free and they were great at communicating each week when we needed to extend and keep it longer than expected. Super flexible, accommodating and very, very friendly & professional. Definitely recommend!!!!",
    author: "Sandi W"
  },
  {
    quote: "We were working between two different companies for dumpsters to get the sizes we needed on our job sites. Clean Site Dumpsters was able to take care of it all - and they're faster and more responsive than anyone else we've worked with.",
    author: "Sheri H"
  }
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index === activeIndex || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [activeIndex, isTransitioning])

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % testimonials.length
    goToSlide(next)
  }, [activeIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length
    goToSlide(prev)
  }, [activeIndex, goToSlide])

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const testimonial = testimonials[activeIndex]

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      aria-label="Customer Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction/construction-4.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <Container>
        <div className="relative text-center max-w-[900px] mx-auto">
          {/* Star Rating */}
          <div className="flex justify-center gap-3 mb-10">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star text-[#D32F2F] text-4xl md:text-5xl" />
            ))}
          </div>

          {/* Quote with Fade Transition */}
          <div className="relative min-h-[200px] md:min-h-[180px] flex items-center justify-center">
            <blockquote
              className={`max-w-[800px] mx-auto transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="font-body text-lg md:text-2xl lg:text-[26px] text-white leading-[1.6] font-normal">
                {testimonial.quote}
              </p>
            </blockquote>
          </div>

          {/* Author */}
          <cite
            className={`font-heading block text-lg md:text-xl text-gray-300 not-italic mt-8 uppercase tracking-wide transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            — {testimonial.author}
          </cite>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 md:-mx-16">
            <button
              onClick={prevSlide}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#D32F2F] transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-chevron-left text-white text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#D32F2F] transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-chevron-right text-white text-lg" />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-[10px] mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#D32F2F]'
                    : 'bg-transparent border-2 border-gray-500 hover:border-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
