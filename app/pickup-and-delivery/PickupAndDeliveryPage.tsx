'use client'
import React, { useRef, useState } from 'react'
import PickupAndDeliveryHerosection from './PickupAndDeliveryHerosection'
import { Dropdown } from '../quote/QuoteDropDown'
import TextArea from '../components/ui/textarea'
import Input from '../components/ui/input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from '../components/ui/label'
import { Icons } from '../components/ui/icons'
import useOuterClick from '../components/hooks/useOuterClick'


function PickupAndDeliveryPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("Select Time");
  const [isTimeOpen, setIsTimeOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOuterClick(dropdownRef, setIsTimeOpen);

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  return (
    <>
      <PickupAndDeliveryHerosection />
      <form className="max-w-2xl pt-40 mx-auto p-4">
        <div className="space-y-4">
          <Dropdown label="Country" options={["USA", "Canada", "UK", "Nigeria"]} />
          <Dropdown label="State" options={["Lagos", "California", "Texas"]} />
          <Dropdown label="L.G.A" options={["Ikeja", "Yaba", "Surulere"]} />
          <TextArea placeholder='Input Street Address ' />
          <Input placeholder='+234' className='placeholder:text-[#211D1D] !px-3 !mb-5 font-medium' />
          <p className='font-light text-[15px] mb-3 text-[#211D1D]'>Fill the Date and time for your Convenience</p>
          {/* Date Picker */}
          <div className="">
            <Label className="block text-sm font-medium mb-2">Pickup</Label>
            <div className='border px-3 border-[#211D1D] rounded-[10px] flex items-center justify-between'>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="00 - 00 - 0000"
                className="w-full py-3 outline-none rounded-lg"
              />
              <Icons.Calender />
            </div>
            <span className='text-[10px] md:text-[13px] text-[#979281] mt-1'>Our Working Days cover Monday - Saturday</span>
          </div>

          {/* Time Dropdown */}
          <div className="relative w-full" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsTimeOpen(!isTimeOpen)}
              className="w-full border-[1px] border-[#211D1D] rounded-[10px] p-3 flex items-center justify-between bg-white"
            >
              <span>{selectedTime}</span>
              <span
                className={`transform transition-transform ${isTimeOpen ? "rotate-180" : "rotate-0"
                  }`}
              >
                <Icons.DownWardArrow />
              </span>
            </button>

            {isTimeOpen && (
              <div className="absolute z-10 w-full bg-white max-h-[200px] overflow-y-auto border border-gray-300 rounded-md shadow-lg mt-1">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedTime(time);
                      setIsTimeOpen(false);
                    }}
                    className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedTime == time && 'bg-[#FFCC29] text-[#211D1D]'}`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            )}
            <span className='text-[10px] md:text-[13px] flex items-center text-[#979281] mt-1'><Icons.Bike />Delivery fees would be charged irrespective of your location.</span>

          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <Label className='text-sm md:text-base'>Choose a Payment Option</Label>
            <Dropdown label="Payment Option" options={["Flexible Payment", "Flexible Payment", "Flexible Payment"]} />

          </div>

          <button className="bg-[#FFCC29] font-medium !mt-16 mb-4 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
          Submit
          </button>

          <p className="max-w-[457px] !mb-10 text-sm leading-5 mx-auto text-[#211D1D] text-center">
            An email would be sent to you showing your order details and Payment Invoice
          </p>
        </div>
      </form>
    </>
  )
}

export default PickupAndDeliveryPage