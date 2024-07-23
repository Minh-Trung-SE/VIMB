import Copyright from "@src/components/Footer/elements/Copyright";
import Main from "@src/components/Footer/elements/Main";
import React from 'react';


const Footer = () => {
    return (
        <footer
            className="bg-primary"
        >
            <Main className="text-white"/>
            <Copyright/>
        </footer>
    );
};

export default Footer;