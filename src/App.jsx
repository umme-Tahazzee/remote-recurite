import React from 'react'
import Hero from './sections/hero'
import Navbar from './layout/navbar'
import Globalresearch from './sections/global-research'
import CommonQuestions from './sections/common-questions'
import Footer from './layout/footer'
import AreYouReady from './sections/are-you-ready'

const App = () => {
  return (
    <main className=' w-full'> 
      <Navbar />   
      <Hero />
      <Globalresearch/>
      <AreYouReady/>
      <CommonQuestions/>
      <Footer/>
    </main>
  )
}

export default App