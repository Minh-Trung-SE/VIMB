import Container from "@src/components/Container";
import Image from "next/image";

const Bypassing = () => {
    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Bypassing document and interview
                requests for travel</h1>

            <div className="flex py-10 space-x-5">
                <div className="grow space-y-2">
                    <p>
                        The freedom, rights and consular protection are obvious reasons to travel under a stronger
                        passport. To those who conduct business: convenience and efficiency are prized.
                    </p>
                    <p>
                        With a Vanuatu passport, you can simply request a visa online with your Vanuatu passport
                        details. You will be granted the visa within a few working days.
                    </p>
                    <b>No paperwork submissions, no interviews. No time wasted. No more hassles.</b>

                    <p>
                        With a Vanuatu passport, countries like Singapore and Hong Kong do not require a visa; Australia
                        only requires an easy online evisa for multiple entries.
                    </p>

                </div>
                <img
                    className="h-48 w-auto block"
                    alt="vanuatu-passport"
                    src="/images/vanuatu-passport.webp"
                />

            </div>

        </div>
    );
};

export default Bypassing;