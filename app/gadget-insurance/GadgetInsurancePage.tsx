import React, { useState } from 'react'
import GadgetInsuranceHerosection from './GadgetInsuranceHerosection'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import { sectionPadding } from '../styles/styles'
import Image from 'next/image'
import { Icons } from '../components/ui/icons'

function GadgetInsurancePage() {

  const packages = [
    { id: 1, name: "Compact Package", price: 20000, coverage: "Covers damage worth of #200,000" },
    { id: 2, name: "Compact Package Plus", price: 40000, coverage: "Covers damage worth of #400,000" },
    { id: 3, name: "Premium Package", price: 60000, coverage: "This Comprehensive insurance plan covers 5% of the value of Gadget insured." },
  ];

  const [selectedPackage, setSelectedPackage] = useState<number>(1);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <GadgetInsuranceHerosection />
      <form className={`${sectionPadding} pt-44 w-full mx-auto lg:w-[80%] flex flex-col gap-5 `}>
        <div className="flex flex-col gap-[6px] mb-5">
          <Label>What Gadget do you want to Insure?</Label>
          <Input placeholder='Example: Iphone 15 Pro Max, 128gb, titinuim colur' />
        </div>

        {/* Cards */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 mb-10 justify-center">
          {packages.map((pkg) => {
            const isActive = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                className="relative w-full h-full md:w-[272px] md:h-[310px] cursor-pointer"
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="absolute inset-0 rounded-[21px] bg-[#FFCC29]/20 shadow-md"></div>

                <div
                  className={`relative flex flex-col items-center justify-center w-[90%] mx-auto h-[290px] rounded-[21px] p-6 my-3 text-center transition-all ${isActive ? "bg-[#FFCC29]/30 text-black" : "bg-[#FFCC29]/20 text-gray-500"
                    }`}
                >
                  <h3 className="text-[28px] mb-2 leading-tight font-light text-[#211D1D]">{pkg.name}</h3>
                  <p className="text-3xl font-extrabold text-[#211D1D]">#{pkg.price}</p>
                  <p className="text-sm font-light mt-2 text-[#211D1D]">Covers damage worth {pkg.coverage}</p>
                </div>

                <div
                  className={`absolute bottom-[-15px] left-[-10px] w-20 h-20 bg-[#211D1D] rounded-full transition-opacity ${isActive ? "opacity-100" : "opacity-50"
                    }`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 ">
          {/* Image Upload */}
          <div className="text-center">
            <input type="file" accept="image/*" className="hidden" id="image2" onChange={handleImageUpload} />
            <label htmlFor="image2" className="flex items-center justify-center w-[160px] md:w-[200px] h-[160px] md:h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
              {image ? (
                <Image src={image} alt="Uploaded Image 2" width={180} height={180} className="rounded-lg object-cover w-[100px] md:w-[200px] h-[100px] md:h-[200px]" />
              ) : (
                <p className='flex flex-col items-center text-xs -mt-3 gap-5'>Upload image of damaged Gadget
                <span><Icons.Camera /></span>
              </p>
              )}
            </label>
          </div>
          <button className="bg-[#FFCC29] font-medium mb-1 text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}

export default GadgetInsurancePage