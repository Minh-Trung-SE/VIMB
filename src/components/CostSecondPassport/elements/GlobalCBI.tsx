import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const GlobalCBI = () => {
    const language = getServerLanguage()
    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Global CBI glance</h1>
            <div>
                <br/>
                {
                    displayMessage(
                        {
                            vi: (
                                <p>
                                    Để có được hộ chiếu khác kể từ năm 2024, có rất nhiều chương trình Nhập tịch theo
                                    diện đầu tư (CBI).
                                    <b><i>Như với tất cả các chương trình CBI, chỉ những đại lý được chính phủ ủy quyền
                                        mới có thể xử lý đơn đăng ký.</i></b>
                                    Đừng mạo hiểm với những người trung gian “rẻ hơn”, những người sẽ cộng thêm các
                                    khoản phí tiếp theo vào giá niêm yết của họ.
                                </p>
                            ),
                            en: (
                                <p>
                                    To obtain another passport as of 2024, there are many Citizenship By Investment
                                    (CBI) programs available.
                                    <b><i>As with all CBI programs, only government authorised agents can process
                                        applications.</i></b>
                                    Do not risk “cheaper” intermediaries who will add subsequent fees to their quoted
                                    prices.
                                </p>
                            )
                        },
                        language
                    )
                }
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "Số tiền tối thiểu hiện được yêu cầu cho khoản đầu tư không hoàn lại, không tính phí dịch vụ đại lý, là khoảng:",
                                en: "The minimum amount currently required for a non-refundable investment, without agent service fees, are approximately:"
                            },
                            language
                        )
                    }
                </p>

                <br/>
                <table className="w-full border border-collapse">
                    <thead className="bg-slate-500 text-white text-left ">
                    <tr className="border">
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Country",
                                        vi: "Quốc gia"
                                    },
                                    language
                                )
                            }
                        </th>
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Official CBI Cost",
                                        vi: "Giá niêm yết từ CBI"
                                    },
                                    language
                                )
                            }
                        </th>
                        <th className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Time until citizenship granted",
                                        vi: "Thời gian cho đến khi được cấp quyền công dân"
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
                                        en: "USA",
                                        vi: "Hoa kỳ"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "1 million $",
                                        vi: "1 triệu đô"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "3 years",
                                        vi: "3 năm"
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>

                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Australia (stopped January 2024)",
                                        vi: "Úc (ngưng tháng 1 năm 2024)"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            $2.5 - 5 million AUD
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "5 years",
                                        vi: "5 năm"
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Austria",
                                        vi: "Áo"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        vi: "€2 triệu EUR",
                                        en: "€2 million EUR"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "2 - 3 years",
                                        vi: "2- 3 năm"
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Cambodia",
                                        vi: "Campuchia"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "$245,000 USD",
                                        vi: "$245,000 USD"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "3 – 4 months",
                                        vi: "3 - 4 tháng"
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Caribbean Republics",
                                        vi: "Cộng hòa Caribbean (giá tăng gấp đôi vào tháng 7 năm 2024)"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "$200.000 USD",
                                        vi: "$200.000 USD"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "6 months",
                                        vi: "6 tháng"
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Cyprus (stopped June 2024)",
                                        vi: "Síp (ngưng tháng 6 năm 2024)"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            €2.000.000 EUR
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "3 years",
                                        vi: "3 năm"
                                    },
                                    language
                                )
                            }
                            3 years
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: "Spain / Portugal / Malta",
                                        vi: "Tây Ban Nha / Bồ Đào Nha / Malta"
                                    },
                                    language
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            €500.000 EUR
                        </td>
                        <td className="p-2 border">
                            {
                                displayMessage(
                                    {
                                        en: <p> Residency only, <b>not</b> citizenship</p>,
                                        vi: <p> Chỉ quyền cư trú, <b>Không phải</b> quyền công dân</p>
                                    },
                                    language
                                )
                            }
                        </td>
                    </tr>

                    </tbody>
                </table>
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "When applying for the CBI programs of developed countries, your investment capital must come from a clear income source. You must present legitimate business tax receipts over the last 5 years, or your application will not be accepted. Regardless of how much money or assets you have.",
                                vi: "Khi đăng ký các chương trình CBI của các nước phát triển, vốn đầu tư của bạn phải đến từ nguồn thu nhập rõ ràng. Bạn phải xuất trình biên lai thuế kinh doanh hợp pháp trong 5 năm qua, nếu không đơn đăng ký của bạn sẽ không được chấp nhận. Bất kể bạn có bao nhiêu tiền hay tài sản."
                            },
                            language
                        )
                    }
                </p>
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "With Vanuatu’s CIIP program, after 5 years your $50,000 shares in the program is redeemable for cash. No other program offers this. Every CBI program rises in price over time and due to popularity. Vanuatu’s CIIP program is currently the cheapest and fastest in the world, but limited to 1000 families.",
                                vi: "Với chương trình CIIP của Vanuatu, sau 5 năm, số cổ phiếu trị giá 50.000 USD của bạn trong chương trình có thể đổi thành tiền mặt. Không có chương trình khác cung cấp điều này. Mọi chương trình CBI đều tăng giá theo thời gian và do mức độ phổ biến. Chương trình CIIP của Vanuatu hiện rẻ nhất và nhanh nhất trên thế giới nhưng chỉ giới hạn ở 1000 gia đình."
                            },
                            language
                        )
                    }
                </p>
            </div>

        </div>
    );
};

export default GlobalCBI;