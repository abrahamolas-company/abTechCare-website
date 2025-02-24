import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react'
import useOuterClick from '../hooks/useOuterClick';
import { sectionPadding } from '@/app/styles/styles';
import Image from 'next/image';
import images from '@/public/images';
import Link from 'next/link';
import { ApplicationRoutes } from '../constants/applicationRoutes';
import Button from '../ui/button';
import { Icons } from '../ui/icons';
import ServiceDropdowComponent from './ServiceDropdowComponent';
import SupportDropdownComponent from './SupportDropdownComponent';

function Navbar() {
    const pathname = usePathname();

    const [mobileNavIsVisible, setMobileNavIsvisible] = useState(false);
    const [isServiceDropDownOpen, setIsServiceDropDownOpen] = useState(false);
    const [isSupportDropDownOpen, setIsSupportDropDownOpen] = useState(false);

    const servicesDropdownRef = useRef<HTMLDivElement>(null);
    const supportDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(servicesDropdownRef, setIsServiceDropDownOpen);
    useOuterClick(supportDropdownRef, setIsSupportDropDownOpen);

    return (
        <nav className={`${sectionPadding} absolute top-0 left-0 w-full z-50 p-5 bg-transparent`}>

            <div className="p-5 flex flex-row justify-between items-center">
                <Link href={"/"} className="w-8 h-8 lg:hidden">
                    <Image src={images.logo} alt="Logo" className="w-full h-full object-contain" />
                </Link>
                <div className='hidden lg:flex lg:flex-row lg:gap-7 lg:items-center lg:justify-between lg:px-3 lg:w-full lg:text-sm'>
                    <Link href={"/"}>
                        <div className='lg:w-[153px] lg:h-[69px] relative'>
                            <Image src={images.logo} alt='Logo' className='w-full h-full object-contain' />
                        </div>
                    </Link>

                    <ul className='flex gap-10 text-sm lg:whitespace-nowrap bg-[#20211D4D] px-4 py-1'>
                        <Link href={ApplicationRoutes.Home} className={`cursor-pointer hover:text-[#FFCC29] transition-all ease-in-out duration-300 ${pathname == ApplicationRoutes.Home ? "text-[#FFCC29]" : "text-white"}`}>
                            <li>Home</li>
                        </Link>
                        <div ref={servicesDropdownRef} className="relative">
                            <li className={`flex items-center gap-1 transition-all duration-300 ease-in-out text-white`} onClick={() => setIsServiceDropDownOpen(!isServiceDropDownOpen)}>Our Services <span>{isServiceDropDownOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}</span></li>
                            {isServiceDropDownOpen && (
                                <ServiceDropdowComponent
                                    setIsServiceDropDownOpen={setIsServiceDropDownOpen}
                                    setMobileNavIsvisible={setMobileNavIsvisible}
                                />
                            )}
                        </div>
                        <div ref={supportDropdownRef} className="relative">
                            <li className=" flex items-center gap-1 text-white transition-all duration-300 ease-in-out" onClick={() => setIsSupportDropDownOpen(!isSupportDropDownOpen)}>Support<span>{isSupportDropDownOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}</span></li>
                            {isSupportDropDownOpen && (
                                <SupportDropdownComponent
                                    setIsSupportDropDownOpen={setIsSupportDropDownOpen}
                                    setMobileNavIsvisible={setMobileNavIsvisible}
                                />
                            )}
                        </div>
                        <Link href={ApplicationRoutes.About} className={`cursor-pointer hover:text-[#FFCC29] transition-all ease-in-out duration-300 ${pathname == ApplicationRoutes.About ? "text-[#FFCC29]" : "text-white"}`}>
                            <li>About Us</li>
                        </Link>
                        <Link href={ApplicationRoutes.Contact} className={`cursor-pointer hover:text-[#FFCC29] transition-all ease-in-out duration-300 ${pathname == ApplicationRoutes.Contact ? "text-[#FFCC29]" : "text-white"}`}>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                    <Link href={ApplicationRoutes.Contact}>
                        <button
                            className="text-[#211D1D] bg-[#FFCC29] text-sm py-3 px-8 rounded-xl"
                        >
                            Login
                        </button>
                    </Link>
                </div>

                <button className="p-1 rounded lg:hidden" onClick={() => setMobileNavIsvisible(true)}>
                    <Icons.Hamburger />
                </button>

                {/* {mobileNavIsVisible && <MobileNavMenu setMobileNavIsvisible={setMobileNavIsvisible} companyDropdownRef={companyDropdownRef} mobileNavIsVisible={mobileNavIsVisible} isCompanyDropDownOpen={isCompanyDropDownOpen} setIsCompanyDropDownOpen={setIsCompanyDropDownOpen} />} */}
            </div>
        </nav>
    )
}

export default Navbar