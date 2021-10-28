const API_URI = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const API_V1 = `${API_URI}${API_VERSION}`;

module.exports = {
    poweredByHeader: false,
    async rewrites() {
        // Re-write condition if source path is /api/*
        // The destination is pointing to server application
        return [
            {
                source: `${API_VERSION}/:path*`,
                destination: `${API_V1}/:path*`,
            },
            {
                source: `/static/:path*`,
                destination: `${API_URI}/static/:path*`,
            },
        ];
    },
};
