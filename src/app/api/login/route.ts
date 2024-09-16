import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function POST(request: Request) {
    const {username, password} = await request.json()
    // const account = await Account.findOne(
    //     {
    //         where: {
    //             username
    //         }
    //     }
    // )
    //
    // if (!account) {
    //     return NextResponse.json(
    //         {
    //             status: 404,
    //             message: "Account not found"
    //         }
    //     )
    // }

    // if (account.password !== password) {
    //     return NextResponse.json(
    //         {
    //             status: 401,
    //             message: "Invalid password"
    //         }
    //     )
    // }
    //
    // return NextResponse.json(
    //     {
    //         status: 200,
    //         message: "Login success"
    //     }
    // )

    if (username === "admin" && password === "admin") {
        cookies().set('username', username, {secure: true})
        return NextResponse.json(
            {
                status: 200,
                message: "Login success"
            }
        )
    }

    return NextResponse.json(
        {
            status: 401,
            message: "Invalid password"
        }
    )
}

// export async function GET(request: Request, response: Response) {
//
//     return NextResponse.json(
//         await Member.findAll()
//     )
// }