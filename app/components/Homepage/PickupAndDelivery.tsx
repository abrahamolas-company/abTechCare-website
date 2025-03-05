'use client'
import Image from 'next/image';
import images from '@/public/images';
import { useEffect, useState } from 'react';
import PickupAndDeliveryModal from '../modal/PickupAndDeliveryModal';

function PickupAndDelivery() {
  const leftImages = [images.home, images.office, images.movies, images.family];

  const [isPickupAndDeliveryModalOpen, setIsPickupAndDeliveryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isPickupAndDeliveryModalOpen && <PickupAndDeliveryModal isPickupAndDeliveryModalOpen={isPickupAndDeliveryModalOpen} setIsPickupAndDeliveryModalOpen={setIsPickupAndDeliveryModalOpen} />}

      <section className="relative flex flex-col md:flex-row gap-2 w-full min-h-[500px] lg:min-h-[600px]">

        {/* Left Side - At Home */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <Image
            src={leftImages[currentImageIndex]}
            alt="Home"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
          {/* Lighter Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Center Text Overlay */}
        <div className="absolute top-8 left-1/2 transform z-10 -translate-x-1/2 bg-[#FFFFFFD1] px-6 py-3 rounded-md shadow-md">
          <p className="text-xs whitespace-nowrap md:text-base lg:text-lg font-medium text-black">Where would you rather be?</p>
        </div>

        {/* Right Side - At Repair Center */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <Image
            src={images.repair_center}
            alt="Repair Center"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
          {/* Lighter Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Call-to-Action Button */}
        <div className="absolute top-[300px] md:bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={() => setIsPickupAndDeliveryModalOpen(true)} className="px-6 py-3 bg-[#FFCC29] text-xs whitespace-nowrap md:text-base lg:text-lg text-black font-light rounded-md shadow-md">
            Order Pickup & Delivery
          </button>
        </div>

      </section>
    </>
  );
}

export default PickupAndDelivery;
