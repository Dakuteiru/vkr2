interface Props {
    student: {
        first_name: string;
        age?: number;
    }
}
const Student = ({student}: Props) => {
    return(
        <div className="flex flex-row justify-center gap-2">
            <p className="font-bold text-xl leading-tight text-red-500">{student.first_name}</p>
            <p className="font-bold text-xl leading-tight">{student.age}</p>
        </div>
    )
}
export default Student;