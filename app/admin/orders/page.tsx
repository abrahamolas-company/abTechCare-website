import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React from 'react'

function Order() {
    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                <div className="px-4 py-3">
                    {/* Search and filter section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Repair Status</span>
                            <select className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none">
                                <option value="all">All</option>
                                <option value="In Transit (Pickup)">In Transit (Pickup)</option>
                                <option value="Gadget Received">Gadget Received</option>
                                <option value="Diagnosis">Diagnosis</option>
                                <option value="Repair in Process">Repair in Process</option>
                                <option value="Testing">Testing</option>
                                <option value="In Transit (Delivery)">In Transit (Delivery)</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                        <button className="bg-[#C40F35] text-white px-5 py-2 rounded-[10px] text-sm hover:bg-[#5a5a5a] transition">
                            Cancel
                        </button>
                    </div>
                </div>

                <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                    <h2 className="text-base font-light mb-4 pl-3 w-full">Orders</h2>
                    <table className="w-full border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-sm">
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">First Name</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Last Name</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Gadget</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Gadget fault</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Amount</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Order Number</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Repair Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            <tr>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Apple Iphone 13 Pro Max</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Screen Damage</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">₦250,000</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">
                                    <select
                                        className="bg-[#383434] px-2 py-1 text-sm outline-none"
                                        defaultValue="Satisfactory"
                                    >
                                        <option value="In Transit (Pickup)">In Transit (Pickup)</option>
                                        <option value="Gadget Received">Gadget Received</option>
                                        <option value="Diagnosis">Diagnosis</option>
                                        <option value="Repair in Process">Repair in Process</option>
                                        <option value="Testing">Testing</option>
                                        <option value="In Transit (Delivery)">In Transit (Delivery)</option>
                                        <option value="Delivered">Delivered</option>
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

export default Order