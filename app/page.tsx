import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ResultsSection from "@/components/ResultsSection"
import PortfolioSection from "@/components/PortfolioSection"
import NumbersSection from "@/components/NumbersSection"
import FeaturedCampaigns from "@/components/FeaturedCampaigns"
import TestimonialSection from "@/components/TestimonialSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ResultsSection />
      <PortfolioSection />
      <NumbersSection />
      <FeaturedCampaigns />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
