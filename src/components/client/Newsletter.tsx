'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
      <p className="text-white/70 mb-4">
        Subscribe to our newsletter for updates and insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-400 text-white placeholder:text-white/50"
            required
          />
          {status === 'loading' && (
            <motion.div
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-sm ${
            status === 'success' ? 'text-green-300' : 'text-red-300'
          }`}
        >
          {message}
        </motion.p>
      )}
    </div>
  )
} 