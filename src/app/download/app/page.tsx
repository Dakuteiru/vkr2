import example from "@/features/example";
import "@/features/test1.css"

const Page = () => {
    return (
        <>
            <h1 className=" ml-2 text-3xl font-bold underline text-[#4A412A]">
                Hello worldddd!
            </h1>
            <div></div>
            <div className="test1 mr
        -[50px]">
                <span className="test2 test3">hello world {example()} hello world </span>
                <span className="test2 test3">hello world {example()} hello world </span>
            </div>
            <div className="test1" style={{border: "5px solid black"}}>
                <span className="test3" style={{color : 'blue'}}>hello world {example()} hello world</span>
            </div>

        </>
    )
}
export default Page;