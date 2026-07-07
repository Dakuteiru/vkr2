import Image from "next/image";
export default function Home() {
  return (
      <main className="flex flex-col w-full max-w-[1000px]">
          <div className="flex w-full h-auto bg-linear-to-r from-green-600 to-yellow-500 rounded-r-3xl">основная страница</div>

          <div className="flex flex-col w-full max-w-[800px]">
            {/*<div  className={"flex bg-[url(@/pictures/banner.jpg)] text-white h-[500px] w-[1980px] bg-contain" }>*/}

            {/*</div>*/}
            {/*<div className={"relative flex-[1_1_0] min-h-0"}>*/}
            {/*    asdasd*/}
                {/*<Image src={banner} alt="text" priority fill={true} className={"object-contain"}/>*/}
            {/*</div>*/}
        </div>
          <div className="flex relative w-full h-[180px] hover:blur-sm">
              <Image src="/theTop.png" alt="text" fill></Image>
          </div>
        <div className="flex flex-row ">

              <div className="flex flex-col border-8 border-black size-fit hover:bg-linear-to-r from-red-600 to-olive-50">
                    TBD
              </div>
        </div>
      </main>
  );
}
