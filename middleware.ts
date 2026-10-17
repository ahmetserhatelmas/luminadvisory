import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "de", "nl"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/de/impressum" || pathname === "/impressum") {
    const url = request.nextUrl.clone();
    url.pathname = "/de/imprint";
    return NextResponse.redirect(url);
  }
  if (pathname === "/de/datenschutz" || pathname === "/datenschutz") {
    const url = request.nextUrl.clone();
    url.pathname = "/de/privacy";
    return NextResponse.redirect(url);
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
