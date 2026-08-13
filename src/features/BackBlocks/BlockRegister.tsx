import * as Yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAuth} from "@/Context/userAuth";

const RegBlock=() =>
{
    type LoginFormsInputs =
        {
            userName: string,
            password: string,
        }
    const validation = Yup.object().shape(
        {
            userName: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
        }
    )
    const {registerUser} = useAuth();
    const {register, handleSubmit, formState:{errors}} = useForm<LoginFormsInputs>({ resolver: yupResolver(validation)});

    const handleLogin = (form: LoginFormsInputs) => {
        registerUser(form.userName, form.password);
    }
    return(
        <>
            <div className="flex w-full h-auto bg-linear-to-r from-cyan-500 to-blue-500">тестовое окно для проверки и
                реализации различных функций или карточек
            </div>
            <form className="relative z-10 space-y-4 md:space-y-6 p-4 bg-white" onSubmit={handleSubmit(handleLogin)}>
                <div>
                <label htmlFor="username">UserName</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    {... register("userName")}
                ></input>
                {errors.userName ? <p>{errors.userName.message}</p> : ""}

            </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        {... register("password")}
                    ></input>
                    {errors.password ? <p>{errors.password.message}</p> : ""}


                </div>
                <div>
                    <button
                        type="submit"
                        className="relative z-20 bg-blue-600 text-white px-4 py-2 rounded hover:bg-black cursor-pointer block w-full text-center">
                        Register
                    </button>
                </div>
            </form>


        </>
    )
}
export default RegBlock;