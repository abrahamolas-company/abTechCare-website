import { Roles } from "./IRegisterUser";

export interface Users{
    "id": number,
    "email": string,
    "firstName": string,
    "lastName": string,
    "phoneNumber": string,
    "createdAt": string,
    "updatedAt": string | null,
    "gender": string,
    "roles": Roles[]
}