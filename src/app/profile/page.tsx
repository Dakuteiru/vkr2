import example from "@/features/example";

import "@/features/test1.css"
import Student from "@/features/Students/Student";
import banner from "@/pictures/banner.jpg"
import Block from "@/features/Blocks/Block";
import BlockMap from "@/features/Blocks/BlockMap";

const page = () => {
    const studak = {
        first_name: "John",
        age: 123
    }
    const myBlock ={
        blockTitle: "title",
        blockDescription: "desc",
        blockButtonText: "text1",
        blockSettingX: 100,
        blockSettingY: 80,

    }
    const myBlock2 ={
        blockTitle: "title2",
        blockDescription: "desc2",
        blockSettingX: 100,
        blockSettingY: 80,

    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full h-auto bg-linear-to-r from-green-500 to-cyan-500">profile</div>
            <div className="flex">
                <Student student={studak}></Student>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <Block blockInformatino={myBlock}></Block>
                <Block blockInformatino={myBlock2}></Block>
                <Block blockInformatino={{
                    blockTitle: "title3",
                    blockDescription: "desc3",
                    blockButtonText: "text3",
                    blockSettingX: 100,
                    blockSettingY: 80,
                }}>

                </Block>

            </div>
            <div className="flex gap-3 justify-center flex-row items-center">
                <BlockMap blocks={[{
                    blockTitle: "title3",
                    blockDescription: "desc3",
                    blockButtonText: "text3",
                    blockSettingX: 100,
                    blockSettingY: 80,
                    image: "/banner.jpg"
                }, myBlock2, myBlock]}>

                </BlockMap>
            </div>
        </div>)
}
export default page;