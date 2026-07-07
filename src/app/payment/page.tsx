import "@/features/test1.css"
import Link from "next/link";

const page = () => {
    return (<>
        <div className="flex w-full h-auto bg-linear-to-r from-green-500 to-yellow-500">payment</div>
        <div className="flex w-full h-auto bg-linear-to-r from-blue-500 to-yellow-500 hover:text-white" >
            <Link href="/payment/tarrifs">for parent</Link>
        </div>
        <div className="bg-linear-to-r from-red-500 to-yellow-500 hover:text-white">
            <Link href="/payment/shop">for student</Link>
        </div>
    </>)
}
export default page;