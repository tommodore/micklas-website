const testimonials = [
  {
    name: "Anna Bergmann",
    role: "Marketing Director, Visit Norway",
    quote: "Working with Micklas was an absolute pleasure. His authentic storytelling and breathtaking photography helped us reach a completely new audience in the German-speaking market.",
    image: "/logo-micklas.png",
  },
  {
    name: "Lukas Weber",
    role: "Head of Brand, Patagonia Hotels",
    quote: "Micklas delivered exceptional content that perfectly captured the spirit of our properties. The engagement on social media was outstanding.",
    image: "/logo-micklas.png",
  },
  {
    name: "Sophie Laurent",
    role: "Tourism Board, French Alps",
    quote: "Professional, creative, and incredibly easy to work with. Micklas brought our destination to life in a way that truly resonates with travelers.",
    image: "/logo-micklas.png",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-[3px] mb-4">TESTIMONIALS</div>
          <h2 className="text-5xl font-bold tracking-tight">What brands say about working with Micklas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-teal text-xl">★</span>
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 mb-8">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}