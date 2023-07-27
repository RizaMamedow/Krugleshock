import { Html, Head, Main, NextScript } from 'next/document'
import * as React from "react";

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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6KNDXGB249"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6KNDXGB249');
                </script>
            </body>
        </Html>
    )
}