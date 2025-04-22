'use client'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useResetPassword } from '../api/apiClient'
import { useRouter, useSearchParams } from 'next/navigation'
import { ResetPasswordRequest } from '../components/models/IPassword'
import { toast } from 'sonner'
import { catchError } from '../components/constants/catchError'

function ResetPasswordPage() {

    const resetPassword = useResetPassword()

    const searchParams = useSearchParams();

    const router = useRouter()

    const token = searchParams.get('token');

    // Re-encode the token to match the original URL-encoded form
    const encodedToken = token ? encodeURIComponent(token) : '';

    const email = searchParams.get('email');
    const [isLoading, setIsLoading] = useState(false)

    const [formValues, setFormValues] = useState<ResetPasswordRequest>({ password: '' } as ResetPasswordRequest);

    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default form submission
        e.preventDefault();
        setError(''); // Clear any previous errors

        if (formValues.password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Start loader
        setIsLoading(true)

        const data: ResetPasswordRequest = {
            password: formValues?.password as string,
            token: encodedToken as string,
            email: email as string
        }

        await resetPassword(data)
            .then(() => {
                setFormValues({ password: '' } as ResetPasswordRequest);
                toast.success('Password reset successfully');
                router.push('/login')
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
            <p className='text-sm text-[#717170] text-center mb-10'>
                Create a New password to Login
            </p>

            <form className='w-fit mx-auto flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-7">
                    <Label htmlFor='password' >New Password</Label>
                    <Input
                        name='password'
                        id="password"
                        className='!mt-1' placeholder='Enter your New Password '
                        onChange={(e) => setFormValues({
                            ...formValues, password: e.target.value
                        } as ResetPasswordRequest
                        )}
                    />
                </div>
                <div className="mb-5">
                    <Label htmlFor='confirmPassword'>Confirm  Password</Label>
                    <Input
                        name='confirmPassword'
                        id="confirmPassword"
                        className='!mt-1'
                        placeholder='Confirm New Password'
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            setError('')
                        }}
                    />

                    {error && <span className='text-red-500 text-sm'>{error}</span>}
                </div>

                <button type='submit' disabled={isLoading} className={`bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] disabled:pointer-events-none disabled:opacity-60`}>
                    Reset Password
                </button>
            </form>
        </section>
    )
}

export default ResetPasswordPage