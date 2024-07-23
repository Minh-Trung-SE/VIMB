import React from 'react';
import Image from "next/image";

const Information = () => {
    return (
        <div className="flex space-x-10 bg-primary">
            <div className="grow flex space-x-10 p-5 h-80">
                <div className="text-white h-full w-80 p-2 aspect-square border-gray-500 border-4">
                    <br/>
                    <p>Over 40 legal and migration firms, authorised as sub-agents of VIMB in Vietnam.</p>
                    <br/>
                    <p>Always check their credentials before proceeding, OR book a consultation directly via our
                        website.</p>
                </div>
                <div className="text-white h-full w-80 p-2 aspect-square border-transparent border-4">
                    <br/>
                    <p>VIMB has a strong history of success.</p>
                    <br/>
                    <p>We are confident with our services that we make this promise:</p>
                    <br/>
                    <p>All service fees are refunded if your CIIP application fails!</p>
                </div>
            </div>
            <div className="h-80">
                <div className="relative h-full w-72">
                    <Image
                        fill={true}
                        className=" bg-center object-cover"
                        src="/images/vanuatu-citizenship-master-agent.jpg"
                        alt="VIMB-Vanuatu-Citizenship"
                    />
                </div>


            </div>

        </div>
    );
};

export default Information;