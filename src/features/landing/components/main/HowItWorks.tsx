import { ShoppingCart, Verified, Rocket } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    icon: ShoppingCart,
    title: 'Choose product',
    description:
      'Select from our wide range of premium AI tools and subscription durations.',
  },
  {
    icon: Verified,
    title: 'Secure setup process',
    description:
      'Our team handles the secure backend setup and account provisioning instantly.',
  },
  {
    icon: Rocket,
    title: 'Start using',
    description:
      'Receive your credentials via dashboard and email and start prompting immediately.',
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  return (
    <Card className="bg-card border-none shadow-none text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <step.icon className="size-8 text-primary" aria-hidden="true" />
        </div>
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
          {index + 1}
        </div>
        <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </CardContent>
    </Card>
  )
}

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
