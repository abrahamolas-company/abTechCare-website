'use client'
import { sectionPadding } from '@/app/styles/styles'
import React from 'react'
import { motion } from 'framer-motion'

function PartnerSection() {
  return (
    <section className={`${sectionPadding} text-center mt-5`}>
      <h2 className='text-[#211D1D] font-medium text-2xl mb1'>Our Partners</h2>
      <p className='text-[#211D1D] max-w-[1000px] leading-6 mb-[30px] text-sm md:text-base mx-auto'>We partner with a wide range of skilled engineers and technicians in the repair industry. This extensive network ensures that no matter the issue, we have the right specialist to handle your gadget with precision and expertise.</p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-5 mb-16">

        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 * index + 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2, ease: 'linear' }}
            key={index}>

            <p className="bg-[#D9D9D9] text-black min-w-4 py-2 rounded text-center">logo</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PartnerSection