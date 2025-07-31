"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { FiPlay, FiPause } from "react-icons/fi"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false })

const ResultsSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [expandedStory, setExpandedStory] = useState<string | null>(null)

  const results = [
    {
      id: "result-1",
      title: "4 qavatga TONNALAB YUKNI OLIB CHIQQAN O’ZBEK AYOLI",
      description: "Sardor Rahimxon- 4 qavatga TONNALAB YUKNI OLIB CHIQQAN REKORDCHI O’ZBEK AYOLI, SUBHANALLAH.",
      fullDescription:
        "Sardor Rahimxon- 4 qavatga TONNALAB YUKNI OLIB CHIQQAN REKORDCHI O’ZBEK AYOLI, SUBHANALLAH.",
      image: "./woman.png",
      video: "https://www.youtube.com/watch?v=AH3s3q72kw4&t=12s",
    },
    {
      id: "result-2",
      title: "UMIDA YURIB KETDI",
      description: "MO’JIZANI KO’RING,UMIDA YURIB KETDI.BUTUN O’ZBEKISTON SEVIB QOLGAN QIZALOQ TAQDIRI.",
      fullDescription:
        "MO’JIZANI KO’RING,UMIDA YURIB KETDI.BUTUN O’ZBEKISTON SEVIB QOLGAN QIZALOQ TAQDIRI.",
      image: "./umida.png",
      video: "https://www.youtube.com/watch?v=oKq9Z60yuP8",
    },
    {
      id: "result-3",
      title: "Mana sizga Allohning qudrati",
      description: "Mana sizga Allohning qudrati, mo’jiza, subhanAllah",
      fullDescription:
        "Mana sizga Allohning qudrati, mo’jiza, subhanAllah",
      image: "./image.png",
      video: "https://www.youtube.com/watch?v=8F2K3OeXXlU",
    },
  ]

  const playVideo = (videoId: string) => {
    setCurrentVideo(videoId)
    setShowModal(true)
  }

  const pauseVideo = () => {
    setCurrentVideo(null)
    setShowModal(false)
  }

  const toggleStory = (resultId: string) => {
    setExpandedStory(expandedStory === resultId ? null : resultId)
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
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bizning natijalarimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biz yordam bergan oilalarning ravnaqi bu sizning qo'llab-quvvatlashingiz natijasidir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up ${expandedStory === result.id ? "lg:col-span-1" : ""
                }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                height: expandedStory === result.id ? "auto" : undefined,
              }}
            >
              <div className="relative">
                <img src={result.image || "/placeholder.svg"} alt={result.title} className="w-full h-64 object-cover" />

                {/* Video Player */}
                <div className="absolute inset-0 bg-black/20">
                  <img
                    src={result.image || "/placeholder.svg"}
                    alt={result.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => playVideo(getYouTubeEmbedUrl(result.video))}
                      className="rounded-full transition-all transform hover:scale-110 shadow-lg"
                    >
                      <div className="bg-black bg-opacity-60 rounded-full p-4 hover:scale-110 transition text-yellow-600 w-16 h-16 flex items-center justify-center">
                        ▶
                      </div>
                    </button>
                  </div>
                </div>

                {currentVideo === result.id && (
                  <button
                    onClick={() => {
                      setCurrentVideo(null)
                    }}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FiPause className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{result.title}</h3>
                <p className="text-gray-600 mb-4">{result.description}</p>

                <button
                  onClick={() => toggleStory(result.id)}
                  className="text-yellow-600 hover:text-yellow-700 cursor-pointer font-medium mb-3 block"
                >
                  {expandedStory === result.id ? "Berkitish" : "Batafsil o'qish"}
                </button>

                {expandedStory === result.id && (
                  <div className="transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 text-sm leading-relaxed">{result.fullDescription}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && currentVideo && (
        <VideoPlayer videoUrl={currentVideo} onClose={pauseVideo} />
      )}
    </section>
  )
}

export default ResultsSection
