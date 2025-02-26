'use client'
import React, { useEffect, useState } from 'react'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GadgetInsuranceHerosection() {
    return (
        <section className={`${sectionPadding} pt-40 md:pt-56 relative after:absolute after:blur-[100px] after:rounded-full after:w-80 after:h-60 after:bg-white/10 after:contents after:top-0 after:left-0 after:z-10`}>
            <div className='absolute top-0 left-0 h-[70vh] w-full md:h-[65vh]'>
                <Image src={images.insurance_bg_img} alt="Hero background" className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
            </div>
            <div className='flex flex-col gap-14 z-10 relative md:flex-row md:justify-between'>
                <div className='text-white md:w-1/2'>
                    <motion.h1
                        initial={{ opacity: 0, y: -6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, ease: 'linear' }}
                        className='text-[36px] leading-[44px] md:leading-[50px] font-light'>
                        <span className='font-bold'>Secure </span> <br />
                        Your Gadget <br />
                        WITH CONFIDENCE
                    </motion.h1>

                </div>
            </div>
        </section>
    )
}