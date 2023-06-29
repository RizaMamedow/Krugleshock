import * as React from "react";
import Image from 'next/image'
import {RefsBox} from "../components/";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";


const Avatar = () => (
    <div className="p-2 pt-0">
        <Image
            src="/avatar.jpg"
            width={250}
            height={250}
            alt="Picture of the author"
            className="rounded-full slow-spin-animation"
        />
    </div>
);

const HomePage: React.FC = () => {
    const t = useTranslations();

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-5 align-center">
                <div className="mb-3 md:hidden flex justify-center">
                    <Avatar/>
                </div>
                <div className="col-span-3">
                    <h3 className="text-3xl font-bold text-white">{t('index.baseHeader')} <span className="text-primary">{t('author.firstname')}</span></h3>
                    <p className="text-white mt-5 text-xl">
                        {t('index.text')}
                    </p>
                </div>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
            </div>
            <RefsBox />
        </>
    )
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
    // noinspection TypeScriptCheckImport
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}

export default HomePage;