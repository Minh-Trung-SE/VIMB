import Container from "@src/components/Container";
import FinancialAndCivic from "@src/components/PassportStrength/elements/FinancialAndCivic";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";

export default function Home() {
    return (
        <Container>
            <h1 className="my-5 font-medium text-2xl text-vn-red">Additional Passport Benefits</h1>
            <Strength/>
            <Bypassing/>
            <FinancialAndCivic/>
            <AccessCountries/>

        </Container>
    );
}
