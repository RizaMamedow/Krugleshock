import "./[locale]/globals.css";
import clsx from "clsx";
import { Rubik_Mono_One } from "next/font/google"
import {useTranslations} from "next-intl";

const rubikMonoOne = Rubik_Mono_One({
    weight: ['400'],
})

export default function NotFound() {
    const t = useTranslations("NotFound");

    return (
        <main id="not-found">
            <div className="m-4 flex flex-col items-center justify-center">
                <div>
                    <h1 className={clsx(
                        rubikMonoOne.className,
                        "font-mono text-9xl font-black tracking-tight"
                    )}>4<span className="text-primary">0</span>4</h1>
                </div>
                <div className="text-xl text-center">
                    <h1>{t("title")}</h1>
                </div>
            </div>
        </main>
    )
}