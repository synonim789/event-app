import { Astroid, Plus, UsersRound } from 'lucide-react'

const steps = [
  {
    icon: <Plus className="h-8 w-8" />,
    title: 'Create a plan',
    description: 'Give it a name, add a few options, and make it yours.',
  },
  {
    icon: <UsersRound className="h-8 w-8" />,
    title: 'Invite your people',
    description: 'Send one simple link. No app download required.',
  },
  {
    icon: <Astroid className="h-8 w-8" />,
    title: 'Make it happen',
    description: 'Vote, decide, and let Planly keep everyone in the loop.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="px-5 py-28 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-310">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-5 text-4xl sm:text-6xl tracking-[-.04em]">
            From idea to{' '}
            <span className="italic text-primary">it&apos;s happening.</span>
          </h2>
        </div>
        <div className="relative mt-20 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-12 hidden border-t border-dashed border-primary/30 md:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full border border-primary/30 bg-card text-primary">
                {step.icon}
                <span className="absolute -right-1 top-0 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HowItWorks
