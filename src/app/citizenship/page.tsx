import Container from "@src/components/Container";
import Benefits from "@src/components/VanuatuCitizenship/elements/Benefits";
import ProcessVanuatuPassport from "@src/components/VanuatuCitizenship/elements/ProcessVanuatuPassport";
import AdditionalServices from "@src/components/VanuatuCitizenship/elements/AdditionalServices";

export default function Home() {
    return (
        <Container>
            <Benefits/>
            <ProcessVanuatuPassport/>
            <AdditionalServices/>
        </Container>
    );
}
