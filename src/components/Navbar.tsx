"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/navigation"
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from "clsx"
import {NavLink} from "@/src/types/navigation";


const activeLinkClassNames = clsx("bg-gradient-to-r from-primary-variant to-primary ", "text-white rounded-xl")
const passiveLinkClassNames = "text-secondary hover:translate-x-1.5 lg:hover:bg-clip-text lg:hover:text-transparent lg:hover:bg-gradient-to-r lg:hoverbg-gradient-to-r from-primary-variant to-primary "

export default function Navbar() {
    const t = useTranslations('Navigation')

    const list: NavLink[]  = [
        {name: t("home"), url: "/"},
        {name: t("about"), url: "/about"},
        {name: t("certificates"), url: "/certificates"},
    ]
    
    return (
        <div className="lg:bg-white bg-transparent p-3 lg:shadow-lg rounded-3xl">
            <div className="lg:block flex justify-center"> 
                {list.map((el, i) => (
                    <NavigationOption {...el} key={i}/>
                ))}
            </div>
        </div>
    )
}


function NavigationOption({ name, url }: NavLink) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  
    return (
        <div className="mb-1">        
            <Link href={url}>
                <h4 className={clsx(
                    url == pathname ? activeLinkClassNames : passiveLinkClassNames, 
                    "lg:text-2xl text-lg font-bold px-2 py-1 transition-all ease-in-out",
                )}>{name}</h4>
            </Link> 
        </div>
    )
}