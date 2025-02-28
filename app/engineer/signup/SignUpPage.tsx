'use client'
import { ApplicationRoutes } from '@/app/components/constants/applicationRoutes'
import useOuterClick from '@/app/components/hooks/useOuterClick'
import { Icons } from '@/app/components/ui/icons'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

function SignUpPage() {
    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>
            </div>
            <h2 className='font-bold text-[#211D1D] text-xl text-center'>Welcome to AbTechCare</h2>
            <p className='text-sm text-[#717170] text-center mb-10'>Enter your details to create an account with AbTechcare </p>

            <form className='w-full '>
                <div className=" flex flex-col md:flex-row gap-10 mb-10">
                    <div className="md:w-1/2">
                        <div className="mb-7">
                            <Label>E-mail Address </Label>
                            <Input className='!mt-1' placeholder='Enter your E-mail Address' />
                        </div>
                        <div className="mb-7">
                            <Label>First Name</Label>
                            <Input className='!mt-1' placeholder='Enter your First Name' />
                        </div>
                        <div className="mb-7">
                            <Label>Last Name</Label>
                            <Input className='!mt-1' placeholder='Enter your Last Name' />
                        </div>
                        <div className="mb-7">
                            <Label>Contact Number </Label>
                            <Input className='!mt-1' placeholder='Enter your contact  number' />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="mb-7">
                            <Label>Account Name</Label>
                            <Input className='!mt-1' placeholder='Enter your Account Name' />
                        </div>
                        <div className="flex mb-7 items-center gap-6 w-full flex-col md:flex-row">
                            <div className="w-full">
                                <Label>Account Number</Label>
                                <Input className='!mt-1' placeholder='Enter your Account Number' />
                            </div>
                            <div className="w-full">
                                <Label>Bank Name</Label>
                                <Input className='!mt-1' placeholder='Enter your Bank Name' />
                            </div>
                        </div>
                        <div className="mb-7">
                            <Label>Create a new Password</Label>
                            <Input className='!mt-1' placeholder='Enter a strong password ' />
                        </div>
                        <div className="mb-7">
                            <Label>Confirm Password </Label>
                            <Input className='!mt-1' placeholder='Confirm your password again' />
                        </div>
                    </div>
                </div>
                <button className="bg-[#FFCC29] font-medium mb-5 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                    Create your Account
                </button>
                <p className='max-w-[290px] text-center mx-auto text-sm'><span className='text-[#211D1D]'>By creating an account you agree to our </span>
                    <Link href={ApplicationRoutes.ServicePolicy} className='text-[#979281] hover:text-[#FFCC29]'>Terms of Service</Link> <span className='text-[#211D1D]'>and</span> <Link className='text-[#979281] hover:text-[#FFCC29]' href={ApplicationRoutes.ServicePolicy}>Privacy Policy.</Link>
                </p>
            </form>
        </section>
    )
}

export default SignUpPage