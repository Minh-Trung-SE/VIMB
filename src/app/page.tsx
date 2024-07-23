import About from "@src/components/About";
import Banner from "@src/components/Banner";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";

export default function  Home() {

    return (
        <main>
            <Header/>
            <section id="home">
                <Banner/>
            </section>
            <section id="about">
                <About/>
            </section>
            <Footer/>

        </main>
    );
}
