import {Blog, BlogAttributes} from "@src/database/models";
import {isEmpty, isNull} from "lodash";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {NextRequest, NextResponse} from "next/server";

export async function PUT(request: NextRequest, context: { params: Params }) {
    const {id, ...payload} = await request.json() as BlogAttributes
    const blog = await Blog.findOne(
        {
            where: {
                id
            }
        }
    )

    if (isNull(blog)){
        return NextResponse.json(
            {},
            {
                status: 204
            }
        )
    }

    blog.set(payload)
    await blog.save()
    return NextResponse.json(
        blog.toJSON()
    )
}

export async function DELETE(request: NextRequest, context: { params: Params }) {
    const {id, ...payload} = await request.json() as BlogAttributes
    const blog = await Blog.findOne(
        {
            where: {
                id
            }
        }
    )

    if (isNull(blog)){
        return NextResponse.json(
            {},
            {
                status: 204
            }
        )
    }

    blog.set(payload)
    await blog.save()
    return NextResponse.json(
        blog.toJSON()
    )
}

export async function GET(request: NextRequest, context: { params: Params }) {

    const blog = await Blog.findOne(
        {
            where: {
                slug: context.params.slug
            }
        }
    )

    return NextResponse.json(
        isNull(blog) ? {} : blog.toJSON()
    )
}