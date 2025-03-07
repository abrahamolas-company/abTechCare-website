
import { sectionPadding } from '@/app/styles/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, RefObject, SetStateAction } from 'react'
import { Icons } from '../ui/icons';
import CustomImage from '../ui/image';
import images from '@/public/images';
import { ApplicationRoutes } from '../constants/applicationRoutes';

type Props = {
    setMobileNavIsvisible: Dispatch<SetStateAction<boolean>>
    mobileNavIsVisible: boolean
}

const DashboardMobileNavMenu = ({ setMobileNavIsvisible, mobileNavIsVisible }: Props) => {
    const pathname = usePathname();

    const menuItems = [
        { href: "/user/dashboard", icon: Icons.Orders, label: "My Orders" },
        { href: "/user/payments", icon: Icons.Payment, label: "Payment History" },
        { href: "/user/repair-history", icon: Icons.Repair, label: "Repair History" },
        { href: "/user/invoice", icon: Icons.Invoice, label: "My Invoice" }
    ];

    const adminItems = [
        { href: "/user/account", icon: Icons.Account, label: "Account Setup" }
    ];

    return (
        <div className={`fixed w-full h-full bg-black/90 top-0 left-0 lg:hidden ${sectionPadding} ${mobileNavIsVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'}`}>
            <div className={`flex flex-row justify-between items-center p-5 relative`}>
                <Link href={ApplicationRoutes.Home}>
                    <div
                        className="w-[120px] h-[50px] relative"
                        onClick={() => {
                            setMobileNavIsvisible(false);
                        }}
                    >
                        <CustomImage className='object-contain' src={images.logo} alt="Logo" />
                    </div>
                </Link>
                <span
                    className="items-center justify-center cursor-pointer transition-all duration-300 ease-in-out rounded lg:hidden bg-white/30 hover:scale-105"
                    onClick={() => setMobileNavIsvisible(false)}
                >
                    <Icons.CloseIcon />
                </span>
            </div>

            <h2 className="text-sm font-medium mt-2 mb-2 text-white">DASHBOARD</h2>

            <nav className="flex flex-col min-h-[80vh] justify-between">
                <div>
                    {pathname.includes('/user/dashboard') || pathname.includes('/user/payments') || pathname.includes('/user/repair-history') || pathname.includes('/user/invoice') || pathname.includes('/user/account') ? (
                        <>
                            {menuItems.map(({ href, icon: Icon, label }) => (
                                <Link onClick={() => setMobileNavIsvisible(false)} key={href} href={href}
                                    className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm rounded cursor-pointer text-white transition-all duration-300
                ${pathname === href ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                    <Icon />
                                    {label}
                                </Link>
                            ))}
                        </>
                    ) : (
                        <>
                            <Link onClick={() => setMobileNavIsvisible(false)} href={'/engineer/dashboard'}
                                className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm rounded cursor-pointer transition-all text-white duration-300
                ${pathname === '/engineer/dashboard' ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                <Icons.Orders />Overview
                            </Link>
                        </>
                    )}
                </div>

                <div className="mt-auto">
                    <h2 className="text-sm font-medium mb-2 text-white">ADMIN</h2>
                    {pathname.includes('/user/dashboard') || pathname.includes('/user/payments') || pathname.includes('/user/repair-history') || pathname.includes('/user/invoice') || pathname.includes('/user/account') ? (
                        <>
                            {adminItems.map(({ href, icon: Icon, label }) => (
                                <Link onClick={() => setMobileNavIsvisible(false)} key={href} href={href}
                                    className={`mb-1 p-2 flex items-center gap-3 text-sm rounded text-white cursor-pointer transition-all duration-300
                ${pathname === href ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                    <Icon />
                                    {label}
                                </Link>
                            ))}
                        </>
                    ) : (
                        <>
                            <>
                                <Link onClick={() => setMobileNavIsvisible(false)} href={'/engineer/account'}
                                    className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm text-white rounded cursor-pointer transition-all duration-300
                ${pathname === '/engineer/account' ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                    <Icons.Account />Account Setup
                                </Link>
                            </>
                        </>
                    )}
                    <div className="mb-3 p-2 flex items-center gap-3 text-sm rounded text-white cursor-pointer">
                        <Icons.Logout />Logout
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DashboardMobileNavMenu