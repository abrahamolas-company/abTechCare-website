'use client'
import React from 'react'
import { sectionPadding } from '@/app/styles/styles'

export default function B2bHerosection() {

    return (
        <section className={`${sectionPadding} pt-28 md:pt-40 relative`}>
            {/* Background Overlay */}
            <div className='absolute top-0 left-0 h-[100px] w-full md:h-[120px]'>
                <div className='absolute top-0 left-0 w-full h-full bg-[#0D1215]'></div>
            </div>
        </section>
    )
}
