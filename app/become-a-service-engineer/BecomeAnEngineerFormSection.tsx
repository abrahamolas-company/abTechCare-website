import React, { useState } from 'react';
import { sectionPadding } from '../styles/styles';
import Label from '../components/ui/label';
import Input from '../components/ui/input';
import TextArea from '../components/ui/textarea';
import { Icons } from '../components/ui/icons';
import { BecomeAnEngineerRequest } from '../components/models/IRegisterEngineer';
import { useRegisterEngineer } from '../api/apiClient';
import { useRouter } from 'next/navigation';
import { catchError } from '../components/constants/catchError';
import { toast } from 'sonner';

function BecomeAnEngineerFormSection() {
    const registerEngineer = useRegisterEngineer();
    const [formData, setFormData] = useState<BecomeAnEngineerRequest>({} as BecomeAnEngineerRequest);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fileName1, setFileName1] = useState<string | null>(null);
    const [fileName2, setFileName2] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        } as BecomeAnEngineerRequest));
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, inputNumber: number) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            if (inputNumber === 1) {
                setFileName1(files[0].name);
            } else if (inputNumber === 2) {
                setFileName2(files[0].name);
            }
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0]
            } as BecomeAnEngineerRequest));
        }
    };


    const validateFields = () => {
        const requiredFields = [
            'firstName', 'lastName', 'phoneNumber', 'email', 'homeAddress',
            'yearsOfExperience', 'typesOfGadgetSpecialty', 'ownServiceCenter',
            'listOfToolsAndEquipment', 'previousExperience', 'reasonForPartnering',
            'agreeToServicesStandards', 'resume', 'certificates'
        ];

        for (const field of requiredFields) {
            if (!formData[field as keyof BecomeAnEngineerRequest]) {
                toast.error('All fields are required');
                return false;
            }
        }

        // Validate phone number length (must be between 11 and 15 characters)
        if (formData.phoneNumber) {
            if (formData.phoneNumber.length < 11 || formData.phoneNumber.length > 15) {
                toast.error('Phone number must be between 11 and 15 characters');
                return false;
            }
        }

        return true;
    };

    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!validateFields()) {
            setLoading(false);
            return;
        }

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                data.append(key, value);
            }
        });

        registerEngineer(data)
            .then((response) => {
                toast.success("Your request is being processed, our representative would reach out to you shortly");

                localStorage.setItem("engineerId", JSON.stringify(response.data.data.id));
                router.push('/');
            })
            .catch((error) => {
                console.log({ error });
                if (error.response && error.response.data) {
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes('phoneNumber')) {
                        toast.error(`Engineer exists with phone number: ${formData.phoneNumber}`);
                    } else if (errorMessage.includes('email')) {
                        toast.error(`Engineer exists with email: ${formData.email}`);
                    } else {
                        catchError(error);
                        toast.error('An error occurred. Please try again.');
                    }
                } else {
                    catchError(error);
                    toast.error('An error occurred. Please try again.');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form className={`${sectionPadding} text-[#211D1D]`} onSubmit={handleFormSubmission}>
            <div className="mb-3">
                <h3>Personal Information</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>First Name</Label>
                        <Input name="firstName" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Last Name</Label>
                        <Input name="lastName" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Phone Number</Label>
                        <Input name="phoneNumber" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Email Address</Label>
                        <Input name="email" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Home Address</Label>
                        <Input name="homeAddress" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <h3>Professional Details</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Years of Experience</Label>
                        <Input name="yearsOfExperience" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Certificates (If any)</Label>
                        <div className="py-3 px-5 relative flex justify-between items-center border-[1px] border-[#211D1D] rounded-[10px] font-light placeholder:text-sm placeholder:text-[#D9D9D9] w-full outline-none pe-2 text-base">
                            <Input
                                type="file"
                                name="certificates"
                                onChange={(e) => handleFileChange(e, 1)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <span className="text-sm text-[#211D1D]">
                                {fileName1 || "No file selected"}
                            </span>
                            <Icons.File className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Type of Gadgets you specialize in</Label>
                        <Input name="typesOfGadgetSpecialty" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>DO you own or have access to a Service center? (Yes/No)</Label>
                        <Input name="ownServiceCenter" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>List of Tools & Equipment you use</Label>
                        <Input name="listOfToolsAndEquipment" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Any Previous Employment in a Repair Center? (Yes/No)</Label>
                        <Input name="previousExperience" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <h3>Additional Information</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Why do you want to partner with Abtechcare?</Label>
                        <TextArea name="reasonForPartnering" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Do you agree to abide by Abtechcare&apos;s quality and Service Standard? (Yes/No)</Label>
                        <Input name="agreeToServicesStandards" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className='text-sm md:text-base'>Upload Resume/ Portfolio (If available)</Label>
                        <div className="py-3 px-5 relative flex justify-between items-center border-[1px] border-[#211D1D] rounded-[10px] font-light placeholder:text-sm placeholder:text-[#D9D9D9] w-full outline-none pe-2 text-base">
                            <Input
                                type="file"
                                name="resume"
                                onChange={(e) => handleFileChange(e, 2)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <span className="text-sm text-[#211D1D]">
                                {fileName2 || "No file selected"}
                            </span>
                            <Icons.File className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <button type='submit' disabled={loading} className={`bg-[#FFCC29] font-medium mb-5 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] ${loading && 'pointer-events-none opacity-50'}`}>
                {loading ? "Loading" : "Submit"}
            </button>
        </form>
    );
}

export default BecomeAnEngineerFormSection;