import React from 'react'
import Herosection from './components/Homepage/Herosection'
import BookARepairSection from './components/Homepage/BookARepairSection'
import B2BSection from './components/Homepage/B2BSection'

function HomePage() {
  return (
    <main>
       <Herosection />
       <BookARepairSection/>
       <B2BSection/>
    </main>
  )
}

export default HomePage