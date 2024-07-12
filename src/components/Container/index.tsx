import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import {twMerge} from "tailwind-merge";

const Container:FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren> = ({className, children, ...props}) => {
    return (
        <div
            {...props}
            className={twMerge("lg:px-40", className)}
        >
            {children}
        </div>
    )
}

export default Container;