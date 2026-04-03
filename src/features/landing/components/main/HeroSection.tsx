import { Bot, Sparkles, Palette, Brain } from 'lucide-react'

import { Button } from '@/components/ui/button'

const tools = [
  {
    icon: Bot,
    name: 'ChatGPT Plus',
    subtitle: 'Active Subscription',
    color: 'bg-teal-500',
  },
  {
    icon: Sparkles,
    name: 'Claude Pro',
    subtitle: 'Ultra-Smart Coding',
    color: 'bg-indigo-600',
  },
  {
    icon: Palette,
    name: 'Canva Pro',
    subtitle: 'Design for Teams',
    color: 'bg-blue-500',
  },
  {
    icon: Brain,
    name: 'Google AI Pro',
    subtitle: 'Gemini Pro 3.1',
    color: 'bg-orange-600',
  },
]

const trustedBrands = [
  'ChatGPT Plus',
  'Google AI Pro',
  'Claude Pro',
  'Microsoft Copilot',
  'Canva Pro',
]

function ToolCard({
  tool,
  className,
}: {
  tool: (typeof tools)[number]
  className?: string
}) {
  return (
    <div
      className={`bg-card p-6 rounded-xl border border-primary/80 shadow-sm flex items-center gap-4 ${className}`}
    >
      <div
        className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white`}
      >
        <tool.icon className="size-6" />
      </div>
      <div>
        <p className="font-bold">{tool.name}</p>
        <p className="text-xs text-muted-foreground">{tool.subtitle}</p>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <>
      <section className="p-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Get Premium AI Tools
              <br />
              <span className="text-primary">for Less.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Access ChatGPT Plus, Claude Pro, and more at discounted rates.
              Secure, reliable, and instant access to the world&apos;s most
              powerful AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" className="text-lg px-8">
                Browse Plans
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="text-lg px-8 border-2"
              >
                How it Works
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-125">
            <div className="absolute inset-0 grid grid-cols-2 gap-4 rotate-3 scale-110 opacity-40 md:opacity-100">
              <div className="space-y-4 pt-12">
                <ToolCard tool={tools[0]} className="-translate-x-8" />
                <ToolCard tool={tools[1]} className="translate-x-4" />
              </div>
              <div className="space-y-4">
                <ToolCard tool={tools[2]} className="translate-x-12" />
                <ToolCard tool={tools[3]} className="-translate-x-4 pt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
            Trusted by 10,000+ users globally
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 font-bold text-lg md:text-xl"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
