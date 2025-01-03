import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const LOCALES = ['ru', 'en']

export const PATHNAMES: Pathnames<typeof LOCALES> = {
    '/': '/',
};

export const LOCAL_PREFIX: LocalePrefix<typeof LOCALES> = 'always';

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/krugleshock/",
    telegram: "https://t.me/krugleshock",
    linkedin: "https://www.linkedin.com/in/rizamamedow/",
    github: "https://github.com/RizaMamedow",
    repository: "https://github.com/RizaMamedow/Krugleshock",
}