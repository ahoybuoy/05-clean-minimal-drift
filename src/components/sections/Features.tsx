import { Container } from '../layout/Container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'

const features = [
  {
    title: 'Design Tokens',
    description: 'Centralized design tokens that sync across all your applications.',
  },
  {
    title: 'Component Library',
    description: 'Pre-built components that follow your design system guidelines.',
  },
  {
    title: 'Documentation',
    description: 'Auto-generated documentation for your entire design system.',
  },
  {
    title: 'Version Control',
    description: 'Track changes to your design system over time with full version history.',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together with your team to build and maintain your design system.',
  },
  {
    title: 'Analytics',
    description: 'Understand how your design system is being used across products.',
  },
]

export function Features() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Everything you need to manage your design system
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From design tokens to component documentation, we have you covered.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
