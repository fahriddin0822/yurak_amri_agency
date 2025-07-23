"use client"

import { useState } from "react"
import { FiPlay, FiPause, FiHome, FiUsers } from "react-icons/fi"

const PortfolioSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const portfolioItems = [
    {
      id: "portfolio-1",
      title: "Turkey Earthquake Relief",
      description: "160 container houses built in earthquake-affected areas",
      fullDescription:
        "In response to the devastating earthquake in Turkey, we mobilized quickly to provide immediate housing solutions. Working with local authorities and international partners, we constructed 160 fully-equipped container houses, providing safe, dignified housing for over 640 people. Each unit includes basic amenities, heating, and is designed for long-term use.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: { icon: FiHome, number: "160", label: "Houses Built" },
    },
    {
      id: "portfolio-2",
      title: "25+ Housing Project",
      description: "30-unit housing development in Buka district",
      fullDescription:
        "The '25+' project represents our commitment to sustainable housing solutions. Located in Buka district, this 30-unit development provides permanent housing for families who have been on our aid list for over 25 months. Each unit is a 2-bedroom home with modern amenities, built using eco-friendly materials and designed to last for generations.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/jS4aFq5-91M",
      stats: { icon: FiUsers, number: "30", label: "Families Housed" },
    },
    {
      id: "portfolio-3",
      title: "Permanent Aid Network",
      description: "15,000+ families receiving ongoing support",
      fullDescription:
        "Our permanent aid list represents families who receive regular monthly support including food packages, medical assistance, educational support, and emergency aid. This systematic approach ensures consistent help reaches the most vulnerable families across 13 regions of Uzbekistan, creating a safety net that families can depend on.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/nPQ2CghAVOc",
      stats: { icon: FiUsers, number: "15,000+", label: "Families Supported" },
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
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            PORTFOLIO / LEADING WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">📍 What Have We Done?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">160</div>
              <div className="text-gray-600">Container Houses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">30</div>
              <div className="text-gray-600">"25+" Housing Units</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15,000+</div>
              <div className="text-gray-600">Families on Aid List</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">$1M+</div>
              <div className="text-gray-600">Donations in 3 Years</div>
            </div>
          </div>
        </div>

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
            ✅ 100% Accountability and Transparency
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
