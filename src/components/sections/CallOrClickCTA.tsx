import { Container } from '@/components/ui/Container'
import { AngledButton } from '@/components/ui/AngledButton'

export function CallOrClickCTA() {
  return (
    <section className="py-20 bg-black" aria-label="Reserve a Dumpster">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-6">
            Call or Click — Dumpster Rentals
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            You can reserve online 24/7 or call us anytime to schedule your dumpster rental.
            Fast delivery, reliable pickup, and transparent pricing every time.
          </p>
          <AngledButton href="/contact" className="text-lg px-10 py-4">
            Reserve a Dumpster Now
          </AngledButton>
        </div>
      </Container>
    </section>
  )
}
