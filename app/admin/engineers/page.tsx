'use client'
import { useFetchAllEngineers } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { FetchAllEngineers } from '@/app/components/models/IAdmin'
import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function Engineers() {
    const fetchAllEngineers = useFetchAllEngineers()
    const [engineers, setEngineers] = useState<FetchAllEngineers[]>()
    const [loading, setLoading] = useState(true)

    async function fetchEngineers() {
        setLoading(true);
        fetchAllEngineers()
            .then((response) => {
                console.log(response.data.data)
                setEngineers(response.data.data)
            })
            .catch((error) => {
                catchError(error);
                toast.error('Error fetching engineers.');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchEngineers();
    }, []);
    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                    <h2 className="text-base font-light mb-4 pl-3 w-full">Engineers</h2>
                    {loading ? (
                        // Show loader while loading
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    ) : (
                        // Show table when data is loaded
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
                                {engineers?.length ? (
                                    engineers.map((engineer, index) => (
                                        <tr key={index}>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.firstName} </td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.lastName}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.email}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.phoneNumber}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.officeAddress}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.accountNumber}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.accountName}</td>
                                            <td className="p-3 border-b border-b-[#717170] font-light">{engineer.bankName}</td>
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
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="px-3 py-6 text-center border border-[#211D1D] font-light">
                                            No engineers found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </section>
            </div>
        </main>
    )
}

export default Engineers