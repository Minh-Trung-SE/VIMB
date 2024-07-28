"use client"
import React from 'react';
import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navigation = () => {
    const pathname = usePathname()

    return  (
        <Container className="hidden md:block py-2.5">
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

                <button className="bg-vn-red text-white rounded px-4 py-2">Contact US</button>
            </div>
        </Container>
    )
};

export default Navigation;