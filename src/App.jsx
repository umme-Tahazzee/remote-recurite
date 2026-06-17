import React from 'react'
import Hero from './sections/hero'
import Navbar from './layout/navbar'
import Globalresearch from './sections/global-research'

const App = () => {
  return (
    <main className='relative w-full'> 
      <Navbar />   
      <Hero />
      <Globalresearch/>
    </main>
  )
}

export default App