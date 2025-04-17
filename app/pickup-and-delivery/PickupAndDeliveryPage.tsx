


'use client'
import React, { FormEvent, useState, useEffect, useRef } from 'react'
import PickupAndDeliveryHerosection from './PickupAndDeliveryHerosection'
import { Dropdown } from '../quote/QuoteDropDown'
import TextArea from '../components/ui/textarea'
import Input from '../components/ui/input'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Label from '../components/ui/label'
import { Icons } from '../components/ui/icons'
import useOuterClick from '../components/hooks/useOuterClick'
import { CreateOrderPickup, PaymentOption } from '../components/models/OrderLogistics'
import { useCreateOrderPickup } from '../api/apiClient'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { catchError } from '../components/constants/catchError'

const lagosLGAs = [
  "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa",
  "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye",
  "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland",
  "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"
]

const countries = ["Nigeria"] // Add more countries if needed
const states = ["Lagos"] // Add more states if needed

const paymentOptions = [
  { label: "Outright Payment", value: PaymentOption.OUTRIGHT },
  { label: "Flexible Payment", value: PaymentOption.FLEXIBLE }
]

const timeSlots = [
  "08:00 AM",
  "09:00 AM", 
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM"
]

function PickupAndDeliveryPage() {
  const router = useRouter()
  const createOrderPickup = useCreateOrderPickup()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [formValues, setFormValues] = useState<Partial<CreateOrderPickup>>({})

  console.log({formValues})
  const [date, setDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("Select Time")
  const [isTimeOpen, setIsTimeOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  // Format time to 24-hour (e.g., "08:00 AM" → "08:00")
  const formatTimeTo24Hour = (time12h: string): string => {
    const [time, period] = time12h.split(' ')
    let hours: string
    const [hoursStr, minutes] = time.split(':')
    
    if (period === 'PM' && hoursStr !== '12') {
      hours = String(Number(hoursStr) + 12)
    } else if (period === 'AM' && hoursStr === '12') {
      hours = '00'
    } else {
      hours = hoursStr
    }
    
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`
  }

  // Convert phone number to local format (e.g., "+234803..." → "0803...")
  // const formatPhoneNumber = (phone: string): string => {
  //   const digits = phone.replace(/\D/g, '')
  //   if (digits.startsWith('234') && digits.length === 12) {
  //     return '0' + digits.slice(3)
  //   }
  //   if (phone.startsWith('+234') && digits.length === 13) {
  //     return '0' + digits.slice(3)
  //   }
  //   return digits
  // }

  // const validatePhoneNumber = (phone: string): boolean => {
  //   return /^0[7-9]\d{9}$/.test(phone.replace(/\D/g, ''))
  // }

  const validateForm = (): boolean => {
    const requiredFields = ['country', 'state', 'lga', 'street', 'phoneNumber', 'paymentOption']

    if (!date) {
      toast.error('Please select a pickup date')
      return false
    }

    if (selectedTime === "Select Time") {
      toast.error('Please select a pickup time')
      return false
    }

    // if (!validatePhoneNumber(formValues.phoneNumber!)) {
    //   toast.error('Please enter a valid Nigerian phone number (e.g., 08012345678)')
    //   return false
    // }

    for (const field of requiredFields) {
      if (!formValues[field as keyof CreateOrderPickup]) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`)
        return false
      }
    }

    return true
  }

  const handleInputChange = (field: keyof CreateOrderPickup, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate)
    if (selectedDate) {
      const year = selectedDate.getFullYear()
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0')
      const day = String(selectedDate.getDate()).padStart(2, '0')
      
      setFormValues(prev => ({
        ...prev,
        pickupDate: `${year}-${month}-${day}`
      }))
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setFormValues(prev => ({
      ...prev,
      pickupTime: formatTimeTo24Hour(time)
    }))
    setIsTimeOpen(false)
  }

  async function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      if (!orderId) throw new Error('Order ID not available')

      const payload = {
        orderId,
        country: formValues.country!,
        state: formValues.state!,
        lga: formValues.lga!,
        street: formValues.street!,
        pickupDate: formValues.pickupDate!,
        pickupTime: formValues.pickupTime!,
        phoneNumber:formValues.phoneNumber!,
        // phoneNumber: formatPhoneNumber(formValues.phoneNumber!),
        paymentOption: formValues.paymentOption!.toUpperCase() as PaymentOption
      }

      console.log('Submitting:', payload)

      await createOrderPickup(payload)
        .then(() => {
          toast.success("Pickup scheduled successfully!")
          router.push('/')
        })
        .catch((error) => {
          // console.error('Error details:', error.response?.data)
          catchError(error)
          toast.error('Failed to create pickup')
        })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const storedOrderId = sessionStorage.getItem('orderId')
    if (storedOrderId) setOrderId(storedOrderId)
  }, [])

  useOuterClick(dropdownRef, setIsTimeOpen)

  return (
    <>
      <PickupAndDeliveryHerosection />
      <form onSubmit={handleFormSubmission} className="max-w-2xl pt-40 mx-auto p-4">
        <div className="space-y-4">
        <Dropdown
            label="Country"
            options={countries}
            onSelect={(option) => handleInputChange('country', option)}
            selectedOption={formValues.country || "Country"}
          />
          <Dropdown
            label="State"
            options={states}
            onSelect={(option) => handleInputChange('state', option)}
            selectedOption={formValues.state || "State"}
          />
          <Dropdown
            label="L.G.A"
            options={lagosLGAs}
            onSelect={(option) => handleInputChange('lga', option)}
            selectedOption={formValues.lga || "LGA"}
          />
          <TextArea
            placeholder='Input Street Address'
            value={formValues.street || ''}
            onChange={(e) => handleInputChange('street', e.target.value)}
          />
          <Input
            placeholder='Phone Number (e.g., 08012345678)'
            className='placeholder:text-[#211D1D] !px-3 !mb-5 font-medium'
            value={formValues.phoneNumber || ''}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
          
          <p className='font-light text-[15px] mb-3 text-[#211D1D]'>Fill the Date and time for your Convenience</p>
          
          <div className="">
            <Label className="block text-sm font-medium mb-2">Date</Label>
            <div className='border px-3 border-[#211D1D] rounded-[10px] flex items-center justify-between'>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                placeholderText="DD-MM-YYYY"
                className="w-full py-3 outline-none rounded-lg"
                minDate={new Date()}
              />
              <Icons.Calender />
            </div>
            <span className=' text-gray-500 text-xs'>Our Working Days cover Monday - Saturday</span>
          </div>

          <div className="relative w-full" ref={dropdownRef}>
            <Label className="block text-sm font-medium mb-2">Time</Label>
            <button
              type="button"
              onClick={() => setIsTimeOpen(!isTimeOpen)}
              className="w-full border-[1px] border-[#211D1D] rounded-[10px] p-3 flex items-center justify-between bg-white"
            >
              <span>{selectedTime}</span>
              <Icons.DownWardArrow className={`transform transition-transform ${isTimeOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            <span className='flex items-center text-gray-500 text-xs'><Icons.Bike/> Delivery fees would be charged irrespective of your location.</span>

            {isTimeOpen && (
              <div className="absolute z-10 w-full bg-white max-h-[200px] overflow-y-auto border border-gray-300 rounded-md shadow-lg mt-1">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedTime === time && 'bg-[#FFCC29] text-[#211D1D]'}`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <Label className='text-sm md:text-base'>Payment Option</Label>
            <Dropdown
              label="Payment Option"
              options={paymentOptions.map(opt => opt.label)}
              onSelect={(option) => {
                const selected = paymentOptions.find(opt => opt.label === option)
                if (selected) handleInputChange('paymentOption', selected.value)
              }}
              selectedOption={paymentOptions.find(opt => opt.value === formValues.paymentOption)?.label || "Select Option"}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#FFCC29] font-medium !mt-16 mb-4 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>

          <p className="max-w-[457px] !mb-10 text-sm leading-5 mx-auto text-[#211D1D] text-center">
            An email will be sent with your order details and payment invoice
          </p>
        </div>
      </form>
    </>
  )
}

export default PickupAndDeliveryPage