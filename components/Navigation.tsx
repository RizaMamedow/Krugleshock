"use client"

import * as React from "react";
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {useEffect} from "react";
import Config from "../logics/config";

interface INavigationItem {
    value: string;
    url: string;
    uniqueSegment?: string;
    active?: boolean
}

const ItemDefaultClassNames: string = "text-ellipsis overflow-hidden text-2xl md:text-4xl text-center  md:text-start transition-all ease-in-out delay-10";
const ItemHoverClassNames: string = "hover:text-primary hover:ml-4"
const Item = ({ value, url, active } : INavigationItem) => (
    <Link className={`${!active ? `${ItemHoverClassNames} font-bold text-white ` : 'font-black text-black'} ${ItemDefaultClassNames}`}
          href={url}>
        {!active ? value : (
            <span className="bg-primary my-2 p-1 rounded-sm">
                {value}
            </span>
        )}
    </Link>
);


export const Navigation: React.FC = () => {
    const pathname = usePathname();
    const t = useTranslations();
    const locale = useLocale();
    const pages: INavigationItem[] = [
        {
            value: t("component.navs.1"),
            url: `/`,
        },
        {
            value: t("component.navs.2"),
            url: `/about`,
        },
        {
            value: t("component.navs.3"),
            url: `/certificates`,
        },
    ];

    return (
        <div>
            <div className="grid grid-col-1 mb-5 md:mb-0 md:mt-16 gap-2">
                {pages.map((item, index) => {
                    return <Item key={index} {...item}
                                 active={locale == Config.localeConfig.defaultLocale ?  pathname === item.url
                                     : pathname === (item.url === '/' ? `/en` : `/en${item.url}`)}/>;
                })}
            </div>
        </div>
    )
};
