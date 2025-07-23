"use client"

import { useState, useEffect } from "react"
import { FiHeart, FiUsers, FiHome, FiDollarSign } from "react-icons/fi"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Bugun bir yurakka iliqlik bering.",
      subtitle: "Hayotni o'zgartiring, o'zingizni o'zgartiring",
      description:
        "Oʻzbekiston boʻylab jamiyatlarda oʻzgarishlarni amalga oshirayotgan minglab odamlarga qoʻshiling. Har bir xayriya umid uyg'otadi.",
      image: "https://uz.usembassy.gov/wp-content/uploads/sites/78/SMICA-scaled.jpg",
    },
    {
      title: "Uylar qurish, umid qurish",
      subtitle: "160+ Konteyner uylari qurildi",
      description:
        "Turkiyadagi zilzila oqibatlarini bartaraf etishdan tortib doimiy turar joy yechimlarigacha, biz oilalar uchun xavfsiz joylar yaratmoqdamiz.",
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/27/75338.jpg",
    },
    {
      title: "15 000+ oila.",
      subtitle: "Biz doim yordamga muhtoj oilalarni ro'yhatga olib boramiz va ularning soni hozirda 15 000 dan oshdi.",
      description: "Yordam uchun albatta haqiaqiy haqdorlarni tanlab olamiz.",
      image: "https://lh6.googleusercontent.com/proxy/JuF0Wq7SKjZhR8Tz2uTmF4vQCbEVRhlnj38B_xQryHxImEGWCK8je8W6SdgzRVnWBYMRh6zv",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { icon: FiUsers, number: "15,200+", label: "Oilalarga yordam" },
    { icon: FiHome, number: "190+", label: "Uylar qurildi" },
    { icon: FiDollarSign, number: "$1.2M", label: "Yig'ilgan hayriya" },
    { icon: FiHeart, number: "24/7", label: "Qo'llab-quvvatlash mavjud" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "https://i.ytimg.com/vi/DrJNKNju_c0/maxresdefault.jpg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-4 font-medium">{slides[currentSlide].subtitle}</p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">{slides[currentSlide].description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Donate Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
