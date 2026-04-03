import { Button } from '@/components/ui/button'

export default function CTABanner() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-900 text-primary-foreground p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Start Your AI Journey Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Limited-time offer: Get up to 50% off on all premium AI
            subscriptions. Unlock full access to ChatGPT, Claude, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="xl"
              variant="secondary"
              className="text-lg px-8 font-semibold"
            >
              Browse Plans
            </Button>
            <Button
              size="xl"
              className="text-lg px-8 font-semibold bg-white text-primary hover:bg-white/90"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
