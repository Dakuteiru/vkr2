"use client";
import {UserProfile} from "@/features/Back/User";
import React, { createContext, useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import {loginApi, registerApi} from "@/Services/AuthService";
import {toast} from "react-toastify";
import axios from "axios";

type UserContextType ={
    user: UserProfile | null;
    token: string | null;
    isReady: boolean;
    registerUser: (email: string, password: string) => void;
    loginUser(email: string, password: string): void;
    logout: () => void;
    isLoggedIn: () => boolean;

};
type Props = { children: React.ReactNode}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate =  useRouter();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect (()=> {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        setTimeout(() => {
            if (user && token) {
                setUser(JSON.parse(user));
                setToken(token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            }
            setIsReady(true);
        }, 0);
    }, []);
    const loginUser = async (email: string, password: string) => {
        await loginApi(email,password).then((res)=>{
            if(res)
            {
                localStorage.setItem("token", res?.data.token);
                const userObj =
                    {
                        userName: res?.data.email,
                        email: res?.data.email,
                    }
                    localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token);
                setUser(userObj!);
                toast.success("User registered successfully");
                navigate.push("/");

            }
        }).catch(e=>toast.warning("Server error"));
        

    };
    const registerUser = async (email: string, password: string) => {
        await registerApi(email,password).then((res)=>{
            if(res)
            {
                localStorage.setItem("token", res?.data.token);
                const userObj =
                    {
                        userName: res?.data.email,
                        email: res?.data.email,
                    }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token);
                setUser(userObj!);
                toast.success("User registered successfully");
                navigate.push("/");

            }
        }).catch(e=>toast.warning("Server error"));


    };
    const isLoggedIn = () => {
        return !!user;
    };
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate.push("/");
    }
    return (
        <UserContext.Provider value={{ loginUser, user, token, isLoggedIn, registerUser, isReady, logout }}>
    {isReady ? children : null}
    </UserContext.Provider>
    );


};
export const useAuth = () => React.useContext(UserContext);

