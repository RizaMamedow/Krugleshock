'use client';

import {useLocale, useTranslations} from 'next-intl';
import {LOCALES} from '@/src/configurations';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';


export default function LanguageSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <div className='lg:bg-white lg:shadow-xl lg:rounded-xl'>
            <LanguageSwitcherSelect defaultValue={locale} label={t('label')}>
                {LOCALES.map((cur) => (
                    <option key={cur} value={cur}>
                        {t('locale', {locale: cur})}
                    </option>
                ))}
            </LanguageSwitcherSelect>
        </div>
    );
}
