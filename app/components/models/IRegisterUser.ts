export interface RegisterUserRequest{
  email : string;
  password : string;
  confirmPassword : string;
  firstName : string;
  lastName : string;
  phoneNumber: string;
  dateOfBirth : string;
  over18:boolean,
  gender:string
}

export interface Permissions{
        id: number;
        name: string;
        canWrite: boolean
}

export interface Roles {
        id: number;
        roleType: string;
        "permissions": Permissions[]
}

export interface RegisterUserResponse {
  phoneNumber: string,
  roles: Roles[],
  id: number,
  email: string,
  token: {
      access_token: string
  }
}

export interface LoginUser {
  emailOrPhoneNumber: string;
  password: string;
}