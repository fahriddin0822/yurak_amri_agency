"use client"

import { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsOpen(false)
      }
    }

    if (isOpen) document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-md h-20"
          : "bg-transparent h-32"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full transition-all">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className={`flex items-center cursor-pointer group transition-all duration-500`}
          >
            <div className={`transition-all duration-500 ${scrolled ? "w-12 h-12" : "w-16 h-16"}`}>
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span
              className={`ml-2 font-bold text-gray-900 group-hover:text-yellow-600 transition-all duration-500 ${scrolled ? "text-lg" : "text-2xl"
                }`}
            >
              Yurak Amri
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto space-x-6">
            <div
              className={`transition-all duration-500 flex items-center space-x-6 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <button onClick={() => scrollToSection("results")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Natijalar</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection("campaigns")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Haqdorlar</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Sharhlar</button>
            </div>
            <button
              onClick={() => scrollToSection("donate")}
              className={`ml-4 rounded-full transition-all transform hover:scale-105 duration-500 ${scrolled
                  ? "bg-yellow-500 hover:bg-yellow-600 text-sm text-white px-5 py-2"
                  : "bg-yellow-500 hover:bg-yellow-600 text-xl font-bold text-white px-8 py-3"
                }`}
            >
              Hayriya
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-100 transition"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 right-0 w-[75vw] sm:w-[60vw] h-[calc(100vh-5rem)] z-40 bg-white/95 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="mobile-menu flex flex-col px-6 py-6 space-y-4">
          {[
            { id: "results", label: "Natijalar" },
            { id: "portfolio", label: "Portfolio" },
            { id: "campaigns", label: "Haqdorlar" },
            { id: "testimonials", label: "Sharhlar" },
            { id: "donate", label: "Hayriya" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left px-4 py-2 rounded-md font-medium text-base transition-colors ${id === "donate"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "text-gray-700 hover:text-yellow-600 hover:bg-gray-100"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
