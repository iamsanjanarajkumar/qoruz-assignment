import React from 'react'
import Nav from './components/navigation/Nav'
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import ExploreMore from './components/exploreMore/ExploreMore'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Cards/>
      <ExploreMore/>
      <Footer/>
    </div>
  )
}

export default App
