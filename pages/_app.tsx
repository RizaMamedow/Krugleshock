import * as React from "react";
import './globals.css';
import {AppHeader, ContentBox, Navigation} from "../components";


export default function App({ Component, pageProps: { session, ...pageProps }}) {
    return (
        <div className='pt-5 md:pt-10 min-h-screen px-15 lg:px-52 pb-10'>
            <div className="flex align-center flex-col ">
                <AppHeader/>
                <ContentBox>
                    <Navigation/>
                    <div className="col-span-2 p-5">
                        <Component {...pageProps} />
                    </div>
                </ContentBox>
            </div>
        </div>
    )
}