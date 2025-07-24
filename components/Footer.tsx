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
              <div className="wrapper w-16 h-16 overflow-hidden">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </div>
              <span className="ml-2 text-2xl font-bold group-hover:text-yellow-400 transition-colors">Yurak Amri</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              O'zbekiston bo'ylab qalblarni isitmoqda va hayotni o'zgartirmoqda. Biz shaffoflik, hisobdorlik va boshqalarga ishonamiz
              doimiy o'zgarishlarni yaratish uchun jamiyatning kuchi.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sardor.rahimxon" className="text-gray-400 hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/sardor_rahimxon_official" className="text-gray-400 hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/sardor1s" className="text-gray-400 hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="https://t.me/SardorRahimxonOfficial" className="text-gray-400 hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.97 15.38l-.39 3.44c.56 0 .81-.24 1.1-.53l2.63-2.5 5.45 3.97c1 .55 1.72.26 1.97-.92l3.58-16.6c.33-1.53-.57-2.12-1.53-1.75L1.25 10.63c-1.47.58-1.45 1.4-.26 1.78l5.6 1.75 13.02-8.22c.61-.4 1.17-.18.71.25L9.97 15.38z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tezkor Havolalar</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Natijalar
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
                  Haqdorlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Fikrlar
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Biz bilan bog'laning</h3>
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
                  13 ta hududda faoliyat yuritamiz
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Yurak Amri. Barcha huquqlar himoyalangan. | 100% Shaffoflik kafolati
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Maxfiylik siyosati
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Foydalanish shartlari
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Moliyaviy hisobotlar
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
