import Introduce from "@src/components/About/elements/Introduce";
import QuickFacts from "@src/components/About/elements/QuickFacts";
import Container from "@src/components/Container";
import React from 'react';
import Information from "@src/components/About/elements/Information";
import ActsAs from "@src/components/About/elements/ActsAs";

const About = () => {

    return (
        <Container className="py-10 space-y-10">
            <Introduce/>
            <QuickFacts/>
            <Information/>
            <ActsAs/>
        </Container>
    );
};

export default About;