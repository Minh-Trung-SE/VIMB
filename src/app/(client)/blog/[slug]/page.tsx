import Container from "@src/components/Container";
import {ssrObjectToHtml} from "@src/components/QuillEditor/utils/SSR";
import {Blog} from "@src/database/models";
import {NextProps} from "@src/types";
import {FC} from "react";
import 'quill/dist/quill.snow.css';



const Page: FC<NextProps> = async ({params}) => {

    const blog = await Blog.findOne(
        {
            where: {
                slug: params.slug
            }
        }
    )
    return (
        <Container className="py-10">
            <div className="ql-snow">
                <div
                    className="ql-editor"
                    dangerouslySetInnerHTML={
                        {
                            __html: ssrObjectToHtml(
                                blog?.toJSON().jsonObject!
                            )
                        }
                    }
                />
            </div>
        </Container>

    )
};

export default Page;