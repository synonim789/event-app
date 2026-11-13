import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Features from '@/components/ui/features'

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <main>
        <Navbar />
        <Hero />
        <Features />
      </main>
    </div>
  )
}
