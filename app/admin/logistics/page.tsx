import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React from 'react'

function Logistics() {
    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                    <h2 className="text-base font-light mb-4 pl-3 w-full">Logistics</h2>
                    <table className="w-full border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-sm">
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Order Number</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Pickup Address</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Delivery Address</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Amount </th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Logistics Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            <tr>
                                <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345 </td>
                                <td className="p-3 border-b border-b-[#717170] font-light">17b Kodesho Steet, Ikeja, computer Village, <br /> Lagos State</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">17b Kodesho Steet, Ikeja, computer Village, <br /> Lagos State</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">5,000</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">
                                    <select
                                        className="bg-[#383434] px-2 py-1 text-sm outline-none"
                                        defaultValue="Successful"
                                    >
                                        <option value="Successful">Successful</option>
                                        <option value="Failed">Failed</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    )
}

export default Logistics