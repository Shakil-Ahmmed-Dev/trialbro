import CTABanner from './CTABanner'
import FAQ from './FAQ'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import ProductsCatalog from './ProductsCatalog'
import Testimonials from './Testimonials'
import WhatWeOffer from './WhatWeOffer'

export default function Main() {
  return (
    <main>
      <HeroSection />
      <ProductsCatalog />
      <HowItWorks />
      <WhatWeOffer />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  )
}

export {
  HeroSection,
  ProductsCatalog,
  HowItWorks,
  WhatWeOffer,
  Testimonials,
  FAQ,
  CTABanner,
}
