import example from "@/features/example";
import "@/features/test1.css"
import banner from "@/pictures/Top.jpg"
const name = "@/pictures/Top.jpg";
const page = () => {
    return (
        <>
            <h1 className=" ml-2 text-3xl font-bold underline text-[#4A412A]">
                Hello world!
            </h1>
            <div className={"flex w-full bg-[url(@/pictures/Top.jpg)] text-white"}>dsaokjias</div>
            <div className="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
            <div className="test1 mr
        -[50px]">
                <span className="test2 test3">hello world {example()} hello world </span>
                <span className="test2 test3">hello world {example()} hello world </span>
            </div>
            <div className="test1" style={{border: "5px solid black"}}>
                <span className="test3" style={{color: 'blue'}}>hello world {example()} hello world</span>
            </div>

        </>
    )
}
export default page;