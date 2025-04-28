import React from 'react'
import AdminSidebar from '../components/shared/AdminSidebar'
import AdminTopbar from '../components/shared/AdminTopbar'


const AdminDashboard = () => {
    const kpis = [
        {
            name:'Total Transaction',
            amount:'₦700k',
            sub:'Total number of transaction'
        },
        {
            name:'Total Credit',
            amount:'₦700k',
            sub:'Total value of credit transaction'
        },
        {
            name:'Total Debit',
            amount:'₦700k',
            sub:'Total value of debit transaction'
        },
    ]
    return (
        <main className='bg-[#211D1D] flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />
                <div className="">

                    {/* KPIS */}
                    <div className="flex items-center gap-10">
                        {kpis.map((kpi,index)=>(
                            <div className="bg-white rounded-[10px] text-[#211D1D] pb-3 min-w-[280px]" key={index}>
                                <p className='bg-[#FFCC29] text-sm font-light px-5 rounded-[10px] py-2 mb-5'>{kpi.name}</p>
                                <div className="px-5 flex flex-col gap-3">
                                <h1 className='font-bold text-3xl'>{kpi.amount}</h1>
                                <p className='text-sm font-light'>{kpi.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bar Chart */}
                    <div className=""></div>
                </div>
            </div>
        </main>
    )
}

export default AdminDashboard