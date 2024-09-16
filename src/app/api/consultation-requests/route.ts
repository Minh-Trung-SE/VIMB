import {ConsultationRequest} from "@src/database/models";
import NodemailerService from "@src/services/NodemailerService";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    const payload = await request.json()
    try {

        const consultationRequest = await ConsultationRequest.create(
            {
                ...payload
            }
        )

        const html = [
            "<h2>Contact</h2>",
            "<hr/>",
            `<p>Full Name: ${payload.fullName}</p>`,
            `<p>Location: ${payload.location}</p>`,
            `<p>Phone: ${payload.phone}</p>`,
            `<p>Preferred contact day and times: ${payload.message}</p>`,
            "<hr/>",
            "<h2>Questions</h2>",
            `<p>What is your primary goal in obtaining a Vanuatu citizenship?: <strong>${payload?.attributes["question-1"]}</strong></p>`,
            `<p>What do you know about Vanuatu and the benefits of its citizenship?: <strong>${payload?.attributes["question-2"]}</strong></p>`,
            `<p>Why do you want Vanuatu citizenship specifically?: <strong>${payload?.attributes["question-3"]}</strong></p>`,
            `<p>Our service fee is $20,000USD for straight forward applications, what do you think of this fee?: <strong>${payload?.attributes["question-4"]}</strong></p>`,
            `<p>How soon will you be ready to invest into Vanuatu’s economy to obtain your family’s citizenship?: <strong>${payload?.attributes["question-5"]}</strong></p>`,
        ].join("")

        NodemailerService.sendHtmlEmail(
            process.env.FORWARDING_EMAIL!,
            "New Consultation Request",
            `<div>${html}</div>`
        ).then(
            () => {
                consultationRequest.set(
                    "meta",
                    {
                        sent: true
                    }
                )
                consultationRequest.save()
            }
        ).catch(
            () => {
                consultationRequest.set(
                    "meta",
                    {
                        sent: false
                    }
                )
                consultationRequest.save()
            }
        )

        return NextResponse.json(
            {
                message: "Hello World"
            }
        )
    } catch (error) {
        return NextResponse.json(
            error
        )
    }
}

export async function GET() {

    return NextResponse.json(
        await ConsultationRequest.findAll() ?? []
    )
}