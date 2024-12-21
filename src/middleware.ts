import createMiddleware from 'next-intl/middleware';
import {LOCALES} from "@/src/configurations";


export default createMiddleware({
  locales: LOCALES,
  defaultLocale: LOCALES[0]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*']
};