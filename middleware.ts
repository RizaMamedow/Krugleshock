import createMiddleware from 'next-intl/middleware';
import Config from "./logics/config";

export default createMiddleware({
    locales: Config.localeConfig.locales,
    defaultLocale: Config.localeConfig.defaultLocale
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};