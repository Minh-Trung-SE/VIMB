import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const ProcessVanuatuPassport = () => {
    const language = getServerLanguage()
    return (
        <div className="py-10 space-y-5">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Process of gaining a Vanuatu
                passport?</h1>

            <table className="w-full border">

                <tbody>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 1",
                                    en: "Step 1"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Tham vấn với cơ quan có thẩm quyền của VIMB.VN để đánh giá đủ điều kiện.",
                                    en: "Consultation with VIMB.VN authorised agency for an eligibility assessment."
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 2",
                                    en: "Step 2"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Ký Thỏa thuận dịch vụ và thu thập tài liệu Giai đoạn đầu. Phí dịch vụ và thanh toán cho Đơn vị tình báo tài chính (Vanuatu).",
                                    en: "Sign Service Agreement sign and First Stage documents collection. Service fees and Financial Intelligence Unit (Vanuatu) payments."
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 3",
                                    en: "Step 3"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Đơn vị tình báo tài chính (Vanuatu) xác minh và kiểm tra",
                                    en: "Financial Intelligence Unit (Vanuatu) verification and checks"
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 4",
                                    en: "Step 4"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Giai đoạn 2: Thu thập hồ sơ và nộp lên Văn phòng Ủy ban quốc tịch Vanuatu, yêu cầu thanh toán số tiền phí còn lại.",
                                    en: "Second Stage documents collection and submission to Vanuatu Citizenship Commission Office, balance of fees required."
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 5",
                                    en: "Step 5"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Cuộc họp và sàng lọc của Văn phòng Ủy ban Công dân",
                                    en: "Citizenship Commission Office meeting and screening"
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 6",
                                    en: "Step 6"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Phê duyệt quốc tịch và in giấy chứng nhận. Lễ tuyên thệ trung thành (Qua Zoom)",
                                    en: "Citizenship approval and certificates printing Oath Ceremony of Allegiance (Via Zoom)"
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Bước 7",
                                    en: "Step 7"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Passport, Citizenship and Share Certificate Issuance",
                                    en: "Cấp hộ chiếu, quốc tịch và giấy chứng nhận cổ phần"
                                },
                                language
                            )
                        }
                    </td>
                </tr>
                </tbody>
            </table>

            <p>Read more about Vanuatu and the CIIP program at:</p>
            <a
                href="https://www.imidaily.com/sponsored-feature/vanuatu-launches-investment-linked-ciip-cno-future-fund-citizenship-program/"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                Vanuatu Launches Investment-Linked “CIIP-CNO Future Fund” Citizenship Program
            </a>
            <br/>
            <a
                href="https://www.bangkokpost.com/thailand/pr/2674589/vimb-and-harvey-law-group-launch-sustainable-citizenship-program"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                VIMB and Harvey Law Group Launch Sustainable Citizenship Program
            </a>
            <br/>
            <a
                href="https://markets.businessinsider.com/news/stocks/vanuatu-s-new-passport-program-drives-2030-carbon-net-zero-goals-1033466482"
                target="_blank"
                className="text-decoration-none text-primary font-medium "
            >
                Vanuatu New Passport Program Drives 2030 Carbon Net Zero Goals
            </a>
        </div>
    );
};

export default ProcessVanuatuPassport;