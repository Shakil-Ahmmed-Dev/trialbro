import { useCallback, useEffect, useState } from 'react'

import { Star, Quote } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'AI Researcher',
    avatar: '',
    content:
      'Trial Bro gave me access to premium AI tools without the upfront commitment. The GPT-4 access through my subscription has been invaluable for my research.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Startup Founder',
    avatar: '',
    content:
      "As a startup, we couldn't afford enterprise pricing. Trial Bro's flexible plans let us access cutting-edge AI while scaling.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    avatar: '',
    content:
      'The Claude access has transformed my content workflow. What used to take hours now takes minutes. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Liu',
    role: 'Software Engineer',
    avatar: '',
    content:
      'Best decision I made this year. The seamless setup process and reliable access to premium AI models is unmatched.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Amanda Foster',
    role: 'Product Manager',
    avatar: '',
    content:
      'Incredible service! The team is super responsive and the AI tools have been a game changer for our product roadmap.',
    rating: 5,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Data Scientist',
    avatar: '',
    content:
      'Access to multiple AI models in one place is exactly what I needed. The quality of outputs is consistently high.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Lisa Thompson',
    role: 'Freelance Writer',
    avatar: '',
    content:
      'Trial Bro made it so easy to get started with AI writing tools. Setup was instant and the dashboard is intuitive.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Robert Martinez',
    role: 'Marketing Director',
    avatar: '',
    content:
      'The ROI on this subscription has been incredible. Our campaigns are performing better than ever thanks to AI assistance.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <Card className="bg-white border-none shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 min-w-sm h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <StarRating rating={testimonial.rating} />
          <Quote className="size-8 text-primary/20" aria-hidden="true" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CarouselPagination({
  totalSlides,
  currentSlide,
  onSlideClick,
}: {
  totalSlides: number
  currentSlide: number
  onSlideClick: (index: number) => void
}) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSlideClick(i)}
          className={`w-2 h-2 rounded-full transition-[width,background-color] duration-300 ${
            i === currentSlide
              ? 'bg-primary w-6'
              : 'bg-primary/20 hover:bg-primary/40'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4
  const slidesToScroll = Math.ceil(testimonials.length / totalSlides)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const handleSlideClick = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their workflow
            with Trial Bro
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            slidesToScroll,
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselContent className="-ml-4 py-4 px-1">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </Carousel>

        <CarouselPagination
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          onSlideClick={handleSlideClick}
        />
      </div>
    </section>
  )
}
