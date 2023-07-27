import { Html, Head, Main, NextScript } from 'next/document'
import * as React from "react";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Krugleshok | Riza Mamedov</title>
                <meta name="description"
                      content="Riza Mamedov's portfolio website"
                />
                <meta name="robots" content="index, nofollow" />
                <meta name="keywords" content="Riza Mamedov, Portfolio, Krugleshock" />
                <meta name="author" content="Riza Mamedov" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-6KNDXGB249" />
                <Script id="google-analytics">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
             
                      gtag('config', 'G-6KNDXGB249');
                    `}
                </Script>
            </body>
        </Html>
    )
}