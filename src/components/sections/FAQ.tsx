import { useState } from 'react'
import { Container } from '../layout/Container'
import { cn } from '../../lib/utils'

const faqs = [
  {
    question: 'What is a design system?',
    answer: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Most teams can get started within an hour. Full integration typically takes 1-2 weeks depending on the size of your existing codebase.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'Can I migrate from another tool?',
    answer: 'Absolutely. We offer migration assistance and have import tools for popular design system platforms.',
  },
  {
    question: 'What support options are available?',
    answer: 'All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We have answers.
          </p>
        </div>
        <div className="mt-16 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronIcon
                  className={cn(
                    'h-5 w-5 text-gray-500 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}
