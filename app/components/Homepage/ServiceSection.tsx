'use client'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React, { useState } from 'react'
import { Icons } from '../ui/icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FlexiblePaymentModal from '../modal/FlexiblePaymentModal'

function ServiceSection() {
  const [isFlexiblePaymentModalOpen, setIsFlexiblePaymentModalOpen] = useState(false)

  const services = [
    {
      icon: Icons.MoneyBag,
      title: 'Flexible Payment',
      text: 'Repair now, pay later with flexible options.',
      btnText: 'Book Now',
      image: images.payment_image,
    },
    {
      icon: Icons.Insurance,
      title: 'Gadget Insurance',
      text: 'Secure your device against unexpected damage',
      btnText: 'Start Now',
      image: images.insurance_image,
      link: '/gadget-insurance'
    },
    {
      icon: Icons.Tracker,
      title: 'Track your Repair Status',
      text: 'Stay updated on your gadget’s repair progress',
      btnText: 'Track Status',
      image: images.tracker_image,
      link: '/track-your-repair'
    }
  ]

  return (
    <>
      {isFlexiblePaymentModalOpen && (
        <FlexiblePaymentModal
          isFlexiblePaymentModalOpen={isFlexiblePaymentModalOpen}
          setIsFlexiblePaymentModalOpen={setIsFlexiblePaymentModalOpen}
        />
      )}

      <section className="relative min-h-[75vh] flex items-center justify-center pb-10 md:pb-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={images.service_section}
            alt="service background"
            className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-white opacity-75"></div>
        </div>

        <div className={`${sectionPadding} relative z-10`}>
          <div className="text-[#211D1D] text-center md:!text-start">
            <h1 className='font-medium text-2xl md:text-[35px]'>Explore more Services</h1>
            <p className='mb-6 text-sm md:text-lg font-light'>Best Leading Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 * index + 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2, ease: 'linear' }}
                className="bg-[#FFCC2917] text-[#211D1D] p-5 rounded-lg shadow-lg"
                key={index}
              >
                <span className='w-[40px] h-[40px] mb-[6px] rounded-full bg-[#FFCC29] flex items-center justify-center'>
                  <service.icon />
                </span>
                <h2 className="font-normal text-lg md:text-xl ">{service.title}</h2>
                <p className='text-sm mb-4 font-light md:max-w-[200px]'>{service.text}</p>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[150px] object-cover rounded-md mb-4"
                />
                {index === 0 ? (
                  <button
                    onClick={() => setIsFlexiblePaymentModalOpen(true)}
                    className="bg-[#FFCC29] w-fit flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-2 px-8 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]"
                  >
                    {service.btnText}
                  </button>
                ) : (
                  // <Link 
                  //   href={service.link} 
                  //   className="bg-[#FFCC29] w-fit flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-2 px-8 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]"
                  // >
                  //   {service.btnText}
                  // </Link>
                  <Link
                    href={service.link ?? "#"} // Fallback to "#" if link is undefined
                    className="bg-[#FFCC29] w-fit flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-2 px-8 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]"
                  >
                    {service.btnText}
                  </Link>

                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSection;
