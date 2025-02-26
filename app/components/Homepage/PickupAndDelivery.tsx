import images from '@/public/images'
import Image from 'next/image'
import React from 'react'

function PickupAndDelivery() {
  return (
<section className="relative grid grid-cols-2 w-full min-h-[500px] lg:min-h-[600px] gap-0">

      {/* Left Side - At Home */}
      <div className="relative flex-1 overflow-hidden">
      <Image
  src={images.home}
  alt="Home"
  layout="fill"
  className="absolute inset-0 w-full h-full"
/>

        <div className="absolute inset-0 clip-left flex items-center justify-center text-white p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">At Home</h2>
            <p className="text-sm">Order Pickup & Delivery</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md">Order Now</button>
          </div>
        </div>
      </div>

      {/* Right Side - At Repair Center */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={images.repair_center}
          alt="Repair Center"
          layout="fill"
          // objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 clip-right flex items-center justify-center text-white p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">At the Repair Centre</h2>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md">Find a Centre</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PickupAndDelivery
