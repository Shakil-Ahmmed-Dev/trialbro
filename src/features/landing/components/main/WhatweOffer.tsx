import { Lock, Zap, Headphones } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const offers = [
  {
    icon: Lock,
    title: 'Secure access process',
    description:
      'We use enterprise-grade encryption and secure private handling for every transaction.',
  },
  {
    icon: Zap,
    title: 'Fast delivery',
    description:
      '95% of orders are delivered within 15 minutes. No waiting around for days.',
  },
  {
    icon: Headphones,
    title: 'Support availability',
    description:
      'Dedicated human support team ready to assist you via WhatsApp and Live Chat.',
  },
]

export default function WhatWeOffer() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why choose Trial Bro for your AI needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card
              key={offer.title}
              className="bg-card border-none shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <offer.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
