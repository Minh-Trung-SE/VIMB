import {ReactNode} from "react";
import "@src/app/globals.css";
import type {Metadata} from "next";

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

export default function RootLayout(
    {
        children,
    }: {
        children: ReactNode
    }
) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

