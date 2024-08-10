"use client"
import React, {FC} from 'react';
import {Language} from "@src/constants/Language";
import {
    DEPENDENT_TERRITORIES,
    RECOGNIZED_COUNTRIES,
    UNRECOGNIZED_TERRITORIES
} from "@src/components/PassportStrength/data/Countries";
import Country from "@src/components/PassportStrength/elements/Country";


type CountriesProps = {
    language: Language
}

const Countries: FC<CountriesProps> = ({language}) => {

    return (
        <div className="gap-5">
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
                {
                    RECOGNIZED_COUNTRIES.map(
                        (country) => <Country key={country.code} country={country} language={language}/>
                    )
                }
            </div>
            <h2 className="py-5 text-primary text-md font-medium">Unrecognized or partially recognized regions</h2>

            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
                {
                    UNRECOGNIZED_TERRITORIES.map(
                        (country) => <Country key={country.code} country={country} language={language}/>
                    )
                }
            </div>
            <h2 className="py-5 text-primary text-md font-medium">Dependent and autonomous territories</h2>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">

                {
                    DEPENDENT_TERRITORIES.map(
                        (country) => <Country key={country.code} country={country} language={language}/>
                    )
                }
            </div>

        </div>
    );
};

export default Countries;