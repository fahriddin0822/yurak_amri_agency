"use client"

import { useState } from "react"
import { FiHeart, FiCreditCard, FiCheck, FiCalendar } from "react-icons/fi"

const CTASection = () => {
  const [donationAmount, setDonationAmount] = useState("")
  const [monthlyReminder, setMonthlyReminder] = useState(false)

  const quickAmounts = [25, 50, 100, 250, 500]

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            CTA — "YOU TOO JOIN!"
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🧡 Warm One Heart Today and Change Yourself
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
            Donate using the button below — directly, securely and transparently with your card.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main Donation Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 animate-scale-in">
            <div className="text-center mb-6">
              <FiHeart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h3>
              <p className="text-gray-600">Every contribution makes a difference</p>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className={`py-3 px-4 rounded-lg border-2 transition-all font-semibold ${
                    donationAmount === amount.toString()
                      ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                      : "border-gray-200 hover:border-yellow-300 text-gray-700"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount (USD)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-lg"
                />
              </div>
            </div>

            {/* Donate Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mb-4">
              <FiCreditCard className="mr-3 w-6 h-6" />
              GIVE HELP NOW
            </button>

            {/* Payment Methods */}
            <div className="text-center text-sm text-gray-600 mb-6">
              <p className="mb-2">💳 Accepted: UzCard | Humo | Visa | MasterCard</p>
              <p>📎 Card number: 8600 XXXX XXXX XXXX</p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center text-green-600 justify-center mb-2">
                <FiCheck className="w-5 h-5 mr-2" />
                <span className="font-medium">100% Secure & Transparent</span>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Your donation is processed securely and you'll receive a detailed report on how your contribution is
                used.
              </p>
            </div>
          </div>

          {/* Monthly Donation Bonus Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 animate-slide-up">
            <div className="text-center mb-6">
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                BONUS BLOCK (INTERNAL CTA – MONTHLY HELP)
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                "10,000 soums per month is one coffee for you. But for a family, bread."
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiCalendar className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Set Up Monthly Giving</h4>
                  <p className="text-gray-600 mb-4">
                    A small monthly contribution can provide consistent support to families in need. Even $10 per month
                    can make a significant difference.
                  </p>

                  <div className="flex items-center space-x-3 mb-4">
                    <input
                      type="checkbox"
                      id="monthlyReminder"
                      checked={monthlyReminder}
                      onChange={(e) => setMonthlyReminder(e.target.checked)}
                      className="w-5 h-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                    />
                    <label htmlFor="monthlyReminder" className="text-gray-700 font-medium">
                      Send me an automatic donation reminder
                    </label>
                  </div>

                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Set Up Monthly Giving
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-yellow-100">Transparency</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">15,200+</div>
              <div className="text-yellow-100">Families Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
