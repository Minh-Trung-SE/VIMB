import {LetterAvatar} from "@src/common/Avatar";
import Logo from "@src/components/Header/elements/Logo";
import {FC, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";


const Navigation: FC<HTMLAttributes<HTMLHeadElement>> = ({className, ...props}) => {
    return (
        <header
            className={twMerge("border-b sticky top-0 bg-white", className)}
            {...props}
        >
            <div className="flex justify-between items-center text-cetacean-blue">
                <Logo/>

                <LetterAvatar size={30} label="Minh Trung"/>
            </div>
        </header>
    )
}

export default Navigation