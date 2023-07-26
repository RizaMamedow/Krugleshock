"use client"

import * as React from "react";
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

interface INavigationItem {
    value: string;
    url: string;
}

const ItemDefaultClassNames: string = "text-ellipsis overflow-hidden text-2xl md:text-4xl text-center  md:text-start transition-all ease-in-out delay-10";

const Item = ({ value, url } : INavigationItem) => {
    return <Link className={"hover:text-primary font-bold text-white hover:ml-4" + " " +ItemDefaultClassNames}
                 href={url}>
        {value}
    </Link>
};


const ActiveItem = ({ value, url } : INavigationItem) => {
    return <Link className={"font-black text-black" + " " + ItemDefaultClassNames}
                 href={url}>
        <span className="bg-primary my-2 p-1 rounded-sm">
            {value}
        </span>
    </Link>
};


export const Navigation: React.FC = () => {
    const pathname = usePathname();
    const t = useTranslations();

    const pages: INavigationItem[] = [
        {
            value: t("component.navs.1"),
            url: '/',
        },
        {
            value: t("component.navs.2"),
            url: '/about',
        },
        {
            value: t("component.navs.3"),
            url: '/certificates',
        },
    ];
    return (
        <div>
            <div className="grid grid-col-1 mb-5 md:mb-0 md:mt-16 gap-2">
                {pages.map((item, index) => {
                    if (pathname == item.url) return <ActiveItem key={index} {...item} />;
                    else return <Item key={index} {...item}/>;
                })}
            </div>
        </div>
    )
};
