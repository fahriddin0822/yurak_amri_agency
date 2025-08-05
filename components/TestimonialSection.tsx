"use client"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Biz faqat ro'yxatdagi oilamiz deb o'yladik. Ammo Yurak Amri bizga insoniylik, or-nomus va umid baxsh etdi. Hozir bolam maktabga boradi. Rahmat.",
      author: "Mavluda opa",
      location: "Farg'ona viloyati",
      image: "https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg",
    },
    {
      id: 2,
      quote:
        "Zilzila uyimizni vayron qilganda, biz hamma narsani yo'qotdik. Yurak Amri bizga shunchaki boshpana bermadi, ular bizga qadr-qimmat va farzandlarimizning kelajagini berdi.",
      author: "Karim Usmonov",
      location: "Turkiya",
      image: "https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg",
    },
    {
      id: 3,
      quote:
        "Oylik oziq-ovqat paketlari eng qiyin paytlarda oilamizni tirik saqladi. Ammo oziq-ovqatdan ko'ra, siz bizga kimdir g'amxo'rlik qilayotganiga umid berdingiz.",
      author: "Gulnora Ahmadova",
      location: "Samarqand viloyati",
      image: "https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Fikrlardan iqtibos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Umid ovozlari</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sizning xayriyangiz orqali hayotlari o'zgargan oilalardan haqiqiy hikoyalar
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
             Biz faqat ro'yxatdagi oilamiz deb o'yladik. Ammo Yurak Amri bizga insoniylik, or-nomus va umid baxsh etdi. Endi bolam 
maktabga ketyapti. Rahmat.
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg"
                alt="Mavluda opa"
                className="w-20 h-20 rounded-full object-cover mr-6"
              />
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">— Mavluda opa</div>
                <div className="text-gray-500">Farg'ona viloyati</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
