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

  // Toggle scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on outside click
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
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg h-20"
          : "bg-transparent h-32"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full transition-all duration-500">
          {/* Logo + Text */}
          <div
            onClick={scrollToTop}
            className={`flex items-center cursor-pointer group transition-all duration-500 ${scrolled ? '' : '-translate-x-7'}`}
          >
            <div
              className={`transition-all duration-500 ${
                scrolled ? "w-12 h-12" : "w-16 h-16"
              }`}
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span
              className={`ml-2 font-bold transition-all duration-500 text-gray-900 group-hover:text-yellow-600 ${
                scrolled ? "text-lg" : "text-2xl"
              }`}
            >
              Yurak Amri
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {/* Extra buttons - only on scroll */}
            <div
              className={`flex items-baseline space-x-6 transition-all duration-500 ${
                scrolled
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <button onClick={() => scrollToSection("results")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Natijalar</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection("campaigns")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Haqdorlar</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Sharhlar</button>
            </div>

            {/* Hayriya button - always visible */}
            <button
              onClick={() => scrollToSection("donate")}
              className={`ml-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-all transform hover:scale-105 duration-500 ${
                scrolled ? "text-sm px-5 py-2" : "text-xl px-10 py-3 -translate-x-10"
              }`}
            >
              Hayriya
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-[70vw] z-40 transform transition-transform duration-300 ease-in-out bg-white/95 shadow-lg md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mobile-menu h-full px-4 py-6 space-y-4 flex flex-col">
          {["results", "portfolio", "campaigns", "testimonials", "donate"].map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                section === "donate"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
              }`}
            >
              {{
                results: "Natijalar",
                portfolio: "Portfolio",
                campaigns: "Haqdorlar",
                testimonials: "Sharhlar",
                donate: "Hayriya",
              }[section]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
