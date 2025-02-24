'use client'
import React, { useEffect, useState } from 'react'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import { Icons } from '../ui/icons'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../constants/easings'

export default function Herosection() {
    return (
        <section className={`${sectionPadding} pt-40 md:pt-56 relative after:absolute after:blur-[100px] after:rounded-full after:w-80 after:h-60 after:bg-white/10 after:contents after:top-0 after:left-0 after:z-10`}>
            <div className='absolute top-0 left-0 h-[70vh] w-full md:h-[75vh]'>
                <Image src={images.home_hero} alt="Hero background" className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
            </div>
            <div className='flex flex-col gap-14 z-10 relative md:flex-row md:justify-between'>
                <div className='text-white md:w-1/2'>
                    <motion.h1
                        initial={{ opacity: 0, y: -6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, ease: 'linear' }}
                        className='text-[36px] md:text-[34px] lg:text-[45px] leading-[44px] font-extrabold md:leading-[55px]'>Smart Repairs, <br />
                        Zero Hassle:</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: -0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: easeOutExpo }}
                        className='mt-3 text-sm md:text-base font-medium leading-6 mb-2 w-[85%] lg:text-base lg:leading-8 md:w-[80%]'>We Pickup, Repair and Deliver <br /> <span className='text-[#FFCC29]'> Flexible Payment!</span></motion.p>
                    <div className='flex items-center gap-5'>
                        <button className='bg-[#FFCC29] rounded-[10px] text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-white'>Get a quote</button>
                        <button className='border border-[#FFCC29] rounded-[10px] text-white py-3 px-10 hover:bg-[#FFCC29] hover:text-[#211D1D] transition-all ease-in-out duration-300'>Pickup and Delivery</button>
                    </div>
                </div>
            </div>
        </section>
    )
}