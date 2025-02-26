/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Menambahkan atau mengubah konfigurasi Webpack agar lebih fleksibel
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true, // Ini akan mengabaikan error eslint saat build
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "unsafe-none", // Nonaktifkan sementara
                    },
                    {
                        key: "Cross-Origin-Embedder-Policy",
                        value: "unsafe-none",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
