'use client'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React  from 'react'

function ResetPasswordPage() {

    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>            </div>
            <p className='text-sm text-[#717170] text-center mb-10'>
                Create a New password to Login
            </p>

            <form className='w-fit mx-auto flex flex-col'>
                <div className="mb-7">
                    <Label >New Password</Label>
                    <Input className='!mt-1' placeholder='Enter your New Password ' />
                </div>
                <div className="mb-5">
                    <Label >Confirm  Password</Label>
                    <Input className='!mt-1' placeholder='Confirm New Password' />
                </div>

                <button className="bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                    Reset Password
                </button>
            </form>
        </section>
    )
}

export default ResetPasswordPage