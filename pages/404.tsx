import * as React from "react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";


const Error404: React.FC = () => {
    const t = useTranslations();

    const {push} = useRouter();

    useEffect(() => {
        setInterval(() => {
            push('/ru')
        }, 2000)
    }, [])

    return (
        <div className="flex justify-center items-center h-full flex-col text-center text-white">
            <h2 className=" font-black text-2xl">{t("page404.baseHeader")}</h2>
            <h6 className="font-normal text-xl">{t("page404.subheader")}</h6>
        </div>
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
export default Error404;