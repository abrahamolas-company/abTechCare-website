'use client'
import React from 'react'
import { sectionPadding } from '../styles/styles'
import Image from 'next/image'
import images from '@/public/images'
import { motion } from 'framer-motion'

function QuoteHeroBanner() {
  return (
    <section className={`${sectionPadding} pt-48 md:pt-56 pb-3 md:mb-5 relative after:absolute after:blur-[100px] after:rounded-full after:w-80 after:h-60  after:contents after:top-0 after:left-0 after:z-10`}>
  <div className='absolute top-0 left-0 h-[450px] w-full md:h-[500px] lg:h-[60vh]'>          
        <Image src={images.quote_hero} alt="Hero background" className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out' />
        {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div> */}
    </div>
    <div className='flex flex-col gap-14 z-10 relative md:flex-row md:justify-between'>
        <div className='text-white md:w-1/2'>
            <motion.h1
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: 'linear' }}
                className='text-[30px] leading-[44px] mt-4 font-light'>
                Get a quick <span className='bg-[#FFCC29] px-2 !text-[#211D1D]'>QUOTE</span>
                </motion.h1>
        </div>
    </div>
</section>
  )
}

export default QuoteHeroBanner