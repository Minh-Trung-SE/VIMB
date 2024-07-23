import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const lang = context.req.cookies.lang || 'en'
    console.log(context)

    return {
        props: { lang }
    }
}