import React from "react"

const VideoPlayer = ({ videoUrl, onClose }) => {
  const handleBackgroundClick = () => {
    onClose()
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div
        onClick={stopPropagation}
        className="w-[80%] max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
      >
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoPlayer
