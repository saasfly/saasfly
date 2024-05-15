import {NextRequest, NextResponse} from "next/server";
import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import {i18n} from "~/config/i18n-config";
import {auth} from "@saasfly/auth";

const noNeedProcessRoute = [".*\\.png", ".*\\.jpg", ".*\\.opengraph-image.png"];

const noRedirectRoute = ["/api(.*)", "/trpc(.*)", "/admin"];

const publicRoute = [
  "/(\\w{2}/)?signin(.*)",
  "/(\\w{2}/)?terms(.*)",
  "/(\\w{2}/)?privacy(.*)",
  "/(\\w{2}/)?docs(.*)",
  "/(\\w{2}/)?blog(.*)",
  "/(\\w{2}/)?pricing(.*)",
  "^/\\w{2}$", // root with locale
];

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = Array.from(i18n.locales);
  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
      locales,
  );
  return matchLocale(languages, locales, i18n.defaultLocale);
}

function isNoRedirect(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noRedirectRoute.some((route) => new RegExp(route).test(pathname));
}

function isPublicPage(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return publicRoute.some((route) => new RegExp(route).test(pathname));
}

function isNoNeedProcess(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noNeedProcessRoute.some((route) => new RegExp(route).test(pathname));
}

// @ts-ignore
export default auth((req) => {
  if (isNoNeedProcess(req)) {
    return NextResponse.next();
  }
  const isWebhooksRoute = /^\/api\/webhooks\//.test(req.nextUrl.pathname);
  if (isWebhooksRoute) {
    return NextResponse.next();
  }
  const pathname = req.nextUrl.pathname;
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
          !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  // Redirect if there is no locale
  if (!isNoRedirect(req) && pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
        new URL(
            `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
            req.url,
        ),
    );
  }
  if (isPublicPage(req)) {
    return NextResponse.next();
  }
  // @ts-ignore
  const session = req.auth;
  const isAuth = !!session?.user;
  // @ts-ignore
  const isAdmin = session?.isAdmin;
  // @ts-ignore
  const isAuthPage = /^\/[a-zA-Z]{2,}\/(login|register)/.test(
      req.nextUrl.pathname,
  );
  const isAuthRoute = /^\/api\/trpc\//.test(req.nextUrl.pathname);
  const locale = getLocale(req);

  if (isAuthRoute && isAuth) {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    if (!isAuth || !isAdmin)
      return NextResponse.redirect(new URL(`/admin/login`, req.url));
    return NextResponse.next();
  }
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
    }
    return;
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }
    return NextResponse.redirect(
        new URL(`/${locale}/login?from=${encodeURIComponent(from)}`, req.url),
    );
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/", ],
};