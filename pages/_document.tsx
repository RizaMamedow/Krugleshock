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
            </body>
        </Html>
    )
}