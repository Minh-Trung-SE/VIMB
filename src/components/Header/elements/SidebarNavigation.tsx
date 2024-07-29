"use client"
import React from 'react';
import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import {usePathname} from "next/navigation";
import useBoolean from "@src/hooks/useBoolean";
import Link from "next/link";
import LogoSquare from "@src/components/Header/elements/LogoSquare";

const SidebarNavigation = () => {
    const [flag, setFlag] = useBoolean(false)
    const pathname = usePathname()

    return (
        <Container className="py-2.5">
            <div className="h-11 flex justify-between items-center text-cetacean-blue">
                <div className="h-full flex items-center gap-x-5">
                    <button
                        onClick={setFlag.on}
                    >
                        <svg className="size-8" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <LogoSquare className="h-16 sm:hidden"/>
                    <Logo className="hidden sm:block"/>
                </div>
                <button className="bg-vn-red text-white rounded px-4 py-2">Contact US</button>


                {
                    flag ? (
                        <nav
                            className="fixed bg-white top-0 right-0 bottom-0 h-full font-medium"
                        >
                            <Link
                                href="/"
                                data-link-active={pathname === "/"}
                                className="flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                            >
                                Home
                            </Link>
                            <Link
                                href="/passport-strength"
                                data-link-active={pathname.startsWith("/passport-strength")}
                                className="flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                            >
                                Passport Strength
                            </Link>
                            <Link
                                href="/cost-2nd"
                                data-link-active={pathname.startsWith("/cost-2nd")}
                                className="flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                            >
                                The Cost of 2nd Passport
                            </Link>
                            <Link
                                href="/citizenship"
                                data-link-active={pathname.startsWith("/citizenship")}
                                className="flex items-center data-link-active:border-gray-500 hover:border-gray-500 transition-colors duration-300 px-5"
                            >
                                Citizenship By Investment (CBI)
                            </Link>
                        </nav>
                    ) : null
                }

            </div>
        </Container>
    )
};

export default SidebarNavigation;