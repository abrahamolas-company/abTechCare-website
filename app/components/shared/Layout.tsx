'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import { Toaster } from 'sonner'
import images from '@/public/images'
import { usePathname } from 'next/navigation'
import DashboardNavbar from './DashboardNavbar'

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
                    {!pathname.includes('/user/dashboard') && !pathname.includes('/engineer/dashboard') && !pathname.includes('/user/account') && !pathname.includes('/engineer/account') && !pathname.includes('/user/payments') && !pathname.includes('/user/invoice') && !pathname.includes('/user/repair-history') && !pathname.includes('/user/signin') && !pathname.includes('/forgot-password') && !pathname.includes('/user/signup') && !pathname.includes('/reset-password') && !pathname.includes('/engineer/signin') && !pathname.includes('/engineer/signup') && <Navbar />}
                    {(pathname.includes('/user/dashboard') ||
                    pathname.includes('/engineer/dashboard') ||
                        pathname.includes('/user/payments') ||
                        pathname.includes('/user/invoice') ||
                        pathname.includes('/user/account') ||
                        pathname.includes('/engineer/account') ||
                        pathname.includes('/user/repair-history')) && <DashboardNavbar />}
                    {children}
                    {!pathname.includes('/user/dashboard') && !pathname.includes('/engineer/dashboard') && !pathname.includes('/user/account') && !pathname.includes('/engineer/account') && !pathname.includes('/user/payments') && !pathname.includes('/user/invoice') && !pathname.includes('/user/repair-history') && <Footer />}

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