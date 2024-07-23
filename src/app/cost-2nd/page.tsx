import About from "@src/components/About";
import Banner from "@src/components/Banner";
import Featured from "@src/components/Featured";
import Footer from "@src/components/Footer";
import GetInTouch from "@src/components/GetInTouch";
import Header from "@src/components/Header";
import Team from "@src/components/Team";
import Template from "@src/components/Template";
import {Metadata} from "next";
import PassportStrength from "@src/components/PassportStrength/PassportStrength";
import CostSecondPassport from "@src/components/CostSecondPassport";

export default function Home() {
    return (
        <main>
            <Header/>
            <CostSecondPassport/>


            <Footer/>

        </main>
    );
}
