import clsx from "clsx"
import { useTranslations } from "next-intl"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    weight: ['400', '700', '800', '900'],
    subsets: ['latin']
})

export default function BrandSide() {
	const t = useTranslations("Header")
	return (
		<div className={clsx(playfair.className, "flex justify-center items-center mt-5 mb-7 flex-col gap-2")}>
			<h1 className="text-secondary md:text-7xl text-5xl font-black">Krugleshock<span className="text-primary">!</span></h1>
			<p className="font-regular text-xs text-start text-gray-500">{t("subtitle")}</p>
		</div>
	)
}
