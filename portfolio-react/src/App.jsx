import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import MyWork from './Component/MyWork/MyWork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App
