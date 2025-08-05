import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ResultsSection from "@/components/ResultsSection"
import PortfolioSection from "@/components/PortfolioSection"
import FeaturedCampaigns from "@/components/FeaturedCampaigns"
import TestimonialSection from "@/components/TestimonialSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import { Result } from "postcss"
import ResultNumbers from "@/components/ResultNumbers"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ResultNumbers />
      <ResultsSection />
      <PortfolioSection />
      <FeaturedCampaigns />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
