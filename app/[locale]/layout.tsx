import {Metadata, ResolvingMetadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from "react";
import {GlobalLayout} from "../../components/GlobalLayout";
import '../../styles/globals.css';

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'ru'}];
}

export const metadata: Metadata = {
    title: 'Krugleshok | Riza Mamedow',
    description: "Riza Mamedow or Krugleshock - this is me and this site is about me!",
    robots: 'index, nofollow',
    keywords: 'Riza Mamedov, My achivements, Krugleshock, Риза Мамедов, Достижение, Кругляшок, Мой путь, About Riza Mamedow',
    authors: {
        url: "https://github.com/RizaMamedow",
        name: "Riza Mamedow"
    },
    icons: '/favicon.ico'
}

export default async function LocaleLayout(
    {children, params: {locale}}
        : {children: ReactNode, params: {locale: string}}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <GlobalLayout>
                        {children}
                    </GlobalLayout>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}