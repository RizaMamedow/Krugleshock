import * as React from "react";
import {useTranslations} from "next-intl";
import {GetStaticPropsContext} from "next";

const AboutContent = () => {
    const t = useTranslations();

    return (
        <div className="text-white text-lg">
            <p className="mt-3">{t("about.content.1")}</p>
            <p className="mt-3">{t("about.content.2")}</p>
            <p className="mt-3">{t("about.content.3")}</p>
            <p className="mt-3">{t("about.content.4")}</p>
            <p className="mt-3">{t("about.content.5")}</p>
            <p className="mt-3">{t("about.content.6")}</p>
        </div>
    )
};

const AboutPage: React.FC = () => {
    const t = useTranslations();
    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">{t("about.baseHeader")}</h3>
            <AboutContent />
            <br/>
            <a href={process.env.REPOSITORY_LINK} className="text-primary">{t("about.repo")}</a>
        </div>
    )
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
    // noinspection TypeScriptCheckImport
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}

export default AboutPage;