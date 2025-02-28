"use client";
import { usePathname } from "next/navigation";
import { Icons } from "../ui/icons";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={`h-[90vh] relative py-10 bg-[#211D1D] text-white overflow-y-auto transition-all duration-300 ${isOpen ? "w-64 px-4" : "w-20 px-2"}`}
        >
            <button
                className=" flex items-end ml-auto -mt-3 mb-5 justify-end cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Icons.Close /> : <Icons.Hamburger />}
            </button>

            {isOpen && <h2 className="text-sm font-medium mt-2 mb-2">DASHBOARD</h2>}

            <nav className="flex flex-col min-h-[80vh] justify-between">
                <div>
                    {pathname.includes('/user/dashboard') || pathname.includes('/user/payments') || pathname.includes('/user/repair-history') || pathname.includes('/user/invoice') || pathname.includes('/user/account') ? (
                        <>
                            {menuItems.map(({ href, icon: Icon, label }) => (
                                <Link key={href} href={href}
                                    className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm rounded cursor-pointer transition-all duration-300
                            ${pathname === href ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                    <Icon />
                                    {isOpen && label}
                                </Link>
                            ))}
                        </>
                    ) : (
                        <>
                            <Link href={'/engineer/dashboard'}
                                className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm rounded cursor-pointer transition-all duration-300
                            ${pathname === '/engineer/dashboard' ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                <Icons.Orders />
                                {isOpen && 'Overview'}
                            </Link>
                        </>
                    )}
                </div>

                <div className="mt-auto">
                    {isOpen && <h2 className="text-sm font-medium mb-2">ADMIN</h2>}
                  {pathname.includes('/user/dashboard') || pathname.includes('/user/payments') || pathname.includes('/user/repair-history') || pathname.includes('/user/invoice') || pathname.includes('/user/account') ? (
                    <>
                      {adminItems.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={`mb-1 p-2 flex items-center gap-3 text-sm rounded cursor-pointer transition-all duration-300
                            ${pathname === href ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                            <Icon />
                            {isOpen && label}
                        </Link>
                    ))}
                    </>
                  ) : (
                    <>
                        <>
                            <Link href={'/engineer/account'}
                                className={`mb-3 p-2 w-fit flex items-center gap-3 text-sm rounded cursor-pointer transition-all duration-300
                            ${pathname === '/engineer/account' ? "bg-[#7F8386] w-full font-semibold" : "hover:text-[#FFCC29]"}`}>
                                <Icons.Account />
                                {isOpen && 'Account Setup'}
                            </Link>
                        </>
                    </>
                  )}
                    <div className="mb-3 p-2 flex items-center gap-3 text-sm rounded cursor-pointer">
                        <Icons.Logout />
                        {isOpen && 'Logout'}
                    </div>
                </div>
            </nav>
        </aside>
    );
};

const menuItems = [
    { href: "/user/dashboard", icon: Icons.Orders, label: "My Orders" },
    { href: "/user/payments", icon: Icons.Payment, label: "Payment History" },
    { href: "/user/repair-history", icon: Icons.Repair, label: "Repair History" },
    { href: "/user/invoice", icon: Icons.Invoice, label: "My Invoice" }
];

const adminItems = [
    { href: "/user/account", icon: Icons.Account, label: "Account Setup" }
];

export default Sidebar;
