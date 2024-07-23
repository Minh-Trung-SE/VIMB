import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import Link from "next/link";
import React, {FC, HTMLAttributes} from 'react';

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({className = "p-5 rounded space-y-10", ...props}) => {
    return (
        <Container
            className={className}
            {...props}
        >
            <div className="py-10 flex">
                <div className="py-5 space-y-10 flex-none">
                    <img
                        src="/logo/logo-full-white.png"
                        alt="logo"
                        className="h-10 w-auto block mx-auto"
                    />
                    <p className="text-sm">iCount House, Kumul Highway. <br/> Port Vila, Vanuatu</p>
                </div>
                <div className="pl-20 space-y-5 flex-none">
                    <h2 className="font-medium text-md">Quick links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/passport-strength">
                                <span>Passport Strength</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/passport-strength">
                                <span>Passport Strength</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/passport-strength">
                                <span>Passport Strength</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="ml-auto w-fit grid grid-cols-4 gap-1">
                    {
                        Array(8).fill(0).map(
                            (_, index) => (
                                <img
                                    key={index}
                                    src={`/images/${index + 1}.jpg`}
                                    className="aspect-square w-24 h-24 object-cover"
                                />
                            )
                        )
                    }

                </div>
            </div>

        </Container>
    );
};

export default Main;