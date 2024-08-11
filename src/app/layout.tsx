import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { RootUrl } from '@/lib/constants';
import { OpenSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		absolute: 'Stack Underflow Club',
		default: 'Stack Underflow Club',
		template: '%s | SUC'
	},
	description: 'A CHS club of coders and AI/ML enthusiasts',
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: 'Stack Underflow Club',
		description: 'A CHS club of coders and AI/ML enthusiasts',
		countryName: 'United States',
		siteName: 'Stack Underflow Club'
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
			<head />
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
