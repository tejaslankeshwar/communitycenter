'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-neutral-600 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
} 