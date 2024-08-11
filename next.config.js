// @ts-check

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

export default nextConfig;
