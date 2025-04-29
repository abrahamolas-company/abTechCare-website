import React from 'react'
import AdminSidebar from '../components/shared/AdminSidebar'
import AdminTopbar from '../components/shared/AdminTopbar'


const AdminDashboard = () => {
    const kpis = [
        {
            name: 'Total Transaction',
            amount: '₦700k',
            sub: 'Total number of transaction'
        },
        {
            name: 'Total Credit',
            amount: '₦700k',
            sub: 'Total value of credit transaction'
        },
        {
            name: 'Total Debit',
            amount: '₦700k',
            sub: 'Total value of debit transaction'
        },
    ]

    const secondKpis = [
        {
            name: 'User Status',
            amount: '5k',
            sub: 'Total Number of Users'
        },
        {
            name: 'Engineer Status',
            amount: '2k',
            sub: 'Total Number of Engineers'
        },
    ]
    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />
                <div className="flex flex-col gap-7">

                    {/* KPIS */}
                    <div className="flex items-center gap-10">
                        {kpis.map((kpi, index) => (
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
                    <div className="flex gap-7">
                        {/* Chart */}
                        <div className="bg-white h-[330px] rounded-[10px] w-full min-w-[800px]">
                            <p className='text-[#211D1D] bg-[#FFCC29] text-sm font-light px-5 rounded-[10px] py-3 mb-5'>Transaction Flow</p>
                        </div>
                        {/* side kpi */}
                        <div className="flex flex-col gap-10 min-w-[280px]">
                            {secondKpis.map((kpi, index) => (
                                <div className="bg-white rounded-[10px] text-[#211D1D] pb-3 " key={index}>
                                    <p className='bg-[#FFCC29] text-sm font-light px-5 rounded-[10px] py-2 mb-5'>{kpi.name}</p>
                                    <div className="px-5 flex flex-col gap-3">
                                        <h1 className='font-bold text-3xl'>{kpi.amount}</h1>
                                        <p className='text-sm font-light'>{kpi.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Transaction */}
                    <section className="bg-[#383434] w-full border border-[#717170] mb-20 px-4 pt-5 rounded-lg overflow-x-auto">
                        <h2 className="text-base font-light mb-4 pl-3">Recent Transactions</h2>
                        <table className="w-full border-collapse whitespace-nowrap">
                            <thead>
                                <tr className="text-sm">
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Order Number</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Reference</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Type</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Amount</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Date</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Status</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Account Name</th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Account </th>
                                    <th className="p-3 border-b border-b-[#717170] font-light text-start">Session ID</th>
                                </tr>
                            </thead>
                            <tbody className='text-sm'>
                                <tr>
                                    <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Credit</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1,000,000,000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">23/05/2025, 11:59:05</td>
                                    <td className="p-3 border-b text-[#14D02B] border-b-[#717170] font-light">Success</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Favour James Udoh</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1000000000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Credit</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1,000,000,000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">23/05/2025, 11:59:05</td>
                                    <td className="p-3 border-b text-[#C40F35] border-b-[#717170] font-light">Failed</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Favour James Udoh</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1000000000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Credit</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1,000,000,000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">23/05/2025, 11:59:05</td>
                                    <td className="p-3 border-b text-[#14D02B] border-b-[#717170] font-light">Success</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Favour James Udoh</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1000000000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-b-[#717170] font-light">#ORDER12345</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Credit</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1,000,000,000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">23/05/2025, 11:59:05</td>
                                    <td className="p-3 border-b text-[#C40F35] border-b-[#717170] font-light">Failed</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">Favour James Udoh</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">1000000000</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">100004250321004101294447195544</td>
                                </tr>

                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default AdminDashboard