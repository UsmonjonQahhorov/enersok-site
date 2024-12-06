import { locales } from '@/configs/i18n.config';
import { routing } from '@/i18n/routing';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';
import '@/styles/global.css';
import type { DynamicMetadata, LayoutType } from '@/types/component.types';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;

	return {
		title: 'Enersok',
		description:
			locale === 'en'
				? 'Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), which entered into public-private partnership agreement for construction of a Gas Combined Cycle Power Plant with capacity of 1,6 GW in Syrdarya region, Uzbekistan (On March 25, 2022). The key purpose of the Company is to carry out construction,  operation and maintenance activities in future. The commercial operation date is expected in 2026. The electricity produced will be sold to Uzbek state-owned power company JSC National Electricity Grid of Uzbekistan for a duration of 25 years. It will be one of the nation’s largest power generating facilities upon completion and will be instrumental in helping the country meet its growing energy demands from both industry and residential sectors.'
				: 'Enersok FE LLC 2022 yilida Fransuz Elektr Energiya Korporatsiyasi (EDF), Nebras Power (Qatar), Sojitz Korporatsiyasi va Kyuden International (Yaponiya) konsortsiumi tomonidan tashkil etilgan, 2022 yil 25-martda O‘zbekiston Respublikasi Syrdarya viloyatida 1,6 GW kuchli gaz kombinatsion turbinli elektrostantsiya qurilishiga doir davlat-xususiy sheriklik shartnomasi imzolangan. Kompaniya asosiy maqsadi kelajakda qurilish, ishlab chiqarish va xizmat ko‘rsatish faoliyatlarini amalga oshirishdir. Savdo faoliyatlarining boshlanish sanasi 2026 yilda kutib olinadi. Ishlab chiqarilayotgan elektr energiya O‘zbekiston Respublikasi Davlat elektr energiyasi tarmoqlari milliy aktsioner jamiyati (JSC National Electricity Grid of Uzbekistan)ga 25 yil davomida sotiladi. Ish boshlashidan so‘ng bu mamlakatning sanoat va aholi sektorlaridan kelib chiqayotgan energiya talablari bilan uchrashishda katta ahamiyatga ega bo‘ladi.',
		robots: 'index, follow',
		manifest: '/site.webmanifest',
		keywords:
			locale === 'en'
				? ['Enersok', 'Enersok company', 'Enersok energy']
				: ['Enersok', 'Enersok kompaniyasi', 'Enersok energiya'],
		openGraph: {
			title: 'Enersok',
			type: 'website',
			url: 'https://example.com',
			description:
				locale === 'en'
					? 'Enersok is a company that provides energy solutions for your home or business. We offer solar panels, battery storage, and electric vehicle charging stations to help you save money on your energy bills and reduce your carbon footprint.'
					: 'Enersok kompaniyasi uy yoki biznesingiz uchun energiya echimlarini taqdim etadi. Energiya hisobingizni tejash va karbon oʻtkazmangizni kamaytirish uchun quyidagi mahsulotlarni taklif qilamiz: quyosh paneli, batareya saqlash va elektr transport vositalarini zaryadlash stantsiyalari.',
			locale: locale,
		},
		twitter: {
			card: 'summary_large_image',
		},
	};
};

export const generateStaticParams = async () => {
	return locales.map((locale) => ({ locale }));
};

const RootLayout: LayoutType = async ({ children, params }) => {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}

	return (
		<html
			lang={locale}
			className={cn('text-balance antialiased font-mori scroll-smooth')}
		>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="Enersok" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body>
				<NextIntlClientProvider>
					<Header locale={locale} />
					<main>{children}</main>
					<Footer locale={locale} />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
