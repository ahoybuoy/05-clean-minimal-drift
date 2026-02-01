import { Container } from '../layout/Container'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'

const testimonials = [
  {
    quote: "This platform has transformed how we approach design consistency. Our team is more productive than ever.",
    author: "Sarah Johnson",
    role: "Head of Design",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg",
    initials: "SJ",
  },
  {
    quote: "Finally, a design system tool that developers actually want to use. Integration was seamless.",
    author: "Michael Chen",
    role: "Senior Developer",
    company: "StartupXYZ",
    avatar: "/avatars/michael.jpg",
    initials: "MC",
  },
  {
    quote: "We reduced design inconsistencies by 80% in just three months. Highly recommended!",
    author: "Emily Davis",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "/avatars/emily.jpg",
    initials: "ED",
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about their experience.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <p className="text-gray-600">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
