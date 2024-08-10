import Container from "@src/components/Container";
import React from 'react';
import ContactForm from "@src/components/ContactUs/elements/ContactForm";
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";


const Team = () => {

    const language = getServerLanguage();

    return (
        <Container className="py-20 space-y-5">
            <h2 className="text-2xl font-semibold">
                {
                    displayMessage(
                        {
                            en: "Get in touch",
                            vi: "Liên hệ"
                        },
                        language
                    )
                }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
                <Image
                    src="/images/map.png"
                    alt="VIMB VietNam"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover rounded"
                />
                <ContactForm language={language}/>
            </div>
        </Container>
    );
};

export default Team;