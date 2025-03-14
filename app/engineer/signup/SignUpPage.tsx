'use client'
import { useUpdateEngineer } from '@/app/api/apiClient'
import { ApplicationRoutes } from '@/app/components/constants/applicationRoutes'
import { catchError } from '@/app/components/constants/catchError'
import useOuterClick from '@/app/components/hooks/useOuterClick'
import { RegisterEngineerRequest } from '@/app/components/models/IRegisterEngineer'
import { Icons } from '@/app/components/ui/icons'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

function SignUpPage() {

    const [engineerId, setEngineerId] = useState<number>();
    const [isUpdating, setIsUpdating] = useState(false);
    const router = useRouter();

    const updateEngineer = useUpdateEngineer();

    const [formValues, setFormValues] = useState<RegisterEngineerRequest>();

    const validateForm = (): boolean => {
        const requiredFields = ['email', 'firstName', 'lastName', 'phoneNumber', 'officeAddress', 'accountName', 'accountNumber', 'bankName', 'password', 'confirmPassword'];
        for (const field of requiredFields) {
            if (!formValues?.[field as keyof RegisterEngineerRequest]) {
                toast.error('All fields are required');
                return false;
            }
        }
        return true;
    };

    async function handleUpdateTestimonial(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Validate form fields
        if (!validateForm()) {
            return;
        }

        // Show loader 
        setIsUpdating(true);

        // construct the data
        const data = {
            id: engineerId as number,
            data: formValues as RegisterEngineerRequest
        }

        await updateEngineer(data)
            .then((response) => {
                console.log({ response })

                toast.success('Your account has been created successfully');

                router.push('/engineer/signin')

            })
            .catch((error) => {
                // Display error
                toast.error(`An error occurred. Please try again`);

                // If we have a response error
                catchError(error)

            })
            .finally(() => {

                // Close loader 
                setIsUpdating(false);
            })
    }

    // Retrieve the ID from local storage when the component mounts
    useEffect(() => {
        const storedId = localStorage.getItem('engineerId');
        if (storedId) {
            setEngineerId(JSON.parse(storedId));
        }
        console.log({ storedId })
    }, []);

    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>
            </div>
            <h2 className='font-bold text-[#211D1D] text-xl text-center'>Welcome to AbTechCare</h2>
            <p className='text-sm text-[#717170] text-center mb-10'>Enter your details to create an account with AbTechcare </p>

            <form className='w-full ' onSubmit={(e) => handleUpdateTestimonial(e)}>
                <div className=" flex flex-col md:flex-row gap-10 mb-10">
                    <div className="md:w-1/2">
                        <div className="mb-7">
                            <Label htmlFor='email'>E-mail Address </Label>
                            <Input className='!mt-1' placeholder='Enter your E-mail Address'
                                name='email'
                                id='email'
                                value={formValues?.email}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, email: e.target.value });
                                }}
                            />
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='firstName'>First Name</Label>
                            <Input className='!mt-1' placeholder='Enter your First Name'
                                name='firstName'
                                id='firstName'
                                value={formValues?.firstName}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, firstName: e.target.value });
                                }} />
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='lastName'>Last Name</Label>
                            <Input className='!mt-1' placeholder='Enter your Last Name'
                                name='lastName'
                                id='lastName'
                                value={formValues?.lastName}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, lastName: e.target.value });
                                }} />
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='phoneNumber'>Contact Number </Label>
                            <Input className='!mt-1' placeholder='Enter your contact  number'
                                name='phoneNumber'
                                id='phoneNumber'
                                value={formValues?.phoneNumber}
                                onChange={(e) => {
                                    const parsedValue = Number(e.target.value);
                                    if (isNaN(parsedValue)) return;
                                    if (parsedValue < 0) return;
                                    setFormValues({ ...formValues as RegisterEngineerRequest, phoneNumber: e.target.value });
                                }} />
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='officeAddress'>Office Address</Label>
                            <Input className='!mt-1' placeholder='Enter your Last Name'
                                name='officeAddress'
                                id='officeAddress'
                                value={formValues?.officeAddress}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, officeAddress: e.target.value });
                                }} />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="mb-7">
                            <Label htmlFor='accountName'>Account Name</Label>
                            <Input className='!mt-1' placeholder='Enter your Account Name'
                                name='accountName'
                                id='accountName'
                                value={formValues?.accountName}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, accountName: e.target.value });
                                }}
                            />
                        </div>
                        <div className="flex mb-7 items-center gap-6 w-full flex-col md:flex-row">
                            <div className="w-full">
                                <Label htmlFor='accountNumber'>Account Number</Label>
                                <Input className='!mt-1' placeholder='Enter your Account Number'
                                    name='accountNumber'
                                    id='accountNumber'
                                    value={formValues?.accountNumber}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues as RegisterEngineerRequest, accountNumber: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="w-full">
                                <Label htmlFor='bankName'>Bank Name</Label>
                                <Input className='!mt-1' placeholder='Enter your Bank Name'
                                    id='bankName'
                                    name='bankName'
                                    value={formValues?.bankName}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues as RegisterEngineerRequest, bankName: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='password'>Create a new Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                value={formValues?.password}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, password: e.target.value });
                                }}
                                className='!mt-1' placeholder='Enter a strong password ' />
                        </div>
                        <div className="mb-7">
                            <Label htmlFor='confirmPassword'>Confirm Password </Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formValues?.confirmPassword}
                                onChange={(e) => {
                                    setFormValues({ ...formValues as RegisterEngineerRequest, confirmPassword: e.target.value });
                                }}
                                className='!mt-1' placeholder='Confirm your password again' />
                        </div>
                    </div>
                </div>
                <button type='submit' disabled={isUpdating} className={`bg-[#FFCC29] font-medium mb-5 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] ${isUpdating && 'pointer-events-none opacity-50'}`}>
                    {isUpdating ? "Loading" : "Create your Account"}
                </button>
                <p className='max-w-[290px] text-center mx-auto text-sm'><span className='text-[#211D1D]'>By creating an account you agree to our </span>
                    <Link href={ApplicationRoutes.ServicePolicy} className='text-[#979281] hover:text-[#FFCC29]'>Terms of Service</Link> <span className='text-[#211D1D]'>and</span> <Link className='text-[#979281] hover:text-[#FFCC29]' href={ApplicationRoutes.ServicePolicy}>Privacy Policy.</Link>
                </p>
            </form>
        </section>
    )
}

export default SignUpPage