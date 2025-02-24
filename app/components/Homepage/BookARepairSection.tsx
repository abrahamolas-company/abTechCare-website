import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'

function BookARepairSection() {
    return (
        <section className='bg-[#FFCC2914] pt-44 grid place-items-center'>
            <div className={`${sectionPadding} flex flex-col md:flex-row justify-center gap-5 md:gap-14 pt-8 pb-16 md:pt-0`}>
                <div className="w-full md:w-[350px] h-full">
                    <Image src={images.book_a_repair} alt='book a repair' className='w-full h-full object-cover' />
                </div>
                <div className="mt-3">
                    <h2 className='text-[#211D1D] font-medium text-[35px] leading-10 mb-3'>Book a <br /> Repair Service</h2>
                    <p className='max-w-[500px] leading-6 mb-2 text-sm font-light'>Experience a seamless solution to your gadget woes with our professional repair services. </p>
                    <p className='max-w-[500px] leading-6 text-sm font-light mb-4'>
                        We understand the frustration of dealing with a broken device, which is why we&apos;re here to provide you with fast, reliable, affordable repairs and delivery to get you back up and running in no time.
                    </p>
                    <button className='bg-[#FFCC29] rounded-[10px] text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]'>Book Now</button>
                </div>
            </div>
        </section>
    )
}

export default BookARepairSection