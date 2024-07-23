import Container from "@src/components/Container";

const GlobalCBI = () => {
    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Global CBI glance</h1>
            <div>
                <br/>
                <p>To obtain another passport as of 2024, there are many Citizenship By Investment (CBI) programs
                    available. As with all CBI programs, only government authorised agents can process applications. Do
                    not risk “cheaper” intermediaries who will add subsequent fees to their quoted prices. </p>
                <br/>
                <p>The minimum amount currently required for a non-refundable investment, without agent service fees,
                    are approximately:
                </p>

                <br/>
                <table className="w-full border border-collapse">
                    <thead className="bg-slate-500 text-white text-left ">
                    <tr className="border">
                        <th className="p-2 border">Time</th>
                        <th className="p-2 border">Official CBI Cost</th>
                        <th className="p-2 border">Time until citizenship granted</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border">
                        <td className="p-2 border">USA</td>
                        <td className="p-2 border">$1 million USD</td>
                        <td className="p-2 border">3 years</td>
                    </tr>

                    <tr className="border">
                        <td className="p-2 border">Australia (stopped January 2024)</td>
                        <td className="p-2 border">$2.5 - 5 million AUD</td>
                        <td className="p-2 border">5 years</td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Austria</td>
                        <td className="p-2 border">€2 million EUR</td>
                        <td className="p-2 border">2 -3 years</td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Cambodia</td>
                        <td className="p-2 border">$245,000 USD</td>
                        <td className="p-2 border">3 – 4 months</td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Caribbean Republics</td>
                        <td className="p-2 border">$200.000 USD</td>
                        <td className="p-2 border">6 months</td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Cyprus (stopped June 2024)</td>
                        <td className="p-2 border">€2.000.000 EUR</td>
                        <td className="p-2 border">3 years</td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Spain / Portugal / Malta</td>
                        <td className="p-2 border">€500.000 EUR</td>
                        <td className="p-2 border">Residency only, <b>not</b> citizenship</td>
                    </tr>

                    </tbody>
                </table>
                <br/>
                <p>
                    When applying for the CBI programs of developed countries, your investment capital must come from a
                    clear income source. You must present legitimate business tax receipts over the last 5 years, or
                    your application will not be accepted. Regardless of how much money or assets you have.
                </p>
                <br/>
                <p>
                    With Vanuatu’s CIIP program, after 5 years your $50,000 shares in the program is redeemable for
                    cash. No other program offers this. Every CBI program rises in price over time and due to
                    popularity. Vanuatu’s CIIP program is currently the cheapest and fastest in the world, but limited
                    to 1000 families.
                </p>
            </div>

        </div>
    );
};

export default GlobalCBI;