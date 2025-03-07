'use client'
import React from 'react'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'

export default function GadgetRepairHerosection() {
    const electronics = [
        { image: images.phone, text: 'Phones' },
        { image: images.laptop, text: 'Laptops' },
        { image: images.drones, text: 'Drones' },
        { image: images.speaker, text: 'Speakers' },
        { image: images.game_console, text: 'Game Consoles' },
    ]

    return (
        <section className={`${sectionPadding} pt-40 md:pt-56 relative`}>
            {/* Background Overlay */}
            <div className='absolute inset-0 bg-[#0D1215]'></div>

            {/* Content */}
            <div className={`${sectionPadding} relative text-white text-center`}>
                <h1 className='text-[28px] font-bold mb-5'>
                    "Hassle-Free Gadget Repair"
                </h1>

                {/* Electronics List */}
                <div className="flex justify-center gap-4 items-center w-full overflow-x-auto">
                    <span className='h-[260px] overflow-hidden w-[14px] hidden md:block'><Image src={images.frame_design} alt='frame design' /></span>

                    {electronics.map((electronic, index) => (
                        <div key={index} className="flex flex-col items-center mb-5 ">
                            <div className="w-[193px] md:w-full">
                                <Image
                                    src={electronic.image}
                                    alt={electronic.text}
                                    width={193}
                                    height={220}
                                    className="w-[193px] h-[220px] object-cover rounded-[5px]"
                                />

                            </div>
                            <p className="mt-2 text-sm">{electronic.text}</p>
                        </div>
                    ))}

                    <span className='h-[260px] overflow-hidden w-[14px] hidden md:block'><Image src={images.frame_design} alt='frame design' /></span>
                </div>
            </div>
        </section>
    )
}
