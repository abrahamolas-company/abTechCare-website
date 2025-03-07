import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { ApplicationRoutes } from '../constants/applicationRoutes'
import useOuterClick from '../hooks/useOuterClick'

type Props = {
    setIsSupportDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>
    setMobileNavIsvisible: Dispatch<SetStateAction<boolean>>
}

const SupportDropdownComponent = ({ setIsSupportDropDownOpen, setMobileNavIsvisible }: Props) => {
  const pathname = usePathname();

    return (
        <ul className="absolute flex flex-col w-full lg:w-fit gap-4 bg-[#FFF] text-[#211D1D] shadow-lg top-8 left-0 px-4 py-5 rounded-lg lg:rounded-2xl z-50 animate-slideDown">
            <Link
                href={ApplicationRoutes.ServiceEngineer}
                onClick={() => {
                    setIsSupportDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.ServiceEngineer ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                Become a Service Engineer
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.ServicePolicy}
                onClick={() => {
                    setIsSupportDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.ServicePolicy ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                Service Policy
                </li>
            </Link>
        </ul>
    )
}

export default SupportDropdownComponent