import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";

const OtherExpenses = () => {
    const language = getServerLanguage()

    return (
        <div className="py-10 space-y-5">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Other living expenses</h1>
            <div>
                <p>
                    {
                        displayMessage(
                            {
                                en: "There are many indirect ways of attaining residency in a country, not necessarily citizenship. They may appear to be cheaper at first, but have many cost factors you must consider. No path guarantees residency or citizenship unless explicitly stated by an official government program.",
                                vi: "Có nhiều con đường gián tiếp để đạt được quyền thường trú tại một quốc gia, không nhất thiết là quốc tịch. Những con đường này có thể trông rẻ hơn ban đầu, nhưng bạn cần cân nhắc nhiều yếu tố chi phí. Không có con đường nào đảm bảo quyền thường trú hoặc quốc tịch trừ khi được chính thức quy định bởi một chương trình chính phủ."
                            },
                            language
                        )
                    }
                </p>
                <div className="py-5 grid grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden border border-primary">

                        <p className="p-2 font-medium text-center">
                            {
                                displayMessage(
                                    {
                                        en:"Rent and transportation",
                                        vi: "Thuê nhà chi phí đi lại"
                                    },
                                    language
                                )
                            }
                        </p>
                        <Image
                            src="/images/rent-wooden-blocks-with-magnifying-glass.jpg"
                            alt="rent-and-transportation"
                            height={0}
                            width={0}
                            className="w-full aspect-square object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="rounded overflow-hidden border border-primary">

                        <p className="p-2 font-medium text-center">

                            {
                                displayMessage(
                                    {
                                        en: "Food and homesickness",
                                        vi: "Ăn uống và nhớ nhà"
                                    },
                                    language
                                )
                            }
                        </p>
                        <Image
                            src="/images/food.jpg"
                            alt="rent-and-transportation"
                            height={0}
                            width={0}
                            className="w-full aspect-square object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="rounded overflow-hidden border border-primary">

                        <p className="p-2 font-medium text-center">
                            {
                                displayMessage(
                                    {
                                        en:"Other emotional deprivations",
                                        vi: "Những thiếu thốn tình cảm khác"
                                    },
                                    language
                                )
                            }
                        </p>
                        <Image
                            src="/images/emotional-deprivation.jpg"
                            alt="rent-and-transportation"
                            height={0}
                            width={0}
                            className="w-full aspect-square object-cover"
                            sizes="100vw"
                        />
                    </div>
                </div>
                <p>
                    {
                        displayMessage(
                            {
                                en: "Do not take such a costly and time consuming path. Obtain a legal citizenship for your family of 4 then use it legally to travel, study and work in higher tier countries at your leisure.",
                                vi: "Không nên lựa chọn con đường tốn kém và mất nhiều thời gian như vậy. Hãy xin quốc tịch hợp pháp cho gia đình 4 người của bạn, rồi sử dụng nó một cách hợp pháp để đi lại, học tập và làm việc ở các quốc gia phát triển hơn theo ý muốn."
                            },
                            language
                        )
                    }
                </p>
                <br/>
                <p className="font-medium text-primary">
                    {
                        displayMessage(
                            {
                                en: "Vanuatu citizenship is inheritable. Obtain one now for your family, while it is still possible.",
                                vi: "Quyền công dân Vanuatu có thể thừa kế. Hãy xin ngay cho gia đình bạn, khi vẫn còn có thể"
                            },
                            language
                        )
                    }
                </p>
            </div>

        </div>
    );
};

export default OtherExpenses;