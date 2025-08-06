import { getRequestConfig } from 'next-intl/server';
import { LOCALES, DEFAULT_LOCALE } from '@/src/configurations';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const finalLocale = locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default
  };
});
