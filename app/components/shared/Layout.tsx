'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import { Toaster } from 'sonner'
import images from '@/public/images'
import { usePathname } from 'next/navigation'

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
const pathname = usePathname();
    const [loaderIsVisible, setLoaderIsVisible] = useState(true);
    const iswindow = typeof window !== 'undefined' ? true : false;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    return (
        <>
            {!loaderIsVisible && (
                <>
                    <Toaster
                        position='bottom-center'
                        richColors
                        closeButton
                        toastOptions={{
                            duration: 3000,
                            unstyled: false,
                        }}
                    />
                  {!pathname.includes('/user/signin') && !pathname.includes('/user/forgot-password') && !pathname.includes('/user/signup') && !pathname.includes('/user/reset-password') && !pathname.includes('/engineer/signin') && !pathname.includes('/engineer/signup')  && !pathname.includes('/engineer/forgot-password') && !pathname.includes('/engineer/reset-password') && <Navbar />}
                    {children}
                    <Footer />
                </>
            )}
            {loaderIsVisible && (
                <div className='w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center bg-white'>
                    <div className='w-40 h-40'>
                        <Image src={images.logo_dark} alt='logo' className='w-full h-full object-contain' />
                    </div>
                </div>
            )}
        </>
    )
}