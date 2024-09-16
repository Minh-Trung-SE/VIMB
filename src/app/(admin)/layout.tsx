import Logo from "@src/components/Header/elements/Logo";
import Sidebar from "@src/components/Sidebar";
import type {Metadata} from "next";
import Link from "next/link";
import {ReactNode} from "react";
import "@src/app/globals.css";

export const metadata: Metadata = {
    title: "VIMB ADMIN",
    description: "VIMB Admin",
    icons: "/logo/logo.png",
    openGraph: {
        title: "VIMB",
        description: "",
        url: "https://vimb.vn",
        type: "website",
        images: "https://vimb.vn/images/vanuatu-passport.webp"
    }
}

const Header = () => {
    return (
        <header className="border-b flex justify-between items-center px-5 py-2">
            <Logo/>
            <Link replace={true} className="block w-fit text-red-500 font-medium" href="/">
                Logout
            </Link>
        </header>
    )
}


export default function RootLayout(
    {
        children,
    }: {
        children: ReactNode
    }
) {
    // if (isEmpty(cookies().get("username"))) {
    //     redirect("/login")
    // }

    return (
        <html lang="en">
        <body>
        <Header/>
        <div className="flex">
            <Sidebar className="flex-none"/>
            <div className="grow">
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}

