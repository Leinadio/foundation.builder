import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['fr', 'en']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locale = match(languages, locales, defaultLocale)
  return locale
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Gestion des locales
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const url = new URL(`/${locale}${pathname}`, request.url)
    url.search = request.nextUrl.search
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Matcher pour les routes localisées et /app
    '/((?!api|_next|_static|_vercel\\..*|images|videos|icon|fonts|favicon\\.ico).*)',
    '/:lang/app/:path*'
  ]
} 