export interface TeacherOne {
    teacher: {
        first_name: string;
        age?: number;
        receipt?: TeacherReceipt;
    }
}
export interface TeacherMany {
    teachers: {
        first_name: string;
        age?: number;
        receipt?: TeacherReceipt;
    }[]
}
export interface TeacherReceipt
{
        head_line: string;
        body_line: string;
}
