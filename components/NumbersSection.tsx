"use client"

import { useState } from "react"
import { FiPlay, FiPause, FiTarget, FiHome, FiDollarSign, FiClock, FiGlobe } from "react-icons/fi"

const NumbersSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const numbers = [
    {
      id: "number-1",
      icon: FiTarget,
      emoji: "🎯",
      number: "15,200+",
      label: "yordam mablag'larini qabul qildilar.",
      description: "Oziq-ovqat, uy-joy, tibbiy yordam va ta'limni o'z ichiga olgan har tomonlama qo'llab-quvvatlash",
      fullDescription:
        "Uch yil davomida biz O‘zbekiston bo‘ylab 15200 dan ortiq oilaga bevosita yordam ko‘rsatdik. Bizning yordamimiz favqulodda oziq-ovqat paketlari, tibbiy yordam, ta'lim stipendiyalari, uy-joy yordami va favqulodda pul o'tkazmalarini o'z ichiga oladi. Har bir oila o'z ehtiyojlari va sharoitlariga qarab shaxsiy yordam oladi.",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
    },
    {
      id: "number-2",
      icon: FiHome,
      emoji: "🏡",
      number: "190+",
      label: "uylar topshirildi",
      description: "Favqulodda boshpana berishdan tortib, doimiy uy-joy echimlarigacha",
      fullDescription:
        "Biz 190 dan ortiq uy-joy birliklarini, jumladan, favqulodda konteyner uylaridan tortib, doimiy g'ishtli uylarigacha yetkazib berdik. Bizning uy-joy dasturimiz Turkiya zilzilasi yordamida (160 ta konteyner uyi), Bo‘ka tumani rivojlantirish (30 ta doimiy uy) va O‘zbekiston bo‘ylab turli favqulodda uy-joy aralashuvlarini o‘z ichiga oladi.",
      image: "https://ad-admin.qalampir.uz/uploads/TG/s_FjPrUAmWUI0deSCFxkJzqlSL8gFE3Z.jpg",
      video: "https://www.youtube.com/watch?v=O4obsMscLH0",
    },
    {
      id: "number-3",
      icon: FiDollarSign,
      emoji: "💵",
      number: "$1.2M",
      label: "yordam mablag'lari",
      description: "Bevosita yordam qiymati",
      fullDescription:
        "Ko'rsatilgan yordamning umumiy qiymati pul o'tkazmalari, moddiy yordam, uy-joy qurilishi, tibbiy muolajalar, ta'lim yordami va favqulodda yordamni o'z ichiga oladi. Har bir dollar kuzatiladi va hisobga olinadi, donorlar va foydalanuvchilar uchun batafsil hisobotlar mavjud.",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
    },
    {
      id: "number-4",
      icon: FiClock,
      emoji: "🕐",
      number: "365/24",
      label: "faol qo'llab-quvvatlash",
      description: "24/7 favqulodda yordam mavjud",
      fullDescription:
        "Bizning favqulodda aloqa liniyamiz kuniga 24 soat, yiliga 365 kun ishlaydi. Malakali xodimlar favqulodda qo'ng'iroqlarga javob berishadi, tezkor javob berish guruhlarini muvofiqlashtiradilar va shoshilinch holatlar darhol e'tiborga olinadi. Ushbu tizim o'tgan yili 8,000 dan ortiq favqulodda qo'ng'iroqlarni qabul qildi.",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
    },
    {
      id: "number-5",
      icon: FiGlobe,
      emoji: "🌍",
      number: "13",
      label: "faoliyat yuritilayotgan hududlar",
      description: "O'zbekiston bo'ylab keng qamrov",
      fullDescription:
        "Biz O'zbekistonning 13 ta viloyatida faoliyat yuritamiz, har bir hududda mahalliy muvofiqlashtiruvchilar va ko'ngillilar tarmog'i mavjud. Ushbu keng qamrovli yondashuv chekka va yetarlicha xizmat ko'rsatilmayotgan jamoalarga bizning dasturlarimizdan foydalanish imkonini beradi. Bizning mintaqaviy yondashuvimiz madaniy jihatdan sezgir va mahalliy sharoitlarga mos keladigan aralashuvlarni ta'minlaydi.",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
    },
  ]

  const playVideo = (videoId: string) => {
    setCurrentVideo(videoId)
  }

  const pauseVideo = () => {
    setCurrentVideo(null)
  }

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`
    } else if (url.includes("youtube.com/embed/")) {
      return url.includes("?") ? `${url}&autoplay=1&mute=0` : `${url}?autoplay=1&mute=0`
    }
    return url
  }

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            RAQAMLAR - "Isbotli blok"
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📊 Natijalar Raqamlarda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaffof, o'lchovli ta'sir, o'zini o'zi ifodalaydi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {numbers.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {currentVideo === item.id ? (
                  <div className="relative">
                    <iframe
                      src={getYouTubeEmbedUrl(item.video)}
                      className="w-full h-48"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={pauseVideo}
                      className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <FiPause className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <>
                    <img src={item.image || "/placeholder.svg"} alt={item.label} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button
                        onClick={() => playVideo(item.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                      >
                        <FiPlay className="w-6 h-6 ml-1" />
                      </button>
                    </div>
                  </>
                )}

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{item.number}</div>
                  <div className="text-gray-900 font-medium">{item.label}</div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <details className="group">
                  <summary className="text-yellow-600 hover:text-yellow-700 cursor-pointer font-medium text-sm">
                    Batafsil
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.fullDescription}</p>
                </details>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Har bir raqam hikoya qiladi</h3>
            <p className="text-gray-600 leading-relaxed">
              Har bir statistikada hayoti o'zgargan haqiqiy inson bor. Ushbu raqamlar tiklangan umidni, saqlangan qadr-qimmatni va mustahkamlangan jamoalarni ifodalaydi. Sizning xayriyaingiz ushbu ma'noli statistikalar bir qismiga aylanadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumbersSection
