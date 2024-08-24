import Container from "@src/components/Container";
import Benefits from "@src/components/VanuatuCitizenship/elements/Benefits";
import ProcessVanuatuPassport from "@src/components/VanuatuCitizenship/elements/ProcessVanuatuPassport";
import AdditionalServices from "@src/components/VanuatuCitizenship/elements/AdditionalServices";
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import React from "react";

export default function Home() {
    const language = getServerLanguage()
    return (
        <>
            <div
                style={
                    {
                        width: "100%",
                        maxHeight: 532,
                        aspectRatio: "16/9",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url(/background/citizenship.jpg)",
                    }
                }
                className="relative -z-40"
            >
                <div className="absolute bg-primary/70 h-full w-full flex items-center">
                    <h1 className="mx-auto text-white text-center text-4xl font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Quyền lợi của công dân Vanuatu",
                                    en: "Vanuatu Citizenship benefits"
                                },
                                language
                            )
                        }
                    </h1>
                </div>
            </div>
            <Container>
                <Benefits/>
                <ProcessVanuatuPassport/>
                <AdditionalServices/>
            </Container>
        </>
    );
}
