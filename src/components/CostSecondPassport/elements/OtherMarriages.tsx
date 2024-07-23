import Container from "@src/components/Container";

const OtherMarriages = () => {
    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">The OTHER additional costs of fake
                marriages</h1>
            <div>
                <br/>
                <p>
                    The most commonly known methods to obtain such citizenships although superficially cheaper, but
                    illegal, are fake marriages.
                    Besides the costly financial commitment, there are various other resources you must pay over time to
                    obtain this citizenship, before a passport is granted:
                </p>
               <ul>
                   <li>
                       Time spent living in the country
                   </li>
                   <li>
                       Relationships and Social Isolation
                   </li>
                   <li>
                       Reduction in standards
                   </li>
                   <li>
                       Stress and blackmail
                   </li>
                   <li>
                       Other living expenses
                   </li>
               </ul>

                <br/>
                <table className="w-full border border-collapse">
                    <thead className="bg-slate-500 text-white text-left ">
                    <tr className="border">
                        <th className="p-2 border">Expenses</th>
                        <th className="p-2 border">Range </th>
                        <th className="p-2 border">Annual cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border">
                        <td className="p-2 border">Rent</td>
                        <td className="p-2 border">$200 - $500</td>
                        <td className="p-2 border">$10.000 - $25.000</td>
                    </tr>

                    <tr className="border">
                        <td className="p-2 border">Food</td>
                        <td className="p-2 border">$100 - $500</td>
                        <td className="p-2 border">$5000 - $25.000</td>

                    </tr>
                    <tr className="border">
                        <td className="p-2 border">Other</td>
                        <td className="p-2 border">$100 - $500</td>
                        <td className="p-2 border">$5000 - $25.000</td>

                    </tr>

                    </tbody>
                </table>
                <br/>
                <p>
                    Do not take such a costly and risky path.
                    Obtain a legal citizenship for your family of 4 then use it legally to travel, study and work in higher tier countries.
                    Obtain an additional inheritable citizenship for your family now.
                </p>
            </div>

        </div>
    );
};

export default OtherMarriages;