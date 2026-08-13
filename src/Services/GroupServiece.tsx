import axios from "axios";
import {handleError} from "@/Helpers/ErrorHandler";
import {GroupInfo} from "@/features/Back/Groups";

const api = "http://localhost:5294/";

export const AllGroups = async () =>{
    try
    {
        const response = await axios.get<GroupInfo[]>(api + "api/Groups",
            {

            }
        )
        return response.data;
    }
    catch(error){
        handleError(error);
        return [];
    }
};
