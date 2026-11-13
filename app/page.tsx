import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Navbar from '@/components/navbar'
import Features from '@/components/ui/features'

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <main>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}
