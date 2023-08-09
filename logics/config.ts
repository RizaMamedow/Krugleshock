const Config = {
    links: {
        instagram: process.env.INSTAGRAM_LINK,
        telegram: process.env.TELEGRAM_LINK,
        github: process.env.GITHUB_LINK,
        repo: process.env.REPOSITORY_LINK
    },
    localeConfig: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru'
    }
}

export default Config