import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@src/app/globals.css";
import {Toaster, toast} from 'sonner';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Web Design",
    description: "Web Design",
    keywords: ["web design", "web development", "website design", "web design company", "web design services", "web design agency", "web design and development", "web design studio", "web design tools", "web design trends", "web design inspiration", "web design portfolio", "web design examples", "web design tutorial", "web design course", "web design software", "web design templates", "web design ideas", "web design principles"],
    icons: "/logo/logo.png",
    openGraph: {
        title: "Web Design",
        description: "Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design.",
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
