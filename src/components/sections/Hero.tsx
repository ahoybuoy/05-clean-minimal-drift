import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build better products with design consistency
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform helps teams maintain a cohesive design language across all their products.
            Stay consistent, ship faster, and delight your users.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">Learn more</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
