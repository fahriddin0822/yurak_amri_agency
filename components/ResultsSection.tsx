"use client"

import { useState, useRef } from "react"
import { FiPlay, FiPause } from "react-icons/fi"

const ResultsSection = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [expandedStory, setExpandedStory] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const results = [
    {
      id: "result-1",
      title: "A Family's New Beginning",
      description: "Watch as the Karimov family moves into their new home",
      fullDescription:
        "After losing their home in the earthquake, the Karimov family of 6 thought they would never have a safe place to call home again. Through our housing program, they received a fully furnished container home in just 3 months. Today, their children are back in school and the family is rebuilding their lives with dignity and hope.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKREwvfXMJbZ1ODaPIRLDNAXTJSa1hMK5CIA&s",
      video: "https://www.youtube.com/embed/jS4aFq5-91M",
    },
    {
      id: "result-2",
      title: "Feeding Hope",
      description: "A conversation with young Aziza about our nutrition program",
      fullDescription:
        "8-year-old Aziza from Fergana region hadn't had a proper meal in weeks when we first met her family. Through our emergency food assistance program, we provided monthly food packages and connected the family with local employment opportunities. Now Aziza attends school regularly and dreams of becoming a teacher.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKREwvfXMJbZ1ODaPIRLDNAXTJSa1hMK5CIA&s",
      video: "https://www.youtube.com/embed/nPQ2CghAVOc",
    },
    {
      id: "result-3",
      title: "Personal Touch",
      description: "Sardor Rahimxon personally delivering aid to remote villages",
      fullDescription:
        "Our founder Sardor Rahimxon believes in hands-on leadership. Every month, he personally visits the most remote and underserved communities to ensure aid reaches those who need it most. This personal approach has built trust and ensured 100% transparency in our operations.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const playVideo = (videoId: string) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== videoId && videoRefs.current[id]) {
        videoRefs.current[id]!.pause()
      }
    })

    // Play the selected video
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId]!.play()
      setCurrentVideo(videoId)
    }
  }

  const pauseVideo = (videoId: string) => {
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId]!.pause()
      setCurrentVideo(null)
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Results in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real impact of your donations through the stories of families we've helped
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up ${
                expandedStory === result.id ? "lg:col-span-1" : ""
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
                  {currentVideo === result.id ? (
                    <iframe
                      src={getYouTubeEmbedUrl(result.video)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={result.image || "/placeholder.svg"}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => playVideo(result.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full transition-all transform hover:scale-110 shadow-lg"
                        >
                          <FiPlay className="w-8 h-8 ml-1" />
                        </button>
                      </div>
                    </>
                  )}
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
                  {expandedStory === result.id ? "Hide full story" : "Read full story"}
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
    </section>
  )
}

export default ResultsSection
