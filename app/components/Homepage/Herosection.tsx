'use client'
import React from 'react'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../constants/easings'
import Link from 'next/link'
// import PickupAndDeliveryModal from '../modal/PickupAndDeliveryModal'

export default function Herosection() {
    // const [isPickupAndDeliveryModalOpen, setIsPickupAndDeliveryModalOpen] = useState(false)
    return (
        <>
            {/* {isPickupAndDeliveryModalOpen && <PickupAndDeliveryModal isPickupAndDeliveryModalOpen={isPickupAndDeliveryModalOpen} setIsPickupAndDeliveryModalOpen={setIsPickupAndDeliveryModalOpen} />} */}
            <section className={`${sectionPadding} h-[calc(100vh-var(--hero-offset-mobile))] md:h-[calc(100vh-var(--hero-offset-md))] lg:h-[calc(100vh-var(--hero-offset-lg))] pt-52 md:pt-56 relative after:absolute after:blur-[100px] after:rounded-full after:w-80 after:h-60 after:bg-white/10 after:contents after:top-0 after:left-0 after:z-10`}>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image src={images.home_hero} alt="Hero background" className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out' />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                </div>
                <div className='flex flex-col gap-14 z-10 relative md:flex-row md:justify-between'>
                    <div className='text-white md:w-1/2 text-center md:text-left'>
                        <motion.h1
                            initial={{ opacity: 0, y: -6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, ease: 'linear' }}
                            className='text-[30px] md:text-[34px] lg:text-[45px] leading-[35px] font-extrabold md:leading-[50px] lg:leading-[55px] '>Smart Repairs, <br />
                            Zero Hassle:</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: -0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: easeOutExpo }}
                            className='mt-3 text-sm md:text-base font-medium leading-6 mb-2 w-full lg:text-base lg:leading-8 md:w-[80%]'>We Pickup, Repair and Deliver <br /> <span className='text-[#FFCC29]'> Flexible Payment!</span></motion.p>
                        <div className='flex text-[10px] md:text-xs lg:text-base items-center justify-center md:justify-start gap-3 md:gap-5 mt-4 md:mt-0 flex-wrap'>
                            <Link href="/quote" className='border border-[#FFFFFF] rounded-[10px] text-white py-2 px-7 md:py-3 md:px-7 text-sm md:whitespace-nowrap hover:bg-[#FFCC29] hover:text-[#211D1D] hover:border hover:border-[#FFCC29] transition-all ease-in-out duration-300'>Get a quote</Link>
                            {/* <button onClick={() => setIsPickupAndDeliveryModalOpen(true)} className='border border-[#FFFFFF] rounded-[10px] text-white py-2 px-7 md:py-3 md:px-7 text-sm md:whitespace-nowrap hover:bg-[#FFCC29] hover:text-[#211D1D] transition-all ease-in-out duration-300'>Pickup and Delivery</button> */}
                            <Link href="/gadget-repair" className='border border-[#FFFFFF] rounded-[10px] text-white py-2 px-7 md:py-3 md:px-7 text-sm md:whitespace-nowrap hover:bg-[#FFCC29] hover:text-[#211D1D] hover:border hover:border-[#FFCC29] transition-all ease-in-out duration-300'>Book a repair</Link>
                            <Link href="/rack-your-repair" className='border border-[#FFFFFF] rounded-[10px] text-white py-2 px-7 md:py-3 md:px-7 text-sm md:whitespace-nowrap hover:bg-[#FFCC29] hover:text-[#211D1D] hover:border hover:border-[#FFCC29] transition-all ease-in-out duration-300'>Track your repair</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}