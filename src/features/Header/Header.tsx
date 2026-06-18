import Link from "next/link";

const Header = () => {
    return (
        <div className="flex gap-[30px] text-nowrap w-full  justify-center flex-row items-center border-amber-300 border-[2px] border-dotted bg-blue-800 text-white">
            <div>
                <Link href="/">Main page</Link>
            </div>
            <div>
                <a href="https://google.com/">schedule Marks Homework</a>
            </div>
            <div>
                <Link href="/reception">Reception</Link>
            </div>
            <div>
                <Link href="/market">Market</Link>
            </div>
            <div>
                Payment
            </div>
            <div>
                <Link href="/profile">Profile</Link>
            </div>
        </div>)
}
export default Header;