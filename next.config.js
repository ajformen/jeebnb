const hostnames = [
    "res.cloudinary.com"
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: hostnames?.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    }
}

module.exports = nextConfig
