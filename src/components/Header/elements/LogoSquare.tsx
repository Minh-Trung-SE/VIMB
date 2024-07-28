import Link, {LinkProps} from "next/link";
import React, {FC} from 'react';
import {twMerge} from "tailwind-merge";

type LogoProps = Omit<LinkProps, "href"> & {
    href?: URL
    className?: string
}

const Logo: FC<LogoProps> = ({href = "/", className, ...props}) => {
    return (
        <Link
            href={href}
            {...props}
            className={twMerge("hover:opacity-90 transition-opacity", className)}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-11 w-auto" src="/logo/logo.png" alt="logo"/>
        </Link>
    );
};

export default Logo;