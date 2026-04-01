import CTABanner from './CTABanner'
import FAQ from './FAQ'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import ProductsCatalog from './ProductsCatalog'
import Testimonials from './Testimonials'
import WhatweOffer from './WhatweOffer'

export default function Main() {
  return (
    <main>
      <HeroSection />
      <ProductsCatalog />
      <HowItWorks />
      <WhatweOffer />
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
  WhatweOffer,
  Testimonials,
  FAQ,
  CTABanner,
}
