import React, { useState } from 'react'
import { Icons } from '../ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import images from '@/public/images'
import DashboardMobileNavMenu from './DashboardMobileNavMenu'

function DashboardNavbar() {

    const [mobileNavIsVisible, setMobileNavIsvisible] = useState(false);
    return (
        <nav className={`px-4 md:px-[3%] absolute top-0 left-0 w-full z-50 p-5 bg-transparent`}>

            <div className="py-5 flex flex-row justify-between items-center">
            <div className="flex items-center gap-6">
              <button className="p-1 rounded lg:hidden" onClick={() => setMobileNavIsvisible(true)}>
                    <Icons.Hamburger />
                </button>
              <Link href={"/"} className="w-[76px] h-[34px] lg:hidden">
                    <Image src={images.logo} alt="Logo" className="w-full h-full object-contain" />
                </Link>
              </div>
                <div className='hidden lg:flex lg:flex-row lg:gap-7 lg:items-center lg:justify-between lg:px-3 lg:w-full lg:text-sm'>
                    <Link href={"/"}>
                        <div className='lg:w-[143px] lg:h-[59px] relative'>
                            <Image src={images.logo} alt='Logo' className='w-full h-full object-contain' />
                        </div>
                    </Link>
                </div>
                <span className='flex text-white items-center gap-2'><Icons.WhiteUser />Isreal</span>

            </div>

            {mobileNavIsVisible && <DashboardMobileNavMenu setMobileNavIsvisible={setMobileNavIsvisible} mobileNavIsVisible={mobileNavIsVisible} />}
        </nav>
    )
}

export default DashboardNavbar