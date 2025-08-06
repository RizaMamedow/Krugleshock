import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "api2.sololearn.com"
            },
            {
                protocol: 'https',
                hostname: "stepik.org"
            }
        ]
    },
    allowedDevOrigins: ['*'],
    turbopack: {},
};
 
export default withNextIntl(nextConfig);