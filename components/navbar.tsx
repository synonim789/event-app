'use client'

import { ArrowRight, CalendarDays } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

function Navbar() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    console.log(id)
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-17 max-w-310 items-center justify-between px-5 sm:px-8">
        <Button
          onClick={() => goTo('top')}
          className="flex items-center gap-2.5"
          variant={'ghost'}
        >
          <CalendarDays className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold tracking-tight text-foreground">
            planly
          </span>
        </Button>
        <nav className="flex gap-8">
          <Button
            onClick={() => goTo('features')}
            className="text-muted-foreground text-sm font-medium hover:text-foreground"
            variant={'ghost'}
          >
            Features
          </Button>
          <Button
            onClick={() => goTo('how')}
            className="text-muted-foreground text-sm font-medium hover:text-foreground"
            variant={'ghost'}
          >
            How it Works
          </Button>
          <Button
            onClick={() => goTo('faq')}
            className="text-muted-foreground text-sm font-medium hover:text-foreground"
            variant={'ghost'}
          >
            FAQ
          </Button>
        </nav>
        <div>
          <Button
            nativeButton={false}
            render={<Link href="/login" />}
            className="rounded-full text-background px-4 bg-foreground hover:bg-primary hover:text-primary-foreground flex gap-2 items-center"
          >
            Get Started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </header>
  )
}
export default Navbar
