'use client'

import { CalendarDays } from 'lucide-react'
import { Button } from './ui/button'

function Footer() {
  const goTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <footer className="border-t border-border  px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-310 flex-col items-center justify-between gap-5 sm:flex-row">
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
        <p className="text-xs text-muted-foreground">
          Made for good plans and even better company.
        </p>
        <div className="flex gap-5">
          <Button
            onClick={() => goTo('faq')}
            className="text-muted-foreground text-xs font-medium hover:text-foreground"
            variant={'ghost'}
          >
            FAQ
          </Button>
          <Button
            onClick={() => goTo('top')}
            className="text-muted-foreground text-xs font-medium hover:text-foreground"
            variant={'ghost'}
          >
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
export default Footer
