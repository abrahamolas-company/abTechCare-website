'use client'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import { Icons } from '@/app/components/ui/icons'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import React from 'react'

function PaymentPage() {
  return (
    <div>
        <DashboardHero/>
        <div className="flex">
            <Sidebar />  
            <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">

        {/* My payment Section */}
        <section className="bg-[#D9D9D929] mb-20 p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-base font-light mb-4">Payment History</h2>
          <table className="w-full text-black border-collapse border border-[#211D1D]">
            <thead>
              <tr className="text-sm">
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Invoice No</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order Date</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Payment Choice</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Payment Strech</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Amount</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              <tr>
                <td className="px-3 py-2 border border-[#211D1D] font-light">#000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Flexible Payment</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">3 month(s)</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">₦200,000</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border border-[#211D1D] font-light">#000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Full Payment</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Instant</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">₦500,000</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
        </div>
         
    </div>
  )
}

export default PaymentPage