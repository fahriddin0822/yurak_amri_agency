"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false })

const Hero = () => {
  const slides = [
    {
      title: "Bugun bir yurakka iliqlik bering.",
      subtitle: "Hayotni o'zgartiring, o'zingizni o'zgartiring",
      description:
        "Oʻzbekiston boʻylab jamiyatlarda oʻzgarishlarni amalga oshirayotgan minglab odamlarga qoʻshiling. Har bir xayriya umid uyg'otadi.",
      image: "https://storage.kun.uz/source/6/RlWmyIAIe6JJGzOq3GHMJZJPd0EtBOPE.jpg",
      video: "https://www.youtube.com/embed/xOdrr5KdX6U",
    },
    {
      title: "Uylar qurish, umid qurish",
      subtitle: "160+ Konteyner uylari qurildi",
      description:
        "Turkiyadagi zilzila oqibatlarini bartaraf etishdan tortib doimiy turar joy yechimlarigacha, biz oilalar uchun xavfsiz joylar yaratmoqdamiz.",
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/27/75338.jpg",
      video: "https://www.youtube.com/embed/xOdrr5KdX6U",
    },
    {
      title: "15 000+ oila.",
      subtitle: "Biz doim yordamga muhtoj oilalarni ro'yhatga olib boramiz va ularning soni hozirda 15 000 dan oshdi.",
      description: "Yordam uchun albatta haqiaqiy haqdorlarni tanlab olamiz.",
      image: "./hero.jpeg",
      video: "https://www.youtube.com/embed/xOdrr5KdX6U",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedTitle, setTypedTitle] = useState("")
  const [typedSubtitle, setTypedSubtitle] = useState("")
  const [typedDescription, setTypedDescription] = useState("")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let titleTimeout: any, subtitleTimeout: any, descTimeout: any

    const typeText = (
      text: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      delay: number
    ) => {
      setter("")
      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          setter((prev) => text.slice(0, i))
        }, delay * i)
      }
    }

    const slide = slides[currentSlide]

    typeText(slide.title, setTypedTitle, 25)
    titleTimeout = setTimeout(() => {
      typeText(slide.subtitle, setTypedSubtitle, 10)
    }, slide.title.length * 25)
    subtitleTimeout = setTimeout(() => {
      typeText(slide.description, setTypedDescription, 6)
    }, slide.title.length * 25 + slide.subtitle.length * 10)

    const autoAdvance = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => {
      clearTimeout(titleTimeout)
      clearTimeout(subtitleTimeout)
      clearTimeout(descTimeout)
      clearTimeout(autoAdvance)
    }
  }, [currentSlide])

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-36">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="min-h-[100px] sm:min-h-[120px] md:min-h-[160px] overflow-hidden">
              <h1 className="font-bold text-[clamp(1.75rem,5vw,3rem)] text-gray-900">
                {typedTitle}
              </h1>
            </div>
            <div className="min-h-[60px] sm:min-h-[80px] overflow-hidden">
              <p className="text-yellow-500 font-medium text-[clamp(1.25rem,3vw,1.75rem)]">
                {typedSubtitle}
              </p>
            </div>
            <div className="min-h-[100px] sm:min-h-[120px] overflow-hidden">
              <p className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
                {typedDescription}
                <span className="inline-block ml-1 text-gray-600 animate-blinkCenter origin-center">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center sm:items-start justify-center sm:justify-start">
              <button className="border-2 border-yellow-500 hover:border-yellow-600 bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:text-gray-950 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-sm">
                Hayriya qilish
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all">
                Batafsil tanishish
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[currentSlide].image}
                  src={slides[currentSlide].image}
                  alt="Slide Image"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.button
                  key={currentSlide}
                  onClick={openModal}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="bg-black bg-opacity-60 rounded-full p-4 hover:scale-110 transition text-yellow-600 w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    ▶
                  </div>
                </motion.button>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <VideoPlayer
          videoUrl={slides[currentSlide].video}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default Hero
