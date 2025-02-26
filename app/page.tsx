import React from 'react'
import Herosection from './components/Homepage/Herosection'
import BookARepairSection from './components/Homepage/BookARepairSection'
import B2BSection from './components/Homepage/B2BSection'
import ServiceSection from './components/Homepage/ServiceSection'
import AboutUsSection from './components/Homepage/AboutUsSection'
import ContactUsSection from './components/Homepage/ContactUsSection'
import PartnerSection from './components/Homepage/PartnerSection'
import PickupAndDelivery from './components/Homepage/PickupAndDelivery'

function HomePage() {
  return (
    <main>
       <Herosection />
       <BookARepairSection/>
       <B2BSection/>
       <ServiceSection/>
       <PickupAndDelivery/>
       <AboutUsSection/>
       <ContactUsSection/>
       <PartnerSection/>
    </main>
  )
}

export default HomePage