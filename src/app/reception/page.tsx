
import "@/features/test1.css"
import {TeacherDesc} from "@/features/Teacher/TeacherDesc";
import {ReceptionOnTeach} from "@/features/Teacher/ReceptionOnTeach";
const page = () => {
    return (<>
        <div className=" flex w-full h-auto bg-linear-to-r from-pink-500 to-green-500">reception</div>
        <div><ReceptionOnTeach teachers={TeacherDesc} ></ReceptionOnTeach>
        </div>
        </>)

}
export default page;