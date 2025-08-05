"use client"

import { useState } from "react"
import { FiHeart, FiCreditCard, FiCheck, FiCalendar } from "react-icons/fi"

const CTASection = () => {
  const [donationAmount, setDonationAmount] = useState("")
  const [monthlyReminder, setMonthlyReminder] = useState(false)
  const quickAmounts = [25000, 50000, 100000, 250000, 500000]

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizga qo'shiling
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bugun bir yurakni iliq tuting va o'zingizni o'zgartiring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quyidagi tugma yordamida xayriya qiling — kartangiz bilan bevosita, xavfsiz va shaffof.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="wrapper w-16 h-16 overflow-hidden m-auto">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Xayriya qiling</h3>
              <p className="text-gray-500">Har bir hissa bir umid paydo qiladi</p>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className={`py-3 px-4 rounded-lg border transition-all font-semibold text-sm sm:text-base ${
                    donationAmount === amount.toString()
                      ? "border-yellow-500 bg-yellow-100 text-yellow-700"
                      : "border-gray-300 hover:border-yellow-500 text-gray-600"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Miqdor kiritish (UZS)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">UZS</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Miqdor"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 text-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 shadow-lg flex items-center justify-center mb-4">
              <FiCreditCard className="mr-3 w-6 h-6" />
              Yuborish
            </button>

            {/* Payment Info */}
            <div className="text-center text-sm text-gray-500 mb-6">
              <p className="mb-2">💳 Qabul qilinadi: UzCard | Humo | Visa | MasterCard</p>
              <p>📎 Karta raqami: 8600 XXXX XXXX XXXX XXXX</p>
            </div>

            {/* Footer */}
            <div className="border-t pt-6">
              <div className="flex items-center text-green-600 justify-center mb-2">
                <FiCheck className="w-5 h-5 mr-2" />
                <span className="font-medium">100% Shaffof va ishonchli</span>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Sizning xayriyangiz xavfsiz tarzda qayta ishlanadi va siz hissangiz qanday ishlatilgani haqida hisobot olasiz.
              </p>
            </div>
          </div>

          {/* Monthly Bonus Block */}
          <div className="bg-yellow-50 rounded-3xl p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                BONUS BLOK (OYLIK YORDAM)
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "10,000 so'm oyiga bir kofe uchun. Ammo bir oila uchun, non."
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiCalendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Oylik sovg'ani sozlang</h4>
                  <p className="text-gray-600 mb-4">
                    Kichik oylik hissa muhtoj oilalarga doimiy yordam berishi mumkin. Hatto oyiga 10 000 so'm sezilarli farq qilishi mumkin.
                  </p>
                  <div className="flex items-center space-x-3 mb-4">
                    <input
                      type="checkbox"
                      id="monthlyReminder"
                      checked={monthlyReminder}
                      onChange={(e) => setMonthlyReminder(e.target.checked)}
                      className="w-5 h-5 text-yellow-500 border-gray-300 rounded"
                    />
                    <label htmlFor="monthlyReminder" className="text-gray-700 font-medium">
                      Menga avtomatik ravishda xayriya eslatmasini yuboring
                    </label>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Oylik yordamni sozlang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-gray-800">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-500">Shaffoflik</div>
            </div>
            <div className="text-gray-800">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-500">Mavjud yordam</div>
            </div>
            <div className="text-gray-800">
              <div className="text-3xl font-bold mb-2">15,200+</div>
              <div className="text-gray-500">Oilalar yordam oldi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
