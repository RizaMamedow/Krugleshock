import { Metadata } from 'next';
import {ReactNode} from "react";


export const metadata: Metadata = {
    title: 'Krugleshok | About Me',
}

export default async function Layout(
    {children, params: {locale}}
        : {children: ReactNode, params: {locale: string}}) {
    return (
        <>
            {children}
        </>
    )
}