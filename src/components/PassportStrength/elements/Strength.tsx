import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";
import LANGUAGES from "@src/constants/Language";

const Strength = () => {
    const language = getServerLanguage()
    return (
        <div className="mt-5">
            <h2 className="px-5 py-2 text-2xl font-medium text-xl bg-primary text-white">Passport strength facts</h2>

            {
                language === LANGUAGES.VI ? (
                    <div className="space-y-2">
                        <p>
                            Nhiều quốc gia nghèo và đang phát triển có sức mạnh hộ chiếu thấp. Nhìn chung, khi công
                            dân của các quốc gia này đi du lịch nước ngoài, lưu trú quá hạn thị thực, phạm tội hoặc
                            gây ra sự xúc phạm về văn hóa. Các quốc gia khác sau đó sẽ lọc chặt chẽ hơn để đảm bảo
                            những người phù hợp có thể đến thăm quốc gia của họ, điều đó có nghĩa là nhìn chung,
                            nhiều người sẽ khó đi du lịch hơn. Điều này khiến hộ chiếu của họ trở nên kém hấp dẫn
                            hơn vì ít quốc gia cho phép nhập cảnh du lịch hoặc tiếp cận lao động.
                        </p>
                        <p>
                            Hộ chiếu từ các quốc gia nghèo hay đang phát triển khi yêu cầu cấp thị thực đến các quốc
                            gia phát triển, nhiều người sẽ được yêu cầu nộp nhiều loại giấy tờ chính thức và/hoặc
                            được phỏng vấn. Việc sàng lọc như vậy có thể rất xâm phạm, gây khó chịu và tẻ nhạt. Vì
                            vậy để đi du lịch đến các quốc gia khác, bất kể giàu có, thành tích, thành tựu hay thái
                            độ cá nhân, rất có thể sẽ phải được sàng lọc trước khi được cấp thị thực. Ngay cả sau
                            khi nộp giấy tờ và phỏng vấn, bạn cũng không chắc chắn sẽ được cấp thị thực. Mặc dù bạn
                            có thể cần phải nộp lại đơn xin thị thực, nhưng thời gian và công sức đã mất không bao
                            giờ nên lãng phí.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <p>
                            Many poor and developing countries have low passport strength. Generally speaking, when
                            citizens of such countries travel abroad, overstay their visa, commit crimes, or cause
                            cultural offence. Destination countries then filter harder to ensure the right people
                            can visit their country, which means it is overall harder for many to travel. This makes
                            that particular passport less desirable as fewer countries allow travel, entry or labour
                            access to holders of such a passport.
                        </p>

                        <p>
                            When requesting a visa to developed countries, many will be required to submit various
                            forms of official documentation and/or be interviewed. Such screenings can be very
                            intrusive, offensive and tedious.
                        </p>

                        <p>
                            Regardless of wealth, accomplishment, achievement or individual demeanour are most
                            likely required to be screened before they are granted a visa. Even after submission of
                            documentation and interviews, you will not be guaranteed to be granted a visa. Although
                            you may need to apply again, and sometimes again to obtain your visa, such time and
                            effort lost, should never have been wasted.
                        </p>
                    </div>
                )
            }
            <br/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                <div className="space-y-2">
                    <Image
                        sizes="100vw"
                        height={0}
                        width={0}
                        alt="image"
                        src="/images/application-denied.jpg"
                        className="aspect-video w-full object-cover"
                    />
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Đau đầu nhất là khi tất cả các thành viên trong đoàn du lịch đều được cấp thị thực ngoại trừ một hoặc hai người.",
                                    en: "The worst headaches are when all group travel members are granted visas except one or two people."
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-2">
                    <Image
                        sizes="100vw"
                        height={0}
                        width={0}
                        src="/images/passport-grant.png"
                        className="h-auto w-full aspect-video object-cover"
                        alt="passport-grant"
                    />
                    <p>
                        {
                            displayMessage(
                                {
                                    vi: "Nếu bạn có hộ chiếu phụ, có giá trị hộ chiếu mạnh hơn, bạn có thể bỏ qua việc kiểm tra bổ sung để xin thị thực.",
                                    en: "If you have a secondary passport, that has a stronger passport strength, you can bypass the addition scrutiny for a visa."
                                },
                                language
                            )
                        }
                    </p>
                </div>
            </div>
            <br/>
            <div className="space-y-2">

                <p>
                    {
                        displayMessage(
                            {
                                vi: "Thời gian là tiền bạc. Hầu hết những người có tiền và kiến ​​thức để đi du lịch đều đi để giải trí, khám phá, quan sát hoặc tiến hành kinh doanh thêm. Cũng rất đáng để tiến hành nghiên cứu với nhiều chuyến thăm để quyết định xem có đáng đầu tư vào tương lai của con cái hoặc gia đình họ để di cư đến một quốc gia như vậy hay không. Tuy nhiên, việc đi lại và tiếp cận không dễ dàng, thuận tiện. Do đó, thông tin thu thập được về một quốc gia khác và thậm chí là các vùng ngoại ô cụ thể để mua bất động sản thường rất thô sơ và vội vã, khiến nhiều gia đình hối tiếc khi nhìn lại.",
                                en: "Time is money. Most people with the wealth and knowledge to travel are doing so for leisure, exploration, observation or conduct further business. It is also highly worthwhile to conduct research with multiple visits to decide if it is worth investing into their children or family’s future to uproot and migrate to such a country. However, such travel and access are not as convenient, thereby, the information gathered about another country and even particular suburbs to purchase real estate are usually rudimentary and rushed, leaving many families with retrospective regret."
                            },
                            language
                        )
                    }
                </p>

                <p>
                    {
                        displayMessage(
                            {
                                vi: "Hộ chiếu Vanuatu dễ dàng tiếp cận nhiều quốc gia hơn. Xin lưu ý, thị thực điện tử đơn giản như đăng ký trực tuyến, điền thông tin chi tiết của bạn và thanh toán. Thị thực khi đến thậm chí còn đơn giản hơn, chỉ cần đến, trả phí và nhập cảnh.",
                                en: "A Vanuatu Passport has easier access to more countries. Please note, e-visas are as simple as registering online, fill in your details and pay. Visa on arrival are even simpler, simply arrive, pay a fee and enter. "
                            },
                            language
                        )
                    }
                </p>
            </div>
        </div>
    );
};

export default Strength;