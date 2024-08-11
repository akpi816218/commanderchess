'use client';

import { Element } from 'react-scroll';

export default function ScrollTarget({ name }: { name: string }) {
	return <Element name={name} />;
}
