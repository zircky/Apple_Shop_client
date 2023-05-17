/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `https://77ro4w-4200.csb.app/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
