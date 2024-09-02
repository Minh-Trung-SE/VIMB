import Image from "next/image";
import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";

const Bypassing = () => {

    const language = getServerLanguage()
    return (
        <div className="py-20 space-y-10">
            <h2 className="px-5 py-2 font-medium text-2xl bg-primary text-white">
                Bypassing document and interview requests for travel
            </h2>

            <div className="flex flex-wrap sm:flex-nowrap gap-5">
                <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="h-auto w-full sm:h-48 sm:w-fit block"
                    alt="vanuatu-passport"
                    src="/images/vanuatu-passport-2021-portrait.jpg"
                />
                <div className="grow space-y-2">
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Sự tự do, các quyền và sự bảo vệ lãnh sự là những lý do rõ ràng để đi du lịch bằng hộ chiếu mạnh hơn. Đối với những người tiến hành kinh doanh: sự thuận tiện và hiệu quả được đánh giá cao.",
                                    en: "The freedom, rights and consular protection are obvious reasons to travel under a stronger passport. To those who conduct business: convenience and efficiency are prized."
                                },
                                language
                            )
                        }
                    </p>
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Với hộ chiếu Vanuatu, bạn chỉ cần yêu cầu cấp thị thực trực tuyến với thông tin hộ chiếu Vanuatu của mình. Bạn sẽ được cấp thị thực trong vòng vài ngày làm việc.",
                                    en: "With a Vanuatu passport, you can simply request a visa online with your Vanuatu passport details. You will be granted the visa within a few working days."
                                },
                                language
                            )
                        }
                    </p>
                    <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="w-full sm:hidden block"
                        alt="vanuatu-passport"
                        src="/images/vanuatu-travel.jpg"
                    />
                    <p>
                        <b>
                            {
                                displayMessage(
                                    {
                                        vi: "Không nộp hồ sơ giấy tờ, không phỏng vấn. Không lãng phí thời gian. Không còn rắc rối nữa.",
                                        en: "No paperwork submissions, no interviews. No time wasted. No more hassles."
                                    },
                                    language
                                )
                            }
                        </b>
                    </p>
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Với hộ chiếu Vanuatu, các nước như Singapore, Hong Kong không cần thị thực; Úc chỉ yêu cầu một thị thực trực tuyến dễ dàng cho nhiều lần nhập cảnh.",
                                    en: "With a Vanuatu passport, you can simply request a visa online with your Vanuatu passport details. You will be granted the visa within a few working days."
                                },
                                language
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bypassing;