'use client'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import { Icons } from '@/app/components/ui/icons'
import React from 'react'

function DashboardPage() {
  return (
    <div>
      <DashboardHero />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">

          {/* My Orders Section */}
          <section className="bg-[#D9D9D929] mb-20 p-4 rounded-lg shadow-md overflow-x-auto">
            <h2 className="text-base font-light mb-4">My Repairs</h2>
            <table className="w-full text-black border-collapse border border-[#211D1D]">
              <thead>
                <tr className="text-sm">
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Date Received </th>
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Date Released</th>
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Fault Fixed</th>
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Gadget Status</th>
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Amount</th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Iphone 13 Screen Replacement</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Satisfactory</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">₦200,000</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* My Invoice Section */}
          <section className="bg-[#D9D9D929] p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
            <h2 className="text-base font-light mb-4">My Payments</h2>
            <table className="w-full text-black border-collapse border border-[#211D1D]">
              <thead>
                <tr className="text-sm">
                  <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                  <th className="px-5 py-2 border border-[#211D1D] font-light text-start">Fault Fixed</th>
                  <th className="px-5 py-2 border border-[#211D1D] font-light text-start">Payment Status</th>
                  <th className="px-5 py-2 border border-[#211D1D] font-light text-start">Amount</th>
                  <th className="px-5 py-2 border border-[#211D1D] font-light text-start">Repair Rating</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[#211D1D]">
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Iphone 13 Screen Replacement</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Full Payment</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">#150,000</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">5 Star <br />
                    The Repair was Perfect</td>

                </tr>
              </tbody>
            </table>
          </section>

        </main>
      </div>

    </div>
  )
}

export default DashboardPage