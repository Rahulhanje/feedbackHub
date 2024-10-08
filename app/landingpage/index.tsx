import React from 'react'
import PricingSection from './pricing-section'
import Hero from './hero'
import FeaturesSection from './featuresection'
import Footer from './footer'

function LandingPage() {
  return (
    <div   className="mx-24 ">
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
