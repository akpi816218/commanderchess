import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/twui-utils';
import { RootUrl } from '@/lib/constants';
import { OpenSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		absolute: '',
		default: '',
		template: ''
	},
	description: '',
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: '',
		description: '',
		countryName: 'United States',
		siteName: ''
	},
	icons: [`${RootUrl}/logo.webp`]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					OpenSans.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
