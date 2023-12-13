/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, content-type, Authorization',
                    },
                ],
            },
        ];
    },
    webpack(config) {
        config.optimization.runtimeChunk = 'single';
        return config;
    }
}

module.exports = nextConfig
