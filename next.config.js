/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
  },
}

// Lets `next dev` read Cloudflare bindings (R2 cache) locally.
if (process.env.NODE_ENV === 'development') {
  require('@opennextjs/cloudflare').initOpenNextCloudflareForDev()
}
