import * as React from "react";
import Image from "next/image";
import {ICertificate} from "../logics/interfaces";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import axios from "axios";
import {Oval} from "react-loader-spinner";


const CertificatesPage: React.FC = () => {
    const t = useTranslations();
    const [certificates, setCertificates] = useState<ICertificate[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get("/api/certificates").then((res) => {
            setCertificates(res.data);
            console.log(res.data);
            setLoading(false);
            console.log(isLoading)
        })
    }, []);

    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">{t('certificates.baseHeader')}</h3>
            {!isLoading ? (
                <div className="container grid grid-cols-2 gap-3 xl:grid-cols-3 mt-2">
                    {certificates.map((item: ICertificate, index) => (
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
                    ))}
                </div>
            ) : (
                    <Oval
                        height={80}
                        width={80}
                        color="#FFD51E"
                        wrapperClass="flex justify-center items-center h-[300px]"
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#b4941a"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                    />
            )}
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