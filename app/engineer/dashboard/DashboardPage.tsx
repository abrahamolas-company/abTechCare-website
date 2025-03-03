'use client'
import WithdrawalModal from '@/app/components/modal/WithdrawalModal'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import { Icons } from '@/app/components/ui/icons'
import React, { useState } from 'react'

function DashboardPage() {
  const [isWithdrawalModalOpen,setIsWithdrawalModalOpen]=useState(false)
  const transactions = [
    {
      date: "2025-05-05",
      items: [
        { type: "Withdrawal", amount: 25000, time: "15:20PM" },
        { type: "Wallet Top Up", amount: 120000, time: "16:00PM" },
        { type: "Wallet Top Up", amount: 200000, time: "18:00PM" },
      ],
    },
    {
      date: "2025-05-06",
      items: [{ type: "Withdrawal", amount: 100000, time: "15:20PM" }],
    },
  ];
  return (
    <div>
      {isWithdrawalModalOpen && <WithdrawalModal isWithdrawalModalOpen={isWithdrawalModalOpen} setIsWithdrawalModalOpen={setIsWithdrawalModalOpen} />}
      <DashboardHero />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">

          {/* Wallet */}
          <section className='text-center mb-20'>
            <p className='text-black mb-1 font-light'>Wallet Balance</p>
            <h2 className='font-bold text-3xl mb-2'>₦300,000</h2>
            <button onClick={() => setIsWithdrawalModalOpen(true)} className="bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
              Withdrawal
            </button>
          </section>

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
          <section className="bg-[#D9D9D929] p-4 rounded-lg shadow-md  mb-20 overflow-x-auto">
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

          {/* TRANSACTIONS */}
          <div className="mb-6 ">
            <h2 className="ext-base font-light mb-4">My Transactions</h2>
            <div className="max-h-[300px] overflow-y-auto">
              {transactions.map((section, index) => (
                <div key={index} className="mb-4 ">
                  <p className="text-black font-light">{section.date}</p>
                  <div className="mt-2 space-y-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-[#D9D9D929] p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`p-2 rounded-full  bg-[#FFCC29] `}
                          >
                            {item.type === "Withdrawal" ? (
                              <Icons.Withhdraw />
                            ) : (
                              <Icons.Topup />
                            )}
                          </span>
                          <div>
                            <p className="font-medium">{item.type}</p>
                            <p className="text-sm text-gray-500">{item.time}</p>
                          </div>
                        </div>
                        <p className="font-semibold">₦{item.amount.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>

    </div>
  )
}

export default DashboardPage