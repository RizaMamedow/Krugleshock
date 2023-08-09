'use client';

import {useTranslations} from 'next-intl';
import Image from "next/image";
import * as React from "react";
import Config from "../../../logics/config";

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
export default function Page() {
    const t = useTranslations();

    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">{t("about.baseHeader")}</h3>
            <AboutContent />
            <br/>
            <a href={Config.links.repo} className="text-primary">{t("about.repo")}</a>
        </div>
    )
}