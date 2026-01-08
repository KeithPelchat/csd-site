import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const serviceLinks = [
  { name: 'Commercial Construction', icon: 'fa-building', href: '/services/commercial-dumpsters' },
  { name: 'Roofing', icon: 'fa-home', href: '/services/construction-dumpsters' },
  { name: 'Residential & DIY', icon: 'fa-hammer', href: '/services/residential-dumpsters' },
  { name: 'Yard & Landscaping', icon: 'fa-tree', href: '/services/residential-dumpsters' },
  { name: 'Demolition', icon: 'fa-hard-hat', href: '/services/construction-dumpsters' }
]

export function AffordableService() {
  return (
    <section className="relative py-20" aria-label="Affordable Dumpster Service">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction/construction-6.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-6">
              Nashville&apos;s Affordable Dumpster Service
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Looking for reliable dumpster rental in Nashville that won&apos;t let you down?
              Clean Site Dumpsters delivers the perfect waste removal solution for every project—from
              weekend home cleanouts to major construction site debris management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We show up on time with the right equipment sized for your specific needs.
              Then we go the extra mile to ensure your project runs smoothly from drop-off to pickup.
              That&apos;s what sets us apart as Nashville&apos;s premier dumpster rental service.
            </p>
          </div>

          {/* Right Column - Service Types */}
          <div className="bg-black/50 rounded-lg p-8">
            <div className="space-y-4">
              {serviceLinks.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex items-center gap-5 p-3 rounded-lg transition-colors hover:bg-[#D32F2F]"
                >
                  <div className="w-14 h-14 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${service.icon} text-white text-2xl`} />
                  </div>
                  <span className="text-white text-lg font-medium">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
