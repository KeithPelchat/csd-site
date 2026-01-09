'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Photo {
  src: string
  alt: string
}

const photos: Photo[] = [
  {
    src: '/images/construction/construction-1.jpg',
    alt: 'Dumpster at active construction site in Nashville'
  },
  {
    src: '/images/construction/construction-2.jpg',
    alt: 'Roll-off dumpster for residential renovation project'
  },
  {
    src: '/images/construction/construction-3.jpg',
    alt: 'Construction debris being loaded into dumpster'
  },
  {
    src: '/images/construction/construction-4.jpg',
    alt: 'Dumpster delivery at commercial job site'
  },
  {
    src: '/images/construction/construction-5.jpg',
    alt: 'Heavy-duty dumpster for demolition project'
  },
  {
    src: '/images/construction/construction-6.jpg',
    alt: 'Clean Site Dumpsters at residential construction'
  },
  {
    src: '/images/construction/construction-7.jpg',
    alt: 'Dumpster rental for roofing project'
  },
  {
    src: '/images/construction/construction-8.jpg',
    alt: 'Construction waste management Nashville'
  },
  {
    src: '/images/construction/construction-9.jpg',
    alt: 'Job site dumpster rental service'
  }
]

export function ConstructionPhotos() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % photos.length)
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, nextImage, prevImage])

  return (
    <section className="py-20 bg-white" aria-label="Construction Dumpster Rentals">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black mb-6">
            Nashville, TN Construction Dumpster Rentals
          </h2>
          <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            On an active construction site, proper debris management isn&apos;t just convenient—it&apos;s
            critical for safety, efficiency, and staying on schedule. One overflowing dumpster or
            missed pickup can halt your entire crew&apos;s productivity. Clean Site Dumpsters provides
            construction dumpster rentals designed to handle the demands of real job sites, from
            residential remodels to large-scale commercial builds.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="mb-12 construction-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={true}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="construction-swiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() => openLightbox(index)}
                  className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-lg group w-full cursor-pointer"
                  aria-label={`View ${photo.alt} in lightbox`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-magnifying-glass-plus text-[#D32F2F] text-xl" />
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center">
          <AngledButton href="/services/construction-dumpsters">
            Learn More About Construction Services
          </AngledButton>
        </div>
      </Container>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <i className="fa-solid fa-xmark text-white text-2xl" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-[#D32F2F] rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left text-white text-xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-[#D32F2F] rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right text-white text-xl" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="font-heading absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg tracking-wide">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`w-16 h-12 relative rounded overflow-hidden transition-all ${
                  index === lightboxIndex
                    ? 'ring-2 ring-[#D32F2F] opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .construction-carousel .swiper-button-next,
        .construction-carousel .swiper-button-prev {
          color: #D32F2F;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .construction-carousel .swiper-button-next:after,
        .construction-carousel .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .construction-carousel .swiper-button-next:hover,
        .construction-carousel .swiper-button-prev:hover {
          background: #D32F2F;
          color: white;
        }

        .construction-carousel .swiper-pagination {
          position: relative;
          margin-top: 24px;
        }

        .construction-carousel .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }

        .construction-carousel .swiper-pagination-bullet-active {
          background: #D32F2F;
        }
      `}</style>
    </section>
  )
}
