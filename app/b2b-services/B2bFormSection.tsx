import React from 'react'
import { sectionPadding } from '../styles/styles'
import Label from '../components/ui/label'
import Input from '../components/ui/input'

function B2bFormSection() {
    return (
        <form className={`${sectionPadding} text-[#211D1D]`}>
            <div className="mb-3">
                <h3>Business Information</h3>
             <div className="flex flex-col gap-3">
             <div className="flex flex-col gap-1">
                    <Label>Company Name</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Industry</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Business Address:</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>City/State/Country:</Label>
                    <Input />
                </div>
             </div>
            </div>
            <div className="mb-3">
                <h3>Contact Information</h3>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <Label>Contact Name</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Designation</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Phone Number</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>E-mail Address</Label>
                    <Input />
                </div>
                </div>
            </div>
            <div className="mb-3">
                <h3>Service Requirements</h3>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <Label>Kind of Gadget to be serviced</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Quantity of gadget monthly</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Preferred Service Plan (One-time, Subscription, Bulk Repairs):</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Additional Requirements or Comments</Label>
                    <Input />
                </div>
                </div>
            </div>
            <button className="bg-[#FFCC29] font-medium mt-8 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[150px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                Submit
            </button>
        </form>
    )
}

export default B2bFormSection