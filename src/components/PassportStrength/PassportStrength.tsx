import Container from "@src/components/Container";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";

const PassportStrength = () => {
    return (
        <Container>
            <Strength/>
            <Bypassing/>
            <AccessCountries/>
        </Container>
    );
};

export default PassportStrength;