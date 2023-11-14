/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.optimization.runtimeChunk = 'single';
        return config;
    }
}

module.exports = nextConfig
