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

    const [gender, setGender] = useState("female");
    const [age, setAge] = useState('yes');
    const [isDayOpen, setIsDayOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState<string | number>("Day");
    const [selectedYear, setSelectedYear] = useState<string | number>("Year");


    // Generate days (1-31)
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    // Generate years (last 100 years)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);



    const dayDropdownRef = useRef<HTMLDivElement>(null);
    const yearDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(dayDropdownRef, setIsDayOpen);
    useOuterClick(yearDropdownRef, setIsYearOpen);

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
                <div className=" flex flex-col md:flex-row gap-5 md:gap-10 mb-10">
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
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-14 mb-7">
                            <label className="text-gray-700 font-medium ">State your Gender</label>
                            <div className="flex space-x-5">
                                <label className="flex items-center space-x-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={gender === "male"}
                                        onChange={() => setGender("male")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${gender === "male" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {gender === "male" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Male</span>
                                </label>

                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender === "female"}
                                        onChange={() => setGender("female")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${gender === "female" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {gender === "female" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-14 mb-7">
                            <label className="text-gray-700 font-medium ">Are you over 18 years?</label>
                            <div className="flex space-x-5">
                                <label className="flex items-center space-x-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="age"
                                        value="yes"
                                        checked={age === "yes"}
                                        onChange={() => setAge("yes")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${age === "yes" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {age === "yes" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Yes</span>
                                </label>

                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="age"
                                        value="no"
                                        checked={age === "no"}
                                        onChange={() => setAge("no")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${age === "no" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {age === "no" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mb-7">
                            <label className="text-gray-700 font-medium">Date of Birth</label>
                            <div className="flex space-x-6">
                                {/* Day Dropdown */}
                                <div className="relative w-full md:w-32" ref={dayDropdownRef}>
                                    <button
                                        type='button'
                                        onClick={() => setIsDayOpen(!isDayOpen)}
                                        className="w-full border border-[#211D1D] rounded-md py-[10px] px-3 flex items-center justify-between bg-white"
                                    >
                                        <span>{selectedDay}</span>
                                        <span className={`transform transition-transform ${isDayOpen ? "rotate-180" : "rotate-0"}`}>
                                            <Icons.DownWardArrow />
                                        </span>
                                    </button>
                                    {isDayOpen && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto">
                                            {days.map((day) => (
                                                <div
                                                    key={day}
                                                    onClick={() => {
                                                        setSelectedDay(day);
                                                        setIsDayOpen(false);
                                                    }}
                                                    className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Year Dropdown */}
                                <div className="relative w-full md:w-32" ref={yearDropdownRef}>
                                    <button
                                        type='button'
                                        onClick={() => setIsYearOpen(!isYearOpen)}
                                        className="w-full border border-[#211D1D] rounded-md py-[10px] px-3 flex items-center justify-between bg-white"
                                    >
                                        <span>{selectedYear}</span>
                                        <span className={`transform transition-transform ${isYearOpen ? "rotate-180" : "rotate-0"}`}>
                                            <Icons.DownWardArrow />
                                        </span>
                                    </button>
                                    {isYearOpen && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto">
                                            {years.map((year) => (
                                                <div
                                                    key={year}
                                                    onClick={() => {
                                                        setSelectedYear(year);
                                                        setIsYearOpen(false);
                                                    }}
                                                    className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                                                >
                                                    {year}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
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