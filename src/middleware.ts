import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const {url, nextUrl: {pathname}} = request

    if (pathname.startsWith('/en')) {
        const rewrite = request.nextUrl.clone();
        rewrite.pathname = pathname.replace("/en", "")
        rewrite.searchParams.set("language", "en");
        return NextResponse.rewrite(rewrite)
    }

    if (pathname.startsWith('/vi')) {
        const rewrite = request.nextUrl.clone();
        rewrite.pathname = pathname.replace("/vi", "")
        rewrite.searchParams.set("language", "vi");
        return NextResponse.rewrite(rewrite)
    }

    request.nextUrl.searchParams.set("language", "vi");
    return NextResponse.next()
}

export const config = {
    matcher: ['/vi/:path*', '/en/:path*'],
}