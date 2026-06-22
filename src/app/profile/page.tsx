import example from "@/features/example";

import "@/features/test1.css"
import Student from "@/features/Students/Student";

const page = () => {
    const studak = {
        first_name: "John",
        age: 123
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full h-auto bg-linear-to-r from-green-500 to-cyan-500">profile</div>
            <div className="flex ">
                <Student student={studak}></Student>
            </div>
        </div>)
}
export default page;