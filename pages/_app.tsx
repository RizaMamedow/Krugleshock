import * as React from "react";
import '../styles/globals.css';
import {AppHeader, Navigation} from "../components";
import {NextIntlClientProvider} from "next-intl";
import {LocaleSwitcher} from "../components";
import {SiVercel, SiNextdotjs} from "react-icons/si";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps: { ...pageProps }}) {
    return (
        <>
            <NextIntlClientProvider messages={pageProps.messages}>
                <div className='pt-5 md:pt-10 min-h-screen px-15 lg:px-52 pb-10'>
                    <div className="flex align-center flex-col">
                        <AppHeader/>
                        <div className="m-2 flex justify-end flex-row">
                            <LocaleSwitcher />
                        </div>
                        <div className="mt-5 md:mt-15 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
                            <Navigation/>
                            <div className="col-span-2 p-5 pt-0">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-6 text-white text-sm italic flex justify-center content-center">
                    Built with <SiNextdotjs className="mx-1 mt-0.5"/> Next.js, deployed with <SiVercel className="mx-1 mt-0.5"/> Vercel
                </div>
            </NextIntlClientProvider>
            <Analytics />
        </>
    );
};