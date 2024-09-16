
import Container from "@src/components/Container";
import {Blog} from "@src/database/models";
import Image from "next/image";
import Link from "next/link";


const Page = async () => {

    const blogs = await Blog.findAll().then(
        blogs => blogs.map(
            blog => blog.toJSON()
        )
    )


    return (
        <Container className="grid grid-cols-3 gap-5 py-20">
            {
                blogs.map(
                    blog => (
                        <div
                            key={blog.id}
                             className=" space-y-2 border rounded p-2"
                        >
                            <Image
                                src="/upload/shutterstock_232728022.jpg"
                                alt={blog.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full aspect-video"
                            />

                            <Link
                                className="block text-sm"
                                href={`/blog/${blog.slug}`}

                            >
                                {blog.title}
                            </Link>
                            <p className="text-primary text-xs">{new Date(blog.createdAt).toLocaleString()}</p>
                            <Link className="block text-xs" href={`/blog/${blog.slug}`} target="_blank">
                                Read more
                            </Link>
                        </div>
                    )
                )
            }
        </Container>
    )
};

export default Page;