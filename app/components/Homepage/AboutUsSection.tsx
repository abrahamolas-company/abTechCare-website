'use client'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../constants/easings'

function AboutUsSection() {
  return (

    <section className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full">
        <Image
          src={images.service_section}
          alt="service background"
          className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div
        className={`${sectionPadding} relative z-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14 pt-8 md:pt-0`}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: -0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }} className="w-full md:w-[350px] h-full">
          <Image src={images.about_section} alt='image' className='w-full h-full object-cover' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mt-3">
          <h2 className='text-[#211D1D] font-medium text-[35px] leading-10 mb-3'>About Us</h2>
          <p className='max-w-[500px] leading-[32px] mb-2 text-base font-normal'>At Abtechcare, we redefine gadget repair with convenience, efficiency, and flexibility. Our mission is to provide seamless repair services by offering easy pickup and delivery, expert technical support, and flexible payment options tailored to your needs.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsSection