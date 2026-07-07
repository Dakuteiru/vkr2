import Image from "next/image";

interface ShopBlock {
    shopBlock:{

        Title?:string,
        image?:string,
        Description?:string,

    }[]

}
interface TarrifBlock
{
    tarriffBlock:{
        title?:string,
        description?:string,
        button:string
    }[]
}
const ShopMap = ({shopBlock}: ShopBlock) => {
    return (
        <div className="flex flex-auto grid gap-3 gap-y-2 grid-cols-3 items-center justify-center">
            {
                shopBlock &&(
                    shopBlock.map((card, index) => (
                        <div key={index} className="flex flex-col border relative items-center justify-center size-fit w-[300px] border-black p-1 hover:font-bold ">
                            <div>
                                <p>{card.Title}</p>
                            </div>
                            {card.image &&
                                (
                                    <div className="relative w-[150px] h-[160px]">
                                        <Image src={card.image} alt="nothing" fill className="z-0" />
                                    </div>
                                )
                            }
                            <div>
                                <p>{card.Description}</p>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}
export const Tarrifmap = ({tarriffBlock}: TarrifBlock) => {
    return (
        <div className="flex flex-col items-center justify-center grid gap-y-2">
            {
                tarriffBlock &&(
                    tarriffBlock.map((card, index) => (
                        <div key={index} className="flex flex-col  border-4 text-center items-center justify-center border-black size-fit w-[300] m-1 p-2 gap-y-2">
                            <div className="font-bold">
                                {card.title}
                            </div>
                            <div>
                                {card.description}
                            </div>
                            <div className="border-8 bg-blue-300 rounded-2xl w-[150px] size-fit hover:bg-linear-to-r from-lime-200 to-blue-500 hover:border-4 hover:p-1">
                                {card.button}
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}
export default ShopMap;
