import type { Metadata } from "next";
import { Piazzolla } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import References from '@/src/components/References';
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import clsx from "clsx";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: "Krugleshock | Riza Mamedow",
	description: "Riza Mamedow's portfolio website",
	authors: {
		name: "Riza Mamedow",
		url: "krugleshock.vercel.app"
	},
	robots: "index, follow", 
	icons: {
		icon: "/favicon.ico"
	}
};

const piazzolla = Piazzolla({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	subsets: ['latin', 'cyrillic']
})

export default async function RootLayout({
	children
}: {
  	children: React.ReactNode;
}) {
  	const locale = await getLocale();
	const messages = await getMessages();
	

	const BottomSide = () => (
		<>
			<References />
			<LanguageSwitcher />
		</>
	)

	return (
		<html lang={locale}>
			<body className="bg-background">
				<NextIntlClientProvider messages={messages}>
					<main className={clsx(piazzolla.className, "xl:px-52 md:px-24 p-3 px-2")}> 
						<Header />
						
						<div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-5 gap-1">
							<div className="lg:col-span-2 col-span-1">
								<Navbar />
								<div className="my-3 justify-between lg:flex hidden">
									<BottomSide />
								</div>	

							</div>
							<div className="lg:col-span-5 col-span-1">
								<div className="bg-white shadow-lg rounded-2xl">
									<div className="py-4 lg:px-4 px-3">
										{children}
									</div>
									<div className="pb-2 justify-between lg:hidden flex">
										<BottomSide/>
									</div>
								</div>
							</div>
						</div>
					</main>
				</NextIntlClientProvider>

				<SpeedInsights />	
			</body>
		</html>
	);
}