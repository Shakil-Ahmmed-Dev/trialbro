import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does the free trial work?',
    answer:
      'Start your 7-day free trial with full access to all premium features. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through Stripe.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use industry-standard encryption to protect your data. Your information is stored securely and we never share your personal data with third parties.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund, no questions asked.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.06),transparent_50%)]" />
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-violet-600 mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-violet-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300 px-5"
              >
                <AccordionTrigger className="text-left text-slate-700 hover:text-violet-700 hover:no-underline text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
