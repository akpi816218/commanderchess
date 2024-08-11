'use client';

import SnowIn from 'react-snowfall';

export default function Snowfall() {
	return <SnowIn radius={[0.5, 2]} speed={[1, 2]} wind={[-1, 0.5]} />;
}
