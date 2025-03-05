
import { sectionPadding } from '@/app/styles/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, RefObject, SetStateAction } from 'react'
import { Icons } from '../ui/icons';
import Button from '../ui/button';
import CustomImage from '../ui/image';
import images from '@/public/images';
import { ApplicationRoutes } from '../constants/applicationRoutes';
import ServiceDropdowComponent from './ServiceDropdowComponent';
import SupportDropdownComponent from './SupportDropdownComponent';

type Props = {
    setMobileNavIsvisible: Dispatch<SetStateAction<boolean>>
    setIsServiceDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>
    servicesDropdownRef: React.RefObject<HTMLDivElement | null>
    isServiceDropDownOpen: boolean
    supportDropdownRef: React.RefObject<HTMLDivElement | null>
    mobileNavIsVisible: boolean
    isSupportDropDownOpen: boolean
    setIsSupportDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenu = ({ setMobileNavIsvisible, mobileNavIsVisible, setIsServiceDropDownOpen, servicesDropdownRef, isServiceDropDownOpen, setIsSupportDropDownOpen, supportDropdownRef, isSupportDropDownOpen }: Props) => {
    const pathname = usePathname();
    return (
        <div className={`fixed w-full h-full bg-[#0D1215E5] top-0 left-0 lg:hidden ${sectionPadding} ${mobileNavIsVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'}`}>
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
                    className="items-center justify-center cursor-pointer hover:bg-ga-green-dark2/20 transition-all duration-300 ease-in-out rounded lg:hidden"
                    onClick={() => setMobileNavIsvisible(false)}
                >
                    <Icons.CloseIcon />
                </span>
            </div>

            <ul className="flex flex-col items-start p-4 gap-7">
                <Link href={ApplicationRoutes.Home} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer hover:text-ga-green-dark2 ${pathname == ApplicationRoutes.Home ? "text-[#FFCC29]" : "text-[#FFF]"}`}>
                    <li>Home</li>
                </Link>
                <div ref={servicesDropdownRef} className="relative w-full">
                    <li className=" cursor-pointer flex justify-between items-center gap-1 text-white transition-all duration-300 ease-in-out" onClick={() => setIsServiceDropDownOpen(!isServiceDropDownOpen)}>Service <span>{isServiceDropDownOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}</span></li>
                    {isServiceDropDownOpen && (
                        <ServiceDropdowComponent
                            setIsServiceDropDownOpen={setIsServiceDropDownOpen}
                            setMobileNavIsvisible={setMobileNavIsvisible}
                        />
                    )}
                </div>

                <div ref={supportDropdownRef} className="relative w-full">
                    <li className=" cursor-pointer flex justify-between items-center gap-1 text-white transition-all duration-300 ease-in-out" onClick={() => setIsSupportDropDownOpen(!isSupportDropDownOpen)}>Support <span>{isSupportDropDownOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}</span></li>
                    {isSupportDropDownOpen && (
                        <SupportDropdownComponent
                            setIsSupportDropDownOpen={setIsSupportDropDownOpen}
                            setMobileNavIsvisible={setMobileNavIsvisible}
                        />
                    )}
                </div>

                <Link href={ApplicationRoutes.About} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer hover:text-[#FFCC29] ${pathname == ApplicationRoutes.About ? "hover:text-[#FFCC29]" : "text-white"}`}>
                    <li>About Us</li>
                </Link>

                <Link href={ApplicationRoutes.Contact} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer hover:text-[#FFCC29] ${pathname == ApplicationRoutes.Contact ? "text-[#FFCC29]" : "text-white"}`}>
                    <li>Contact Us</li>
                </Link>
            </ul>
            {/* <Link href={ApplicationRoutes.Contact}>
                <Button
                    className="text-sm w-full mt-4"
                    style={{
                        background: 'linear-gradient(65.65deg, #0C5508 -30.83%, #1ABB12 148.27%)'
                    }}
                >
                    Book a Call
                </Button>
            </Link> */}
        </div>
    )
}

export default MobileNavMenu