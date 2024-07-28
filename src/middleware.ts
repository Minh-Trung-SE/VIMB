import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {isUndefined} from "lodash";

export function middleware(request: NextRequest) {
    const {url, nextUrl: {pathname}} = request
    const languagePath = pathname.split("/", 2).at(-1)
    const isLanguagePath = isUndefined(languagePath) ? false :  ["vi", "en"].includes(languagePath)
    const language = isLanguagePath ? languagePath! : request.cookies.get("language")?.value ?? "vi"

    const response = NextResponse.next(
        {
            headers: {
                "language": language
            }
        }
    )

    if (isUndefined(request.cookies.get(language))){
        response.cookies.set(
            "language",
            "vi",
            {
                path: "/"
            }
        )
    }

    if (isLanguagePath) {
        const rewrite = request.nextUrl.clone();
        rewrite.pathname = pathname.replace(`/${language}`, "")
        return NextResponse.rewrite(rewrite, response)
    }

    return response
}
