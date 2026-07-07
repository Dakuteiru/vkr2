import Image from "next/image";

import {cn} from "tailwind-cn";
interface BlockMapInfo {
    blocks: {
        blockTitle?: string,
        blockDescription: string,
        blockButtonText?: string,
        blockSettingX: number,
        blockSettingY: number,
        image?: string,
    }[];

}

const thisMapBlock = ({blocks}: BlockMapInfo) => {

    return(

        <div className="flex flex-row gap-3 h-[150px]" >
            { blocks &&(
                blocks.map((card, index) => (

                    <div key={index} className="flex flex-col relative justify-center gap-2 border-4 items-center border-black w-[200px] h-[150px]">
                        <div className={cn("z-10 flex-1",
                            card.image && "text-white"
                        )} >
                            <p className=" text-4xl ">{card.blockTitle}</p>
                            <p className=" text-1xl">{card.blockDescription}</p>
                        </div>
                        {card.image &&
                            (
                                <Image src={card.image} alt="text" fill className="z-0" />
                            )
                        }
                    </div>
                ))
            )

            }

        </div>
    )
}
export default thisMapBlock;