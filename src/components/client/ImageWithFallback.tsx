'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageWithFallbackProps extends Omit<ImageProps, 'onLoadingComplete' | 'onError'> {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = '/placeholder.jpg',
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className="relative">
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
      />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-100 animate-pulse"
          />
        )}
      </AnimatePresence>
    </div>
  )
} 