import createMiddleware from 'next-intl/middleware';
import { LOCALES } from "@/src/configurations";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: LOCALES[0],
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
