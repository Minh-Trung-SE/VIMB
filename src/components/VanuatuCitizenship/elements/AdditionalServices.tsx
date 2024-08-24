import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";

const AdditionalServices = () => {

    const language = getServerLanguage()

    return (
        <div className="py-10 space-y-5">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">
                Additional Services
            </h1>
            <p>
                {
                    displayMessage(
                        {
                            vi: "Sau khi bạn có quốc tịch, nếu bạn không có thời gian đến Vanuatu để tìm hiểu các thủ tục và chờ đợi giấy tờ, chúng tôi có thể cung cấp các dịch vụ bổ sung cho bạn.",
                            en: "After you have acquired your citizenship, if you do not have the time to visit Vanuatu to learn the procedures and wait for paperwork, there are additional services we can provide to you."
                        },
                        language
                    )
                }

            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-10">
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/12.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-center text-sm text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Cấp phép & Giấy phép",
                                        en: "Licensing & Permits"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-center text-xs text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Khởi nghiệp tại Vanuatu cùng chúng tôi",
                                        en: "Start your business in Vanuatu with us"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/12.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-center text-sm text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Ngân hàng và Tài chính",
                                        en: "Banking and Finance"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-center text-xs text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Ngân hàng quốc tế tại quốc gia miễn thuế",
                                        en: "International Banking in a Tax-Free country"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/12.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-center text-sm text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Bất động sản",
                                        en: "Real Estate"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-center text-xs text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Sở hữu đất đai tại thiên đường",
                                        en: "Own a land in the paradise"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/12.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-center text-sm text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Quy trình Xin Quốc tịch/Cư trú",
                                        en: "Citizenship/Residency Application Process"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className="text-center text-xs text-gray-500 font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Biến Vanuatu thành ngôi nhà thứ hai của bạn",
                                        en: "Make Vanuatu your second home"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>

            </div>

            <div className="space-y-1">
                <p className="font-medium">
                    {
                        displayMessage(
                            {
                                vi: "VIMB có các dịch vụ liên minh tại Vanuatu để hỗ trợ việc mở rộng của bạn tại Vanuatu",
                                en: "VIMB has allied services within Vanuatu, to assist your expansion in Vanuatu:"
                            },
                            language
                        )
                    }
                    </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ iCount đáp ứng mọi yêu cầu về kế toán và ngân hàng của bạn.",
                                en: "✅ iCount for all your accounting and banking requirements."
                            },
                            language
                        )
                    }
                    </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ iproperty.vu đáp ứng mọi nhu cầu về bất động sản và xây dựng của bạn.",
                                en: "✅ iproperty.vu for all your real estate and construction needs."
                            },
                            language
                        )
                    }
                </p>
            </div>

            <div className="space-y-1">
                <p className="font-medium">
                    {
                        displayMessage(
                            {
                                vi: "Chúng tôi thậm chí có thể hỗ trợ thay mặt bạn để có được:",
                                en: "We can even facilitate on your behalf, to acquire:"
                            },
                            language
                        )
                    }
                    </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ Giấy phép lái xe.",
                                en: "✅ Driving licences."
                            },
                            language
                        )
                    }
                </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ CMND.",
                                en: "✅ National IDs."
                            },
                            language
                        )
                    }
                </p>

                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ Giấy phép cư trú.",
                                en: "✅ Residency permits."
                            },
                            language
                        )
                    }
                </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ Mở tài khoản ngân hàng.",
                                en: "✅ Opening bank accounts."
                            },
                            language
                        )
                    }
                </p>
                <p>
                    {
                        displayMessage(
                            {
                                vi: "✅ Đăng ký công ty.",
                                en: "✅ Registering companies."
                            },
                            language
                        )
                    }
                </p>

            </div>

        </div>
    );
};

export default AdditionalServices;