"use client"
import Button from "@src/common/Button";
import BlogQuillPreview from "@src/components/Blog/elements/BlogQuillPreview";
import QuillEditor from "@src/components/QuillEditor";
import {DOMJsonObject} from "@src/components/QuillEditor/utils/Convert";
import {BlogAttributes} from "@src/database/models";
import useBoolean from "@src/hooks/useBoolean";
import useCallAPIState, {CALL_API_STATUS} from "@src/hooks/UseCallAPIState";
import axios from "axios";
import {isEmpty, isNull} from "lodash";
import {useSearchParams} from "next/navigation";
import Delta from "quill-delta";
import {ChangeEvent, FC, useEffect, useState} from "react";


const BlogQuillEditor: FC = () => {
    const searchParams = useSearchParams()

    const [title, setTitle] = useState("")
    const [values, setValues] = useState<{ delta?: Delta, json?: DOMJsonObject[] }>({})
    const [preview, setPreview] = useBoolean(false)
    const [blog, setBlog] = useCallAPIState<BlogAttributes | undefined>(
        {
            data: undefined,
            status: CALL_API_STATUS.IDLE
        }
    )


    const slug = searchParams.get("slug")
    const id = searchParams.get("id")

    const isCreate = isNull(id) || isNull(slug) || isEmpty(id) || isEmpty(slug)

    useEffect(
        () => {
            if (isNull(slug) || isEmpty(slug)) {
                return
            }
            (
                async () => {
                    setBlog(CALL_API_STATUS.LOADING)
                    const {data} = await axios.get<BlogAttributes>(
                        `/api/blogs/${slug}`,
                        {
                            params: {
                                id
                            }
                        }
                    )

                    if (isNull(data)) {
                        setBlog(CALL_API_STATUS.ERROR)
                        return
                    }
                    setTitle(data!.title)
                    setBlog(CALL_API_STATUS.SUCCESS, data)
                }
            )()
        },
        [id, slug, setBlog]
    )
    const saveBlog = async () => {
        const response = await axios.put(
            `/api/blogs/${id}`,
            {
                title,
                id: parseInt(id!),
                slug: title.split(" ").map(
                    (word) => word.trim().toLowerCase()
                ).filter(
                    (word) => word.length > 0
                ).join("-"),
                delta: values.delta,
                jsonObject: values.json
            }
        )

        console.log(response)
    }

    const postBlog = async () => {
        const response = await axios.post(
            "/api/blogs",
            {
                title,
                slug: title.split(" ").map(
                    (word) => word.trim().toLowerCase()
                ).filter(
                    (word) => word.length > 0
                ).join("-"),
                delta: values.delta,
                jsonObject: values.json
            }
        )

        console.log(response)
    }

    return (
        <div className="space-y-5">
            <div className="space-y-5">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={
                        (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
                    }
                    className="w-full border outline-none px-3 py-2 rounded"
                />
                {
                    isCreate ? (
                        <QuillEditor
                            onContentChange={setValues}
                        />
                    ) : blog.success ? (
                        <QuillEditor
                            onContentChange={setValues}
                            contents={blog.data?.delta}
                        />
                    ) : null
                }

            </div>
            <div className="flex gap-x-5 justify-end">
                <Button
                    variantType="outline" intent="error"
                    onClick={setPreview.toggle}
                    className="min-w-32"
                >
                    {preview ? "Hide preview" : "Preview"}
                </Button>
                {
                    isCreate ? (
                        <Button
                            variantType="intent" intent="success"
                            className="min-w-24"
                            onClick={postBlog}
                        >
                            Post content
                        </Button>
                    ) : (
                        <Button
                            variantType="intent" intent="primary"
                            className="min-w-24"
                            onClick={saveBlog}
                        >
                            Save content
                        </Button>
                    )
                }

            </div>
            {
                preview ? (
                    <div className="ql-snow border rounded">
                        <BlogQuillPreview
                            className="ql-editor"
                            json={values.json}
                        />
                    </div>
                ) : null
            }
        </div>
    );
};

export default BlogQuillEditor;