import { Metadata } from 'next';
import {ReactNode} from "react";


export const metadata: Metadata = {
    title: 'Krugleshok | Certificates',
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