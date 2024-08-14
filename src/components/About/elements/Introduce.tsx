import React from 'react';
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";
import displayMessage from "@src/ultils/language";

const Introduce = () => {
    const language = getServerLanguage()
    return (
        <div>
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
                                        en: "VIMB là thành viên hỗ trợ chính cho sự tham gia vô cùng thành công của Vanuatu tại Triển lãm Dubai Expo 2020 và hiện đang tham gia chặt chẽ vào chương trình nghị sự về biến đổi khí hậu của Vanuatu. Thông qua mạng lưới quốc tế và sự hợp tác với chính phủ, các tổ chức phi chính phủ và khu vực tư nhân, VIMB hiện đang dẫn đầu các nỗ lực của Vanuatu nhằm đảm bảo nguồn tài chính quốc tế để giúp đất nước này thành trung tâm phát triển bền vững khu vực Nam Thái Bình Dương."
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>

                </div>

            </div>

            <div className="flex flex-wrap space-y-5">
                <div className="w-full sm:w-3/5 sm:py-10  text-lg pr-5">
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "VIMB was a key supporting member of Vanuatu’s highly successful participation in Dubai Expo 2020 and, is now closely involved in Vanuatu’s climate change agenda. Through its international network and engagement with government, NGOs and the private sector, VIMB now leads Vanuatu’s efforts to secure international climate finance to transform the country into a regional sustainable development hub for the South Pacific.",
                                    vi: "Vanuatu đã cam kết thực hiện Chiến lược phát triển phát thải thấp (LEDS) dài hạn theo Công ước của Liên hợp quốc về biến đổi khí hậu (UNFCCC), phù hợp với Thỏa thuận Paris nhằm hạn chế tình trạng nóng lên toàn cầu. Vanuatu đã chỉ định nhiều con đường để giảm phát thải trong mọi lĩnh vực và mở rộng khả năng thích ứng và phục hồi khí hậu đến năm 2050."
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
                                    en: "Vanuatu has committed to a long term Low Emissions Development Strategy (LEDS) to the United Nations Framework Convention on Climate Change (UNFCCC), in line with the Paris Agreement to limit global warming. Vanuatu has designated many pathways to lower emissions across all sectors and expanded climate adaptation and resilience to 2050.",
                                    vi: "Chương trình Đầu tư nhập tịch (CBI) của Vanuatu có tên là Capital Investment Immigration Plan (CIIP). Nguồn vốn nước ngoài huy động thông qua chương trình này nhằm mục đích nâng cao ngành nhiên liệu sinh học của Vanuatu để đạt mục tiêu không phát thải carbon vào năm 2030. Cơ hội này cho phép tầng lớp trung lưu, thượng lưu của Việt Nam mở rộng phạm vi đi lại và kinh doanh trên thế giới với ít rắc rối hơn thông qua hộ chiếu Vanuatu, mà không cần nghĩa vụ hoặc trách nhiệm công dân."
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
                                    en: "Vanuatu’s Citizenship By Investment (CBI) program is named Capital Investment Immigration Plan (CIIP). The foreign funds raised through this program is to enhance Vanuatu’s biofuels industry to becoming carbon zero by 2030. This opportunity allows Vietnam’s upper middle class expand their travel and business reach in the world with less hassle through a stronger Vanuatu passport, without civic duties or obligations.",
                                    vi: "Điều này cho phép tầng lớp trung lưu, thượng lưu của Việt Nam mở rộng phạm vi đi lại và kinh doanh trên thế giới với ít rắc rối hơn nhờ hộ chiếu Vanuatu."
                                },
                                language
                            )
                        }
                    </p>
                </div>

                <Image
                    className="block w-full sm:w-2/5 object-cover"
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