'use client'
import { Links } from "@/src/config"
import clsx from "clsx"
import { useTranslations } from "use-intl"

export default function AboutPage() {
    const t = useTranslations("About")

    return (
        <section>
            <h2 className="text-2xl font-semibold text-secondary">{t("header")}</h2>
            <p className="text-secondary text-md">{t.rich("content", {
                br: () => (
                    <><br /><br /></>
                )
            })}</p>
            <br/>
            <a href={Links.repository} target="_blank" className="text-primary text-xl hover:underline">{t('repo')}</a>
        </section>
    )
}