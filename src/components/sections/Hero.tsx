import Image from 'next/image'
import { AngledButton } from '@/components/ui/AngledButton'

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-trucks.png"
          alt="Clean Site Dumpsters trucks"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight text-shadow-strong">
          Nashville&apos;s All-In-One Dumpster Rental Solution
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto uppercase tracking-wide text-shadow">
          Affordable Dumpster Rental in Nashville, Franklin, Hendersonville, &amp; Beyond — Just a Click Away
        </p>
        <AngledButton href="/contact">
          Reserve a Dumpster Now
        </AngledButton>
      </div>

      {/* Angled Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 md:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,120 L0,60 L1440,0 L1440,120 Z" />
        </svg>
      </div>
    </section>
  )
}
