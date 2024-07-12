import Banner from "@src/components/Banner";
import Featured from "@src/components/Featured";
import Footer from "@src/components/Footer";
import GetInTouch from "@src/components/GetInTouch";
import Header from "@src/components/Header";
import Team from "@src/components/Team";
import Template from "@src/components/Template";
import {Metadata} from "next";

export default function Home() {
    return (
        <main>
            <Header/>
            <section id="home">
                <Banner/>
            </section>
            <section id="contact">
                <GetInTouch/>
            </section>
            <Footer/>

        </main>
    );
}
