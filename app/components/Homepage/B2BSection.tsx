import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'

function B2BSection() {
    return (
        <section className='bg-[#fff] md:pt-16'>
            <div className={`${sectionPadding} flex flex-col md:flex-row items-center justify-between gap-5 md:gap-14 pt-8 pb-16 md:pt-0`}>

                <div className="mt-3 w-full">
                    <h2 className='text-[#211D1D] font-medium text-[35px] leading-10 mb-3'>B2B Services </h2>
                    <p className='max-w-[500px] leading-6 mb-2 text-sm font-light'> At Abtechcare, we offer businesses, organizations, and service providers a dedicated B2B platform for efficient and scalable gadget repair solutions. </p>
                    <p className='max-w-[500px] leading-6 text-sm font-light mb-4'>
                        Whether you manage a corporate fleet of devices, run a retail business, or provide warranty services, our platform ensures smooth operations with end-to-end repair and maintenance support.            </p>
                    <button className='bg-[#FFCC29] rounded-[10px] text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]'>Partner with us</button>
                </div>
                <div className="relative w-full flex justify-center">
                    <div className="relative lg:w-[90vw] max-w-[450px]">
                        <Image
                            src={images.b2b_section}
                            alt="book a repair"
                            className="rounded-full w-full h-auto aspect-square object-cover"
                        />
                        {/* Top circle */}
                        <span className="absolute top-[5%] right-[3%] w-[22%] h-[22%] rounded-full bg-[#FFCC29]/60 z-10"></span>
                        {/* Bottom circle */}
                        <span className="absolute bottom-[5%] right-[1%] w-[30%] h-[30%] rounded-full bg-[#FFCC29]/60"></span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default B2BSection