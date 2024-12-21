import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {LOCALES, PATHNAMES, LOCAL_PREFIX} from './configurations';

export const {Link, getPathname, redirect, usePathname, useRouter} = createLocalizedPathnamesNavigation({
    locales: LOCALES,
    pathnames: PATHNAMES,
    localePrefix: LOCAL_PREFIX
});