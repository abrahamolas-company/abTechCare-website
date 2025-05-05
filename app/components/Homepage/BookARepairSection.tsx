'use client'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../constants/easings'
import Link from 'next/link'

function BookARepairSection() {
    return (
        <section className='bg-[#FFCC2914] pt-14 md:pt-20 grid place-items-center'>
            <div className={`${sectionPadding} flex flex-col md:flex-row justify-center gap-5 md:gap-14 pt-8 pb-16 md:pt-0`}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: -0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                className="w-full md:w-[350px] h-full">
                    <Image src={images.book_a_repair} alt='book a repair' className='w-full h-full object-cover' />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, ease: easeOutExpo }}
                className="mt-3 text-center md:text-start">
                    <h2 className='text-[#211D1D] font-medium text-[35px] leading-10 mb-3'>Book a <br /> Repair Service</h2>
                    <p className='max-w-[500px] leading-6 mb-2 text-sm font-light'>Experience a seamless solution to your gadget woes with our professional repair services. </p>
                    <p className='max-w-[500px] leading-6 text-sm font-light !pb-6'>
                        We understand the frustration of dealing with a broken device, which is why we&apos;re here to provide you with fast, reliable, affordable repairs and delivery to get you back up and running in no time.
                    </p>
                    <Link href={'/gadget-repair'} className='bg-[#FFCC29] rounded-[10px] text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]'>Book Now</Link>
                </motion.div>
            </div>
        </section>
    )
}

export default BookARepairSection