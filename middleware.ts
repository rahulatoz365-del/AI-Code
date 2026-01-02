// middleware.ts (in project root)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';
    const { pathname } = request.nextUrl;

    // Protected routes
    const protectedRoutes = ['/dashboard', '/designs', '/credits', '/view-code'];
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    // Not logged in + trying to access protected route = redirect to home
    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/designs/:path*', '/credits/:path*', '/view-code/:path*']
};