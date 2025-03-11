/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com', 
      'images.unsplash.com', 
      'plus.unsplash.com',
      'communionhub.org'
    ]
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dwxvbxuqu',
    NEXT_PUBLIC_CLOUDINARY_API_KEY: '121673858415469',
    NEXT_PUBLIC_CLOUDINARY_API_SECRET: 'kmkvw2KCp24O2WzdYX38yE_l41g'
  }
}

module.exports = nextConfig 