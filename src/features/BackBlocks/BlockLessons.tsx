import {AllUsers, LessonPut, SubjectsList} from "@/Services/LessonService"
import {useEffect, useState} from "react";
import {SubjectStruct} from "@/features/Back/Lesson";
import {UserList} from "@/features/Back/User";
import {GroupInfo} from "@/features/Back/Groups";
import {AllGroups} from "@/Services/GroupServiece";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export const LessonBlock =()=> {
    type LessonFormInputs = {
        GroupID: string,
        SubjectID: string,
        TeacherId: string,
        StartedAt: string,
    }

    const validation = Yup.object().shape(
        {
                GroupID: Yup.string().required("Group id is required"),
            SubjectID: Yup.string().required("Subject is required"),
            TeacherId: Yup.string().required("Teacher is required"),
            StartedAt: Yup.string().required("start date time is required"),
        }
    )

    const [subjects, setSubjects] = useState<SubjectStruct[]>([]);
    const [teacher, setTeacher] = useState<UserList[]>([]);
    const [group, setGroup] = useState<GroupInfo[]>([]);
    useEffect(() => {
        SubjectsList().then((data) => {
            if (data) {
                setSubjects(data);
            }
        });
        AllUsers().then((data) => {
            if (data) {
                setTeacher(data);
            }
        });
        AllGroups().then((data) => {
            if (data) {
                setGroup(data);
            }
        });
    }, [])



    const {register, handleSubmit, formState:{errors}} = useForm<LessonFormInputs>(
        {
            resolver: yupResolver(validation),
            defaultValues: {
                StartedAt: "2027-01-12T19:30"
            }
        });

    const handleLesson = (form: LessonFormInputs) =>
    {
        const formattedDate = new Date(form.StartedAt).toISOString();

        LessonPut(form.GroupID, form.SubjectID, form.TeacherId, formattedDate)
    }
    return (<>
        <form onSubmit={handleSubmit(handleLesson)}>
        <div>
            <label htmlFor="idsubject">subject</label>
            <select id="idsubject" {... register("SubjectID")}>
            <option value="">select </option>
                {subjects.map((SubList, index)=>
                <option key={index} value={SubList.id}>
                {SubList.title}
                </option>
                    )}
            </select>
            {errors.SubjectID? <p>{errors.SubjectID.message}</p> : ""}

        </div>
        <div>
            <label htmlFor="idteacher">teacher</label>
            <select id="idteacher" {... register("TeacherId")}>
                <option value="">select </option>
                {teacher.map((UserList, index)=>
                    <option key={index} value={UserList.id}>
                        {UserList.email}
                    </option>
                )}

            </select>
            {errors.TeacherId ? <p>{errors.TeacherId.message}</p> : ""}

        </div>
        <div>
            <label htmlFor="idgroup">group</label>
            <select id="idgroup" {... register("GroupID")}>
                <option value="">select </option>
                {group.map((GroupList, index)=>
                    <option key={index} value={GroupList.id}>
                        {GroupList.name}
                    </option>
                )}
            </select>
            {errors.GroupID ? <p>{errors.GroupID.message}</p> : ""}
        </div>
            <div>
                <label htmlFor="iddatetime">date</label>
                <input
                    type="datetime-local"
                    id="iddatetime"
                    {... register("StartedAt")}
                />
                {errors.StartedAt ? <p>{errors.StartedAt.message}</p> : ""}
            </div>
            <div>
                <button
                    type="submit"
                    className="relative z-20 bg-blue-600 text-white px-4 py-2 rounded hover:bg-black cursor-pointer block w-full text-center">
                    Add Lesson
                </button>
            </div>
        </form>
    </>);
}
export default  LessonBlock;