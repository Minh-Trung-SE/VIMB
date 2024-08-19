
import displayMessage from "@src/ultils/language";
import {RECOGNIZED_COUNTRIES} from "@src/components/PassportStrength/data/Countries";
import {randomUUID} from "crypto";
import React from "react";
import getServerLanguage from "@src/ultils/getServerLanguage";
import Link from "next/link";
import Countries from "@src/components/PassportStrength/elements/Countries";

const AccessCountries = () => {
    const language = getServerLanguage()


    return (
        <div className="py-10 space-y-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Vanuatu Passport has access to the following countries</h1>
            <Countries language={language}/>
        </div>
    );
};

export default AccessCountries;