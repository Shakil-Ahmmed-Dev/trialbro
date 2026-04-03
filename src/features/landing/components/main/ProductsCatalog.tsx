import { Sparkles, Zap, Shield, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    description:
      'Advanced AI assistant with GPT-4 access, faster responses, and priority support.',
    price: 20,
    originalPrice: 29.99,
    badge: 'Most Popular',
    icon: Sparkles,
    color: 'bg-teal-500',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
  },
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    description:
      'Ultra-smart coding assistant with extended context and superior reasoning.',
    price: 20,
    originalPrice: 29.99,
    badge: 'Best for Coders',
    icon: Zap,
    color: 'bg-indigo-600',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    description:
      'Design for teams with premium templates, magic resize, and brand kit.',
    price: 12.99,
    originalPrice: 19.99,
    badge: null,
    icon: Star,
    color: 'bg-blue-500',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  },
  {
    id: 'google-ai-pro',
    name: 'Google AI Pro',
    description:
      'Gemini Pro 3.1 with advanced reasoning and multimodal capabilities.',
    price: 18.99,
    originalPrice: 24.99,
    badge: 'New',
    icon: Shield,
    color: 'bg-orange-600',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
  },
  {
    id: 'midjourney',
    name: 'Midjourney Pro',
    description:
      'Generate stunning AI artwork with unlimited fast generation and priority queues.',
    price: 24.99,
    originalPrice: 34.99,
    badge: null,
    icon: Star,
    color: 'bg-purple-600',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description:
      'AI pair programmer that writes code faster with autocomplete and chat.',
    price: 10,
    originalPrice: 15,
    badge: null,
    icon: Zap,
    color: 'bg-gray-800',
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description:
      'AI-powered workspace with writing assistance, summarization, and automation.',
    price: 10,
    originalPrice: 15,
    badge: null,
    icon: Zap,
    color: 'bg-gray-600',
    image:
      'https://images.unsplash.com/photo-1662947237402-79437809e507?w=400&h=300&fit=crop',
  },
  {
    id: 'perplexity',
    name: 'Perplexity Pro',
    description:
      'AI-powered search engine with instant answers and cited sources.',
    price: 19,
    originalPrice: 24.99,
    badge: null,
    icon: Zap,
    color: 'bg-orange-500',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description:
      'Generative AI for creative design with text-to-image and vector generation.',
    price: 4.99,
    originalPrice: 9.99,
    badge: null,
    icon: Star,
    color: 'bg-red-600',
    image:
      'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=400&h=300&fit=crop',
  },
]

function ProductCard({
  product,
  className,
}: {
  product: (typeof products)[number]
  className?: string
}) {
  const Icon = product.icon
  return (
    <div
      className={`group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <div
          className={`absolute inset-0 ${product.color} flex items-center justify-center`}
        >
          <Icon className="w-16 h-16 text-white/90" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground text-xs font-medium shadow-lg">
              {product.badge}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-heading font-bold text-foreground">
              ${product.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
          >
            View <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ProductsCatalog() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Premium AI Subscriptions
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Our AI Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our collection of premium AI subscriptions at discounted
            rates. Instant access, secure payments, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="text-base px-8">
            View All Products <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
