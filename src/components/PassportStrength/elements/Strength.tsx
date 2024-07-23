import Container from "@src/components/Container";

const Strength = () => {
    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Passport strength facts</h1>
            <div className="py-10">
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="space-y-2">
                        <p>
                            Many poor and developing countries have low passport strength.
                        </p>
                        <p>
                            When requesting a visa to developed countries, many will be required to submit various
                            forms
                            of official documentation and/or be interviewed
                        </p>
                        <p>
                            Unfortunately with a Vietnamese passport, regardless of your wealth, you will not be
                            guaranteed
                            to be granted a visa.

                        </p>
                        <p>Although you may need to apply again, and sometimes again to obtain your visa, such time
                            and
                            effort lost, should never have been wasted.
                        </p>
                        <p>
                            The worst headaches are when all group travel members are granted visas except one or
                            two people.
                        </p>
                    </div>
                    <div className="h-72">
                        <img
                            src="/images/application-denied.jpg"
                            className="h-full w-full object-cover"
                        />
                    </div>

                </div>
                <div className="pt-5 space-y-5">
                    <p>If you have a secondary passport, that has a stronger passport strength, you can bypass the
                        security and document checks required.</p>
                    <img
                        src="/images/passport-grant.png"
                        className="h-full w-full object-cover"
                        alt="passport-grant"
                    />
                </div>
            </div>
        </div>
    );
};

export default Strength;