import { sectionPadding } from '@/app/styles/styles';
import images from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../ui/icons';
// import NewsLetterSubscription from '../NewsLetterSubscription';
import { ApplicationRoutes } from '../constants/applicationRoutes';

const Footer = () => {
    return (
        <footer className={`${sectionPadding} bg-[#211D1D] !pt-10 text-white`}>
            <div className='flex flex-col gap-10 lg:gap-20 lg:flex-row'>
                <div className='flex items-start justify-between lg:gap-14 font-light'>
                    <div className='flex flex-col gap-2 lg:whitespace-nowrap'>
                        <h4 className='text-white text-base font-bold'>Our Services </h4>
                        <ul className='flex flex-col gap-4 text-sm'>
                            <Link href={ApplicationRoutes.GadgetRepair} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Gadget Repair</li>
                            </Link>
                            <Link href={ApplicationRoutes.FlexiblePayment} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Flexible Payment</li>
                            </Link>
                            <Link href={ApplicationRoutes.GadgetInsurance} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Gadget Insurance</li>
                            </Link>
                            <Link href={ApplicationRoutes.PickupandDelivery} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Pickup and Delivery</li>
                            </Link>
                            <Link href={ApplicationRoutes.TrackYourRepair} target='_blank' className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Track your Repair Status</li>
                            </Link>
                            <Link href={ApplicationRoutes.Quote} target='_blank' className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Get a quote</li>
                            </Link>

                        </ul>
                    </div>

                    <div className='flex flex-col gap-2 lg:whitespace-nowrap'>
                        <h4 className='text-white text-base font-bold'>Help</h4>
                        <ul className='flex flex-col gap-4 text-sm'>
                            <Link href={ApplicationRoutes.About} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>About Us</li>
                            </Link>
                            <Link href={ApplicationRoutes.TermsAndConditions} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Terms & Conditions</li>
                            </Link>
                            <Link href={ApplicationRoutes.ServicePolicy} className={`cursor-pointer hover:text-[#FFCC29] transitio ease-in-out duration-300`}>
                                <li>Privacy Policy</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-between">

                      <div className='flex flex-col gap-2 lg:whitespace-nowrap'>
                    <h4 className='text-white text-base font-bold'>Find Us</h4>
                    <div className='font-light'>
                    <div className='flex items-start gap-3 text-sm mb-5 w-fit'>
                            <Icons.Location className='5' />
                            <Link target='_blank' href={"https://www.google.com/maps/place/21+Kodesoh+St,+Ikeja,+Lagos+101233,+Lagos/@6.594753,3.3390226,17z/data=!3m1!4b1!4m6!3m5!1s0x103b9226d907a9ef:0x2540189a836688b1!8m2!3d6.5947477!4d3.3415975!16s%2Fg%2F11f03t278s?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"} className='hover:text-[#FFCC29] transition-all ease-in-out duration-300'>
                                21, kodesho street, beside juli <br /> pharmacy, ikeja, lagos.
                            </Link>
                        </div>
                        <div className='flex items-start gap-3 text-sm mb-4 w-fit'>
                            <Icons.Phone />
                            <Link className='hover:text-[#FFCC29] transition-all ease-in-out duration-300' href={"tel:+2349168701802"}>+234 916 870 1802</Link>
                        </div>
                        <Link className='flex items-center gap-3 text-sm mb-4 w-fit hover:text-[#FFCC29] transition-all ease-in-out duration-300' href="/"><Icons.Instagram className='w-4 h-4 lg:w-5 lg:h-5' />abtech_care</Link>
                        <div className='flex items-start gap-3 text-sm mb-4 w-fit'>
                            <Icons.Email />
                            <Link className='hover:text-[#FFCC29] transition-all ease-in-out duration-300' href={"mailto:info@abtechcare.com"}>info@abtechcare.com</Link>
                        </div>
                     
                    </div>
                </div>

                <div className='mt-5 lg:mt-0'>
                    <h4 className='text-white text-base mb-5 font-bold'>Subscribe to our News letter</h4>
                    <div className='font-light flex flex-col gap-2 items-start'>
                        <input className='bg-white rounded-[10px] outline-none w-full text-[#211D1D] p-3 font-medium placeholder:text-[#D9D9D9] placeholder:text-sm' type='email'
                            name='email'
                            placeholder='Enter your email address'
                        />
                        <button className='bg-white rounded-[10px] w-full xl:w-1/2 p-3 font-medium text-[#211D1D] flex items-center justify-between gap-3'>Subscribe <Icons.Bell /></button>
                    </div>
                </div> 
                </div>
             
            </div>
            <div className="w-full lg:w-[600px] border-t border-t-[#D9D9D9] font-medium mt-5 pt-3 pb-5 text-base text-[#fff] text-center mx-auto">
                <p>
                    {new Date().getFullYear()} © Abtechcare All rights reserved
                </p>
            </div>

        </footer>
    );
};

export default Footer;
