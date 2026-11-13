import { cn } from 'cn'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const userIcons = [
  {
    bg: 'bg-green-400',
    name: 'm',
  },
  {
    bg: 'bg-blue-400',
    name: 'j',
  },
  {
    bg: 'bg-red-400',
    name: 'a',
  },
  {
    bg: 'bg-yellow-400',
    name: 'k',
  },
]

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-205 max-w-350 items-center gap-14 px-5 pt-36 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:px-20 lg:pt-28"
    >
      <div className="absolute left-[8%] top-32 h-64 w-64 rounded-full bg-primary/15 blur-[110px]" />
      <div className="relative z-10 max-w-155">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[.16em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Made for
          making plans
        </div>
        <h1 className="text-[100px] leading-none font-medium tracking-tight">
          Less planning. <br />
          <span className="text-primary">More doing.</span>
        </h1>
        <p className="mt-8 text-muted-foreground text-lg">
          The easiest way to turn &quot;we should hang out&quot; into an actual
          plan. Pick a date, choose a place and get everyone there.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            className={
              'rounded-full flex items-center justify-center gap-3 px-7 py-4 font-semibold h-auto'
            }
          >
            Start planning - it&apos;s free
            <ArrowRight />
          </Button>
          <Button
            variant={'outline'}
            className={
              'rounded-full flex items-center justify-center gap-3 px-7 py-4 font-semibold h-auto'
            }
          >
            See how it works
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {userIcons.map(({ bg, name }) => (
              <span
                key={name}
                className={cn(
                  'grid h-9 w-9 place-items-center rounded-full border-2 border-background text-xs font-bold text-background capitalize',
                  bg,
                )}
              >
                {name}
              </span>
            ))}
          </div>
          <span>Loved by friend groups everywhere</span>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-170 lg:translate-x-6 text-[100px]">
        TBD
      </div>
    </section>
  )
}
export default Hero
