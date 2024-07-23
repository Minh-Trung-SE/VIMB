import Container from "@src/components/Container";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";
import Benefits from "@src/components/VanuatuCitizenship/elements/Benefits";
import ProcessVanuatuPassport from "@src/components/VanuatuCitizenship/elements/ProcessVanuatuPassport";
import AdditionalServices from "@src/components/VanuatuCitizenship/elements/AdditionalServices";

const VanuatuCitizenship = () => {
    return (
        <Container>
            <Benefits/>
            <ProcessVanuatuPassport/>
            <AdditionalServices/>
        </Container>
    );
};

export default VanuatuCitizenship;