import React from 'react'
import { sectionPadding } from '../styles/styles'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import TextArea from '../components/ui/textarea'

function BecomeAnEngineerFormSection() {
    return (
        <form className={`${sectionPadding} text-[#211D1D]`}>
            <div className="mb-3">
                <h3>Personal Information</h3>
             <div className="flex flex-col gap-3">
             <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Full Name</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Phone Number</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Email Address</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Home Address</Label>
                    <Input />
                </div>
             </div>
            </div>
            <div className="mb-3">
                <h3>Professional Details</h3>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Years of Experience</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Certificates (If any)</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Type of Gadgets you specialize in</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>DO you own or have access to a Service center? (Yes/No)</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>List of Tools & Equipment you use</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Any Previous Employment in a Repair Center? (Yes/No)</Label>
                    <Input />
                </div>
                </div>
            </div>
            <div className="mb-3">
                <h3>Additional Information</h3>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Why do you want to partner with Abtechcare?</Label>
                    <TextArea />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Do you agree to abide by Abtechcare&apos;s quality and Service Standard? (Yes/No)</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className='text-sm md:text-base'>Upload Resume/ Portfolio (If available)</Label>
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

export default BecomeAnEngineerFormSection