import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import React from 'react';

const FinancialAndCivic = () => {
    const language = getServerLanguage();

    return (
        <div className="py-10 space-y-5">
            <h2 className="py-2 px-5 font-medium text-2xl bg-primary text-white">
                {
                    displayMessage(
                        {
                            en: "Financial and Civic requirements of the Vanuatu passport / citizenship:",
                            vi: "Yêu cầu về tài chính và công dân của hộ chiếu/quyền công dân Vanuatu:"
                        },
                        language
                    )
                }
            </h2>

            <div className="space-y-2">
                <h3 className="font-medium text-lg">
                    {
                        displayMessage(
                            {
                                en: "Financially benefits:",
                                vi: "Yêu cầu về tài chính:"
                            },
                            language
                        )
                    }
                </h3>

                <ul className="grid grid-cols-4 gap-2">
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% income tax",
                                        vi: "Thuế thu nhập 0% "
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% inheritance tax",
                                        vi: "Thuế thừa kế 0%"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% international business tax",
                                        vi: "Thuế kinh doanh quốc tế 0%"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "No CFC Rules",
                                        vi: "Không có quy tắc CFC"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% capital gains tax",
                                        vi: "Thuế thu nhập vốn 0%"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% gift tax",
                                        vi: "Thuế tặng cho 0%"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "0% Crypto ban or tax",
                                        vi: "Không Cấm hoặc đánh thuế tiền crypto 0%"
                                    },
                                    language
                                )
                            }
                        </p>

                    </li>
                    <li className="flex items-center space-x-2 rounded p-2 border">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5 fill-green-500">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>
                            {
                                displayMessage(
                                    {
                                        en: "12.5% local VAT tax",
                                        vi: "Thuế VAT địa phương 12,5%"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                </ul>
                <p>
                    {
                        displayMessage(
                            {
                                en: "There are no real estate, wealth, capital gains, inheritance, gift or international business taxes. Vanuatu and its banks will not disclose your financial or assets.",
                                vi: "Không có thuế bất động sản, tài sản, thu nhập từ vốn, thừa kế, quà tặng hoặc thuế kinh doanh quốc tế. Vanuatu và các ngân hàng của nước này sẽ không tiết lộ tài chính hoặc tài sản của bạn."
                            },
                            language
                        )
                    }
                </p>
            </div>

            <div className="space-y-2">
                <h3 className="font-medium text-lg">
                    {
                        displayMessage(
                            {
                                en: "Civic duty:",
                                vi: "Nghĩa vụ công dân:"
                            },
                            language
                        )
                    }
                </h3>

                <ul className="grid grid-cols-3 gap-2">
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Required residence?",
                                        vi: "Yêu cầu cư trú?"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "No",
                                        vi: "Không"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Military service?",
                                        vi: "Nghĩa vụ quân sự?"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "No",
                                        vi: "Không"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Voting rights?",
                                        vi: "Quyền bỏ phiếu?"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "Yes",
                                        vi: "Có"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Can participate or run for office?",
                                        vi: "Có thể tham gia hoặc ứng cử?"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "Yes",
                                        vi: "Có"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Open business / company?",
                                        vi: "Mở doanh nghiệp/công ty"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "Yes",
                                        vi: "Có"
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>
                    <li className="p-2 rounded border">
                        <p className="font-medium text-opacity-50">
                            {
                                displayMessage(
                                    {
                                        en: "Pay tax on international company?",
                                        vi: "Nộp thuế cho công ty quốc tế"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-sm">
                            {
                                displayMessage(
                                    {
                                        en: "NO. As long as income is not made domestically, you pay zero tax?",
                                        vi: "KHÔNG. Miễn là thu nhập không được tạo ra trong nước, bạn không phải trả thuế."
                                    },
                                    language
                                )
                            }
                        </p>
                    </li>

                </ul>
            </div>

        </div>
    );
};


export default FinancialAndCivic;