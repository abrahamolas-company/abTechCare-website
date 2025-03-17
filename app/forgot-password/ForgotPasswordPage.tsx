'use client'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { useForgotPassword } from '../api/apiClient'
import { ForgotPasswordRequest } from '../components/models/IPassword'
import { validateEmail } from '../components/constants/emailRegex'
import { toast } from 'sonner'
import { catchError } from '../components/constants/catchError'
import Button from '../components/ui/button'

function ForgotPasswordPage() {
    const forgotPassword = useForgotPassword()
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState<string>('');

    const [formValues, setFormValues] = useState<ForgotPasswordRequest>({
        email: ''
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // Prevent default form submission
        e.preventDefault();

        if (!formValues?.email) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(formValues?.email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Start loader
        setIsLoading(true);

        await forgotPassword(formValues as ForgotPasswordRequest)
            .then((response) => {
                console.log({response})
                setFormValues({ email: '' });
                toast.success('Please check your email for further instructions');
            })
            .catch((error) => {
                catchError(error)
                toast.error('An error occurred. Please try again.');
            })
            .finally(() => {
                // Close loader
                setIsLoading(false);
            });
    }
    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>            </div>
            <p className='text-sm text-[#717170] text-center mb-10 max-w-[500px] mx-auto'>
                You can request a password reset below. An email will be sent to you, please make sure it is correct.
            </p>

            <form className='w-fit mx-auto flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <div className="flex flex-col">
                        <Label htmlFor='email'>E-mail Address</Label>
                        <Input className='!mt-1 w-full md:w-[500px]' placeholder='Enter your E-mail Address'
                            type='email'
                            name="email"
                            id="email"
                            value={formValues?.email}
                            onChange={(e) => {
                                setFormValues({ ...formValues, email: e.target.value } as ForgotPasswordRequest);
                                setError('');
                            }}
                        />
                        {error && <span className='text-red-500 mt-1 text-sm'>{error}</span>}
                    </div>
                    {/* <button className='ml-auto flex items-end justify-end text-xs rounded-[5px] mt-1 text-white bg-[#C40F35] px-5 py-2'>Send Security Code</button> */}
                </div>
                {/* <div className="mb-5">
                    <Label >Enter Code</Label>
                    <Input className='!mt-1' placeholder='000 000' />
                </div> */}
                  <Button
                        type='submit'
                        disabled={isLoading}
                        className={`relative overflow-hidden text-sm ${isLoading ? "disabled pointer-events-none opacity-60" : ""}`}>
                        Continue
                    </Button>
            </form>
        </section>
    )
}

export default ForgotPasswordPage