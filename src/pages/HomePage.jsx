import React from 'react'
import { Navbar, Hero, About, Career, Contact, Footer } from '../components/index'

const HomePage = () => {
  return (
    <div className='bg-body text-white font-poppins'>
        <Navbar />
        <Hero />
        <About />
        <Career />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage
