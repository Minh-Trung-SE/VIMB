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
                                vi: "There are many indirect ways of attaining residency in a country, not necessarily citizenship. They may appear to be cheaper at first, but have many cost factors you must consider. No path guarantees residency or citizenship unless explicitly stated by an official government program."
                            },
                            language
                        )
                    }
                </p>
                <div className="py-5 grid grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden border border-primary">

                        <p className="p-2 font-medium text-center">
                            Rent and transportation
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
                            Food and homesickness
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
                            Other emotional deprivations
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
                                vi: "Do not take such a costly and time consuming path. Obtain a legal citizenship for your family of 4 then use it legally to travel, study and work in higher tier countries at your leisure."
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