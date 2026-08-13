
interface UserBlock {
    blockInformatino: {
        blockName?: string;
        blockSurName?: string;
        blockGroup?: string;
        blockEmail: string;
        blockButtonText?: string;
        blockSettingX: number;
        blockSettingY: number;
    }

}
const thisBlock = ({blockInformatino}: UserBlock) => {

    return(

        <div className="flex flex-col justify-center gap-2 border-4 items-center border-black w-[200px] h-[150px]">
            <p className=" text-4xl">{blockInformatino.blockName}</p>
            <p className=" text-1xl">{blockInformatino.blockSurName}</p>
            <p className=" text-1xl">{blockInformatino.blockEmail}</p>
            {blockInformatino.blockButtonText && (
                <div className="flex justify-center bg-green-500 w-30 h-6 rounded-4xl">{blockInformatino.blockButtonText}</div>
            )}

        </div>
    )
}
export default thisBlock;