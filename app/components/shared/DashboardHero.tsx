import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'

function DashboardHero() {
    return (
        <section className={`${sectionPadding} pt-[100px] relative z-0 after:absolute after:blur-[100px] after:rounded-full after:w-80 after:h-60 after:bg-white/10 after:contents after:top-0 after:left-0 overflow-hidden`}>
            <div className='absolute top-0 left-0 h-[100px] w-full md:h-[110px]'>
                <Image src={images.dashboard_hero} alt="Hero background" className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
            </div>
        </section>
    )
}

export default DashboardHero