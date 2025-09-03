
import { NextResponse } from "next/server";


export function middleware(request) {
  // Read cookie
  const user = '';

    if(!user){
      return NextResponse.redirect(new URL("/login", request.url));
    }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/about/:path*', '/dashboard/jobs', '/companies'],
}