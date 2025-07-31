"use client"

import { useState } from "react"
import { FiPlay, FiPause, FiHome, FiUsers } from "react-icons/fi"

const PortfolioSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const portfolioItems = [
    {
      id: "portfolio-1",
      title: "Turkiya zilziladan yordam",
      description: "160 konteyner uylar zilziladan zarar ko'rgan hududlarda qurilgan",
      fullDescription:
        "Turkiyadagi vayronkor zilzilaga javoban, biz uy-joy bilan bog'liq zudlik bilan yechimlarni taqdim etish uchun tezda safarbar etdik. Mahalliy hokimiyat organlari va xalqaro hamkorlar bilan hamkorlikda biz 160 ta to‘liq jihozlangan konteyner uylarini qurib, 640 dan ortiq kishini xavfsiz va munosib uy-joy bilan ta’minladik. Har bir birlik asosiy qulayliklarni, isitishni o'z ichiga oladi va uzoq muddatli foydalanish uchun mo'ljallangan.",
      image: "https://www.toplum.org.tr/en/wp-content/uploads/2024/10/Konteyner-Kentte-Yasam.jpg",
      video: "https://www.youtube.com/watch?v=8zVEYhUNayg",
      stats: { icon: FiHome, number: "160", label: "Uylar qurildi" },
    },
    {
      id: "portfolio-2",
      title: "25+ Jannatdagi qasrlar",
      description: "Bo‘ka tumanida 30 uy-joy qurilishi",
      fullDescription:
        "“25+” loyihasi barqaror uy-joy yechimlariga sodiqligimizni ifodalaydi. Bo‘ka tumanida joylashgan 30 xonadondan iborat ushbu qurilish 25 oydan ortiq vaqt davomida yordam ro‘yxatida bo‘lgan oilalar uchun doimiy uy-joy bilan ta’minlaydi. Har bir xonadon ikki xonali, zamonaviy qulayliklarga ega, ekologik toza materiallardan foydalangan holda qurilgan va avlodlar uchun mo'ljallangan.",
      image: "/jannatdagi_qasrlar.png",
      video: "https://www.youtube.com/watch?v=fxE4Bb65wcc&t=56s",
      stats: { icon: FiUsers, number: "30", label: "Dan ziyod oilalar joylashtirildi" },
    },
    {
      id: "portfolio-3",
      title: "Doimiy yordam tarmog'i",
      description: "15,000+ oilalar doimiy yordam olmoqda",
      fullDescription:
        "Bizning doimiy yordam ro'yxatimiz oziq-ovqat paketlari, tibbiy yordam, ta'lim yordami va favqulodda yordamni o'z ichiga olgan muntazam oylik yordam oladigan oilalarni ifodalaydi. Ushbu tizimli yondashuv 13 ta viloyatda eng zaif oilalarga doimiy yordam ko'rsatishni ta'minlaydi va oilalar ishonishi mumkin bo'lgan xavfsizlik tarmog'ini yaratadi.",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
      stats: { icon: FiUsers, number: "15,000+", label: "Oilalar doimiy yordam olmoqda" },
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 animate-slide-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  {currentVideo === item.id ? (
                    <div className="relative">
                      <iframe
                        src={getYouTubeEmbedUrl(item.video)}
                        className="w-full h-80"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={pauseVideo}
                        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <FiPause className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button
                          onClick={() => playVideo(item.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full transition-all transform hover:scale-110 shadow-lg"
                        >
                          <FiPlay className="w-8 h-8 ml-1" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <item.stats.icon className="w-4 h-4 mr-2" />
                  {item.stats.number} {item.stats.label}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-xl text-gray-600 mb-6">{item.description}</p>
                <p className="text-gray-600 leading-relaxed">{item.fullDescription}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            ✅ 100% Shaffof va Xavfsiz
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
