"use client"

import { useState } from "react"
import { FiHeart, FiCreditCard, FiCheck, FiCalendar } from "react-icons/fi"

const CTASection = () => {
  const [donationAmount, setDonationAmount] = useState("")
  const [monthlyReminder, setMonthlyReminder] = useState(false)

  const quickAmounts = [25000, 50000, 100000, 250000, 500000]

  return (
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-primary to-ring"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-card/20 text-card-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizga qo'shiling
          </div>
          <h2 className="flex items-center gap-4 text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            Bugun bir yurakni iliq tuting va o'zingizni o'zgartiring
          </h2>
        </div>
        <p className="text-xl text-ring/80 max-w-3xl mx-auto mb-8">
          Quyidagi tugma yordamida xayriya qiling — kartangiz bilan bevosita, xavfsiz va shaffof.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 mb-8 animate-scale-in">
            <div className="text-center mb-6">
              <div className="wrapper w-16 h-16 overflow-hidden m-auto">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Xayriya qiling</h3>
              <p className="text-muted-foreground">Har bir hissa bir umid paydo qiladi </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className={`py-3 px-4 rounded-lg border-2 overflow-hidden transition-all font-semibold text-sm sm:text-base ${
                    donationAmount === amount.toString()
                      ? "border-ring bg-ring/10 text-ring"
                      : "border-border hover:border-ring text-muted-foreground"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Miqdor kiritish (UZS)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Miqdor"
                  className="w-full pl-8 pr-4 py-4 border border-input rounded-lg focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 text-lg"
                />
              </div>
            </div>
            <button className="w-full bg-ring hover:bg-ring/80 text-primary-foreground py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mb-4">
              <FiCreditCard className="mr-3 w-6 h-6" />
              Yuborish
            </button>
            <div className="text-center text-sm text-muted-foreground mb-6">
              <p className="mb-2">💳 Qabul qilinadi: UzCard | Humo | Visa | MasterCard</p>
              <p>📎 Karta raqami: 8600 XXXX XXXX XXXX XXXX</p>
            </div>
            <div className="border-t pt-6">
              <div className="flex items-center text-green-600 justify-center mb-2">
                <FiCheck className="w-5 h-5 mr-2" />
                <span className="font-medium">100% Shaffof va ishonchli</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Sizning xayriyangiz xavfsiz tarzda qayta ishlanadi va siz hissangiz qanday ishlatilishi haqida batafsil hisobot olasiz.
              </p>
            </div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 animate-slide-up">
            <div className="text-center mb-6">
              <div className="inline-block bg-card/20 text-card-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                BONUS BLOK (AVTOMATIK – OYLIK YORDAM)
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                "10,000 so'm oyiga bir kofe uchun. Ammo bir oila uchun, non."
              </h3>
            </div>
            <div className="bg-card rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiCalendar className="w-6 h-6 text-ring" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Oylik sovg'ani sozlang</h4>
                  <p className="text-muted-foreground mb-4">
                    Kichik oylik hissa muhtoj oilalarga doimiy yordam berishi mumkin. Hatto oyiga 10 000 so'm
                    sezilarli farq qilishi mumkin.
                  </p>
                  <div className="flex items-center space-x-3 mb-4">
                    <input
                      type="checkbox"
                      id="monthlyReminder"
                      checked={monthlyReminder}
                      onChange={(e) => setMonthlyReminder(e.target.checked)}
                      className="w-5 h-5 text-ring border-input rounded focus:ring-ring"
                    />
                    <label htmlFor="monthlyReminder" className="text-muted-foreground font-medium">
                      Menga avtomatik ravishda xayriya eslatmasini yuboring
                    </label>
                  </div>
                  <button className="bg-ring hover:bg-ring/80 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    Oylik yordamni sozlang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-ring/80">Shaffoflik</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-ring/80">Mavjud yordam</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">15,200+</div>
              <div className="text-ring/80">Oilalar yordam oldi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
