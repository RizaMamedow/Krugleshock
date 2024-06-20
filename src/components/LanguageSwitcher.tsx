'use client';

import {useLocale, useTranslations} from 'next-intl';
import {locales} from '@/src/config';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';


export default function LanguageSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <div className='lg:bg-white lg:shadow-xl lg:rounded-xl'>
            <LanguageSwitcherSelect defaultValue={locale} label={t('label')}>
                {locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {t('locale', {locale: cur})}
                    </option>
                ))}
            </LanguageSwitcherSelect>
        </div>
    );
}
