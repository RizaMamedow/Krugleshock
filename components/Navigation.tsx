import * as React from "react";
import Link from 'next/link';
import {usePathname} from "next/navigation";

interface INavigationItem {
    value: string;
    url: string;
}

const pages: INavigationItem[] = [
    {
        value: 'HOME',
        url: '/',
    },
    {
        value: 'ABOUT',
        url: '/about',
    },
    {
        value: 'CERTIFICATES',
        url: '/certificates',
    },
];

const ItemDefaultClassNames: string = "text-2xl md:text-4xl text-center  md:text-start transition-all ease-in-out delay-10";

const Item: React.ReactNode = ({ value, url } : INavigationItem) => {
    return <Link className={"hover:text-primary font-bold text-white hover:ml-4" + " " +ItemDefaultClassNames}
                 href={url}>
        {value}
    </Link>
};


const ActiveItem: React.ReactNode = ({ value, url } : INavigationItem) => {
    return <Link className={"font-black text-black" + " " + ItemDefaultClassNames}
                 href={url}>
        <span className="bg-primary my-2 p-1 rounded-sm">
            {value}
        </span>
    </Link>
};


export const Navigation: React.FC = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className="grid grid-col-1 mb-10 md:mb-0 md:mt-16 gap-2">
                {pages.map((item, index) => {
                    if (pathname == item.url) return <ActiveItem key={index} {...item} />;
                    else return <Item key={index} {...item}/>;
                })}
            </div>
        </div>
    )
};
