"use client"
import {DOMJsonObject, domObjectToHtml} from "@src/components/QuillEditor/utils/Convert";
import {isEmpty, isNull, isUndefined} from "lodash";
import {FC, HTMLAttributes, useEffect, useRef} from "react";
import 'quill/dist/quill.snow.css';

type BlogQuillPreviewProps = HTMLAttributes<HTMLDivElement> & {
    json?: DOMJsonObject[]
}

const BlogQuillPreview: FC<BlogQuillPreviewProps> = ({json = [], ...props}) => {
    const previewRef = useRef<HTMLDivElement | null>(null)

    useEffect(
        () => {

            if (isNull(previewRef.current)) {
                return
            }

            if (isUndefined(json) || isEmpty(json)) {
                return;
            }

            Array.from(
                previewRef.current.children
            ).forEach(
                (node: Node) => previewRef.current?.removeChild(node)
            )

            json.map(
                domObjectToHtml
            ).forEach(
                (node: Node) => previewRef.current?.appendChild(node)
            )


        }, [json]
    )
    return (
        <div
            {...props}
            ref={previewRef}
        >
        </div>
    );
};

export default BlogQuillPreview;