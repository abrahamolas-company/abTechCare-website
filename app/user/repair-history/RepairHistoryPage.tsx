'use client'
import { useGetUserRepairHistory, useGetUserRepairOrders } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { UserRepairHistoryResponse } from '@/app/components/models/IRepairOrder'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function RepairHistoryPage() {
  const getUserRepairHistory = useGetUserRepairHistory()
  const [repairHistorys, setRepairHistorys] = useState<UserRepairHistoryResponse[]>()
  const [loading, setLoading] = useState(true) 

  async function fetchUserRepairHistorys(id: number) {
    setLoading(true);
    getUserRepairHistory(id)
      .then((response) => {
        console.log(response.data.data.data)
        setRepairHistorys(response.data.data.data)
      })
      .catch((error) => {
        catchError(error);
        toast.error('Error fetching user order history.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      const id = JSON.parse(storedId);
      fetchUserRepairHistorys(id);
    }
  }, []);
  return (
    <div>
        <DashboardHero/>
        <div className="flex">
            <Sidebar />  
            <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">

        <section className="bg-[#D9D9D929] mb-20 p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-base font-light mb-4">Repair History</h2>
          {loading ? (
              // Show loader while loading
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              // Show table when data is loaded
              <table className="w-full text-black border-collapse border border-[#211D1D]">
                <thead>
                  <tr className="text-sm">
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order Date </th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Delivery Status</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Amount</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {repairHistorys?.length ? (
                    repairHistorys.map((history, index) => (
                      <tr key={index}>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{history.faultDescriptions}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{history.orderId}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{moment(history.orderCreatedAt).format('YYYY-MM-DD')}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{history.deliveryStatus}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">₦{history.price}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-3 py-6 text-center border border-[#211D1D] font-light">
                        No repair history found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
        </section>

      </main>
        </div>
         
    </div>
  )
}

export default RepairHistoryPage