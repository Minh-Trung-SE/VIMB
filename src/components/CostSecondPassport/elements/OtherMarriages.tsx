import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";

const OtherMarriages = () => {
    const language = getServerLanguage()

    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">The OTHER additional costs of fake
                marriages</h1>
            <div>
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "The most commonly known methods to obtain such citizenships although superficially cheaper, but illegal, are fake marriages. Besides the costly financial commitment, there are various other resources you must pay over time to obtain this citizenship, before a passport is granted:",
                                vi: "Các phương pháp phổ biến nhất để có được quyền công dân. Bạn phải bỏ ra chi phí rất lớn như đầu tư hoặc rẻ hơn nhưng lại bất hợp pháp đó là kết hôn giả. Bên cạnh cam kết tài chính tốn kém, còn có nhiều nguồn lực khác mà bạn phải trả theo thời gian để có được quốc tịch trước khi được cấp hộ chiếu:"
                            },
                            language
                        )
                    }
                </p>
                <br/>
                <div className="pl-5">
                    <li className="list-disc">
                        {
                            displayMessage(
                                {
                                    en: "Time spent living in the country",
                                    vi: "Thời gian sống ở trong nước "
                                },
                                language
                            )
                        }
                    </li>
                    <li className="list-disc">
                        {
                            displayMessage(
                                {
                                    en: "Relationships and Social Isolation",
                                    vi: "Các mối quan hệ và sự cô lập xã hội"
                                },
                                language
                            )
                        }

                    </li>
                    <li className="list-disc">
                        {
                            displayMessage(
                                {
                                    en: "Reduction in standards",
                                    vi: "Giảm tiêu chuẩn cuộc sống"
                                },
                                language
                            )
                        }

                    </li>
                    <li className="list-disc">
                        {
                            displayMessage(
                                {
                                    en: "Stress and blackmail",
                                    vi: "Căng thẳng và tống tiền"
                                },
                                language
                            )
                        }

                    </li>
                    <li className="list-disc">
                        {
                            displayMessage(
                                {
                                    en: "Other living expenses",
                                    vi: "Chi phí sinh hoạt khác"
                                },
                                language
                            )
                        }

                    </li>
                </div>

                <br/>
                <table className="w-full border border-collapse">
                    <thead className="bg-slate-500 text-white text-left ">
                    <tr className="border">
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Expenses",
                                        vi: "Chi phí"
                                    },
                                    language
                                )
                            }
                        </th>
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Range",
                                        vi: "Phạm vi"
                                    },
                                    language
                                )
                            }
                        </th>
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Annual cost",
                                        vi: "Chi phí hàng năm"
                                    },
                                    language
                                )
                            }
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Rent",
                                        vi: "Thuê nhà"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">$200 - $500</td>
                        <td className="p-2 border">$10.000 - $25.000</td>
                    </tr>

                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Food",
                                        vi: "Ăn uống"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">$100 - $500</td>
                        <td className="p-2 border">$5000 - $25.000</td>

                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Other living expenses",
                                        vi: "Chi phí sinh hoạt khác"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">$100 - $500</td>
                        <td className="p-2 border">$5000 - $25.000</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "Do not take such a costly and risky path. Obtain a legal citizenship for your family of 4 then use it legally to travel, study and work in higher tier countries. Obtain an additional inheritable citizenship for your family now.",
                                vi: "Đừng đi theo con đường tốn kém và nguy hiểm như vậy. Có được quyền công dân hợp pháp cho gia đình 4 người của bạn sau đó sử dụng nó một cách hợp pháp để đi du lịch, học tập và làm việc ở các quốc gia cấp cao hơn. Hãy sở hữu thêm quyền công dân được thừa kế cho gia đình bạn ngay bây giờ."
                            },
                            language
                        )
                    }
                </p>
            </div>

        </div>
    );
};

export default OtherMarriages;