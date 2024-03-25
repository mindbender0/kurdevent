import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define paths that are considered public (accessible without a token)
  const isPublicPath =
    path === '/' || path === '/sign-in' || path === '/sign-up'; // || path === '/verifyemail';

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || '';

  console.log(token);

  // Redirect logic based on the path and token presence
  if (isPublicPath && token) {
    // If trying to access a public path with a token, redirect to the home page
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // If trying to access a protected path without a token, redirect to the login page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
  }
}

// It specifies the paths for which this middleware should be executed.
// In this case, it's applied to '/', '/profile', '/sign-in', and '/sign-up'.
export const config = {
  matcher: ['/', '/profile', '/sign-in', '/sign-up', '/verifyemail'],
};
