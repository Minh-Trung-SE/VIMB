import Badge from "@src/common/Badge";
import React, {FC} from "react";
import {type Country} from "@src/components/PassportStrength/data/Countries";
import {nanoid} from "nanoid";
import Image from "next/image";
import displayMessage from "@src/ultils/language";
import {Language} from "@src/constants/Language";

type Props = {
    country: Country
    language: Language
}
const Country: FC<Props> = ({country, language}) => {
    return (
        <div
            key={nanoid()}
            className="group flex overflow-hidden space-x-5 items-center border rounded p-2"
        >
            <Image
                width={32}
                height={48}
                key={country.code}
                className="block h-12 w-16 object-cover rounded border"
                alt={country.code}
                src={`/flags/${country.code}.png`}
            />

            <div className="grow overflow-hidden">
                <a
                    target="_blank"
                    href={country.link}
                    className="block truncate group-hover:text-vn-red font-medium text-primary opacity-80"
                >
                    {
                        displayMessage(
                            {
                                en: country.name,
                                vi: country.name
                            },
                            language
                        )
                    }
                </a>

                {
                    country.status === "E" ? (
                        <Badge className="text-px-10 hover:bg-vn-yellow hover:text-primary" type="outline" intent="success">
                            E visa
                        </Badge>
                    ) : country.status === "ON_ARRIVAL" ? (
                        <Badge className="text-px-10 bg-slate-200" type="outline" intent="primary">
                            Visa on arrival
                        </Badge>
                    ) : country.status === "REQUIRED" ? (
                        <Badge className="text-px-10" type="outline" intent="secondary">
                            Visa required
                        </Badge>
                    ) : (
                        <Badge className="text-px-10 text-white" type="intent" intent="success">
                            Not required
                        </Badge>
                    )
                }
            </div>
            <a
                href={country.link}
                className="flex-none truncate group-hover:text-vn-red group-hover:opacity-100 font-medium text-primary opacity-0 transition-all"
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className="size-5"
                >
                    <path fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
                    />
                </svg>
            </a>
        </div>
    );
};

export default Country;