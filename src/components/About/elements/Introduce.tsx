import React from 'react';
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";
import displayMessage from "@src/ultils/language";

const Introduce = () => {
    const language = getServerLanguage()
    return (
        <div className="space-y-5">
            <div className="flex flex-wrap-reverse sm:flex-nowrap">
                <Image
                    className="block w-full sm:w-3/5"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/background/VIMB-About-US.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />

                <div className="grow overflow-hidden flex flex-col space-y-5">
                    <Image
                        className="block w-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/logo/original.png"
                        alt="VIMB Viet Nam"
                    />
                    <div className="grow p-5 text-lg bg-primary">
                        <p className="text-white">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB kể từ năm 2017 đã là một trong những công ty dịch vụ chuyên nghiệp hoạt động quốc tế nổi bật nhất của Vanuatu. Có trụ sở chính tại Vanuatu, VIMB hoạt động tại Port Vila, Singapore, Dubai, London và bây giờ là Việt Nam.",
                                        en: "VIMB has since 2017 been one of Vanuatu’s most prominent internationally operating professional services companies. Headquartered in Vanuatu, VIMB operates in Port Vila, Singapore, Dubai, London and now Vietnam."
                                    },
                                    language
                                )
                            }
                        </p>
                        <br/>
                        <p className="text-white">
                            {
                                displayMessage(
                                    {
                                        vi: "Văn phòng Quốc tịch Vanuatu đã chỉ định VIMB làm đại lý cho chương trình Quốc tịch theo diện Đầu tư (CBI) của Vanuatu. Hiện chúng tôi đã mở rộng sang châu Á để đảm bảo nguồn vốn đầu tư nước ngoài thông qua chương trình CBI.",
                                        en: "The Vanuatu Citizenship Office has designated VIMB as their agent for Vanuatu’s Citizenship By Investment (CBI) program. We have now expanded to Asia to secure foreign investment funding via its CBI program."
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>

                </div>

            </div>

            <div className="flex flex-wrap space-y-5">
                <div className="w-full sm:w-1/2 sm:py-10  text-lg pr-5">
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "Vanuatu’s CBI program is named Capital Investment Immigration Plan (CIIP).",
                                    vi: "Chương trình CBI của Vanuatu có tên là Kế hoạch Nhập cư Đầu tư Vốn (CIIP)."
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
                                    en: "The foreign funds raised through this program is to enhance Vanuatu’s biofuels industry to becoming carbon zero by 2030.",
                                    vi: "Nguồn vốn nước ngoài huy động được thông qua chương trình này nhằm mục đích nâng cao ngành công nghiệp nhiên liệu sinh học của Vanuatu trở thành ngành không có carbon vào năm 2030."
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
                                    en: "This allows Vietnam’s upper middle class expand their travel and business reach in the world with less hassle through Vanuatu’s passport.",
                                    vi: "Điều này cho phép tầng lớp trung lưu, thượng lưu của Việt Nam mở rộng phạm vi đi lại và kinh doanh trên thế giới với ít rắc rối hơn nhờ hộ chiếu Vanuatu."
                                },
                                language
                            )
                        }
                    </p>
                </div>

                <Image
                    className="block w-full sm:w-1/2 h-80 object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/8.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />
            </div>
        </div>
    );
};

export default Introduce;