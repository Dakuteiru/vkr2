import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="flex gap-[30px] text-nowrap w-full  justify-center flex-row items-center border-amber-300 border-[2px] border-dotted bg-blue-800 text-white
            md:inline-flex gap-[10px] overflow-y-auto ">
                <div className="hover:text-foreground">
                    <Link href="/">Main page</Link>
                </div>
                <div className="hover:text-foreground">
                    <a href="https://google.com/">schedule Marks Homework</a>
                </div>
                <div className="hover:text-foreground">
                    <Link href="/reception">Reception</Link>
                </div>
                <div className="hover:text-foreground">
                    <Link href="/market">Market</Link>
                </div>
                <div className="hover:text-foreground">

                    <Link href="/payment">Payment</Link>
                </div>
                <div className="hover:text-foreground">
                    <Link href="/profile">Profile</Link>
                </div>
            </div>

        </>
    )
}
export default Header;