import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";

const OurService = () => {
    const language = getServerLanguage()

    const news = [
        {
            title: "Why Vanuatu’s Investment-Linked Citizenship Program Is the Best Option for a Second Passport",
            link: "https://vimb.vu/blog/why-vanuatus-investment-linked-citizenship-program-is-the-best-option-for-a-second-passport",
            image: "/upload/shutterstock_232728022.jpg",
            time: "August 7, 2024",
        },
        {
            title: "Vanuatu’s Investment-Linked Citizenship Program and Coconut Oil (CNO) Future Fund",
            link: "https://vimb.vu/blog/vanuatus-investment-linked-citizenship-program-and-coconut-oil-cno-future-fund",
            image: "/upload/shutterstock_149303819.jpg",
            time: "August 7, 2024",
        },
        {
            title: "China’s Growing Influence in Vanuatu: Aid, Investment, and Strategic Interests",
            link: "https://vimb.vu/blog/chinas-growing-influence-in-vanuatu-aid-investment-and-strategic-interests/",
            image: "/upload/image-visualizing-Chinas-Growing-Influence-in-the-small-Pacific-island-nation-of-Vanuatu.jpeg",
            time: "August 7, 2024"
        },
        {
            title: "Lifting Dreams: How Ajah Pritchard Lolo Became Vanuatu’s Olympic Weightlifting Icon",
            link: "https://vimb.vu/blog/lifting-dreams-how-ajah-pritchard-lolo-became-vanuatus-olympic-weightlifting-icon/",
            image: "/upload/Lifting-Dreams.-How-Ajah-Pritchard-Lolo-Became-Vanuatus-Olympic-Weightlifting-Icon.jpg",
            time: "August 7, 2024"
        },
    ]

    return (
        <div className="space-y-10">
            <h2 className="font-medium text-3xl">
                {
                    displayMessage(
                        {
                            vi: "Our Service",
                            en: "Dịch vụ của chúng tôi"
                        },
                        language
                    )
                }
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="aspect-video relative">
                    <Image
                        className="z-0 absolute w-full h-full rounded"
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/images/vimb-vanuatu-citizenship-by-investment.jpg"
                        alt="vimb-vanuatu-citizenship-by-investment"
                    />
                    <div className="absolute flex flex-col p-5 space-y-2 justify-end h-full w-full bg-primary/20">
                        <h2 className="text-white font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Nhập Tịch Vanuatu – Dịch vụ trọn gói",
                                        en: "Vanuatu Citizenship – End to End Service"
                                    },
                                    language
                                )
                            }
                        </h2>
                        <p className="text-white text-sm">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB là Đại lý được Chính phủ chỉ định đầu tiên toàn cầu hóa chương trình CBI đầu tiên của Vanuatu vào năm 2017, DSP. Công ty tiếp tục là đơn vị dẫn đầu trong việc cung cấp dịch vụ trọn gói, liền mạch cho khách hàng. Điều này có nghĩa là bạn không làm việc thông qua BẤT KỲ bên trung gian nào – chỉ có các đại lý được thẩm định, có uy tín và được ủy quyền.",
                                        en: "VIMB was the first Government Designated Agent to globalise Vanuatu’s first CBI program in 2017, DSP. It continues to be the leader in providing seamless, end-to-end service to its clients. This means you are not working through ANY intermediaries – only vetted, reputable and authorised sub agents."
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="aspect-video relative">
                    <Image
                        className="z-0 absolute w-full h-full rounded"
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/images/vimb-vanuatu-citizenship-by-investment.jpg"
                        alt="vimb-vanuatu-citizenship-by-investment"
                    />
                    <div className="absolute flex flex-col p-5 space-y-2 justify-end h-full w-full bg-primary/20">
                        <h2 className="text-white font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Dịch vụ sau khi nhập tịch",
                                        en: "Post-Citizenship Services"
                                    },
                                    language
                                )
                            }
                        </h2>
                        <p className="text-white text-sm">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB có trụ sở chính tại Port Villa, Vanuatu, có đội ngũ chuyên gia cung cấp dịch vụ đầy đủ, cung cấp nguồn lực vô song để hỗ trợ các kế hoạch tương lai của bạn với tư cách là công dân Vanuatu. Các dịch vụ đó bao gồm:",
                                        en: "VIMB headquartered in Port Villa, Vanuatu is staffed by a full-service professional team who provide an unrivalled depth of resources for supporting your future plans as a Vanuatu citizen. Such services include:"
                                    },
                                    language
                                )
                            }
                        </p>

                            {
                                displayMessage(
                                    {
                                        vi: (
                                          <ul className="text-white text-xs">
                                              <li>• Công ty trong/ngoài nước Vanuatu</li>
                                              <li>• Mở tài khoản ngân hàng</li>
                                              <li>• Cho thuê hoặc đầu tư bất động sản</li>
                                              <li>• Thiết lập nơi cư trú</li>
                                              <li>• Xin thẻ căn cước công dân</li>
                                              <li>• Các vấn đề về thuế và mã số thuế</li>
                                              <li>• Tư vấn về cách đầu tư vào Vanuatu</li>
                                              <li>• Hỗ trợ tài liệu - Chứng nhận, thay thế tài liệu, tài liệu bổ sung</li>

                                          </ul>
                                        ),
                                        en: (
                                            <ul className="text-white text-xs">
                                                <li>• Vanuatu On-Shore/Offshore Company</li>
                                                <li>• Bank Account Opening</li>
                                                <li>• Property Rental or Investment</li>
                                                <li>• Establishing Residency</li>
                                                <li>• Obtaining a National ID Card</li>
                                                <li>• Tax and Tax ID matters</li>
                                                <li>• Advice on how to invest in Vanuatu</li>
                                                <li>• Documentation Support - Certifications, replacement of documents, supplementary documents</li>

                                            </ul>
                                        )
                                    },
                                    language
                                )
                            }

                    </div>
                </div>


            </div>

        </div>
    );
};

export default OurService;