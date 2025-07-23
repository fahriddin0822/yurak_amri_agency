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
      label: "families received assistance",
      description: "Comprehensive support including food, housing, medical aid, and education",
      fullDescription:
        "Over three years, we have provided direct assistance to more than 15,200 families across Uzbekistan. Our support includes emergency food packages, medical assistance, educational scholarships, housing support, and emergency cash transfers. Each family receives personalized assistance based on their specific needs and circumstances.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/jS4aFq5-91M",
    },
    {
      id: "number-2",
      icon: FiHome,
      emoji: "🏡",
      number: "190+",
      label: "houses delivered",
      description: "From emergency shelter to permanent housing solutions",
      fullDescription:
        "We have delivered over 190 housing units ranging from emergency container homes to permanent brick houses. Our housing program includes the Turkey earthquake relief (160 container homes), the Buka district development (30 permanent homes), and various emergency housing interventions across Uzbekistan.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/nPQ2CghAVOc",
    },
    {
      id: "number-3",
      icon: FiDollarSign,
      emoji: "💵",
      number: "$1.2M",
      label: "worth of assistance",
      description: "Direct aid value delivered to communities",
      fullDescription:
        "The total value of assistance provided includes cash transfers, in-kind donations, housing construction, medical treatments, educational support, and emergency relief. Every dollar is tracked and accounted for, with detailed reports available to donors and beneficiaries.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "number-4",
      icon: FiClock,
      emoji: "🕐",
      number: "365/24",
      label: "active support line",
      description: "Round-the-clock emergency assistance available",
      fullDescription:
        "Our emergency hotline operates 24 hours a day, 365 days a year. Trained staff respond to emergency calls, coordinate rapid response teams, and ensure that urgent cases receive immediate attention. This system has handled over 8,000 emergency calls in the past year.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/jS4aFq5-91M",
    },
    {
      id: "number-5",
      icon: FiGlobe,
      emoji: "🌍",
      number: "13",
      label: "regions of operation",
      description: "Nationwide coverage across Uzbekistan",
      fullDescription:
        "We operate in 13 regions of Uzbekistan, with local coordinators and volunteer networks in each area. This extensive coverage ensures that remote and underserved communities have access to our programs. Our regional approach allows for culturally sensitive and locally appropriate interventions.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/nPQ2CghAVOc",
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
            NUMBERS — "PROOF BLOCK"
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📊 Results in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, measurable impact that speaks for itself
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
                    View details
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.fullDescription}</p>
                </details>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Every Number Tells a Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Behind every statistic is a real person whose life has been changed. These numbers represent hope
              restored, dignity preserved, and communities strengthened. Your donation becomes part of these meaningful
              statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumbersSection
