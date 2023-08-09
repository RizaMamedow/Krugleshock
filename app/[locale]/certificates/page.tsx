'use client';

import {useTranslations} from 'next-intl';
import Image from "next/image";
import * as React from "react";
import {useEffect, useState} from "react";
import {ICertificate} from "../../../logics/interfaces";
import axios from "axios";
import {Oval} from "react-loader-spinner";

export default function Page() {
    const t = useTranslations();
    const [certificates, setCertificates] = useState<ICertificate[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get("/api/certificates").then((res) => {
            setCertificates(res.data);
            setLoading(false);
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
}