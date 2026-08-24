import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip Next internals, API routes, and any request for a literal file
  // (favicon.svg, robots.txt, sitemap.xml, logo-mark.png, …) — those are
  // site-wide, not per-locale.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
