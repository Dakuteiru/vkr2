import Image from "next/image";
import banner from "@/pictures/banner.jpg"
export default function Home() {
  return (
      <main className="flex flex-col w-full max-w-[1000px]">
        <div className="flex flex-col w-full max-w-[800px]">
            {/*<div  className={"flex bg-[url(@/pictures/banner.jpg)] text-white h-[500px] w-[1980px] bg-contain" }>*/}

            {/*</div>*/}
            {/*<div className={"relative flex-[1_1_0] min-h-0"}>*/}
            {/*    asdasd*/}
                {/*<Image src={banner} alt="text" priority fill={true} className={"object-contain"}/>*/}
            {/*</div>*/}
        </div>
        <div className="flex flex-row ">
              <div className="flex flex-col border-8 border-black w-10 h-10">

              </div>
        </div>
      </main>
  );
}
