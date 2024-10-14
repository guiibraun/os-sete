/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'os-oito-admin.spookyhouse.site'
      }
    ]
  }
}

export default nextConfig
