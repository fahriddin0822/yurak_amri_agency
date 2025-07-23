"use client"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "We thought we were just a family on a list. But Yurak Amri gave us humanity, honor, and hope. Now my child is going to school. Thank you.",
      author: "Sister Mavluda",
      location: "Fergana region",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      quote:
        "When the earthquake destroyed our home, we lost everything. Yurak Amri didn't just give us shelter, they gave us dignity and a future for our children.",
      author: "Karim Usmanov",
      location: "Turkey, earthquake survivor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      quote:
        "The monthly food packages kept our family alive during the hardest times. But more than food, you gave us hope that someone cares.",
      author: "Gulnora Akhmedova",
      location: "Samarkand region",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            TESTIMONIAL / QUOTE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Voices of Hope</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from the families whose lives have been transformed through your generosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-yellow-500 text-6xl mb-4 font-serif">"</div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">{testimonial.quote}</blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">— {testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center animate-scale-in">
            <div className="text-yellow-500 text-8xl mb-6 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 italic font-light">
              We thought we were just a family on a list. But Yurak Amri gave us humanity, honor, and hope. Now my child
              is going to school. Thank you.
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Sister Mavluda"
                className="w-20 h-20 rounded-full object-cover mr-6"
              />
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">— Sister Mavluda</div>
                <div className="text-gray-500">Fergana region</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
