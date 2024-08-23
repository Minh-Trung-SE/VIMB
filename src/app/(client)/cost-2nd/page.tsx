import Container from "@src/components/Container";
import GlobalCBI from "@src/components/CostSecondPassport/elements/GlobalCBI";
import OtherExpenses from "@src/components/CostSecondPassport/elements/OtherExpenses";
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
                        backgroundPosition: "bottom",
                        backgroundImage: "url(/images/vanuatu-currency.jpg)",
                    }
                }
                className="relative -z-40"
            >
                <div className="absolute bg-primary/70 h-full w-full flex items-center">
                    <h1 className="mx-auto text-white text-center text-4xl font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Đầu tư để có quốc tịch trên toàn thế giới",
                                    en: "Global CBI at Glance"
                                },
                                language
                            )
                        }
                    </h1>
                </div>
            </div>
            <Container>
                <GlobalCBI/>
                <OtherExpenses/>
            </Container>
        </>
    );
}
