import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <main>
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}
