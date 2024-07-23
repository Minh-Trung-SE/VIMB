import React from 'react';

const Introduce = () => {
    return (
        <>
            <div className="flex">
                <img
                    className="block w-3/5"
                    src="/background/VIMB-Vanuatu-Citizenship.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />

                <div className="flex flex-col space-y-5 grow">
                    <img
                        className="block w-11/12 mx-auto h-auto"
                        src="/logo/original.png"
                        alt="VIMB-Vanuatu-Citizenship"
                    />
                    <div className="grow p-5 text-lg bg-primary">
                        <p className="text-white">
                            VIMB has since 2017 been one of Vanuatu’s most prominent internationally operating
                            professional services companies. Headquartered in Vanuatu, VIMB operates in Port Vila,
                            Singapore, Dubai, London and now Vietnam.
                        </p>
                        <br/>
                        <p className="text-white">
                            The Vanuatu Citizenship Office has designated VIMB as their agent for Vanuatu’s Citizenship
                            By Investment (CBI) program. We have now expanded to Asia to secure foreign investment
                            funding via its CBI program.
                        </p>
                    </div>

                </div>

            </div>

            <div className="flex">
                <div className="w-1/2 py-10  text-lg pr-5">
                    <p>
                        Vanuatu’s CBI program is named Capital Investment Immigration Plan (CIIP).
                    </p>
                    <br/>
                    <p>
                        The foreign funds raised through this program is to enhance Vanuatu’s biofuels industry to
                        becoming carbon
                        zero by 2030.
                    </p>
                    <br/>
                    <p>
                        This allows Vietnam’s upper middle class expand their travel and business reach in the world
                        with less hassle through Vanuatu’s passport.
                    </p>
                </div>
                <img
                    className="block w-1/2 h-80 object-cover"
                    src="/images/8.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />

            </div>
        </>
    );
};

export default Introduce;