import {TeacherMany} from "@/features/TeacherBlock/Teacher";

export const ReceptionOnTeach = ({teachers}: TeacherMany) => {
return <div className="grid grid-cols-1 gap-y-2">
    {
        teachers && (
            teachers.map((card, index) => (
                <div key = {index} className="flex flex-col items-center ">
                    <div className=" bg-linear-to-r from-pink-500 to-amber-500 w-[208] indent-2 border-2 ">
                        <p className="flex justify-start  hover:bg-linear-to-r from-pink-500 to-green-500 ">Teacher: {card.first_name}</p>
                        <p className="flex justify-start hover:bg-linear-to-r from-pink-500 to-green-500" >Age: {card.age}</p>


                            {card.receipt ?(
                                    <div className="border-4 border-amber-300 justify-center text-center w-[204px] -indent-0">
                                        <p> Receipt </p>
                                        <p className="bg-amber-100">{card.receipt.head_line}</p>
                                        <p className="bg-amber-200 hover:text-2xl">{card.receipt.body_line}</p>
                                    </div>):
                                (
                                    <div>
                                        <p className="bg-amber-100 border-amber-300 border-4">still dont have</p>
                                    </div>
                                )}

                    </div>

                </div>

            ))
        )
    }
        </div>
}