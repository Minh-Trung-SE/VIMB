import About from "@src/components/About";
import Banner from "@src/components/Banner";
import {Metadata, NextPage} from "next";
import {LanguageParams, NextProps} from "@src/types";

import getServerLanguage from "@src/ultils/getServerLanguage";

export async function generateMetadata({searchParams}: NextProps<undefined, LanguageParams>) : Promise<Metadata> {

    return searchParams.language === "en" ? {
        title: "VIMB Vietnam, facilitating Vanuatu citizenship acquisition",
        description: "VIMB Vietnam",
        keywords: ["Citizenship investment", "Citizenship", "Buy citizenship"],
        icons: "/logo/logo.png",
        openGraph: {
            title: "VIMB",
            description: "",
            url: "https://vimb.vn",
            type: "website",
            images: "https://vimb.vn/images/vanuatu-passport.webp",
        }
    } : {
        title: "VIMB Việt Nam, đầu tư và sở hữu quốc tịch Vanuatu",
        description: "VIMB Việt Nam",
        keywords: ["Đầu tư quốc tịch", "Quốc tịch", "Mua quốc tịch"],
        icons: "/logo/logo.png",
        openGraph: {
            title: "VIMB",
            description: "",
            url: "https://vimb.vn",
            type: "website",
            images: "https://vimb.vn/images/vanuatu-passport.webp",
        }
    }

}

const Page: NextPage<NextProps<unknown, LanguageParams>> = ({searchParams}) => {

    return (
        <>
            <section id="home">
                <Banner/>
            </section>
            <section id="about">
                <About/>
            </section>
        </>
    );
}

export default Page
