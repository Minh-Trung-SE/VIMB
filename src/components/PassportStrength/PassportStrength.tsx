import Container from "@src/components/Container";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";
import Countries from "@src/components/PassportStrength/elements/Countries";
import getServerLanguage from "@src/ultils/getServerLanguage";

const PassportStrength = () => {
    const language = getServerLanguage();
    return (
        <Container>
            <Strength/>
            <Bypassing/>
            <AccessCountries/>
            <Countries language={language}/>
        </Container>
    );
};

export default PassportStrength;