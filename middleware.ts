import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // 현재 경로가 '/upcoming'과 /adx.txt 이 아닌 경우 리다이렉트
  const url = req.nextUrl;
  const isAdmin = req.cookies.get("admin");
  if (
    url.pathname !== "/upcoming" &&
    process.env.NODE_ENV !== "development" &&
    url.pathname !== "/ads.txt" &&
    url.pathname !== "/robots.txt" &&
    !isAdmin
  ) {
    url.pathname = "/upcoming";
    return NextResponse.redirect(url);
  }

  // 다른 경우에는 원래 요청을 유지
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
