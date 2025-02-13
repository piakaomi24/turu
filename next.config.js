/** @type {import('next').NextConfig} */
const nextConfig = {
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
