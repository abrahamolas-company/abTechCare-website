import React, { useEffect, useState } from 'react'
import { Icons } from '../ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import images from '@/public/images'
import DashboardMobileNavMenu from './DashboardMobileNavMenu'
import { useGetUsers } from '@/app/api/apiClient'
import { Users } from '../models/IUsers'
import { catchError } from '../constants/catchError'
import { toast } from 'sonner'
import { Roles } from '../models/IRegisterUser'

function DashboardNavbar() {
    const getUsers = useGetUsers()

    const [mobileNavIsVisible, setMobileNavIsvisible] = useState(false);

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isEngineerLoggedIn, setIsEngineerLoggedIn] = useState(false);

    const [user, setUser] = useState<Users>()
      // const [loading, setLoading] = useState(false)

    async function fetchUsers(id: number) {
        //show the loader
        // setLoading(true);
    
    
        getUsers(id)
          .then((response) => {
            console.log({ response });
    
            setUser(response.data.data)
            // toast.success('Repair order fetched successfully')
          })
          .catch((error) => {
            catchError(error);
            toast.error('An error occurred. Please try again.');
          })
          .finally(() => {
            // setLoading(false);
          });
      }
    
      useEffect(() => {
        const storedId = localStorage.getItem('userId');
        if (storedId) {
          const id = JSON.parse(storedId);
          fetchUsers(id);
        }
      }, []);
      useEffect(() => {
        const token = sessionStorage.getItem("token");
        const rolesString = sessionStorage.getItem("roles");

        if (token && rolesString) {
            try {
                const roles = JSON.parse(rolesString); // Deserialize the roles array
                console.log("Roles from sessionStorage:", roles); // Debugging: Log roles

                const userRole = roles.find((role: Roles) => role.roleType === "ROLE_USER");
                const engineerRole = roles.find((role: Roles) => role.roleType === "ROLE_ENGINEER");

                if (userRole) {
                    setIsUserLoggedIn(true);
                    setIsEngineerLoggedIn(false);
                } else if (engineerRole) {
                    setIsEngineerLoggedIn(true);
                    setIsUserLoggedIn(false);
                }
            } catch (error) {
                console.error("Error parsing roles from sessionStorage:", error);
            }
        }
    }, []);
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
                {isUserLoggedIn && !isEngineerLoggedIn &&
               <span className='flex text-sm whitespace-nowrap text-white items-center gap-2'><Icons.WhiteUser />{user?.lastName} {user?.firstName}</span>
                }

                {!isUserLoggedIn && isEngineerLoggedIn &&
                <span className='flex text-sm whitespace-nowrap text-white items-center gap-2'><Icons.WhiteUser />Isreal</span>
                }
            </div>

            {mobileNavIsVisible && <DashboardMobileNavMenu setMobileNavIsvisible={setMobileNavIsvisible} mobileNavIsVisible={mobileNavIsVisible} />}
        </nav>
    )
}

export default DashboardNavbar