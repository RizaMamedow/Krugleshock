import { useTranslations } from "next-intl";
import Image from "next/image";


const Avatar = () => (
    <div className="p-2 pt-0">
        <Image
            src="/assets/avatar.jpg"
            width={250}
            height={250}
            alt="Picture of the author"
            className="rounded-full slow-spin-animation"
        />
    </div>
);

export default function Home() {
    const t = useTranslations("Home");
	
	return (
		<div>
			 <div className="grid grid-cols-1 md:grid-cols-4 align-center">
                <div className="mb-3 md:hidden flex justify-center">
                    <Avatar/>
                </div>
                <div className="col-span-3">
                    <h3 className="text-3xl font-bold text-secondary">{t('header')} <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#FF6F6F]">{t('authorName')}</span>.</h3>
                    <p className="text-secondary mt-1 text-xl">
                        {t.rich('text', {
							br: () => (<><br/><br/></>),
						})}
                    </p>
                </div>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
            </div>
		</div>
	);
}
