import React from 'react'
import Hero from './sections/hero'
import Navbar from './layout/navbar'
import Globalresearch from './sections/global-research'
import CommonQuestions from './sections/common-questions'
import Footer from './layout/footer'

const App = () => {
  return (
    <main className='relative w-full'> 
      <Navbar />   
      <Hero />
      <Globalresearch/>
      <CommonQuestions/>
      <Footer/>
    </main>
  )
}

export default App