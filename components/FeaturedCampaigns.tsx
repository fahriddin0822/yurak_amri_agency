"use client"

import { useState } from "react"
import { FiHeart, FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi"

interface Campaign {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  video?: string
  goalAmount: number
  raisedAmount: number
  isCompleted: boolean
  daysLeft: number
  beneficiaries: number
}

const FeaturedCampaigns = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }
  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      title: "Ko'chirilgan oilalar uchun qishki favqulodda yordam",
      category: "Favqulodda yordam",
      description: "200 ta ko'chirilgan oilalar uchun iliq kiyim, isitish va boshpana ta'minlash.",
      fullDescription:
        "Sirdaryo viloyatidagi so'nggi toshqinlar 200 dan ortiq oilani ko'chirishga majbur qildi, ularni qish yaqinlashganda yetarli boshpanasiz qoldirdi. Ushbu oilalar zudlik bilan iliq kiyim, ko'rpa-to'shak, portativ isitgichlar va vaqtinchalik boshpana materiallariga muhtoj. Favqulodda yordam ko'rsatish guruhi tayyor, lekin har bir oilaga kompleks qishki yordam paketlarini taqdim etish uchun sizning yordamingiz kerak.",
      image: "/placeholder.svg?height=400&width=600",
      video: "/placeholder.mp4?query=winter relief distribution",
      goalAmount: 25000,
      raisedAmount: 18500,
      isCompleted: false,
      daysLeft: 12,
      beneficiaries: 200,
    },
    {
      id: "2",
      title: "Qashqadaryo qishlog'idagi maktab rekonstruktsiyasi",
      category: "Ta'lim",
      description: "Uzoq qishloqda 300 nafar bolaga xizmat qiluvchi maktabni qayta qurish.",
      fullDescription:
        "Yangiobod qishlog'idagi yagona maktab bahor toshqinlari paytida jiddiy zarar ko'rdi, 300 nafar bolani ta'limdan mahrum qoldirdi. Jamiyat vaqtincha chodir tuzilmasidan foydalanmoqda, lekin qish yaqinlashganda, biz maktabni to'g'ri sinflar, isitish va zamonaviy qulayliklar bilan qayta qurishimiz kerak. Ushbu loyiha butun avlod bolalariga ta'lim olish imkoniyatini tiklaydi.",
      image: "/placeholder.svg?height=400&width=600",
      goalAmount: 45000,
      raisedAmount: 32000,
      isCompleted: false,
      daysLeft: 45,
      beneficiaries: 300,
    },
    {
      id: "3",
      title: "Tibbiy uskunalar uchun qishloq klinikasi",
      category: "Sog'liqni saqlash",
      description: "5,000 nafar aholi uchun zarur tibbiy uskunalar.",
      fullDescription:
        "Gulistondagi qishloq klinikasi 5,000 dan ortiq aholi uchun xizmat qiladi, lekin asosiy tibbiy uskunalardan mahrum. Biz ultratovush apparati, qon bosimini o'lchash moslamalari, sterilizatsiya bloki va favqulodda tibbiy yordam vositalarini taqdim etishni maqsad qilmoqdamiz. Ushbu uskunalar klinikaga yaxshiroq sog'liqni saqlash xizmatlarini ko'rsatishga va tibbiy favqulodda vaziyatlarda hayotlarni saqlashga imkon beradi.",
      image: "/placeholder.svg?height=400&width=600",
      goalAmount: 15000,
      raisedAmount: 15000,
      isCompleted: true,
      daysLeft: 0,
      beneficiaries: 5000,
    },
    {
      id: "4",
      title: "Togʻtepa qishlog'i uchun toza suv loyihasi",
      category: "Infratuzilma",
      description: "Uzoq tog' qishlog'ida 150 ta oilaga toza suv tizimini o'rnatish.",
      fullDescription:
        "Togʻtepa qishlog'idagi oilalar har kuni uzoqdan suv olib kelish uchun 3 kilometr yurishadi. Biz quyosh energiyasi bilan ishlaydigan suv nasos tizimini va taqsimot tarmog'ini o'rnatishni rejalashtirmoqdamiz, bu toza suvni to'g'ridan-to'g'ri qishloqqa olib keladi. Ushbu loyiha har kuni mehnat soatlarini tejaydi va 150 ta oila uchun xavfsiz ichimlik suvi ta'minlaydi.",
      image: "/placeholder.svg?height=400&width=600",
      goalAmount: 35000,
      raisedAmount: 8750,
      isCompleted: false,
      daysLeft: 60,
      beneficiaries: 150,
    },
  ])

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  const openCampaignDetails = (campaign: Campaign) => {
    setSelectedCampaign(campaign)
  }

  const closeCampaignDetails = () => {
    setSelectedCampaign(null)
  }

  return (
    <>
      <section id="campaigns" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Yordamga muhtojlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yordamingizga haqdor insonlarga befarq bo'lmang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openCampaignDetails(campaign)}
              >
                <div className="relative">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {campaign.category}
                    </span>
                  </div>
                  {campaign.isCompleted && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Tugallandi
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        ${campaign.raisedAmount.toLocaleString()} yig'ildi
                      </span>
                      <span className="text-sm text-gray-500">${campaign.goalAmount.toLocaleString()} goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full progress-bar ${
                          campaign.isCompleted ? "bg-green-500" : "bg-yellow-500"
                        }`}
                        style={{ width: `${getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)}%` }}
                      />
                    </div>
                    {campaign.isCompleted ? (
                      <div className="text-center mt-2">
                        <span className="text-green-600 font-semibold">✅ Maqsadga erishildi!</span>
                      </div>
                    ) : (
                      <div className="text-center mt-2">
                        <span className="text-gray-600 text-sm">
                          {getProgressPercentage(campaign.raisedAmount, campaign.goalAmount).toFixed(0)}% bo'ldi
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Campaign Stats */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FiUsers className="w-4 h-4 mr-1" />
                      {campaign.beneficiaries} beneficiaries
                    </div>
                    {!campaign.isCompleted && (
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {campaign.daysLeft} days left
                      </div>
                    )}
                  </div>

                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Batafsil
                    <FiArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Campaign Details */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen">
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b z-10">
              <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900">Batafsil</h1>
                <button onClick={closeCampaignDetails} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <img
                    src={selectedCampaign.image || "/placeholder.svg"}
                    alt={selectedCampaign.title}
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />

                  <div className="mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCampaign.category}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedCampaign.title}</h1>

                  <p className="text-gray-600 leading-relaxed mb-6">{selectedCampaign.fullDescription}</p>

                  {/* Video if available */}
                  {selectedCampaign.video && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Video lavha</h3>
                      <div className="video-container rounded-2xl overflow-hidden">
                        <video controls className="w-full">
                          <source src={selectedCampaign.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${selectedCampaign.raisedAmount.toLocaleString()}
                        </span>
                        <span className="text-gray-500">${selectedCampaign.goalAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                        <div
                          className={`h-4 rounded-full progress-bar ${
                            selectedCampaign.isCompleted ? "bg-green-500" : "bg-yellow-500"
                          }`}
                          style={{
                            width: `${getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.goalAmount)}%`,
                          }}
                        />
                      </div>
                      <div className="text-sm text-gray-600">
                        {getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.goalAmount).toFixed(0)}%
                        bo'ldi
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <FiUsers className="w-5 h-5 mr-3" />
                        <span>{selectedCampaign.beneficiaries} odam yordam oladi</span>
                      </div>
                      {!selectedCampaign.isCompleted && (
                        <div className="flex items-center text-gray-600">
                          <FiCalendar className="w-5 h-5 mr-3" />
                          <span>{selectedCampaign.daysLeft} kun qoldi</span>
                        </div>
                      )}
                    </div>

                    {/* Donation Section */}
                    {!selectedCampaign.isCompleted ? (
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Xayriya qiling</h3>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {[25000, 50000, 100000, 250000].map((amount) => (
                            <button
                              key={amount}
                              className="border border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 py-2 px-4 rounded-lg text-center transition-colors"
                            >
                              {amount}
                            </button>
                          ))}
                        </div>
                        <input
                          type="number"
                          placeholder="Miqdorani kiriting"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-yellow-500"
                        />
                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center" onClick={() => scrollToSection("donate")}>
                          <FiHeart className="mr-2 w-5 h-5" />
                          Hayriya
                        </button>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          💳 Qabul qilinadi: UzCard | Humo | Visa | MasterCard
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-green-600 text-6xl mb-4">✅</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Loyihani tugatildi!</h3>
                        <p className="text-gray-600">Ushbu kampaniyani muvaffaqiyatli amalga oshirgan barcha xayriya qiluvchilarga rahmat.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FeaturedCampaigns
