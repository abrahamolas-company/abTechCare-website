'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { sectionPadding } from '../styles/styles'
import { easeOutExpo } from '../components/constants/easings'
import Image from 'next/image'
import images from '@/public/images'
import B2bHerosection from '../b2b-services/B2bHerosection'
import BecomeAnEngineerFormSection from './BecomeAnEngineerFormSection'

function BecomeAnEngineerPage() {
    return (
        <section className=' pb-14'>
            <B2bHerosection />
            <div className={`${sectionPadding} flex flex-col md:flex-row items-start justify-between gap-5 md:gap-14 pt-8 pb-0 md:pt-0`}>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: -0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                    className="mt-3 w-full">
                    <h2 className='text-[#211D1D] font-extrabold text-[40px] leading-snug mb-3'>Become  one  of our service Engineers</h2>
                    <p className='max-w-[500px] leading-6 mb-2 text-base font-light'>
                        Join Abtechcare as a Service Center Engineer and be part of a growing network of top-tier technicians dedicated to providing premium repair solutions.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                    className="relative w-full flex justify-center">
                    <div className="relative lg:w-[90vw] max-w-[365px]">
                        <Image
                            src={images.engineer}
                            alt="book a repair"
                            className="rounded-full w-full h-auto aspect-square object-cover"
                        />
                        {/* Top circle */}
                        <span className="absolute top-[5%] animate-bounce-slow right-[3%] w-[22%] h-[22%] rounded-full bg-[#FFCC29]/60 z-10"></span>
                        {/* Bottom circle */}
                        <span className="absolute bottom-[5%] right-[1%] animate-bounce-slow w-[30%] h-[30%] rounded-full bg-[#FFCC29]/60"></span>
                    </div>
                </motion.div>

            </div>

            <div className="bg-[#FFCC2933] text-[#211D1D] py-5 mb-7">
                <div className={`${sectionPadding}`}>
                <h3 className='font-bold text-lg'>Requirements</h3>
                 <ul className='list-disc ml-5 leading-7 font-light'>
                 <li>
                        Minimum of 2 years experience in gadget repairs (mobile phones, tablets, laptops, etc.)
                    </li>
                    <li>
                        Certified training in electronics repair or related fields (preferred but not mandatory)
                    </li>
                    <li>
                        Proficiency in diagnosing and troubleshooting hardware and software issues
                    </li>
                    <li>
                        Ability to handle modern repair tools and techniques
                    </li>
                    <li>
                        Good communication skills and customer service orientation
                    </li>
                    <li>
                        Must have a functional workspace or access to a service center
                    </li>
                    <li>
                        Willingness to adhere to Abtechcare&apos;s quality and service standards
                    </li>
                 </ul>
                </div>
            </div>
            <BecomeAnEngineerFormSection />
        </section>
    )
}

export default BecomeAnEngineerPage