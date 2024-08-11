import {
	Open_Sans as OS,
	Source_Code_Pro as SCP,
	Vollkorn as V,
	Vollkorn_SC as VSC
} from 'next/font/google';

export const OpenSans = OS({
	subsets: ['latin'],
	variable: '--f-open-sans'
});

export const SourceCodePro = SCP({
	subsets: ['latin'],
	variable: '--f-source-code-pro',
	weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const Vollkorn = V({
	subsets: ['latin'],
	variable: '--f-vollkorn'
});

export const VollkornSC = VSC({
	subsets: ['latin'],
	variable: '--f-vollkorn-sc',
	weight: ['400', '600', '700', '900']
});
