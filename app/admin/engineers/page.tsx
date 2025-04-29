import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React from 'react'

function Engineers() {
    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                    <h2 className="text-base font-light mb-4 pl-3 w-full">Engineers</h2>
                    <table className="w-full border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-sm">
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">First Name</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Last Name</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">E-mail</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Contact no</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Office Address</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Account No</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Account Name</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Bank name </th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Repair Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            <tr>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">favourudoh455@gmail.com</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">08037828877</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">17b Kodesho Steet, Ikeja, computer Village, Lagos State</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">0298299292</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">First Bank</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">
                                    <select
                                        className="bg-[#383434] px-2 py-1 text-sm outline-none"
                                        defaultValue="Satisfactory"
                                    >
                                        <option value="Bad">Bad</option>
                                        <option value="Satisfactory">Satisfactory</option>
                                        <option value="Good">Good</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">favourudoh455@gmail.com</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">08037828877</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">17b Kodesho Steet, Ikeja, computer Village, Lagos State</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">0298299292</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">First Bank</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">
                                    <select
                                        className="bg-[#383434] px-2 py-1 text-sm outline-none"
                                        defaultValue="Satisfactory"
                                    >
                                        <option value="Bad">Bad</option>
                                        <option value="Satisfactory">Satisfactory</option>
                                        <option value="Good">Good</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">favourudoh455@gmail.com</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">08037828877</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">17b Kodesho Steet, Ikeja, computer Village, Lagos State</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">0298299292</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">Favour Udoh</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">First Bank</td>
                                <td className="p-3 border-b border-b-[#717170] font-light">
                                    <select
                                        className="bg-[#383434] px-2 py-1 text-sm outline-none"
                                        defaultValue="Satisfactory"
                                    >
                                        <option value="Bad">Bad</option>
                                        <option value="Satisfactory">Satisfactory</option>
                                        <option value="Good">Good</option>
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

export default Engineers