import axios from "axios";
import {handleError} from "@/Helpers/ErrorHandler";
import {UserProfileToken} from "@/features/Back/User";

const api = "http://localhost:5294/";

export const loginApi = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "login?useCookies=true&useSessionCookies=true",
            {
                email: email,
                password: password,
            });
        return data;

    } catch (error) {
        handleError(error);
    }
};
export const registerApi = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "register",
            {
                email: email,
                password: password,
            });
        return data;

    } catch (error) {
        handleError(error);
    }
};