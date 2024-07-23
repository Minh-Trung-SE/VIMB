import Container from "@src/components/Container";
import Strength from "@src/components/PassportStrength/elements/Strength";
import Bypassing from "@src/components/PassportStrength/elements/Bypassing";
import AccessCountries from "@src/components/PassportStrength/elements/AccessCountries";
import GlobalCBI from "@src/components/CostSecondPassport/elements/GlobalCBI";
import OtherMarriages from "@src/components/CostSecondPassport/elements/OtherMarriages";

const CostSecondPassport = () => {
    return (
        <Container>
            <GlobalCBI/>
            <OtherMarriages/>
        </Container>
    );
};

export default CostSecondPassport;