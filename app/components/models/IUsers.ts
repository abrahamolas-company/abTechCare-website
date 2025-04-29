import { Roles } from "./IRegisterUser";

export interface Users{
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    dateOfBirth: string,
    createdAt: string,
    updatedAt: string | null,
    gender: string,
    over18: boolean,
    roles: Roles[]
}


export interface EngineerResponse{
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    createdAt: null,
    phoneNumber: string,
    homeAddress: string,
    officeAAddress: string,
    professionalYearsOfExperience: number,
    certificates: [],
    typesOfGadgetSpecialty: [],
    ownsServiceCenter: false,
    listOfToolsAndEquipment: [],
    previousExperienceInServiceCenter: false,
    reasonForPartnering: string,
    agreeToServiceStandards: false,
    resume: null,
    accountName: string,
    accountNumber: string,
    bankName: string,
    updatedAt: string,
    roles: Roles[]
}