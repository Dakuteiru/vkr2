import Image from "next/image";
import banner from "@/pictures/banner.jpg"
interface BlockInfo {
    blockInformatino: {
        blockTitle?: string;
        blockDescription: string;
        blockButtonText?: string;
        blockSettingX: number;
        blockSettingY: number;
    }

}
const thisBlock = ({blockInformatino}: BlockInfo) => {

    return(

        <div className="flex flex-col justify-center gap-2 border-4 items-center border-black w-[200px] h-[150px]">
            <p className=" text-4xl">{blockInformatino.blockTitle}</p>
            <p className=" text-1xl">{blockInformatino.blockDescription}</p>
            {blockInformatino.blockButtonText && (
                <div className="flex justify-center bg-blue-500 w-30 h-6 rounded-4xl">{blockInformatino.blockButtonText}</div>
            )}

        </div>
    )
}
export default thisBlock;