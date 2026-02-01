import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { cn } from '../../lib/utils'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started.',
    features: [
      'Up to 5 team members',
      '10 design tokens',
      'Basic analytics',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing teams with more needs.',
    features: [
      'Up to 20 team members',
      'Unlimited design tokens',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with specific requirements.',
    features: [
      'Unlimited team members',
      'Unlimited everything',
      'Custom analytics',
      '24/7 dedicated support',
      'Custom contracts',
      'SLA guarantees',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for your team.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-2xl border p-8',
                plan.featured
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white'
              )}
            >
              {plan.featured && (
                <Badge variant="info" className="absolute right-4 top-4">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.featured ? 'primary' : 'outline'}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
