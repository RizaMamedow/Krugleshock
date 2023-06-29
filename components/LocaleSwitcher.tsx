import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';
import * as React from "react";
import Link from 'next/link';
import {FaLanguage} from "react-icons/fa";

export function LocaleSwitcher() {
    const t = useTranslations('component');

    const {locale, locales, route} = useRouter();
    const otherLocale = locales?.find((cur) => cur !== locale);

    return (
        <Link
            href={route}
            locale={otherLocale}
            className="p-1 text-white flex flex-row align-center text-center hover:bg-primary hover:text-black rounded-sm">
            <span>{t('switcher.switchLocale', {locale: otherLocale})}</span>
            <FaLanguage className="text-2xl ml-2"/>
        </Link>
    );
}