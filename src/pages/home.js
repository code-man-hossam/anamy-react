import React from 'react'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Products from '../components/Products'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Goals />
      <Services />
      <Products />
    </>
  )
}

export default Home
