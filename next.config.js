// @ts-check
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'] /**
		,
		experimental: {
			mdxRs: true
		}
	*/
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm]
	}
});

export default withMDX(nextConfig);
