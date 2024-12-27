import { NextResponse } from "next/server";

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;

  if (!token && pathname.startsWith('/p-user')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login-register';
    return NextResponse.redirect(url);
  }

  if (token && pathname === '/login-register') {
    const url = request.nextUrl.clone();
    url.pathname = '/p-user'; 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/login-register', '/p-user', '/p-user/:path*'],
  runtime: 'nodejs',
};