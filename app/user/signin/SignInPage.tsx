'use client'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SignInPage() {

    const [checked, setChecked] = useState(false);
    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
            <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>            </div>
            <h2 className='font-bold text-[#211D1D] text-xl text-center'>Welcome Back</h2>
            <p className='text-sm text-[#717170] text-center mb-10'>Enter your E-mail Address or Contact Number and Password to sign in</p>

            <form className='w-fit mx-auto flex flex-col'>
                <div className="mb-7">
                    <Label >E-mail Address or Contact Number </Label>
                    <Input className='!mt-1' placeholder='Enter your E-mail Address or Contact Number' />
                </div>
                <div className="mb-5">
                    <Label >Password</Label>
                    <Input className='!mt-1' placeholder='Enter your Password' />
                </div>

                <label className="flex items-center cursor-pointer ml-auto mb-5 space-x-2">
                    <div
                        className={`w-5 h-5 border-2 rounded transition-all ${checked ? "bg-[#C40F35] border-[#C40F35]" : "bg-white border-gray-400"
                            }`}
                        onClick={() => setChecked(!checked)}
                    ></div>
                    <span className="text-gray-700 text-[15px]">Remember Me</span>
                </label>

                <button className="bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                Sign in
              </button>
              <Link href={'/user/forgot-password'} className='mb-5 text-center text-sm text-[#717170]'>Forgot Password?</Link>
           <p className=' text-sm text-[#717170] text-center'>Don&apos;t have an account yet? <Link href={'/user/signup'} className='text-[#FFCC29]'>create an account</Link></p>
            </form>
        </section>
    )
}

export default SignInPage