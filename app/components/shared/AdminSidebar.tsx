"use client";
import { usePathname } from "next/navigation";
import { Icons } from "../ui/icons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import images from "@/public/images";

const AdminSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={`h-screen relative py-10 bg-[#211D1D] text-white overflow-y-auto transition-all duration-300 ${isOpen ? "w-64 px-4" : "w-20 px-2"}`}
        >
            <button
                className=" flex items-end ml-auto -mt-3 mb-5 justify-end cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Icons.Close /> : <Icons.Hamburger />}
            </button>

            {isOpen &&
                <div className='w-[113px] h-[60px] relative mx-auto mb-5'>
                   <Link href='/admin'>
                   <Image src={images.logo} alt='Logo' className='w-full h-full object-contain' />
                   </Link>
                </div>
            }

            <nav className="flex flex-col min-h-[80vh] items-center">
                <div>
                    {menuItems.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={`mb-3 py-2 px-4 w-fit flex items-center gap-3 text-sm rounded cursor-pointer transition-all duration-300
                            ${pathname === href ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                            <Icon />
                            {isOpen && label}
                        </Link>
                    ))}
                </div>
            </nav>
        </aside>
    );
};

const menuItems = [
    { href: "/admin", icon: Icons.Overview, label: "Dashboard" },
    { href: "/admin/engineers", icon: Icons.Engineer, label: "Engineers" },
    { href: "/admin/users", icon: Icons.AdminUser, label: "Users" },
    { href: "/admin/orders", icon: Icons.Order, label: "Orders" },
    { href: "/admin/logistics", icon: Icons.Logistic, label: "Logistics" },
    { href: "/admin/transactions", icon: Icons.Transaction, label: "Transactions" },
];


export default AdminSidebar;