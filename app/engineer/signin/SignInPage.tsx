'use client'
import { useLoginEngineer } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { LoginEngineer } from '@/app/components/models/IRegisterEngineer'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'sonner'

function SignInPage() {

    const loginEngineer = useLoginEngineer();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<LoginEngineer>();

    const [checked, setChecked] = useState(false);
    const [emailAddressErrorMsg, setEmailAddressErrorMsg] = useState<
        string | boolean
    >(false);

    const [passwordErrorMsg, setPasswordErrorMsg] = useState<string | boolean>(
        false
    );
    function onformValueChange(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        setState?: Dispatch<SetStateAction<string | boolean>>
    ) {
        const { name, value } = e.target;

        setFormValues({
            ...(formValues as LoginEngineer),
            [name]: value,
        });

        // If setState is not undefined...
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
        // console.log(formValues);
        if (
            formValues &&
            formValues.emailOrPhoneNumber &&
            formValues.password
        ) {
            return true;
        } else {

            if (!formValues?.emailOrPhoneNumber) {
                setEmailAddressErrorMsg(true);
            } else {
                setEmailAddressErrorMsg(false);
            }
            if (!formValues?.password) {
                setPasswordErrorMsg(true);
            } else {
                setPasswordErrorMsg(false);
            }

            return false;
        }
    }

    async function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //show the loader
        setLoading(true);

        if (validateFields()) {
            // console.log(formValues);

            loginEngineer(formValues as LoginEngineer)
                .then((response) => {
                    // console.log(response.data);
                    toast.success("You have successfully logged in.");

                    // Encrypt the password before storing
                    if (checked) {
                        const encryptedPassword = btoa(formValues?.password || ""); // Basic encryption
                        localStorage.setItem("engineerRememberMe", JSON.stringify({
                            emailOrPhoneNumber: formValues?.emailOrPhoneNumber,
                            password: encryptedPassword
                        }));
                    } else {
                        localStorage.removeItem("engineerRememberMe");
                    }

                    // Store user token in sessionStorage
                    sessionStorage.setItem("token", response.data.data.body.token.access_token);
                    sessionStorage.setItem("roles", JSON.stringify(response.data.data.body.roles)); // Ensure roles are serialized


                    router.push('/engineer/dashboard')
                })
                .catch((error) => {
                    catchError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }

    //UseEffect to close all toasts after 5 seconds
    useEffect(() => {
        if (!loading)
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
    }, [loading]);

    useEffect(() => {
        const savedData = localStorage.getItem("engineerRememberMe");
        if (savedData) {
            const { emailOrPhoneNumber, password } = JSON.parse(savedData);
            setFormValues({
                emailOrPhoneNumber,
                password: atob(password) // Decrypt password
            });
            setChecked(true);
        }
    }, []);
    return (
        <section className={`${sectionPadding} pb-24`}>
            <div className="w-[120px] h-[54px] mx-auto mt-20 mb-1">
                <Link href={'/'}>
                    <Image src={images.logo_dark} alt='dark logo' className='w-full h-full object-cover' />
                </Link>            </div>
            <h2 className='font-bold text-[#211D1D] text-xl text-center'>Welcome Back</h2>
            <p className='text-sm text-[#717170] text-center mb-10'>Enter your E-mail Address or Contact Number and Password to sign in</p>

            <form onSubmit={(e) => handleFormSubmission(e)} className='w-fit md:w-1/2 mx-auto flex flex-col'>
                <div className="mb-7">
                    <Label htmlFor='emailOrPhoneNumber'>E-mail Address or Contact Number </Label>
                    <Input className='!mt-1'
                        type="emailOrPhoneNumber"
                        name="emailOrPhoneNumber"
                        id="emailOrPhoneNumber"
                        value={formValues?.emailOrPhoneNumber}
                        onChange={(e) => onformValueChange(e, setEmailAddressErrorMsg)}
                        placeholder='Enter your E-mail Address or Contact Number' />
                    {emailAddressErrorMsg && (
                        <span className='text-sm text-red-500'>
                            Please enter your email address or phone number
                        </span>
                    )}
                </div>
                <div className="mb-5">
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues?.password}
                        onChange={(e) => onformValueChange(e, setPasswordErrorMsg)}
                        className='!mt-1' placeholder='Enter your Password' />
                    {passwordErrorMsg && (
                        <span className='text-sm text-red-500'>
                            Enter your password
                        </span>
                    )}
                </div>

                <label className="flex items-center cursor-pointer ml-auto mb-5 space-x-2">
                    <div
                        className={`w-5 h-5 border-2 rounded transition-all ${checked ? "bg-[#C40F35] border-[#C40F35]" : "bg-white border-gray-400"
                            }`}
                        onClick={() => setChecked(!checked)}
                    ></div>
                    <span className="text-gray-700 text-[15px]">Remember Me</span>
                </label>

                <button type='submit' disabled={loading} className={`bg-[#FFCC29] font-medium mb-5 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] ${loading && 'pointer-events-none opacity-50'}`}>
                    {loading ? "Loading" : "Sign In"}
                </button>
                <Link href={'/forgot-password'} className='mb-5 text-center text-sm text-[#717170] hover:text-[#FFCC29]'>Forgot Password?</Link>
                <p className=' text-sm text-[#717170] text-center'>Don&apos;t have an account yet? <Link href={'/engineer/signup'} className='text-[#FFCC29]'>create an account</Link></p>
            </form>
        </section>
    )
}

export default SignInPage