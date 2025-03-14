import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    isFlexiblePaymentModalOpen: boolean;
    setIsFlexiblePaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FlexiblePaymentModal({ isFlexiblePaymentModalOpen, setIsFlexiblePaymentModalOpen }: Props) {
    return (
        <AnimatePresence>
            {isFlexiblePaymentModalOpen && (
                <motion.div
                    onClick={() => setIsFlexiblePaymentModalOpen(false)}
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
                        className="relative w-[90%] max-w-[1000px] h-auto md:h-[500px] rounded-lg shadow-lg bg-white flex items-center p-6"
                    >
                        {/* Modal Text Content */}
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10 text-[#211D1D]">
                            <button
                                onClick={() => setIsFlexiblePaymentModalOpen(false)}
                                className="absolute top-5 right-5 cursor-pointer text-[#211D1D] text-3xl"
                            >
                                &times;
                            </button>
                            <p className="mt-3 text-4xl leading-[50px] font-light mb-4">
                                To order a <br /> Payment Plan
                            </p>
                            <Link href='/gadget-repair'
                                onClick={() => setIsFlexiblePaymentModalOpen(false)}
                                className="rounded-[10px] py-3 px-10 bg-[#FFCC29] text-[#211D1D] transition-all duration-300"
                            >
                                Book a Repair
                            </Link>
                        </div>

                          {/* Image */}
                          <div className="w-1/2 hidden md:block">
                            <Image
                                src={images.payment_modal}
                                alt="Pickup and Delivery"
                                className="w-full h-auto object-cover rounded-l-lg"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default FlexiblePaymentModal;
