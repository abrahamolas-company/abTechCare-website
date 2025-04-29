'use client'
import AdminSidebar from '@/app/components/shared/AdminSidebar'
import AdminTopbar from '@/app/components/shared/AdminTopbar'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Transactions() {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [statusFilter, setStatusFilter] = useState<string>('all')
    const [typeFilter, setTypeFilter] = useState<string>('all')

    // Mock transaction data
    const transactions = [
        {
            orderNumber: '#ORDER12345',
            reference: '100004250321004101294447195544',
            type: 'Credit',
            amount: '1,000,000,000',
            date: '23/05/2025, 11:59:05',
            status: 'Success',
            accountName: 'Favour James Udoh',
            account: '1000000000',
            sessionId: '100004250321004101294447195544'
        },
        {
            orderNumber: '#ORDER12345',
            reference: '100004250321004101294447195544',
            type: 'Credit',
            amount: '1,000,000,000',
            date: '23/05/2025, 11:59:05',
            status: 'Failed',
            accountName: 'Favour James Udoh',
            account: '1000000000',
            sessionId: '100004250321004101294447195544'
        },
    ]

    // Filter transactions based on selected filters
    const filteredTransactions = transactions.filter(transaction => {
        const matchesStatus = statusFilter === 'all' || transaction.status.toLowerCase() === statusFilter.toLowerCase()
        const matchesType = typeFilter === 'all' || transaction.type.toLowerCase() === typeFilter.toLowerCase()
        return matchesStatus && matchesType
    })

    return (
        <main className='flex h-screen overflow-x-auto'>
            <AdminSidebar />
            <div className="flex-1 pl-6 pr-10 py-6 flex flex-col gap-10 bg-[#211D1D] text-white h-screen overflow-y-auto">
                <AdminTopbar />

                {/* Filter Section */}
                <div className="flex items-center whitespace-nowrap gap-10 justify-between">
                    <div className="flex items-center gap-4">
                        {/* Date Range Picker */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Start Date</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="dd/mm/yyyy"
                                className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none w-32"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm">End Date</span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate || new Date()}
                                placeholderText="dd/mm/yyyy"
                                className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none w-32"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>

                        {/* Status Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Status</span>
                            <select
                                className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="success">Success</option>
                                <option value="failed">Failed</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Type</span>
                            <select
                                className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none"
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                                <option value="transfer">Transfer</option>
                            </select>
                        </div>
                    </div>

                    <button className="bg-[#C40F35] text-white px-4 py-2 rounded-[10px] text-sm hover:bg-[#5a5a5a] transition">
                        Clear
                    </button>
                </div>

                {/* User and engineer Filter */}
                <div className="flex items-center gap-2">
                    <select
                        className="bg-[#D9D9D9] text-[#211D1D] border border-[#717170] rounded-[10px] px-2 py-2 text-sm outline-none"
                    >
                        <option value="engineers">Engineers</option>
                        <option value="users">Users</option>
                    </select>
                </div>

                {/* Transactions Table */}
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
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Account</th>
                                <th className="p-3 border-b border-b-[#717170] font-light text-start">Session ID</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {filteredTransactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.orderNumber}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light truncate max-w-xs">{transaction.reference}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.type}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.amount}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.date}</td>
                                    <td className={`p-3 border-b border-b-[#717170] font-light ${transaction.status === 'Success' ? 'text-[#14D02B]' : 'text-[#C40F35]'
                                        }`}>
                                        {transaction.status}
                                    </td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.accountName}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light">{transaction.account}</td>
                                    <td className="p-3 border-b border-b-[#717170] font-light truncate max-w-xs">{transaction.sessionId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    )
}

export default Transactions