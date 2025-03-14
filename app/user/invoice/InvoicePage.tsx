'use client'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import { Icons } from '@/app/components/ui/icons'
import React from 'react'

function InvoicePage() {
  return (
    <div>
      <DashboardHero />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">
          {/* My Invoice Section */}
          <section className="bg-[#D9D9D929] p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
            <h2 className="text-base font-light mb-4">My Invoice</h2>
            <table className="w-full text-black border-collapse border border-[#211D1D]">
              <thead>
                <tr className="text-sm">
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                  <th className="px-5 py-2 border border-[#211D1D] font-light text-start">Order Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[#211D1D]">
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                  <td className="px-5 py-2 border-b border-b-[#211D1D] font-light flex items-center justify-between gap-10">
                    <span>02-13-2025</span>
                    <span className=" cursor-pointer flex items-center gap-1 whitespace-nowrap">View Invoice <Icons.Download /></span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                  <td className="px-5 py-2 font-light flex items-center justify-between gap-10">
                    <span>02-13-2025</span>
                    <span className=" cursor-pointer flex items-center gap-1 whitespace-nowrap">View Invoice <Icons.Download /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        </main>
      </div>

    </div>
  )
}

export default InvoicePage