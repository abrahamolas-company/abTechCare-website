import axios from "axios";
import ApiRoutes from "./apiRoutes";
import { LoginUser, RegisterUserRequest } from "../components/models/IRegisterUser";
import { LoginEngineer, RegisterEngineerRequest, UpdateEngineerRequest } from "../components/models/IRegisterEngineer";
import { ForgotPasswordRequest, ResetPasswordRequest } from "../components/models/IPassword";
import { CreateOrderPickup } from "../components/models/OrderLogistics";
import { Ratings } from "../components/models/IRatings";

export const API = axios.create({
    baseURL: ApiRoutes.BASE_URL_DEV,
    withCredentials: true,
});

// Add response interceptor
// API.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response?.status === 401) {
//         // Token expired or unauthorized
//         toast.error('Your session has expired. Please sign in again.');
//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('roles');
//         window.location.href = '/user/signin'; // Using window.location to ensure full page reload
//       }
//       return Promise.reject(error);
//     }
//   );

// API.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response?.status === 401) {
//         // Token expired or unauthorized
//         const currentPath = window.location.pathname;
        
//         // Clear session storage
//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('roles');
        
//         // Show toast message
//         toast.error('Your session has expired. Please sign in again.');
        
//         // Redirect based on current path
//         if (currentPath.startsWith('/engineer')) {
//           window.location.href = '/engineer/signin';
//         } else {
//           window.location.href = '/user/signin';
//         }
//       }
//       return Promise.reject(error);
//     }
//   );

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
        try {
            const token = sessionStorage.getItem('token');

            if (!token) {
                throw new Error('No authorization token found');
            }

            // Attempt to log out on the server (optional, since token might already be expired)
            try {
                await axios.post(
                    `${ApiRoutes.BASE_URL_DEV}/${ApiRoutes.Logout}`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
            } catch (error) {
                console.error('Logout request failed:', error);
                // If the token is expired, the logout request might fail, but we still clear storage
                console.warn("Logout request failed (token may be expired)");
            }

            // Clear storage regardless of API response
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('roles');
            sessionStorage.removeItem('redirectPath');
            // sessionStorage.removeItem('orderId');
            localStorage.removeItem('userId'); // Clear localStorage if used
            localStorage.removeItem('engineerId'); // Clear localStorage if used

            // Optional: Redirect to login page
            window.location.href = '/'; // Force full page reload to clear state
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
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

// Api call to create repair order
export function useCreateRepairOrder() {
    async function createRepairOrder(data: FormData) {
        // Fire the request
        const response = await API.post(ApiRoutes.CreateRepairOrder, data);

        // Return the response
        return response;
    }

    return createRepairOrder;
}

// Api call to create order pickup
export function useCreateOrderPickup() {
    async function createOrderPickup(data: CreateOrderPickup) {
        // Fire the request
        const response = await API.post(ApiRoutes.CreateOrderPickup, data);

        // Return the response
        return response;
    }

    return createOrderPickup;
}

// Api call to add ratings
export function useAddRatings() {
    async function addRatings(data: Ratings) {
        // Fire the request
        const response = await API.post(ApiRoutes.AddRatings, data);

        // Return the response
        return response;
    }

    return addRatings;
}

// Api for Newsletter subscription
export function useNewsLetterSubscription() {
    async function newsLetterSubscription(email: string) {
        // Fire the request
        const response = await API.post(ApiRoutes.NewsLetterSubscribe, { email });

        // Return the response
        return response;
    }

    return newsLetterSubscription;
}


// Api call to fetch repair order by order number
export function useGetRepairOrderByOrderId() {
    async function getRepairOrderByOrderId(orderId: number) {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.CreateRepairOrder}/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getRepairOrderByOrderId;
}


// Api call to fetch user repair order
export function useGetUserRepairOrders() {
    async function getUserRepairOrders(userId: number) {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.fetchUserRepairOrders}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getUserRepairOrders;
}
// Api call to fetch user repair history
export function useGetUserRepairHistory() {
    async function getUserRepairOrders(userId: number) {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.fetchUserRepairHistory}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getUserRepairOrders;
}

// Api call to fetch user by user id
export function useGetUser() {
    async function getUsers(userId: number) {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.fetchUsers}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getUsers;
}

// Api call to fetch engineer by id
export function useGetEngineer() {
    async function getEngineer(id: number) {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.fetchEngineer}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getEngineer;
}

// Api call to fetch gadgets
export function useGetGatgets() {
    async function getGatgets() {
        const token = sessionStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');

        const response = await API.get(`${ApiRoutes.fetchGadgets}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;

    }
    return getGatgets;
}
