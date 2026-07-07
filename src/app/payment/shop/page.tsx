
import blockShop from "@/features/PayBlock/ShopBlock";
import ShopMap from "@/features/PayBlock/ShopBlock";

const page = () => {
    return (<div className="flex flex-col items-center gap-y-2" >
        <div className="flex w-full h-auto bg-linear-to-r from-red-600 to-blue-500">магазин для студента</div>
        <ShopMap shopBlock={[
            {   Title:"Жеский диск",
                image:"/flshk.png",
                Description:"description",},
            {
                Title:"Жесткий диск",
                image:"/hhd.png",
                Description:"description",
            },
            {
                Title:"Ручка",
                image:"/pen.png",
                Description:"description",
            }
        ]}>

        </ShopMap>
    </div>)
}
export default page;