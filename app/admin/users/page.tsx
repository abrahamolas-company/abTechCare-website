'use client'
import { useFetchAllUsers } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { FetchAllUsers } from '@/app/components/models/IAdmin'
import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function Users() {
    const fetchAllUsers = useFetchAllUsers()
    const [users, setUsers] = useState<FetchAllUsers[]>()
    const [loading, setLoading] = useState(true)

    async function fetchUsers() {
        setLoading(true);
        fetchAllUsers()
            .then((response) => {
                console.log(response.data.data)
                setUsers(response.data.data)
            })
            .catch((error) => {
                catchError(error);
                toast.error('Error fetching users.');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                <div className="px-4 py-3">
                    {/* Search and filter section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Gender</span>
                                <select className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none">
                                    <option value="all">All</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Age</span>
                                <select className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm focus:outline-none">
                                    <option value="all">All</option>
                                    <option value="below18">Below 18 Years</option>
                                    <option value="above18">Above 18 Years</option>
                                </select>
                            </div>
                        </div>
                        <button className="bg-[#C40F35] text-white px-5 py-2 rounded-[10px] text-sm hover:bg-[#5a5a5a] transition">
                            Cancel
                        </button>
                    </div>
                </div>

                <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                    <h2 className="text-base font-light mb-4 pl-3 w-full">Users</h2>

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
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Gender</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Age</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Date of Birth</th>
                            </tr>
                        </thead>
                            <tbody className='text-sm'>
                                {users?.length ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.firstName} </td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.lastName}</td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.email}</td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.phoneNumber}</td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.gender}</td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.over18 ? 'Above 18 years' : 'Below 18 years'}</td>
                                        <td className="p-3 border-b border-b-[#717170] font-light">{user.dateOfBirth}</td>
                                    </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="px-3 py-6 text-center border border-[#211D1D] font-light">
                                            No users found
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

export default Users