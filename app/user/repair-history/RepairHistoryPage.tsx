'use client'
import { useGetUserRepairOrders } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { RepairOrderResponse, UserRepairOrdersResponse } from '@/app/components/models/IRepairOrder'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function RepairHistoryPage() {

  const getUserRepairOrders = useGetUserRepairOrders()

  const [repairOrders, setRepairOrders] = useState<UserRepairOrdersResponse[]>()
  const [loading, setLoading] = useState(false)

  async function fetchUserRepairOrders(id: number) {
    //show the loader
    setLoading(true);


    getUserRepairOrders(id)
      .then((response) => {
        console.log({ response });

        // setRepairOrder(data.data)
        // toast.success('Repair order fetched successfully')
      })
      .catch((error) => {
        catchError(error);
        toast.error('An error occurred. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      const id = JSON.parse(storedId);
      fetchUserRepairOrders(id);
    }
  }, []);
  return (
    <div>
        <DashboardHero/>
        <div className="flex">
            <Sidebar />  
            <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">

        {/* My payment Section */}
        <section className="bg-[#D9D9D929] mb-20 p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-base font-light mb-4">Repair History</h2>
          <table className="w-full text-black border-collapse border border-[#211D1D]">
            <thead>
              <tr className="text-sm">
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order Date</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Delivery Status</th>
                <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Amount</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              <tr>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Iphone 12 Pro Screen Replacement </td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Successful</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">₦200,000</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border border-[#211D1D] font-light">Laptop Board Repair</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">000000000</td>
                <td className="px-3 py-2 border border-[#211D1D] font-light">02-13-2025</td>
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

export default RepairHistoryPage