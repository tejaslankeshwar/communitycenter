'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { MotionDiv } from './MotionDiv'

export function ScrollIndicator() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span className="text-sm font-medium">Scroll to explore</span>
      <ChevronDownIcon className="w-6 h-6 animate-bounce" />
    </MotionDiv>
  )
} 