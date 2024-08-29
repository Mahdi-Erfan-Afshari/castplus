/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'deow9bq0xqvbj.cloudfront.net',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'pbcdn1.podbean.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn-arch.shenoto.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'assets.pippa.io',
				port: '',
				pathname: '/**',
			},
		],
	}
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig
