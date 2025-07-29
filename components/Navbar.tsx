"use client"

import { useState, useEffect } from "react"
import { FiMenu, FiX, FiHeart } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={scrollToTop}>
            <div className="wrapper w-16 h-16 overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
            </div>

            <span
              className={`ml-2 text-xl font-bold transition-colors group-hover:text-yellow-600 text-gray-900"
                }`}
            >
              Yurak Amri
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("results")}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-600 text-gray-700"
                  }`}
              >
                Natijalar
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-600 text-gray-700"
                  }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("campaigns")}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-600 text-gray-700"
                  }`}
              >
                Haqdorlar
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-600 text-gray-700"
                  }`}
              >
                Sharhlar
              </button>
              <button
                onClick={() => scrollToSection("donate")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
              >
                Hayriya
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`menu-button inline-flex items-center justify-center p-2 rounded-md transition-colors hover:text-yellow-600 hover:bg-gray-100 text-gray-700
                }`}
            >
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu (always rendered) */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-[70vw] z-40 transform transition-transform duration-300 ease-in-out bg-white/95 shadow-lg md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="mobile-menu h-full px-4 py-6 space-y-4 flex flex-col">
          <button
            onClick={() => scrollToSection("results")}
            className="text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            Natijalar
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("campaigns")}
            className="text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            Haqdorlar
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            Sharhlar
          </button>
          <button
            onClick={() => scrollToSection("donate")}
            className="text-left px-3 py-2 text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600 rounded-md transition-colors"
          >
            Hayriya
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
