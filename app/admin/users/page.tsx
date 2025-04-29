import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React from 'react'

function Users() {
  return (
    <main className='flex h-screen overflow-x-auto'>
    <AdminSidebar />
    <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
        <AdminTopbar />

        <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
            <h2 className="text-base font-light mb-4 pl-3 w-full">Users</h2>
            <table className="w-full border-collapse whitespace-nowrap">
                <thead>
                    <tr className="text-sm">
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">First Name</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">Last Name</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">E-mail</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">Contact no</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">Gender</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">Age</th>
                        <th className="p-3 border-b border-b-[#717170] font-light text-start">Date of Birth</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    <tr>
                        <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">favourudoh455@gmail.com</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">08037828877</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Male</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Above 18 years</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">03/Dec</td>
                    </tr>
                    <tr>
                        <td className="p-3 border-b border-b-[#717170] font-light">Favour </td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Udoh</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">favourudoh455@gmail.com</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">08037828877</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Male</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">Above 18 years</td>
                        <td className="p-3 border-b border-b-[#717170] font-light">03/Dec</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</main>
  )
}

export default Users