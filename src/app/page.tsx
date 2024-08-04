import About from "@src/components/About";
import Banner from "@src/components/Banner";
import {Metadata, NextPage} from "next";
import {LanguageParams, NextProps} from "@src/types";

import getServerLanguage from "@src/ultils/getServerLanguage";
import LANGUAGES from "@src/constants/Language";

export async function generateMetadata({searchParams}: NextProps<undefined, LanguageParams>) : Promise<Metadata> {
    const language =  getServerLanguage();
    return searchParams.language === LANGUAGES.EN || language === LANGUAGES.EN ? {
        title: "Facilitating Vanuatu citizenship acquisition | VIMB Vietnam",
        description: "Facilitating Vanuatu citizenship acquisition",
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
        title: "Đầu tư và sở hữu quốc tịch Vanuatu | VIMB Việt Nam",
        description: "Đầu tư và sở hữu quốc tịch Vanuatu",
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
