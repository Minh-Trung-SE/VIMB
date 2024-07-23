const AdditionalServices = () => {

    return (
        <div className="py-10 space-y-5">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">
                Additional Services
            </h1>
            <p>
                After you have acquired your citizenship, if you do not have the time to visit Vanuatu to learn the procedures and wait for paperwork, there are additional services we can provide to you.
            </p>

            <table className="w-full border">

                <tbody>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        Vanuatu Government Due diligence checks:
                    </td>
                    <td className="align-top p-2 border text-sm">
                        1 Week
                    </td>
                </tr>
                <tr>
                    <td className="align-top p-2 border text-sm">
                        Settlement of CIP investment fees.
                    </td>
                    <td className="align-top p-2 border text-sm">
                        1 Week
                    </td>
                </tr>
                <tr>
                    <td className="align-top p-2 border text-sm">
                        Citizenship and share certificates issued
                    </td>
                    <td className="align-top p-2 border text-sm">
                        Within 2 Months
                    </td>
                </tr>
                </tbody>
            </table>

            <p>Read more about Vanuatu and the CIIP program at:</p>
            <a
                href="https://www.imidaily.com/sponsored-feature/vanuatu-launches-investment-linked-ciip-cno-future-fund-citizenship-program/"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                Vanuatu Launches Investment-Linked “CIIP-CNO Future Fund” Citizenship Program
            </a>
            <br/>
            <a
                href="https://www.bangkokpost.com/thailand/pr/2674589/vimb-and-harvey-law-group-launch-sustainable-citizenship-program"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                VIMB and Harvey Law Group Launch Sustainable Citizenship Program
            </a>
            <br/>
            <a
                href="https://markets.businessinsider.com/news/stocks/vanuatu-s-new-passport-program-drives-2030-carbon-net-zero-goals-1033466482"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                Vanuatu New Passport Program Drives 2030 Carbon Net Zero Goals
            </a>
        </div>
    );
};

export default AdditionalServices;