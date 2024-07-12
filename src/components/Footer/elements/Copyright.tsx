import React, {FC, HTMLAttributes} from 'react';
import {twMerge} from "tailwind-merge";

const Copyright: FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => {
    return (
        <div
            className={twMerge("border-t py-2", className)}
            {...props}
        >
            <p className="text-center text-sm font-medium text-gray-500">© Copyright Web Design 2024. All Rights Reserved.</p>
        </div>
    );
};

export default Copyright;