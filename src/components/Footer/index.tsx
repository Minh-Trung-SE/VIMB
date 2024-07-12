import Copyright from "@src/components/Footer/elements/Copyright";
import Main from "@src/components/Footer/elements/Main";
import React from 'react';


const Footer = () => {
    return (
        <footer
            style={
                {
                    backgroundImage: "url('/background/footer.svg')",
                }
            }
        >
            <Main/>
            <Copyright/>
        </footer>
    );
};

export default Footer;