"use client"

import { FiHeart, FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center cursor-pointer group mb-6" onClick={scrollToTop}>
              <FiHeart className="h-8 w-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
              <span className="ml-2 text-2xl font-bold group-hover:text-yellow-400 transition-colors">Yurak Amri</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Warming hearts and changing lives across Uzbekistan. We believe in transparency, accountability, and the
              power of community to create lasting change.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Our Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("campaigns")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Campaigns
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <FiPhone className="w-5 h-5 mr-3 text-yellow-500" />
                <span>+998 (90) 123-45-67</span>
              </li>
              <li className="flex items-center text-gray-300">
                <FiMail className="w-5 h-5 mr-3 text-yellow-500" />
                <span>info@yurakamri.uz</span>
              </li>
              <li className="flex items-start text-gray-300">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-yellow-500" />
                <span>
                  Tashkent, Uzbekistan
                  <br />
                  Operating in 13 regions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Yurak Amri. All rights reserved. | 100% Transparency Guaranteed
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Financial Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
