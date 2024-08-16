import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import PassportStrength from "@src/components/PassportStrength/PassportStrength";
import Container from "@src/components/Container";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";

export default function Home() {
    return (
        <Container>
            <h1 className="my-5 font-medium text-2xl text-vn-red">Additional Passport Benefits</h1>

            <Strength/>
            <Bypassing/>
            <AccessCountries/>
        </Container>
    );
}
