import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import React, {FC, HTMLAttributes} from 'react';


const Main: FC<HTMLAttributes<HTMLDivElement>> = ({className = "p-5 rounded space-y-10", ...props}) => {
    return (
        <Container
            className={className}
            {...props}
        >
            <div className="py-10 border-b flex justify-between">
                <Logo className='flex-none'/>
                <ul className="flex space-x-2">
                    <li className="h-6 w-6 inline-flex items-center justify-center border text-gray-500 hover:bg-deep-carrot-orange hover:text-white cursor-pointer rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </li>
                    <li className="h-6 w-6 inline-flex items-center justify-center border text-gray-500 hover:bg-deep-carrot-orange hover:text-white cursor-pointer rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>

                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-6 gap-x-5 gap-y-10">
                <div className="col-span-6 sm:col-span-3 space-y-5">
                    <h2 className="font-medium text-lg">Contact</h2>
                    <div className="space-y-2">
                        <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
                        <p>webdesign@gmail.com</p>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-1 space-y-5">
                    <h2 className="font-medium text-lg">Website</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#service">Service</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 sm:col-span-1 space-y-5">
                    <h2 className="font-medium text-lg">Support</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home">Get in Touch</a>
                        </li>
                        <li>
                            <a href="#about">How it works</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 sm:col-span-1 space-y-5">
                    <h2 className="font-medium text-lg">Template</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home">Get in Touch</a>
                        </li>
                        <li>
                            <a href="#about">How it works</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Main;