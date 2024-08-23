import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import React from 'react';

const Banner = () => {
    const language = getServerLanguage();
    return (
        <div
            style={
                {
                    backgroundImage: "url(/background/VIMB-Vanuatu-Citizenship.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    aspectRatio: "16/9",
                    width: "100%",
                    maxHeight: 532
                }
            }
            className="relative -z-40"
        >
            <div className="absolute h-full w-full flex items-center">
                <h1 className="mx-auto text-white text-center text-4xl font-medium">
                    {
                        displayMessage(
                            {
                                vi: "Trang chủ VIMB.VN",
                                en: "Home VIMB.VN"
                            },
                            language
                        )
                    }
                </h1>
            </div>
        </div>
    );
};

export default Banner;