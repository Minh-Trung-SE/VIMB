import Container from "@src/components/Container";
import GlobalCBI from "@src/components/CostSecondPassport/elements/GlobalCBI";
import OtherExpenses from "@src/components/CostSecondPassport/elements/OtherExpenses";

const CostSecondPassport = () => {
    return (
        <Container>
            <GlobalCBI/>
            <OtherExpenses/>
        </Container>
    );
};

export default CostSecondPassport;