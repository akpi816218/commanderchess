'use client';

import { useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';

export default function ScrollLink({
	to,
	duration,
	className,
	children
}: {
	to: string;
	duration?: string | number | ((distance: number) => number);
	className?: string;
	children: React.ReactNode;
}) {
	useEffect(() => scrollSpy.update());

	return (
		<Link to={to} duration={(d: number) => d} className={className}>
			{children}
		</Link>
	);
}
