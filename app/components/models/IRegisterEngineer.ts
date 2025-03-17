export interface RegisterEngineerRequest{
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  officeAddress: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
}
export interface UpdateEngineerRequest{
  password: string;
  confirmPassword: string;
}


export interface LoginEngineer {
  emailOrPhoneNumber: string;
  password: string;
}
export interface BecomeAnEngineerRequest {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  homeAddress: string,
  yearsOfExperience: string,
  certificates: null,
  typesOfGadgetSpecialty: string,
  ownServiceCenter: string,
  listOfToolsAndEquipment: string,
  previousExperience: string,
  reasonForPartnering: string,
  agreeToServicesStandards: string,
  resume: null
}