import { sectionPadding } from '@/app/styles/styles'
import images from '@/public/images'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    isPickupAndDeliveryModalOpen: boolean;
    setIsPickupAndDeliveryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PickupAndDeliveryModal({ isPickupAndDeliveryModalOpen, setIsPickupAndDeliveryModalOpen }: Props) {
    return (
        <AnimatePresence>
            {isPickupAndDeliveryModalOpen && (
                <motion.div
                    onClick={() => setIsPickupAndDeliveryModalOpen(false)}
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
                        className="relative w-[90%] max-w-[1000px] h-[70vh] md:h-[65vh] overflow-hidden rounded-lg shadow-lg bg-white"
                    >
                        {/* Background Image */}
                        <Image
                            src={images.pickup_delivery_image}
                            alt="Pickup and Delivery"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70"></div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsPickupAndDeliveryModalOpen(false)}
                            className="absolute top-5 right-5 cursor-pointer text-[#211D1D] text-3xl z-[999]"
                        >
                            &times;
                        </button>

                        {/* Modal Text Content */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-6 py-10 text-white z-10">
                            <p className="mt-3 text-4xl leading-[50px] font-light mb-4 text-[#211D1D]">
                                To order a pickup <br /> and delivery
                            </p>
                            <Link href='/gadget-repair'
                                onClick={() => setIsPickupAndDeliveryModalOpen(false)}
                                className="rounded-[10px] py-3 px-10 bg-[#FFCC29] text-[#211D1D] transition-all duration-300"
                            >
                                Book a Repair
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PickupAndDeliveryModal;
