import Container from "@src/components/Container";
import Link from "next/link";
import React, {FC, HTMLAttributes} from 'react';
import Image from "next/image";
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({className = "p-5 rounded space-y-10", ...props}) => {
    const language = getServerLanguage()
    return (
        <Container
            className={className}
            {...props}
        >
            <div className="py-10 flex flex-wrap gap-10">
                <div className="space-y-5 flex-none">
                    <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/logo/logo-full-white.png"
                        alt="logo"
                        className="h-10 w-auto block mx-auto"
                    />
                    {
                        displayMessage(
                            {
                                vi: (
                                    <p className="text-sm max-w-72">
                                        The <span className="text-vn-red font-medium">ONLY</span> authorised agent in
                                        Vietnam. Only direct agents of Vanuatu Citizenship Office can process your
                                        application.
                                    </p>
                                ),
                                en: (
                                    <p className="text-sm max-w-72">
                                        Đại lý được ủy quyền <span className="text-vn-red font-medium">DUY NHẤT</span> tại Việt Nam.
                                        Chỉ có đại lý trực tiếp của Văn phòng Nhập tịch Vanuatu mới có thể xử lý đơn của bạn.
                                    </p>
                                )
                            },
                            language
                        )
                    }


                    <div className="space-y-2">
                        <Link
                            href="/contact-us"
                            className="block max-w-48 w-fit text-center bg-vn-red text-white rounded px-4 py-2"
                        >
                            Contact US
                        </Link>
                        <p className="max-w-72 text-xs italic">
                            {
                                displayMessage(
                                    {
                                        vi: "To be assigned an authorised sub-agent in Vietnam for a consultation.",
                                        en: "Để được chỉ định một đại lý  được ủy quyền tại Việt Nam để tư vấn."
                                    },
                                    language
                                )
                            }

                        </p>
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