import Container from "@src/components/Container";
import FinancialAndCivic from "@src/components/PassportStrength/elements/FinancialAndCivic";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import React from "react";

export default function Home() {
    const language = getServerLanguage();
    return (
        <>
            <div
                style={
                    {
                        width: "100%",
                        maxHeight: 532,
                        aspectRatio: "16/9",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                        backgroundImage: "url(/background/driving.jpg)",
                    }
                }
                className="relative -z-40"
            >
                <div className="absolute bg-primary/70 h-full w-full flex items-center">
                    <h1 className="mx-auto text-white text-center text-4xl font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Lợi ích khi sở hữu một hộ chiếu mạnh",
                                    en: "Passport Strength Benefits"
                                },
                                language
                            )
                        }
                    </h1>
                </div>
            </div>
            <Container>
                <Strength/>
                <Bypassing/>
                <FinancialAndCivic/>
                <AccessCountries/>
            </Container>
        </>
    );
}
