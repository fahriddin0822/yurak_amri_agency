"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { FiPlay, FiHome, FiUsers } from "react-icons/fi"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false })

const getYouTubeEmbedUrl = (url: string) => {
  try {
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
  } catch {
    return url
  }
}


const PortfolioSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const playVideo = (videoUrl: string) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl)
  setCurrentVideo(embedUrl)
  setShowModal(true)
}


  const pauseVideo = () => {
    setCurrentVideo(null)
    setShowModal(false)
  }

  const portfolioItems = [
    {
      id: "portfolio-1",
      title: "Turkiya zilziladan yordam",
      description: "160 konteyner uylar zilziladan zarar ko'rgan hududlarda qurilgan",
      fullDescription:
        "Turkiyadagi vayronkor zilzilaga javoban, biz uy-joy bilan bog'liq zudlik bilan yechimlarni taqdim etish uchun tezda safarbar etdik...",
      image: "https://www.toplum.org.tr/en/wp-content/uploads/2024/10/Konteyner-Kentte-Yasam.jpg",
      video: "https://www.youtube.com/watch?v=8zVEYhUNayg",
      stats: { icon: FiHome, number: "160", label: "Uylar qurildi" },
    },
    {
      id: "portfolio-2",
      title: "25+ Jannatdagi qasrlar",
      description: "Bo‘ka tumanida 30 uy-joy qurilishi",
      fullDescription: "...",
      image: "/jannatdagi_qasrlar.png",
      video: "https://www.youtube.com/watch?v=fxE4Bb65wcc&t=56s",
      stats: { icon: FiUsers, number: "30", label: "Dan ziyod oilalar joylashtirildi" },
    },
    {
      id: "portfolio-3",
      title: "Doimiy yordam tarmog'i",
      description: "15,000+ oilalar doimiy yordam olmoqda",
      fullDescription: "...",
      image: "/oilalar_doimiy_yordam_olmoqda.png",
      video: "https://www.youtube.com/watch?v=RekrhtL0ej4",
      stats: { icon: FiUsers, number: "15,000+", label: "Oilalar doimiy yordam olmoqda" },
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 animate-slide-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button
                      onClick={() => playVideo(getYouTubeEmbedUrl(item.video))}
                      className="rounded-full transition-all transform hover:scale-110 shadow-lg"
                    >
                      <div className="bg-black bg-opacity-60 rounded-full p-4 hover:scale-110 transition text-yellow-600 w-16 h-16 flex items-center justify-center">
                        ▶
                      </div>
                    </button>
                  </div>
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

      {showModal && currentVideo && (
        <VideoPlayer videoUrl={currentVideo} onClose={pauseVideo} />
      )}
    </section>
  )
}

export default PortfolioSection
