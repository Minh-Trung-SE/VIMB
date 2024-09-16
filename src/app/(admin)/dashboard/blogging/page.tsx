import dynamic from "next/dynamic";

const BlogQuillEditor = dynamic(() => import("@src/components/Blog/elements/BlogQuillEditor"), {ssr: false})


const Page = () => {
    return (
        <div className="p-5">
            <BlogQuillEditor/>
        </div>
    )
};

export default Page;