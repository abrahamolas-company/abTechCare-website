'use client'
import React, { useState } from 'react'
import GadgetRepairHerosection from './Herosection'
import { sectionPadding } from '../styles/styles'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import TextArea from '../components/ui/textarea'
import { Icons } from '../components/ui/icons'
import Image from 'next/image'

function GadgetRepairPage() {
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number, type: "image" | "video") => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (type === "image") {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    } else {
      setVideo(URL.createObjectURL(file));
    }

    event.target.value = ""; // Reset input
  };

  return (
    <section className='pb-20'>
      <GadgetRepairHerosection />
      <form className={`${sectionPadding} pt-10 w-full mx-auto lg:w-[80%] flex flex-col gap-5 `}>
        <div className="flex flex-col gap-[6px]">
          <Label>Input the Gadget to be Repaired</Label>
          <Input placeholder='Example: Iphone 15 Pro Max, 128gb, titinuim colur' />
        </div>
        <div className="flex flex-col gap-[6px]">
          <Label>Describe your gadget fault in details</Label>
          <TextArea placeholder='e.g My phone has a broken Screen' />
        </div>
        <div className="flex flex-col space-y-6">

      {/* Upload Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {/* First Image Upload */}
        <div className="text-center">
          <input type="file" accept="image/*" className="hidden" id="image1" onChange={(e) => handleFileUpload(e, 0, "image")} />
          <label htmlFor="image1" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
            {images[0] ? (
              <Image src={images[0]} alt="Uploaded Image 1" width={180} height={180} className="rounded-lg object-cover w-full md:w-[200px] h-[200px]" />
            ) : (
              <p className='flex flex-col items-center text-xs -mt-10 gap-5'>Upload image of damaged Gadget
                <span><Icons.Camera /></span>
              </p>
              
            )}
          </label>
        </div>

        {/* Second Image Upload */}
        <div className="text-center">
          <input type="file" accept="image/*" className="hidden" id="image2" onChange={(e) => handleFileUpload(e, 1, "image")} />
          <label htmlFor="image2" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
            {images[1] ? (
              <Image src={images[1]} alt="Uploaded Image 2" width={180} height={180} className="rounded-lg object-cover w-full md:w-[200px] h-[200px]" />
            ) : (
              <p className='flex flex-col items-center text-xs -mt-10 gap-5'>Upload image of damaged Gadget
              <span><Icons.Camera /></span>
            </p>
            )}
          </label>
        </div>

        {/* Video Upload */}
        <div className="text-center">
          <input type="file" accept="video/*" className="hidden" id="videoUpload" onChange={(e) => handleFileUpload(e, 0, "video")} />
          <label htmlFor="videoUpload" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
            {video ? (
              <video src={video} className=" object-cover w-full md:w-[200px] h-[200px] rounded-lg" controls />
            ) : (
              <p className='flex flex-col items-center text-xs -mt-10 gap-5'>Upload video of damaged Gadget
              <span><Icons.Video /></span>
            </p>
            )}
          </label>
        </div>
      </div>
    </div>


        <button className="bg-[#FFCC29] mt-5 font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min w-full md:w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
          Continue
        </button>
      </form>
    </section>
  )
}

export default GadgetRepairPage