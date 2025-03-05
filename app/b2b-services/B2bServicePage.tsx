'use client'
import React from 'react'
import B2bHerosection from './B2bHerosection'
import { motion } from 'framer-motion'
import { sectionPadding } from '../styles/styles'
import { easeOutExpo } from '../components/constants/easings'
import Image from 'next/image'
import images from '@/public/images'
import B2bFormSection from './B2bFormSection'

function B2bServicePage() {
    return (
        <section className=' pb-14'>
            <B2bHerosection />
            <div className={`${sectionPadding} flex flex-col md:flex-row text-[#211D1D] justify-between gap-5 md:gap-14 pb-10 md:pt-0`}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: -0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                    className="mt-3 w-full order-2 md:order-1">
                    <h2 className='text-[#211D1D] font-bold text-3xl text-center md:text-start md:text-[40px] leading-10 mb-3'>B2B SERVICES </h2>
                   <div className="">
                   <p className='mb-1 text-sm font-bold'>
                        Why Partner with Us?
                    </p>
                    <ul className='!list-disc text-[15px] leading-6 ml-5 font-light'>
                        <li>Dedicated Repair & Maintenance Plans</li>
                        <li>Priority Service & Bulk Repairs</li>
                        <li>Flexible Payment & Subscription Plans</li>
                        <li>Seamless Logistics: Pickup & Delivery</li>
                        <li>Comprehensive Warranty & Insurance Solutions</li>
                        <li>Real-Time Repair Tracking & Management Dashboard</li>
                    </ul>
                   </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                    className="w-full flex justify-center h-[340px] order-1 md:order-2">
                    <Image
                        src={images.b2b_img}
                        alt="book a repair"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

            </div>
            <B2bFormSection/>
        </section>
    )
}

export default B2bServicePage