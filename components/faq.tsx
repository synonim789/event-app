import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const questionsAndAnswers = [
  {
    question: 'Is Planly free to use?',
    answer:
      'Yes. Planly is free for planning with friends. You can create events, invite your crew, vote, and keep everything organized without paying.',
    value: 'question-1',
  },
  {
    question: 'Do my friends need an account?',
    answer:
      'No account is needed to view an invite or vote. Friends can join in seconds from the link you share.',
    value: 'question-2',
  },
  {
    question: 'What kinds of events can I plan?',
    answer:
      'Anything worth getting together for—from dinner and game night to a weekend away, birthday party, or full group trip.',
    value: 'question-3',
  },
  {
    question: 'Can I change a plan after inviting people?',
    answer:
      'Absolutely. Updates appear in one place, and everyone on the guest list can see the latest plan right away.',
    value: 'question-4',
  },
]

function FAQ() {
  return (
    <section
      id="faq"
      className="bg-secondary px-5 py-28 sm:px-8 lg:py-36 text-secondary-foreground"
    >
      <div className="mx-auto grid max-w-275 gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">
            Good to know
          </p>
          <h3 className="text-5xl mt-5 tracking-tighter sm:text-6xl">
            Questions? <br />
            We&apos;ve got you.
          </h3>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Still curious? The best way to understand Planly is to start a plan.
          </p>
        </div>
        <Accordion defaultValue={[questionsAndAnswers[0].value]}>
          {questionsAndAnswers.map((faq) => (
            <AccordionItem value={faq.value} key={faq.value}>
              <AccordionTrigger className={'text-xl'}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={'text-base'}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
export default FAQ
