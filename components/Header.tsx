'use client'

import * as React from "react";
import {useTranslations} from "next-intl";

const textShadowStyles = {textShadow: "2px 2px #000, 4px 4px #ffd51e"};

export const AppHeader: React.FC = () => {
    const t = useTranslations();
    return (
        <h1 className="text-4xl md:text-7xl font-black italic text-white text-center text-border-size-2
         text-border-primary" style={textShadowStyles}>
            {t('component.header.title')}
        </h1>
    )
};

