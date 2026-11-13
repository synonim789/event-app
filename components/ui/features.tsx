import { cn } from 'cn'
import { CalendarDays, MessageSquareText, SquareCheckBig } from 'lucide-react'

const featuresList = [
  {
    icon: <CalendarDays className="w-6 h-6" />,
    number: '01',
    title: 'One plan, zero chaos',
    description:
      'Dates, places, lists, and every tiny detail live together in one beautiful space.',
  },
  {
    icon: <SquareCheckBig className="w-6 h-6" />,
    number: '02',
    title: 'Decide as a group',
    description:
      'Put options to a vote and find the date or place that works for everyone—fast.',
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    number: '03',
    title: 'Keep the chat on track',
    description:
      'Comments stay next to the plan, so the important stuff never gets buried in a group chat.',
  },
]

function Features() {
  return (
    <div
      className="border-border border-y bg-card px-5 py-28 sm:px-8 lg:py-36"
      id="features"
    >
      <div className="mx-auto max-w-310">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-sm font-semibold tracking-[.2em] text-primary uppercase">
            Everything in one place
          </p>
          <h2 className="text-4xl leading-[1.05] tracking-[-.04em] sm:text-6xl">
            Your group chat is great.
            <br />
            <span className="text-foreground/30">
              Your plans deserve better.
            </span>
          </h2>
        </div>
        <div className="mt-20 grid border-t border-border md:grid-cols-3">
          {featuresList.map((feature, i) => (
            <article
              key={i}
              className={cn(
                'group relative py-10 md:px-8 md:py-14',
                i > 0 && 'border-t border-border md:border-l md:border-t-0',
              )}
            >
              <div className="mb-20 flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  {feature.icon}
                </span>
                <span className="text-foreground/25 text-sm">
                  {feature.number}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 max-w-xs leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Features
