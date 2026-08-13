import "@/features/test1.css"
import Link from "next/link";
import UserBlock from "@/features/Blocks/UserBlock";
import Block from "@/features/Blocks/Block";
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from "react";

export default async function page() {
    const data = await fetch("http://localhost:5294/Subjects");
    const posts = await data.json();
    return (<>
        <div className="flex w-full h-auto bg-linear-to-r from-green-500 to-yellow-500">payment</div>
        <div className="flex w-full h-auto bg-linear-to-r from-blue-500 to-yellow-500 hover:text-white">
            <Link href="/payment/tarrifs">for parent</Link>
        </div>
        <div className="bg-linear-to-r from-red-500 to-yellow-500 hover:text-white">
            <Link href="/payment/shop">for student</Link>
        </div>

        <div className="flex w-full h-auto border-4">
            <ul>
                {posts.map(((post: { id: Key | null | undefined; title: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                        <li key={post.id}>{post.title}</li>
                    )))}
                </ul>
            </div>

    </>)
}
