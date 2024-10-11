import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import { About } from './Components/About'
import { Projects } from './Components/Projects'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
