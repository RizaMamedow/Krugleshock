'use client'

import {useTranslations, useLocale} from 'next-intl';
import * as React from "react";
import Link from 'next-intl/link';
import {FaLanguage} from "react-icons/fa";
import {getLocaleFromPathname} from "next-intl/src/middleware/utils";
import {useEffect} from "react";

export function LocaleSwitcher() {
    const t = useTranslations('component');
    const locale = useLocale()
    const otherLocale = ['ru', 'en'].find((cur) => cur !== locale);

    return (
        <Link
            href='/'
            locale={otherLocale}
            className="p-1 text-white flex flex-row align-center text-center hover:bg-primary hover:text-black rounded-sm">
            <span>{t('switcher.switchLocale', {locale: otherLocale})}</span>
            <FaLanguage className="text-2xl ml-2"/>
        </Link>
    );
}