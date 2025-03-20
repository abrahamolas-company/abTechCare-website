'use client'
import { useUpdateEngineerProfile } from '@/app/api/apiClient'
import { catchError } from '@/app/components/constants/catchError'
import { UpdateEngineerRequest } from '@/app/components/models/IRegisterEngineer'
import DashboardHero from '@/app/components/shared/DashboardHero'
import Sidebar from '@/app/components/shared/Sidebar'
import Input from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import React, { FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

function AccountPage() {

  const updateEngineerProfile = useUpdateEngineerProfile();

  const [engineerId, setEngineerId] = useState<number>();
  const [isUpdating, setIsUpdating] = useState(false);

  const [formValues, setFormValues] = useState<UpdateEngineerRequest>();

  async function handleUpdateEngineerProfile(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      // Show loader 
      setIsUpdating(true);

      // construct the data
      const data = {
          id: engineerId as number,
          data: formValues as UpdateEngineerRequest
      }

      await updateEngineerProfile(data)
          .then((response) => {
              console.log({ response })

              toast.success('Your password has been updated successfully');
              // Clear form values
              setFormValues({
                password: '',
                confirmPassword: '',
              });

          })
          .catch((error) => {

              // If we have a response error
              catchError(error)

              // Display error
              toast.error(`An error occurred. Please try again`);

          })
          .finally(() => {

              // Close loader 
              setIsUpdating(false);
          })
  }

  // Retrieve the ID from local storage when the component mounts
  useEffect(() => {
      const storedId = localStorage.getItem('engineerId');
      if (storedId) {
          setEngineerId(JSON.parse(storedId));
      }
      console.log({ storedId })
  }, []);

  return (
    <div>
      <DashboardHero />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-10 bg-white h-[90vh] overflow-y-auto">
          {/* My Invoice Section */}
          <section className="bg-[#D9D9D929] p-4 rounded-lg shadow-md mb-20 overflow-x-auto">
            <h2 className="text-base font-light mb-4">Account Information</h2>
            <table className="w-full text-black border-collapse whitespace-nowrap border border-[#211D1D]">
           
              <tbody className="text-sm text-[#211D1D]">
              <tr className="text-sm">
                  <td className="px-3 py-2 border border-[#211D1D] font-light text-start">First Name</td>
                  <td className="px-5 py-2 border border-[#211D1D] font-light text-start">Israel</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Last Name</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Olayaju</td>
                 
                </tr>
              
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">E-mail Addres</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">israelolayanju8@gmail.com</td>
                
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Contact Number</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">09098339187</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Office Address</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Office Address</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Account Name</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Account Name</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Account Number</td>
                  <td className="px-3 py-2 border border-[#211D1D] font-light">Account Number</td>
                </tr>
                <tr>
                </tr>
              </tbody>
            </table>
          </section>

          <form onSubmit={(e) => handleUpdateEngineerProfile(e)} className="bg-[#D9D9D929] flex flex-col gap-4 w-full p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <Label className=''>
            Create a new Password
            </Label>
            <Input
              type='password'
              name='password'
              id='password'
              value={formValues?.password}
              onChange={(e) => {
                  setFormValues({ ...formValues as UpdateEngineerRequest, password: e.target.value });
              }}
            placeholder='Enter a strong password '/>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <Label className=''>
            Confirm Password
            </Label>
            <Input
             type="password"
             name="confirmPassword"
             id="confirmPassword"
             value={formValues?.confirmPassword}
             onChange={(e) => {
                 setFormValues({ ...formValues as UpdateEngineerRequest, confirmPassword: e.target.value });
             }}
            placeholder='Confirm your password again'/>
          </div>
          <button type="submit"
           className={`${isUpdating && 'pointer-events-none opacity-60'} bg-[#FFCC29] relative overflow-hidden font-medium mb-1 flex items-center justify-center ml-auto text-sm rounded-lg text-[#211D1D] py-3 px-8 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]`}>
                {isUpdating ? "Updating" : "Save"}
              </button>
          </form>
        </main>
      </div>

    </div>
  )
}

export default AccountPage