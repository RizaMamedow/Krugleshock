import { certificates, ICertificate } from "@/src/data/certificates";
import { useTranslations } from "next-intl";
import Image from "next/image"

export default function CertificatesPage() {
    const t = useTranslations("Certificates");

    return (
        <div>
            <h3 className="text-3xl font-semibold text-secondary">{t('header')}</h3>
            <div className="container grid grid-cols-2 gap-4 xl:grid-cols-3 mt-2">
                {certificates.map((item: ICertificate, index) => {
                    return (
                        <div key={index}>
                            <a href={item.url}>
                                <div className="rounded-2xl flex items-center flex-col transition-all easy-in-out hover:shadow-xl ">
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
            </div>
        </div>
    )
};