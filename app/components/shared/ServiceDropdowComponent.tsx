import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import { ApplicationRoutes } from '../constants/applicationRoutes'

type Props = {
    setIsServiceDropDownOpen: Dispatch<SetStateAction<boolean>>
    setMobileNavIsvisible: Dispatch<SetStateAction<boolean>>
}

const ServiceDropdowComponent = ({ setIsServiceDropDownOpen, setMobileNavIsvisible }: Props) => {
    const pathname = usePathname();
    return (
        <ul className="z-50 absolute flex flex-col w-full lg:w-fit gap-4 bg-[#FFF] text-[#211D1D] shadow-lg top-8 left-0 px-4 py-5 rounded-lg lg:rounded-2xl animate-slideDown">
            <Link
                href={ApplicationRoutes.GadgetRepair}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.GadgetRepair ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                    Gadget Repair
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.FlexiblePayment}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.FlexiblePayment ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                    Flexible Payment
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.GadgetInsurance}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.GadgetInsurance ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                    Gadget Insurance
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.PickupandDelivery}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.PickupandDelivery ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                    Pickup and Delivery
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.TrackYourRepair}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.TrackYourRepair ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                    Track your Repair Status
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.Quote}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.Quote ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                Get a quote
                </li>
            </Link>
            <Link
                href={ApplicationRoutes.B2BServices}
                onClick={() => {
                    setIsServiceDropDownOpen(false)
                    setMobileNavIsvisible(false)
                }}
                className={`w-fit ${pathname == ApplicationRoutes.B2BServices ? "text-[#FFCC29] font-semibold" : ""}`}
            >
                <li className="text-sm whitespace-nowrap rounded-lg hover:text-[#FFCC29]">
                B2B Services
                </li>
            </Link>
        </ul>
    )
}

export default ServiceDropdowComponent