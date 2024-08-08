import {FC, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import dynamic from "next/dynamic";
import MainHeader from "@src/components/Header/elements/MainHeader";


type HeaderProps = HTMLAttributes<HTMLHeadElement>

const  TopHeader = dynamic(
    () => import("@src/components/Header/elements/TopHeader"),
    {ssr: false}
)

const Header: FC<HeaderProps> = ({className, ...props}) => {

    return (
        <header
            className={twMerge("border-b sticky top-0 z-10 bg-white", className)}
            {...props}
        >
            <TopHeader/>
            <MainHeader/>
        </header>
    )
}

export default Header