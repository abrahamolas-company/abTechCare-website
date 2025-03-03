'use client'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React, { useRef } from 'react'

function ContactUsSection() {

    const contactRef = useRef<HTMLDivElement>(null);
    return (
        <section ref={contactRef} id="contact" className='bg-[#fff] md:pt-5'>
            <div className={`${sectionPadding} flex flex-col md:flex-row items-center justify-center gap-5 md:gap-28 pt-8 pb-16 md:pt-0`}>

                <div className="mt-3">
                    <h2 className='text-[#211D1D] font-medium text-[35px] leading-10 mb-3'>Contact Us </h2>
                    <p className='max-w-[500px] leading-6 mb-2 text-sm font-normal flex flex-col text-[#211D1D] '>
                        <span className='text-[#FFCC29]'>Nigeria Contact</span>
                        21 Kodesho Street, Computer Village, Lagos State <br />
                        +234 916 870 1802 <br />
                        abtech_care
                    </p>
                    <p className='max-w-[500px] leading-6 mb-2 text-sm font-normal flex flex-col text-[#211D1D] '>
                        <span className='text-[#FFCC29]'>China Contact</span>
                        所在地区: 广东省佛山市南海区大沥镇
                        详细地址: 教育路与沙溪路交叉口东北方向90米一番街E座0722
                        <br />
                        +86 159 2016 5954 
                    </p>
                </div>
                <div className="relative flex justify-center">
                    <div className="w-[350px] h-[350px]">
                        <Image
                            src={images.globe}
                            alt="image"
                            className=" w-full h-full object-cover"
                        /></div>
                </div>

            </div>
        </section>
    )
}

export default ContactUsSection