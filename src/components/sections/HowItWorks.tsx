import { Container } from '@/components/ui/Container'

interface Step {
  number: number
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Call or Click',
    description: 'Reserve online 24/7 or call us to schedule your dumpster rental.',
    icon: 'fa-mouse-pointer'
  },
  {
    number: 2,
    title: 'Delivery',
    description: 'We deliver your dumpster right to your location on your scheduled date.',
    icon: 'fa-truck'
  },
  {
    number: 3,
    title: 'Load Your Dumpster',
    description: 'Fill it up at your own pace during your rental period.',
    icon: 'fa-dumpster'
  },
  {
    number: 4,
    title: 'Pickup',
    description: 'When you\'re done, we pick it up and haul everything away.',
    icon: 'fa-truck-pickup'
  },
  {
    number: 5,
    title: 'Review',
    description: 'Share your experience and help others find reliable service.',
    icon: 'fa-star'
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white" aria-label="How It Works">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl text-black">
            How It Works
          </h2>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:flex justify-between items-start relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center w-1/5 px-4">
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#D32F2F] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className={`fa-solid ${step.icon} text-white text-2xl`} />
              </div>

              {/* Step Number */}
              <div className="font-heading text-sm font-bold text-[#D32F2F] uppercase tracking-wide mb-2">
                Step {step.number}
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold uppercase text-xl md:text-2xl text-black mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className={`fa-solid ${step.icon} text-white text-xl`} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="font-heading text-sm font-bold text-[#D32F2F] uppercase tracking-wide mb-1">
                  Step {step.number}
                </div>
                <h3 className="font-heading font-semibold uppercase text-xl text-black mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
