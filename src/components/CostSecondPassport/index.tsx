import Container from "@src/components/Container";
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