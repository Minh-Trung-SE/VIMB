import Container from "@src/components/Container";
import Link from "next/link";
import React, {FC, HTMLAttributes} from 'react';
import Image from "next/image";

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({className = "p-5 rounded space-y-10", ...props}) => {
    return (
        <Container
            className={className}
            {...props}
        >
            <div className="py-10 flex flex-wrap gap-10">
                <div className="space-y-10 flex-none">
                    <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/logo/logo-full-white.png"
                        alt="logo"
                        className="h-10 w-auto block mx-auto"
                    />
                    <div className="space-y-2">
                        <p className="text-sm">iCount House, Kumul Highway. <br/> Port Vila, Vanuatu</p>
                        <Link
                            href="/contact-us"
                            className="block w-full text-center bg-vn-red text-white rounded px-4 py-2"
                        >
                            Contact US
                        </Link>
                    </div>
                </div>
                <div className="space-y-5 flex-none">
                    <h2 className="font-medium text-lg">Quick links</h2>
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
                            <Link href="/cost-2nd">
                                <span>The cost of 2nd Passport</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/citizenship">
                                <span>Citizenship by Invest (CBI)</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="ml-auto w-fit grid grid-cols-4 gap-1">
                    {
                        Array(8).fill(0).map(
                            (_, index) => (
                                <Image
                                    alt="image"
                                    key={index}
                                    sizes="50vw"
                                    width={0}
                                    height={0}
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