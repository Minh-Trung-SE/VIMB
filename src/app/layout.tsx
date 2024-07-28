import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@src/app/globals.css";
import {Toaster} from 'sonner';
import {ReactNode} from "react";
import Header from "@src/components/Header";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "VIMB Việt Nam, giúp hiện thực hóa sở hữu quốc tịch Vanuatu",
    description: "VIMB Việt Nam",
    keywords: ["Đầu tư quốc tịch", "Quốc tịch", "Mua quốc tịch"],
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
        <body className={inter.className}>
        <main>
            <Header />
        {children}

        </main>
        <Toaster/>
        </body>
        </html>
    );
}
