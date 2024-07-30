import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";

const Strength = () => {
    const language = getServerLanguage()
    return (
        <div className="mt-5">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Passport strength facts</h1>
            <div className="py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Nhiều nước nghèo và đang phát triển có sức mạnh hộ chiếu thấp",
                                        en: "Many poor and developing countries have low passport strength."
                                    },
                                    language
                                )
                            }
                        </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Khi yêu cầu thị thực đến các nước phát triển, nhiều người sẽ phải nộp nhiều loại giấy tờ chính thức khác nhau và/hoặc được phỏng vấn.",
                                        en: "When requesting a visa to developed countries, many will be required to submit various forms of official documentation and/or be interviewed"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Điều đáng tiếc là với hộ chiếu Việt Nam, dù giàu có đến đâu, bạn cũng sẽ không được đảm bảo sẽ được cấp thị thực.",
                                        en: "Unfortunately with a Vietnamese passport, regardless of your wealth, you will not be guaranteed to be granted a visa."
                                    },
                                    language
                                )
                            }

                        </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Đau đầu nhất là khi tất cả thành viên đi du lịch theo nhóm đều được cấp thị thực ngoại trừ một hoặc hai người.",
                                        en: "The worst headaches are when all group travel members are granted visas except one or two people"
                                    },
                                    language
                                )
                            }
                        </p>

                    </div>

                    <Image
                        sizes="100vw"
                        height={0}
                        width={0}
                        alt="image"
                        src="/images/application-denied.jpg"
                        className=" h-56 w-full object-cover"
                    />


                </div>
                <div className="pt-5 space-y-5">
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Nếu bạn có hộ chiếu phụ, có hộ chiếu mạnh hơn, bạn có thể bỏ qua việc kiểm tra an ninh và tài liệu cần thiết.",
                                    en: "If you have a secondary passport, that has a stronger passport strength, you can bypass the security and document checks required."
                                },
                                language
                            )
                        }
                    </p>
                    <Image
                        sizes="100vw"
                        height={0}
                        width={0}
                        src="/images/passport-grant.png"
                        className="h-auto w-full object-cover"
                        alt="passport-grant"
                    />
                </div>
            </div>
        </div>
    );
};

export default Strength;