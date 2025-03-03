import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Input from '../ui/input';

type Props = {
    isWithdrawalModalOpen: boolean;
    setIsWithdrawalModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function WithdrawalModal({ isWithdrawalModalOpen, setIsWithdrawalModalOpen }: Props) {
    return (
        <AnimatePresence>
            {isWithdrawalModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                >
                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[70%] max-w-[800px] h-auto rounded-lg shadow-lg bg-black flex items-center p-6"
                    >
                        {/* Modal Text Content */}
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10 text-[#211D1D]">
                            <button
                                onClick={() => setIsWithdrawalModalOpen(false)}
                                className="absolute top-5 right-5 cursor-pointer text-white text-3xl"
                            >
                                &times;
                            </button>
                            <div className="flex flex-col gap-6">
                                <div className="bg-white rounded-[10px] px-6 pb-4">
                                    <p className="text-xs leading-[50px] text-center font-light mb-1">
                                        Withdrawal Details
                                    </p>
                                    <p className='flex items-center justify-between gap-10 text-sm mb-4'>Account Name<span>09098339187</span></p>
                                    <p className='flex items-center justify-between gap-10 text-sm mb-4'>Account Number<span>09098339187</span></p>
                                    <p className='flex items-center justify-between gap-10 text-sm'>Bank Name<span>09098339187</span></p>
                                </div>
                                <div className="text-white">
                                    <p className='text-xs text-center font-light mb-1'>Wallet Balance: <span className='font-bold'>₦300,000</span></p>
                                    <Input placeholder='Input Amount' className='mb-4 grid place-items-center !mx-auto !w-[200px] !bg-[#FFFFFF54]' />
                                    <div className="flex items-center gap-3">
                                        <button className="bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[143px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-white">
                                            Withdraw
                                        </button>
                                        <button className="bg-transparent font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-white py-3 min-w-[143px] transition-all ease-in-out duration-300 border border-white hover:bg-white hover:text-[#211D1D]">
                                            Max
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-1/2 hidden md:block">
                            <Image
                                src={images.withdraw_modal}
                                alt="withdrawal"
                                className="w-full h-[500px] object-contain"
                            />
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default WithdrawalModal;
