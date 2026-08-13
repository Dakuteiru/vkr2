import axios from "axios";
import {handleError} from "@/Helpers/ErrorHandler";
import {LessonStuct, SubjectStruct} from "@/features/Back/Lesson";
import {UserList, UserProfile} from "@/features/Back/User";

const api = "http://localhost:5294/";

export const LessonPost = async (lessonId: string, subjectId: string, TeachId: string, dateTime: string) =>{
    try {
        const data = await axios.post<LessonStuct>(api + "lesson", null,
            {
                params: {
                     lessonId,
                    subjectId,
                     TeachId,
                    dateTime
                }
            })
        return data}
        catch(error){
            handleError(error);
        }
    };
export const LessonPut = async (groupId: string, subjectId: string, TeachId: string, dateTime: string) =>{
    try {
        const lessonBase = await axios.put<LessonStuct>(api + "lesson",
            {
                groupID:groupId,
                subjectID:subjectId,
                teacherId:TeachId,
                startedAt:dateTime
            }
            );
        return lessonBase;
    }
    catch(error){
        handleError(error);
    }
};
export const LessonDelete = async (lessonId: string, subjectId: string, TeachId: string, dateTime: string) =>{
    try {
        const data = await axios.delete<LessonStuct>(api + "lesson",
            {
                params: {
                    lessonId,
                }
            })
        return data}
    catch(error){
        handleError(error);
    }
};
export const LessonGetFTeacher = async (TeachId: string) =>{
    try {
        const data = await axios.get<LessonStuct>(api + "lesson/forTeacher",
            {
                params: {
                    TeachId,
                }
            })
        return data}
    catch(error){
        handleError(error);
    }
};
export const LessonGetbyID = async (groupId: string) =>{
    try {
        const data = await axios.get<LessonStuct>(api + "lesson/byId",
            {
                params: {
                    groupId,
                }
            })
        return data}
    catch(error){
        handleError(error);
    }
};
export const LessonGetFStd = async () =>{
    try {
        const data = await axios.get<LessonStuct>(api + "lesson/forStudent",
            {

            })
        return data}
    catch(error){
        handleError(error);
    }
};

export const SubjectsList = async () =>{
    try
    {
        const response = await axios.get<SubjectStruct[]>(api + "Subjects",
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
export const AllUsers = async () =>{
    try
    {
        const response = await axios.get<UserList[]>(api + "api/User/All",
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
