import {NextResponse} from "next/server";
import {ConsultationRequest} from "@src/database/models";

export async function POST(request: Request, response: Response) {
    const payload = await request.json()
    try {
        await ConsultationRequest.create(
            {
                ...payload
            }
        )

        return NextResponse.json(
            {
                message: "Hello World"
            }
        )
    }catch (error) {
        return NextResponse.json(
            error
        )
    }

}

export async function GET(request: Request, response: Response) {

    return NextResponse.json(
        await ConsultationRequest.findAll() ?? []
    )
}