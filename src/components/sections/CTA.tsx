import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join thousands of teams building better products with design consistency.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start free trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
