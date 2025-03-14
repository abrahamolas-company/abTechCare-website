'use client'
import { useRegisterUser } from '@/app/api/apiClient'
import { ApplicationRoutes } from '@/app/components/constants/applicationRoutes'
import { catchError } from '@/app/components/constants/catchError'
import { emailRegex } from '@/app/components/constants/emailRegex'
import useOuterClick from '@/app/components/hooks/useOuterClick'
import { RegisterUserRequest } from '@/app/components/models/IRegisterUser'
import { Icons } from '@/app/components/ui/icons'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

function SignUpPage() {

    const registerUser = useRegisterUser()

    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<RegisterUserRequest>();
    console.log({ formValues })
    const [firstNameErrorMsg, setFirstNameErrorMsg] = useState<string | boolean>(false);
    const [lastNameErrorMsg, setLastNameErrorMsg] = useState<string | boolean>(false);
    const [emailAddressErrorMsg, setEmailAddressErrorMsg] = useState<string | boolean>(false);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState<string | boolean>(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState<string | boolean>(false);
    const [cofirmPasswordErrorMsg, setCofirmPasswordErrorMsg] = useState<string | boolean>(false);
    // const [dateOfBirthError, setDateOfBirthError] = useState(false);
    // const [genderError, setGenderError] = useState(false);
    // const [over18Error, setOver18Error] = useState(false);

    const [isDayOpen, setIsDayOpen] = useState(false);
    const [isMonthOpen, setIsMonthOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState<string | number>("Day");
    const [selectedMonth, setSelectedMonth] = useState<string | number>("Month");



    function onformValueChange(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        setState?: Dispatch<SetStateAction<string | boolean>>
    ) {
        const { name, value, type } = e.target;
    
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
        } as RegisterUserRequest));
        if (setState) {
            // Set the state
            setState(false);
        }
    }
    

    /**
     * Function to validate form fields
     * @returns boolean depicting form validation status
     */

    function validateFields() {
    let isValid = true;

    if (!formValues?.firstName) {
        setFirstNameErrorMsg(true);
        isValid = false;
    } else {
        setFirstNameErrorMsg(false);
    }

    if (!formValues?.lastName) {
        setLastNameErrorMsg(true);
        isValid = false;
    } else {
        setLastNameErrorMsg(false);
    }

    if (!formValues?.email || !emailRegex.test(formValues.email.trim())) {
        setEmailAddressErrorMsg(true);
        isValid = false;
    } else {
        setEmailAddressErrorMsg(false);
    }

    if (!formValues?.phoneNumber) {
        setPhoneErrorMsg(true);
        isValid = false;
    } else {
        setPhoneErrorMsg(false);
    }

    if (!formValues?.password) {
        setPasswordErrorMsg(true);
        isValid = false;
    } else {
        setPasswordErrorMsg(false);
    }

    if (!formValues?.confirmPassword) {
        setCofirmPasswordErrorMsg("Please confirm your password");
        isValid = false;
    } else if (formValues.password !== formValues.confirmPassword) {
        setCofirmPasswordErrorMsg("Password do not match");
        isValid = false;
    } else {
        setCofirmPasswordErrorMsg(false);
    }

    // if (!formValues?.dateOfBirth) {
    //     setDateOfBirthError(true);
    //     isValid = false;
    // } else {
    //     setDateOfBirthError(false);
    // }

    // if (!formValues?.gender) {
    //     setGenderError(true);
    //     isValid = false;
    // } else {
    //     setGenderError(false);
    // }

    // if (!formValues?.over18) {
    //     setOver18Error(true);
    //     isValid = false;
    // } else {
    //     setOver18Error(false);
    // }

    return isValid;
}

    async function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Show the loader
        setLoading(true);

        if (validateFields()) {
            await registerUser(formValues as RegisterUserRequest)
                .then((response) => {
                    console.log(response);

                    // Display success
                    toast.success("You have successfully created an account.");

                    // Redirect to login page
                    router.push(`/user/signin`);
                })
                .catch((error) => {
                    catchError(error);
                    // toast.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }



    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    // Convert month name to a two-digit format (01-12)
    const getMonthNumber = (monthName: string | number): string => {
        const index = months.indexOf(String(monthName)); // Convert monthName to string
        return index !== -1 ? String(index + 1).padStart(2, "0") : "";
    };

    useEffect(() => {
        if (selectedDay !== "Day" && selectedMonth !== "Month") {
            const formattedDay = String(selectedDay).padStart(2, "0"); // Ensure two-digit format for day
            const formattedMonth = getMonthNumber(selectedMonth); // Convert month to two-digit format
    
            setFormValues(prevValues => ({
                ...prevValues,
                dateOfBirth: `${formattedDay}-${formattedMonth}`,
            } as RegisterUserRequest));
        }
    }, [selectedDay, selectedMonth]);

    //UseEffect to close all toasts after 5 seconds
    useEffect(() => {
        if (!loading)
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
    }, [loading]);



    const dayDropdownRef = useRef<HTMLDivElement>(null);
    const monthDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(dayDropdownRef, setIsDayOpen);
    useOuterClick(monthDropdownRef, setIsMonthOpen);

    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>
            </div>
            <h2 className='font-bold text-[#211D1D] text-xl text-center'>Welcome to AbTechCare</h2>
            <p className='text-sm text-[#717170] text-center mb-10'>Enter your details to create an account with AbTechcare </p>

            <form className='w-full' onSubmit={(e) => handleFormSubmission(e)}>
                <div className=" flex flex-col md:flex-row gap-5 md:gap-10 mb-10">
                    <div className="md:w-1/2">
                        <div className="mb-7">
                            <Label htmlFor='email'>E-mail Address </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formValues?.email}
                                onChange={(e) => onformValueChange(e, setEmailAddressErrorMsg)}
                                className='!mt-1'
                                placeholder='Enter your E-mail Address' />
                            {emailAddressErrorMsg && (
                                <span className='text-sm text-red-500'>
                                   Please enter a valid email address
                                </span>
                            )}
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='firstName'>First Name</Label>
                            <Input
                                type='firstName'
                                name='firstName'
                                id='firstName'
                                value={formValues?.firstName}
                                onChange={(e) => onformValueChange(e, setFirstNameErrorMsg)}
                                className='!mt-1' placeholder='Enter your First Name' />
                            {firstNameErrorMsg && (
                                <span className='text-sm text-red-500'>
                                    Please enter your firstname
                                </span>
                            )}
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='lastName'>Last Name</Label>
                            <Input
                                type="lastName"
                                name="lastName"
                                id="lastName"
                                value={formValues?.lastName}
                                onChange={(e) => onformValueChange(e, setLastNameErrorMsg)}
                                className='!mt-1' placeholder='Enter your Last Name' />
                            {lastNameErrorMsg && (
                                <span className='text-sm text-red-500'>
                                    Please enter your lastname
                                </span>
                            )}
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='phoneNumber'>Contact Number </Label>
                            <Input
                                type="phoneNumber"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formValues?.phoneNumber}
                                onChange={(e) => onformValueChange(e, setPhoneErrorMsg)}
                                className='!mt-1' placeholder='Enter your contact  number' />
                            {phoneErrorMsg && (
                                <span className='text-sm text-red-500'>
                                    Please enter your phone number
                                </span>
                            )}
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
                                        checked={formValues?.gender === "male"}
                                        onChange={onformValueChange}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${formValues?.gender === "male" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {formValues?.gender === "male" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Male</span>
                                </label>

                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formValues?.gender === "female"}
                                        onChange={onformValueChange}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${formValues?.gender === "female" ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {formValues?.gender === "female" && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-14 mb-7">
                            <label className="text-gray-700 font-medium ">Are you over 18 years?</label>
                           <div className="flex flex-col gap-2">
                           <div className="flex space-x-5">
                                <label className="flex items-center space-x-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="over18"
                                        value="true"
                                        checked={formValues?.over18 === true}
                                        onChange={() => setFormValues({ ...formValues, over18: true } as RegisterUserRequest)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${formValues?.over18 === true ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {formValues?.over18 === true && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>Yes</span>
                                </label>

                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="age"
                                        value="false"
                                        checked={formValues && formValues?.over18 === false}
                                        onChange={() => setFormValues({ ...formValues, over18: false } as RegisterUserRequest)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${formValues?.over18 === false ? "border-black" : "border-gray-400"
                                            }`}
                                    >
                                        {formValues?.over18 === false && <div className="w-3 h-3 bg-black rounded-full"></div>}
                                    </div>
                                    <span>No</span>
                                </label>
                             
                            </div>

                         {/* {over18Error && (
                                <span className='text-sm text-red-500'>
                                    Kindly select
                                </span>
                            )} */}
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

                                {/* Month Dropdown */}
                                <div className="relative w-full md:w-32" ref={monthDropdownRef}>
                                    <button
                                        type='button'
                                        onClick={() => setIsMonthOpen(!isMonthOpen)}
                                        className="w-full border border-[#211D1D] rounded-md py-[10px] px-3 flex items-center justify-between bg-white"
                                    >
                                        <span>{selectedMonth}</span>
                                        <span className={`transform transition-transform ${isMonthOpen ? "rotate-180" : "rotate-0"}`}>
                                            <Icons.DownWardArrow />
                                        </span>
                                    </button>
                                    {isMonthOpen && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto">
                                            {months.map((month) => (
                                                <div
                                                    key={month}
                                                    onClick={() => {
                                                        setSelectedMonth(month);
                                                        setIsMonthOpen(false);
                                                    }}
                                                    className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                                                >
                                                    {month}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="mb-7">
                            <Label htmlFor='password'>Create a new Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                value={formValues?.password}
                                onChange={(e) => onformValueChange(e, setPasswordErrorMsg)}
                                className='!mt-1' placeholder='Enter a strong password ' />
                            {passwordErrorMsg && (
                                <span className='text-sm text-red-500'>
                                    Enter your password
                                </span>
                            )}
                        </div>
                        <div className="mb-7">
                            <Label>Confirm Password </Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formValues?.confirmPassword}
                                onChange={(e) =>
                                    onformValueChange(e, setCofirmPasswordErrorMsg)
                                }
                                className='!mt-1' placeholder='Confirm your password' />
                            {cofirmPasswordErrorMsg && (
                                <span className='text-sm text-red-500'>
                                   {cofirmPasswordErrorMsg}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <button type='submit' disabled={loading} className={`bg-[#FFCC29] font-medium mb-5 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] ${loading && 'pointer-events-none opacity-50'}`}>
                    {loading ? "Loading" : "Create your Account"}
                </button>
                <p className='max-w-[290px] text-center mx-auto text-sm'><span className='text-[#211D1D]'>By creating an account you agree to our </span>
                    <Link href={ApplicationRoutes.ServicePolicy} className='text-[#979281] hover:text-[#FFCC29]'>Terms of Service</Link> <span className='text-[#211D1D]'>and</span> <Link className='text-[#979281] hover:text-[#FFCC29]' href={ApplicationRoutes.ServicePolicy}>Privacy Policy.</Link>
                </p>
            </form>
        </section>
    )
}

export default SignUpPage