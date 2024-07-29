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
            className="relative -z-40"
        >
            <h1 className="absolute top-1/4 w-full text-white text-center text-4xl font-medium">About VIMB.VN</h1>
        </div>
    );
};

export default Banner;