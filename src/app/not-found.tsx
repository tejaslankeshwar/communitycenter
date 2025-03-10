import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 