export type LanguageParams = {
    language: "en" | "vi"
}

export type NextProps<P = Record<string, string>, S = Record<string, string>> = {
    params: P
    searchParams: S
}


export type ServerComponentProps = {
    params: any,
    searchParams: {
        language: string
    } & Record<string, string>
}