import type {GetServerSideProps, Metadata} from "next";
import {Inter} from "next/font/google";
import "@src/app/globals.css";
import {Toaster, toast} from 'sonner';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "VIMB",
    description: "VIMB Việt Nam",
    keywords: ["Đầu tư quốc tịch", "Quốc tịch", "Mua quốc tịch"],
    icons: "/logo/logo.png",
    openGraph: {
        title: "VIMB",
        description: "Đầu tư quốc tịch",
        url: "https://webdesign.com",
        type: "website"
    }
}



export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Toaster/>
        {children}
        </body>
        </html>
    );
}
