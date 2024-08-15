import Link, {LinkProps} from "next/link";
import React, {FC} from 'react';
import {twMerge} from "tailwind-merge";
import Image from "next/image";

type LogoProps = Omit<LinkProps, "href"> & {
    href?: URL
    className?: string
}

const Logo: FC<LogoProps> = ({href = "", className, ...props}) => {
    return (
        <Link
            href={href}
            {...props}
            className={twMerge("h-8 flex items-center space-x-1 hover:opacity-90 transition-opacity", className)}
        >
            <Image sizes="100vw" className="block select-none h-full w-auto" alt="logo" src="logo/logo.png"/>
            <span className="select-none text-xl font-bold text-deep-carrot-orange">Web Design</span>
        </Link>
    );
};

export default Logo;