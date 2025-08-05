import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhatWeDo from './components/WhatWeDo'
import DesignServices from './components/DesignServices'
import WhyUs from './components/WhyUs'
import OurWork from './components/OurWork'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatWeDo />
      <DesignServices />
      <WhyUs />
      <OurWork />
      <Fotter />
    </div>
  )
}

export default App
