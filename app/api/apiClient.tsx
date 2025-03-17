import axios from "axios";
import ApiRoutes from "./apiRoutes";
import { LoginUser, RegisterUserRequest } from "../components/models/IRegisterUser";
import { LoginEngineer, RegisterEngineerRequest, UpdateEngineerRequest } from "../components/models/IRegisterEngineer";
import { ForgotPasswordRequest, ResetPasswordRequest } from "../components/models/IPassword";

export const API = axios.create({
    baseURL: ApiRoutes.BASE_URL_DEV,
    withCredentials: true,
});

// Api call to create new user
export function useRegisterUser() {
    /**
     * @returns the response for the api request
     */
    async function registerUser(data: RegisterUserRequest) {
        //Fetch message
        const response = await API.post(ApiRoutes.RegisterUser, data);

        //Return response
        return response;
    }
    return registerUser;
}

// Api call to login user
export function useLoginUser() {
    async function loginUser(data: LoginUser) {
        // Fire the request
        const response = await API.post(ApiRoutes.LoginUser, data);

        // Return the response
        return response;
    }

    return loginUser;
}
// Api call to login Engineer
export function useLoginEngineer() {
    async function loginUser(data: LoginEngineer) {
        // Fire the request
        const response = await API.post(ApiRoutes.LoginEngineer, data);

        // Return the response
        return response;
    }

    return loginUser;
}

export function useLogout() {
    async function logOut() {
        // Retrieve the token from sessionStorage
        const token = sessionStorage.getItem('token');

        if (!token) {
            throw new Error('No authorization token found');
        }

        // Fire the request with the authorization header
        const response = await axios.post(
            `${ApiRoutes.BASE_URL_DEV}/${ApiRoutes.Logout}`,
            {}, // Empty body since it's a POST request
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );

        // Clear the token and roles from sessionStorage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('roles');

        // Return the response
        return response.data;
    }

    return logOut;
}

// Api call to create new engineer
export function useRegisterEngineer() {
    async function registerEngineer(data: FormData) {
        const response = await API.post(ApiRoutes.RegisterEngineer, data, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file uploads
            },
        });
        return response;
    }
    return registerEngineer;
}

// Api call to update/create an engineer
export function useUpdateEngineer() {
    /**
     * @returns the response for the api request
     */
    async function updateEngineer({ id, data }: { id: number, data: RegisterEngineerRequest }) {

        //Fetch message
        const response = await API.put(`${ApiRoutes.UpdateEngineer}/${id}`, data);

        //Return response
        return response;
    }
    //return function to fetch new message
    return updateEngineer;
}

// Function that runs forgot password
export function useForgotPassword() {
    async function forgotPassword(data: ForgotPasswordRequest) {

        // Fire the request
        const response = await API.post(ApiRoutes.ForgotPassword, data);

        // Return the response
        return response;
    }

    return forgotPassword;
}

// Function to reset password
export function useResetPassword() {
    async function resetPassword(data: ResetPasswordRequest) {

        // Fire the request
        const response = await API.post(ApiRoutes.ResetPassword, data, {
            headers: {
                "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
            }
        });

        // Return the response
        return response;
    }

    return resetPassword;
}
// Api call to update an engineer profile
export function useUpdateEngineerProfile() {
    /**
     * @returns the response for the api request
     */
    async function updateEngineerProfile({ id, data }: { id: number, data: UpdateEngineerRequest }) {

        //Fetch message
        const response = await API.put(`${ApiRoutes.UpdateEngineerProfile}/${id}`, data);

        //Return response
        return response;
    }
    //return function to fetch new message
    return updateEngineerProfile;
}

// Api call to update an user profile
export function useUpdateUserProfile() {
    /**
     * @returns the response for the api request
     */
    async function updateUserProfile({ id, data }: { id: number, data: RegisterUserRequest }) {

        //Fetch message
        const response = await API.put(`${ApiRoutes.UpdateUserProfile}/${id}`, data);

        //Return response
        return response;
    }
    //return function to fetch new message
    return updateUserProfile;
}