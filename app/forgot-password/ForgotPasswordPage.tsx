import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ForgotPasswordPage() {
    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>            </div>
            <p className='text-sm text-[#717170] text-center mb-10 max-w-[500px] mx-auto'>
                You can request a password reset below. An email will be sent to you, please make sure it is correct.
            </p>

            <form className='w-fit mx-auto flex flex-col'>
                <div className="mb-3">
                    <div className="">
                        <Label>E-mail Address</Label>
                        <Input className='!mt-1' placeholder='Enter your E-mail Address or Contact Number' />
                    </div>
                    {/* <button className='ml-auto flex items-end justify-end text-xs rounded-[5px] mt-1 text-white bg-[#C40F35] px-5 py-2'>Send Security Code</button> */}
                </div>
                {/* <div className="mb-5">
                    <Label >Enter Code</Label>
                    <Input className='!mt-1' placeholder='000 000' />
                </div> */}

                <button className="bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                    Continue
                </button>
            </form>
        </section>
    )
}

export default ForgotPasswordPage