'use client'

import { certificateGroup, Certificate } from "@/src/types/certificateGroup";
import { useTranslations } from "next-intl";
import Image from "next/image"
import {CSSProperties, useState} from "react";


const zoomedImageStyles: CSSProperties =  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 1000,
    cursor: "pointer"
}

export default function CertificatesPage() {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const openZoomedImage = (imageUrl: string) => {
        setZoomedImage(imageUrl);
    };

    const closeZoomedImage = () => {
        setZoomedImage(null);
    };

    const t = useTranslations("Certificates");

    return (
        <section>
            <h3 className="text-3xl font-semibold text-secondary">{t('header')}</h3>
            <div className="container grid grid-cols-2 gap-4 xl:grid-cols-3 mt-2">
                {certificateGroup.map((item: Certificate, index) => {
                    return (
                        <div key={index}>
                            <a>
                                <div
                                    onClick={() => openZoomedImage(item.url)}
                                    className="rounded-2xl flex items-center flex-col transition-all easy-in-out hover:shadow-xl ">
                                    <div className="h-[150px] w-full relative">
                                        <Image className="rounded-t-2xl"
                                            src={item.url}
                                            fill
                                            sizes="300px"
                                            alt={"certificate: " + " " + item.technology} 
                                        />    
                                    </div>
                                    <div className="bg-zinc-100 pb-2 pt-1 w-full rounded-b-2xl">
                                        <p className="text-secondary text-sm text-center mt-1">{item.technology}</p>
                                        <p className="text-gray-500 text-xs text-center mt-1">{item.date}</p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    )
                })}
                {zoomedImage && (
                    <div style={zoomedImageStyles} onClick={closeZoomedImage}>
                        <Image src={zoomedImage} layout="fill" objectFit="contain"  alt="zoomedImage"/>
                    </div>
                )}
            </div>
        </section>
    )
};