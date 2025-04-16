'use client'
import React, { useEffect, useRef, useState, FormEvent } from 'react'
import GadgetRepairHerosection from './Herosection'
import { sectionPadding } from '../styles/styles'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import TextArea from '../components/ui/textarea'
import { Icons } from '../components/ui/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useCreateRepairOrder } from '../api/apiClient'
import { catchError } from '../components/constants/catchError'

function GadgetRepairPage() {
  const CreateRepairOrder = useCreateRepairOrder()
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [gadget, setGadget] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState<number>();
  const toastShown = useRef(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number, type: "image" | "video") => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (type === "image") {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);

      const newImageFiles = [...imageFiles];
      newImageFiles[index] = file;
      setImageFiles(newImageFiles);
    } else {
      setVideo(URL.createObjectURL(file));
      setVideoFile(file);
    }

    event.target.value = ""; // Reset input
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate required fields
    if (!gadget.trim()) {
      toast.error('Please enter the gadget to be repaired');
      return;
    }

    if (!issueDescription.trim()) {
      toast.error('Please describe your gadget fault');
      return;
    }

    if (imageFiles.length === 0) {
      toast.error('Please upload at least one image of the damaged gadget');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Please login to continue');
      }

      const formData = new FormData();
      formData.append('gadget', gadget);
      formData.append('issueDescription', issueDescription);

      // Append image files
      imageFiles.forEach((file, index) => {
        if (file) {
          formData.append('gadgetImages', file);
        }
      });

      // Append video file if exists
      if (videoFile) {
        formData.append('gadgetVideo', videoFile);
      }

      // Add UserId if available
      if (userId) {
        formData.append('userId', userId.toString());
      }

      await CreateRepairOrder(formData)
        .then((response) => {
          // console.log(response.data.data.orderId);
          sessionStorage.setItem("orderId", response.data.data.orderId);
          console.log(response)
          router.push('/pickup-and-delivery');

          toast.success('Repair order created successfully!.You will be redirected to the pickup and delivery page');

          // Reset form
          setGadget('');
          setIssueDescription('');
          setImages([]);
          setVideo(null);
          setImageFiles([]);
          setVideoFile(null);
        })
        .catch((error) => {
          // Display specific error message if available
          toast.error('An error occurred. Please try again');

          catchError(error);
        });
    } catch (error) {
      // Handle any unexpected errors
      toast.error('An unexpected error occurred');
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      setUserId(JSON.parse(storedId));
    }
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token && !toastShown.current) {
      toast.warning('You are not logged in. Redirecting to the login page...', {
        duration: 2000,
      });
      toastShown.current = true;
      sessionStorage.setItem('redirectPath', '/gadget-repair');
      setTimeout(() => {
        router.push('/user/signin');
      }, 2000);
    }
  }, [router]);

  return (
    <section className='pb-20'>
      <GadgetRepairHerosection />
      <form
        onSubmit={handleSubmit}
        className={`${sectionPadding} pt-10 w-full mx-auto lg:w-[80%] flex flex-col gap-5 `}
      >
        <div className="flex flex-col gap-[6px]">
          <Label>Input the Gadget to be Repaired</Label>
          <Input
            placeholder='Example: Iphone 15 Pro Max, 128gb, titinuim colur'
            value={gadget}
            onChange={(e) => setGadget(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <Label>Describe your gadget fault in details</Label>
          <TextArea
            className='!font-light'
            placeholder='e.g My phone has a broken Screen'
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {/* First Image Upload */}
            <div className="text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image1"
                onChange={(e) => handleFileUpload(e, 0, "image")}
              />
              <label htmlFor="image1" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
                {images[0] ? (
                  <Image
                    src={images[0]}
                    alt="Uploaded Image 1"
                    width={180}
                    height={180}
                    className="rounded-lg object-cover w-full md:w-[200px] h-[200px]"
                  />
                ) : (
                  <p className='flex flex-col items-center text-xs -mt-10 gap-5'>
                    Upload image of damaged Gadget
                    <span><Icons.Camera /></span>
                  </p>
                )}
              </label>
            </div>

            {/* Second Image Upload */}
            <div className="text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image2"
                onChange={(e) => handleFileUpload(e, 1, "image")}
              />
              <label htmlFor="image2" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
                {images[1] ? (
                  <Image
                    src={images[1]}
                    alt="Uploaded Image 2"
                    width={180}
                    height={180}
                    className="rounded-lg object-cover w-full md:w-[200px] h-[200px]"
                  />
                ) : (
                  <p className='flex flex-col items-center text-xs -mt-10 gap-5'>
                    Upload image of damaged Gadget
                    <span><Icons.Camera /></span>
                  </p>
                )}
              </label>
            </div>

            {/* Video Upload */}
            <div className="text-center">
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="videoUpload"
                onChange={(e) => handleFileUpload(e, 0, "video")}
              />
              <label htmlFor="videoUpload" className="flex items-center justify-center w-full md:w-[200px] h-[200px] bg-[#F5F5F5] rounded-lg cursor-pointer ">
                {video ? (
                  <video
                    src={video}
                    className="object-cover w-full md:w-[200px] h-[200px] rounded-lg"
                    controls
                  />
                ) : (
                  <p className='flex flex-col items-center text-xs -mt-10 gap-5'>
                    Upload video of damaged Gadget
                    <span><Icons.Video /></span>
                  </p>
                )}
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FFCC29] mt-5 font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min w-full md:w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              {/* <Icons.spinner className="h-4 w-4 animate-spin" /> */}
              Submitting...
            </span>
          ) : 'Continue'}
        </button>
      </form>
    </section>
  )
}

export default GadgetRepairPage