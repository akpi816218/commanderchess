import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

function getInitialState() {
	return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
}

export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		useState(getInitialState);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		function listener(event: MediaQueryListEvent) {
			setPrefersReducedMotion(!event.matches);
		}
		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener('change', listener);
		} else {
			mediaQueryList.addListener(listener);
		}
		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener('change', listener);
			} else {
				mediaQueryList.removeListener(listener);
			}
		};
	}, []);
	return prefersReducedMotion;
}
