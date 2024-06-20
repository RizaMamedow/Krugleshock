import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const locales = ['ru', 'en']

export const pathnames: Pathnames<typeof locales> = {
    '/': '/',
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const Links = {
    instagram: "https://www.instagram.com/krugleshock/",
    telegram: "https://t.me/krugleshock",
    linkedin: "https://www.linkedin.com/in/rizamamedow/",
    github: "https://github.com/RizaMamedow",
    repository: "https://github.com/RizaMamedow/Krugleshock",
}