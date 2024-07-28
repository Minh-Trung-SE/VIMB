import {cookies, headers} from "next/headers";

const getServerLanguage: (name?: string) => string | undefined = (name: string = "language") => {
    return headers().get("language") ?? cookies().get(name)?.value ?? "vi"
}

export default getServerLanguage