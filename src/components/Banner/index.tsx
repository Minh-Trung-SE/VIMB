import Container from "@src/components/Container";
import React from 'react';

const Banner = () => {
    return (
        <div
            style={
                {
                    backgroundImage: "url(/background/VIMB-Vanuatu-Citizenship.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    aspectRatio: "16/9",
                    width: "100%",
                    maxHeight: 532
                }
            }
        >
            <Container>

            </Container>
        </div>
    );
};

export default Banner;