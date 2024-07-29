import React from 'react';
import Image from "next/image";
import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";

const Information = () => {
    const language = getServerLanguage()
    return (

        <div className="flex flex-wrap gap-y-2 bg-primary">
            <div className="w-full sm:w-1/2 md:w-80 text-white p-2 m-2 border-gray-500 border-4">
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "Over 40 legal and migration firms, authorised as sub-agents of VIMB in Vietnam.",
                                vi: "Hơn 40 công ty pháp lý và di trú được ủy quyền làm đại lý cấp dưới của VIMB tại Việt Nam."
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
                                en: "Always check their credentials before proceeding, OR book a consultation directly via our website.",
                                vi: "Luôn kiểm tra thông tin đăng nhập của họ trước khi tiếp tục HOẶC đăng ký tư vấn trực tiếp qua trang web của chúng tôi."
                            },
                            language
                        )
                    }
                </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-80 text-white p-2 m-2 border-transparent border-4">
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "VIMB has a strong history of success.",
                                vi: "VIMB có bề dày thành công."
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
                                en: "We are confident with our services that we make this promise:",
                                vi: "Chúng tôi tự tin với dịch vụ của mình mà chúng tôi thực hiện lời hứa này:"
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
                                en: "All service fees are refunded if your CIIP application fails!",
                                vi: "Tất cả phí dịch vụ sẽ được hoàn lại nếu ứng dụng CIIP của bạn không thành công."
                            },
                            language
                        )
                    }
                    </p>
            </div>

            <Image
                className="block w-full md:ml-auto md:w-80 h-80 object-cover"
                width={0}
                height={0}
                sizes="100vw"
                src="/images/vanuatu-citizenship-master-agent.jpg"
                alt="VIMB-Vanuatu-Citizenship"
            />

        </div>
    );
};

export default Information;