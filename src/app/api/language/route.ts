import {NextResponse} from "next/server";
import getServerLanguage from "@src/ultils/getServerLanguage";
import LANGUAGES from "@src/constants/Language";


export async function POST(request: Request) {
    const currentLanguage =    getServerLanguage()
    const language = await request.json().then(
        ({language}) => Object.values(LANGUAGES).includes(language) ? language : LANGUAGES.VI
    )

    const response =  NextResponse.json(
        {
            language: language,
            reload: currentLanguage !== language
        },
        {
            status: 200,
        }
    )

    response.cookies.set(
        "language", language
    )

    return response
}