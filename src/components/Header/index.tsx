"use client"
import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import {isEmpty} from "lodash";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FC, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";


const Header: FC<HTMLAttributes<HTMLHeadElement>> = ({className, ...props}) => {
    const pathname = usePathname()

    return (
        <header
            className={twMerge("border-b sticky top-0 bg-white", className)}
            {...props}
        >
            <Container className="bg-primary flex justify-between items-center">
                <h2 className="py-2.5 text-sm leading-3.5 font-medium text-white">Government Designated Agent</h2>
                <button
                    className="text-zinc-200 flex items-center space-x-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>
                    <span className="text-sm">English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path
                            fillRule="evenodd"
                            d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </Container>
            <Container className="py-2.5">
                <div className="h-11 flex justify-between items-center text-cetacean-blue">
                    <Logo/>
                    <nav className="h-full flex items-center font-medium">
                        <Link
                            href="/"
                            data-link-active={pathname === "/"}
                            className="h-full relative border-b-3 border-transparent flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                        >
                            Home
                        </Link>
                        <Link
                            href="/passport-strength"
                            data-link-active={pathname.startsWith("/passport-strength")}
                            className="h-full relative border-b-3 border-transparent flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                        >
                            Passport Strength
                        </Link>
                        <Link
                            href="/cost-2nd"
                            data-link-active={pathname.startsWith("/cost-2nd")}
                            className="h-full relative border-b-3 border-transparent flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                        >
                            The Cost of 2nd Passport
                        </Link>
                        <Link
                            href="/citizenship"
                            data-link-active={pathname.startsWith("/citizenship")}
                            className="h-full relative border-b-3 border-transparent flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                        >
                            Citizenship By Investment (CBI)
                        </Link>
                    </nav>

                    <button className="bg-primary text-white rounded px-4 py-2">Contact US</button>
                </div>
            </Container>
        </header>
    )
}

export default Header