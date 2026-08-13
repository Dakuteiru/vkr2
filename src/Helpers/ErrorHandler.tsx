import axios from "axios";
import {toast} from "react-toastify";

export const handleError = (error: unknown) =>
{
    if(axios.isAxiosError(error)) {
        const err= error.response;
        if(Array.isArray(err?.data.errors)){
            for(const val of err.data.errors)
            {
                toast.warning(val.desctription);
            }
        } else if(typeof err?.data.errors === "object"){
            for(const key  in err.data?.errors){
                if (Object.prototype.hasOwnProperty.call(err.data.errors, key)) {
                    const fieldErrors = err.data.errors[key];
                    // Выводим первое сообщение из массива ошибок для данного поля
                    if (Array.isArray(fieldErrors) && fieldErrors[0]) {
                        toast.warning(fieldErrors[0]);
                    }
                }
            }
        }else if(err?.data){

                toast.warning(err.data);

        }
        else if(err?.status === 401){

            toast.warning("unauthorized");


        }
        else if(err)
        {
            toast.warning(err?.data);
        }

    }
}