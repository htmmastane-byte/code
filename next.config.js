/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // از webpack پیش‌فرض Next استفاده می‌کنیم؛ این قسمت برای هر نیاز سفارشی آینده آماده است.
    return config
  },
}

module.exports = nextConfig
