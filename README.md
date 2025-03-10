# Communion - Interfaith Community Platform

A modern web application built with Next.js that connects faith communities and facilitates interfaith dialogue through events and programs.

## Features

- 🌟 Modern, responsive UI with Tailwind CSS
- 🎯 Event management system
- 🏛️ Program showcase and registration
- 🔍 Advanced search and filtering
- ⚡ Server-side rendering with Next.js
- 📱 Mobile-first design
- 🎨 Beautiful animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/communion.git
cd communion
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=your_site_url
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_api_secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
communion/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   │   ├── client/         # Client components
│   │   └── server/         # Server components
│   ├── data/               # Static data and types
│   └── styles/             # Global styles
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/communion](https://github.com/yourusername/communion) 