'use client'
import { useGetUserRepairOrders } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { UserRepairOrdersResponse } from '@/app/components/models/IRepairOrder'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import { Icons } from '@/app/components/ui/icons'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function DashboardPage() {
  const getUserRepairOrders = useGetUserRepairOrders()
  const [repairOrders, setRepairOrders] = useState<UserRepairOrdersResponse[]>()
  const [loading, setLoading] = useState(true) 

  async function fetchUserRepairOrders(id: number) {
    setLoading(true);
    getUserRepairOrders(id)
      .then((response) => {
        setRepairOrders(response.data.data.data)
      })
      .catch((error) => {
        catchError(error);
        toast.error('Error fetching user orders.');
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
      <DashboardHero />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">
          {/* My Orders Section */}
          <section className="bg-[#D9D9D929] mb-20 p-4 rounded-lg shadow-md overflow-x-auto">
            <h2 className="text-base font-light mb-4">My Orders</h2>

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
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Gadget Brand</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Gadget Model</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Issue</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order No</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Order Date</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Amount</th>
                    <th className="px-3 py-2 border border-[#211D1D] font-light text-start">Status</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {repairOrders?.length ? (
                    repairOrders.map((order, index) => (
                      <tr key={index}>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.gadgetBrand}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.gadgetModel}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.issueDescription}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.orderId}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.createdAt}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">₦{order.price}</td>
                        <td className="px-3 py-2 border border-[#211D1D] font-light">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-3 py-6 text-center border border-[#211D1D] font-light">
                        No orders found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </section>

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

export default DashboardPage