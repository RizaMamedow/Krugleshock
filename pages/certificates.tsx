import * as React from "react";
import Image from "next/image";
import {ICertificate} from "../logics/interfaces";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import axios from "axios";


const CertificatesPage: React.FC = () => {
    const t = useTranslations();
    const [certificates, setCertificates] = useState<ICertificate[]>([]);

    useEffect(() => {
        axios.get("/api/certificates").then((res) => {
            setCertificates(res.data)
        })
    }, []);

    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">{t('certificates.baseHeader')}</h3>
            <div className="container grid grid-cols-2 gap-3 xl:grid-cols-3 mt-2">
                {certificates.map((item: ICertificate, index) => {
                    return (
                        <div key={index}>
                            <a href={item.url}>
                                <div className="p-1 rounded-sm bg-zinc-900 transition-all easy-in-out hover:bg-zinc-800 h-full">
                                    <Image
                                        className="rounded-sm"
                                        src={item.url}
                                        width={200}
                                        height={200}
                                        alt={"Riza Mamedow's certificate: " + " " +item.technology} />
                                    <p className="text-white text-xs text-center mt-1">{item.technology}</p>
                                    <p className="text-zinc-500 text-xs text-center mt-1">{item.date}</p>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
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

export default CertificatesPage;