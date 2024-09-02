import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";

const Benefits = () => {
    const language = getServerLanguage();


    return (
        <div className="py-10">
            <h1 className="px-5 py-2 font-medium text-2xl bg-primary text-white">Vanuatu Citizenship benefits</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 py-10">
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg
                            enableBackground="new 0 0 64 64"

                            version="1.1" viewBox="0 0 64 64"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                d="M47,14h5c2.2,0,4,1.8,4,4v30c0,2.2-1.8,4-4,4H12c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h5"
                                fill="#E5E5E5"/>
                            <path d="M52,14h-5H17h-5c-2.2,0-4,1.8-4,4v5h48v-5C56,15.8,54.2,14,52,14z" fill="#EA685E"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" strokeLinejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="35" x2="41" y1="14" y2="14"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="23" x2="29" y1="14" y2="14"/>
                            <path d="  M35,52H12c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h5" fill="none" stroke="#2C3E50"
                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <path d="  M47,14h5c2.2,0,4,1.8,4,4v17" fill="none" stroke="#2C3E50" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="29" cy="31.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="36" cy="31.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="43" cy="31.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="50" cy="31.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="29" cy="38.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="22" cy="38.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="15" cy="38.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="36" cy="38.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="29" cy="45.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="22" cy="45.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <circle cx="15" cy="45.2" fill="none" r="1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="32" x2="32" y1="16" y2="10"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="20" x2="20" y1="16" y2="10"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="44" x2="44" y1="16" y2="10"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="8" x2="56" y1="23" y2="23"/>
                            <circle cx="49.2" cy="48" fill="#D4C8BC" r="11.1"/>
                            <path d="M43.4,38.5l5.6,9.3l10.6-3.6c0,0-1.9-5-6.6-6.6C48.3,35.9,44.7,37.6,43.4,38.5z"
                                  fill="#FFD766"/>
                            <circle cx="49.2" cy="48" fill="none" r="11.1" stroke="#2C3E50" strokeLinecap="round"
                                    stroke-linejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="49.2" x2="54.3" y1="48" y2="46.2"/>
                            <line fill="none" stroke="#2C3E50" strokeLinecap="round" stroke-linejoin="round"
                                  strokeMiterlimit="10" strokeWidth="2" x1="49.2" x2="45.1" y1="48" y2="41.4"/>
                        </svg>

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Hộ chiếu trong 2 tháng",
                                    en: "Passport to 2 months"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M417.84,281.53V45.89a6.75,6.75,0,0,0-6.75-6.75H141.59a6.75,6.75,0,0,0-6.75,6.75V82H112.06a6.75,6.75,0,0,0-6.75,6.75V219.48a41.94,41.94,0,0,0-31.94,40.68V451.55a21.33,21.33,0,0,0,21.31,21.31H417.32a21.33,21.33,0,0,0,21.31-21.31V302.82A21.33,21.33,0,0,0,417.84,281.53ZM148.34,52.64h256V281.52H386.7V141.84c0-.23,0-.45,0-.68s-.05-.37-.08-.55,0-.07,0-.11a6.7,6.7,0,0,0-1.88-3.46L331,84a5,5,0,0,0-.54-.49l-.07-.06q-.22-.18-.45-.33l-.1-.06c-.15-.1-.31-.19-.47-.28l-.09,0-.5-.24-.08,0a4.29,4.29,0,0,0-.54-.19l-.09,0a5.29,5.29,0,0,0-.54-.13l-.2,0a3.5,3.5,0,0,0-.45-.07c-.22,0-.45,0-.67,0H148.34ZM333,104.92l30.54,30.17H333Zm-13.5-9.4v46.32a6.75,6.75,0,0,0,6.75,6.75h47V281.52H340.62V260.16a41.93,41.93,0,0,0-41.88-41.89H118.81V95.52Zm105.66,356a7.82,7.82,0,0,1-7.81,7.81H94.68a7.82,7.82,0,0,1-7.81-7.81V260.16a28.43,28.43,0,0,1,28.39-28.39H298.74a28.42,28.42,0,0,1,28.38,28.39v28.11a6.76,6.76,0,0,0,6.75,6.75h83.45a7.82,7.82,0,0,1,7.81,7.8Z"
                                className="fill-primary"
                            />
                            <path
                                d="M158.22,148.59H296.47a6.75,6.75,0,0,0,0-13.5H158.22a6.75,6.75,0,0,0,0,13.5Z"
                                className="fill-primary"
                            />
                            <path
                                d="M296.47,176.52H258.84a6.75,6.75,0,1,0,0,13.5h37.63a6.75,6.75,0,0,0,0-13.5Z"
                                className="fill-primary"
                            />
                            <path
                                d="M158.22,190h69.12a6.75,6.75,0,0,0,0-13.5H158.22a6.75,6.75,0,0,0,0,13.5Z"
                                className="fill-primary"
                            />
                            <path

                                d="M256.29,326.53a6.75,6.75,0,0,0-12.74,0l-31.77,90.14a6.75,6.75,0,0,0,12.74,4.49l6.65-18.86h37.5l6.65,18.86a6.75,6.75,0,0,0,12.74-4.49ZM235.92,388.8l.49-1.39,1.72-4.86a0,0,0,0,1,0,0l11.78-33.44,14,39.72Z"
                                className="fill-primary"
                            />
                            <path

                                d="M200.92,321.19h-52a6.75,6.75,0,0,0,0,13.5h19.25v83.38a6.75,6.75,0,0,0,13.5,0V334.69h19.25a6.75,6.75,0,1,0,0-13.5Z"
                                className="fill-primary"
                            />
                            <path

                                d="M366.53,322.14a6.75,6.75,0,0,0-9.25,2.35l-21,35.25-21-35.25a6.75,6.75,0,1,0-11.6,6.9l24.73,41.55L303.7,414.49a6.75,6.75,0,1,0,11.6,6.91l21-35.26,21,35.26a6.75,6.75,0,1,0,11.6-6.91l-24.73-41.55,24.73-41.55A6.74,6.74,0,0,0,366.53,322.14Z"
                                className="fill-primary"
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Great tax benefits",
                                    vi: "Lợi ích thuế tuyệt vời"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg
                            enableBackground="new 0 0 64 64"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 64 64"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <polyline
                                fill="#E5E5E5"
                                points="56,22 56,54.5 40,59.5 24,54.5 8,59.5 8,26.5 24,21.8 "
                            />
                            <polygon fill="#B7B7B7" points="24,21.8 24,54.5 40,59.5 40,21.9 "/>
                            <path
                                d="M40,40.1c0,0,13.6-9.2,13.6-22.5C53.6,10.1,47.5,4,40,4s-13.6,6.1-13.6,13.6c0,10,6.9,16.7,10.9,20.2  L40,40.1z"
                                fill="#FFD766"
                            />
                            <path
                                d="M44.7,11.3c-0.6,0.4-1.6,1.1-2.7,2L33.4,12l-0.6,1.5l6.2,2.2c-1.8,1.5-4,3.3-4,3.3l-1.9-1.4l-0.9,0.8  l2.7,2.7c0,0,10.4-7,12.1-8.3C48.7,11.7,46.6,10.1,44.7,11.3z"
                                fill="#4B687F"
                            />
                            <path
                                d="  M44.7,11.3c-0.6,0.4-1.6,1.1-2.7,2L33.4,12l-0.6,1.5l6.2,2.2c-1.8,1.5-4,3.3-4,3.3l-1.9-1.4l-0.9,0.8l2.7,2.7c0,0,10.4-7,12.1-8.3  C48.7,11.7,46.6,10.1,44.7,11.3z"
                                fill="none"
                                stroke="#2C3E50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <line
                                fill="none"
                                stroke="#2C3E50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={33}
                                x2={43}
                                y1={24}
                                y2={24}
                            />
                            <line
                                fill="none"
                                stroke="#2C3E50"
                                strokeDasharray="0,3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={24}
                                x2={24}
                                y1={26}
                                y2={51}
                            />
                            <line
                                fill="none"
                                stroke="#2C3E50"
                                strokeDasharray="0,3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={40}
                                x2={40}
                                y1={56}
                                y2={42}
                            />
                            <polyline
                                fill="none"
                                points="  56,22 56,54.5 40,59.5 24,54.5 8,59.5 8,26.5 24,21.8 "
                                stroke="#2C3E50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="  M24,22"
                                fill="none"
                                stroke="#2C3E50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="  M40,40.1c0,0,13.6-9.2,13.6-22.5C53.6,10.1,47.5,4,40,4s-13.6,6.1-13.6,13.6c0,10,6.9,16.7,10.9,20.2L40,40.1z"
                                fill="none"
                                stroke="#2C3E50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Visa free travel to 112 countries",
                                    vi: "Du lịch dễ dàng đến 112 quốc gia"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg
                            enableBackground="new 0 0 128 128"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 128 128"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                d="M103,112H32.1c-2.2,0-4.1-1.3-4.1-3.6V23.6c0-2.2,1.9-3.6,4.1-3.6H103V112z"
                                fill="#53AF80"
                            />
                            <path
                                d="M103,112H32.1c-2.2,0-4.1-1.3-4.1-3.6V23.6  c0-2.2,1.9-3.6,4.1-3.6H103V112z"
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="M105,112H36.2c-2.2,0-4.2-1.3-4.2-3.6V23.6c0-2.2,2-3.6,4.2-3.6H105V112z"
                                fill="#8DCEA8"
                            />
                            <path
                                d="M105,112H36.2c-2.2,0-4.2-1.3-4.2-3.6V23.6  c0-2.2,2-3.6,4.2-3.6H105V112z"
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <circle
                                cx="68.2"
                                cy="54.3"
                                fill="none"
                                r="21.5"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <line
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={69}
                                x2={69}
                                y1={32}
                                y2={76}
                            />
                            <path
                                d="M74.1,33.6c0,0,6.3,8.2,6.3,20.7s-5.3,20.4-5.3,20.4  "
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="M63.3,33.6c0,0-6.3,8.2-6.3,20.7s5.3,20.4,5.3,20.4"
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <line
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={46}
                                x2={90}
                                y1={54}
                                y2={54}
                            />
                            <line
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={49}
                                x2={87}
                                y1={44}
                                y2={44}
                            />
                            <line
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={49}
                                x2={87}
                                y1={64}
                                y2={64}
                            />
                            <line
                                fill="none"
                                stroke="#3D3D3D"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={46}
                                x2={91}
                                y1={90}
                                y2={90}
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Passport for the whole family",
                                    vi: "Hộ chiếu cho cả gia đình 4 người"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg
                            enableBackground="new 0 0 50 50"
                            className="w-full h-full"
                            version="1.1"
                            viewBox="0 0 50 50"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <rect fill="none" height={50} width={50}/>
                            <circle
                                cx={25}
                                cy={25}
                                fill="none"
                                r={24}
                                className="stroke-indigo-950"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <ellipse
                                cx={25}
                                cy={25}
                                fill="none"
                                rx={12}
                                ry={24}
                                className="stroke-indigo-950"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
                                fill="none"
                                className="stroke-indigo-950"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <path
                                d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
                                fill="none"
                                className="stroke-indigo-950"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                            />
                            <line
                                fill="none"
                                className="stroke-indigo-950"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={1}
                                x2={49}
                                y1={25}
                                y2={25}
                            />
                            <line
                                fill="none"
                                className="stroke-indigo-950"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                x1={25}
                                x2={25}
                                y1={1}
                                y2={49}
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Không yêu cầu cư trú",
                                    en: "No resident requirements"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="mx-auto size-14 p-2 rounded-full border-2 border-primary">
                        <svg className="w-full h-full fill-yellow-500" viewBox="0 0 31 43" xmlns="http://www.w3.org/2000/svg">

                            <g >
                                <g >
                                    <path
                                        className="cls-1"
                                        d="M23,2V0H8V2H0V43H31V2ZM10,2H21V3H20V5H11V3H10ZM29,41H2V4H8V5H9V7H22V5h1V4h6Z"
                                    />
                                    <rect className="cls-1" height={2} width={15} x={4} y={11}/>
                                    <rect className="cls-1" height={2} width={13} x={4} y={25}/>
                                    <rect className="cls-1" height={2} width={17} x={4} y={18}/>
                                    <rect className="cls-1" height={2} width={15} x={4} y={32}/>
                                    <rect className="cls-1" height={3} width={9} x={11} y={2}/>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Không có bài kiểm tra văn hóa hoặc phỏng vấn",
                                    en: "No tests no interviews"
                                },
                                language
                            )
                        }
                    </p>
                </div>

            </div>
            <table className="w-full border">

                <tbody>
                <tr>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Giấy tờ tùy thân và hộ chiếu trong vòng 1-3 tháng",
                                    en: "Citizenship papers and passport within 1-3 month"
                                },
                                language
                            )
                        }

                    </td>
                    <td className="align-top p-2 border text-sm">
                        <p>

                            {
                                displayMessage(
                                    {
                                        vi: "Thuế thu nhập 0%",
                                        en: "0% income tax"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p>

                            {
                                displayMessage(
                                    {
                                        vi: "Thuế thu nhập 0%",
                                        en: "0% inheritance tax"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Thuế thừa kế 0%",
                                        en: "0% capital gains tax"
                                    },
                                    language
                                )
                            }
                            </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Thuế quà tặng",
                                        en: "0% gift tax"
                                    },
                                    language
                                )
                            }
                            </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Thuế kinh doanh quốc tế 0%",
                                        en: "0% international business tax"
                                    },
                                    language
                                )
                            }
                            </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Không Có Quy tắc CFC",
                                        en: "FC Rules"
                                    },
                                    language
                                )
                            }
                            </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "Không hạn chế tiền tệ",
                                        en: "No currency Restrictions"
                                    },
                                    language
                                )
                            }
                            </p>
                        <p>
                            {
                                displayMessage(
                                    {
                                        vi: "12,5% VAT/thuế kinh doanh nội địa",
                                        en: "12.5% VAT / domestic business tax"
                                    },
                                    language
                                )
                            }
                            </p>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-10">
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-1.5 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/VIMB-Icons-2023.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Dễ dàng trong kinh doanh",
                                    en: "Ease of doing business"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-1.5 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/9.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Miễn thuế",
                                    en: "Free tax"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-1.5 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/7.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Hầu như không có tội phạm",
                                    en: "Crime free"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5 border rounded p-5">
                    <div className="mx-auto size-14 p-1.5 rounded-full border-2 border-primary">
                        <Image
                            height={0}
                            width={0}
                            alt=""
                            src="/icons/8.png"
                            sizes="100vw"
                            className="h-full w-full"
                        />

                    </div>
                    <p className="text-center text-sm text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    vi: "Bảo mật",
                                    en: "Confidentiality"
                                },
                                language
                            )
                        }
                    </p>
                </div>

            </div>
            <table className="w-full border">
                <tbody>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Kiến thức văn hóa hoặc bài kiểm tra cần thiết để có quốc tịch CBI?",
                                    en: "Cultural knowledge or tests needed for CBI citizenship?"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Không",
                                    en: "No"
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
                                    vi: "Công nhận và chấp nhận 2 quốc tịch?",
                                    en: "Recognises and accepts dual citizenships?"
                                },
                                language
                            )
                        }

                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Có",
                                    en: "Yes"
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
                                    vi: "Hỗ trợ lãnh sự toàn cầu",
                                    en: "Global consular support?"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "(Anh) Khối thịnh vượng chung",
                                    en: "(British) Commonwealth"
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
                                    vi: "Kiến thức văn hóa hoặc bài kiểm tra cần thiết để có quốc tịch CBI?",
                                    en: "Legal basis of CBI (CIIP / DSP)?"
                                },
                                language
                            )
                        }

                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Đạo luật công dân CAP112",
                                    en: "Citizenship Act CAP112"
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
                                    vi: "Thời gian lưu trú tối thiểu để duy trì quyền công dân / nơi cư trú?",
                                    en: "Minimum stay to maintain citizenship / residency?"
                                },
                                language
                            )
                        }

                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Không",
                                    en: "No"
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
                                vi: "Dân số gần đúng của Vanuatu vào năm 2024",
                                en: "Approximate population of Vanuatu in 2024"
                            },
                            language
                        )
                    }

                    </td>
                    <td className="align-top p-2 border text-sm">
                        342,000
                    </td>
                </tr>
                <tr className="p-2">
                    <td className="align-top p-2 border text-sm">

                        {
                            displayMessage(
                                {
                                    vi: "Ngôn ngữ nói",
                                    en: "Languages spoken"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Anh, Pháp, Bislama",
                                    en: "English, Bislama, French"
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
                                    vi: "Người Việt ở Vanuatu",
                                    en: "Vietnamese population in Vanuatu"
                                },
                                language
                            )
                        }
                    </td>
                    <td className="align-top p-2 border text-sm">
                        500
                    </td>
                </tr>
                <tr className="p-2">
                    <td colSpan={2} className="align-top text-center p-2 border space-x-2 text-sm">
                        <span>
                        {
                            displayMessage(
                                {
                                    vi: "Để biết thêm thông tin thú vị, vui lòng truy cập:",
                                    en: "For more interesting facts, please visit:"
                                },
                                language
                            )
                        }

                        </span>

                        <a
                            href="https://www.worldatlas.com/articles/what-are-the-biggest-industries-in-vanuatu.html"
                            target="_blank"
                            className="text-decoration-none text-primary font-medium "

                        >
                            What Are The Biggest Industries In Vanuatu?

                        </a>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Benefits;