
import {NextResponse} from "next/server";
import {Blog} from "@src/database/models";

export async function POST(request: Request, response: Response) {
    const payload = await request.json()
    try {
        const blog = await Blog.create(
            {
                ...payload
            }
        )

        return NextResponse.json(
            blog.toJSON()
        )
    }catch (error) {
        return NextResponse.json(
            error
        )
    }

}

export async function GET(request: Request, response: Response) {

    return NextResponse.json(
        await Blog.findAll() ?? []
    )
}