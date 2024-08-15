import ConsultationManage from "@src/components/Consultation/ConsultationManage";
import {cookies} from "next/headers";
import Link from "next/link";
import Logo from "@src/components/Header/elements/Logo";

const Page = () => {

    return cookies().get("username") ? (
        <>
            <header className="border-b flex justify-between items-center px-5 py-2">
                <Logo/>
                <Link replace={true} className="block w-fit text-red-500 font-medium" href="/">
                    Logout
                </Link>
            </header>
            <ConsultationManage/>
        </>
    ) : (
        <div className="py-10">
            <Link className="block mx-auto w-fit rounded px-5 py-2 text-white bg-red-500" href="/login">
                Login
            </Link>
        </div>
    )
};

export default Page;