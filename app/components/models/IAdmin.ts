export interface FetchAllUsers {
    id: number,
    email: string,
    firstName:string,
    lastName: string,
    phoneNumber:string,
    gender: string,
    homeAddress: string | null,
    officeAddress: string | null,
    over18: boolean,
    dateOfBirth: string,
    confirmPassword: string | null,
    professionalYearsOfExperience: number,
    ownsServiceCenter: false,
    accountName: string | null,
    accountNumber: string | null,
    bankName: string | null,
    certificates: [],
    typesOfGadgetSpecialty: [],
    listOfToolsAndEquipment: [],
    previousExperienceInServiceCenter: false,
    reasonForPartnering: string | null,
    agreeToServiceStandards: false,
    resume: string | null,
    createdAt: string,
    updatedAt: string | null,
    username: string,
    authorities: Authorities[],
    loggedIn: false,
    engineer: false,
    admin: false,
    enabled: boolean,
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean
}



export interface FetchAllEngineers {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: string | null,
    homeAddress: string,
    officeAddress: string,
    over18: boolean,
    dateOfBirth: string | null,
    confirmPassword: string | null,
    professionalYearsOfExperience: number,
    ownsServiceCenter: boolean,
    accountName: string,
    accountNumber: string,
    bankName: string,
    certificates: [],
    typesOfGadgetSpecialty: string[],
    listOfToolsAndEquipment: string[],
    previousExperienceInServiceCenter: boolean,
    reasonForPartnering: string,
    agreeToServiceStandards: boolean,
    resume: [],
    createdAt: string,
    updatedAt: string,
    username: string,
    authorities: Authorities[],
    loggedIn: boolean,
    engineer: boolean,
    admin: boolean,
    enabled: boolean,
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean
}

export interface Authorities {
    authority: "ROLE_ENGINEER"
}