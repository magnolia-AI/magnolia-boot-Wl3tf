      'use client'

import { ReactNode, useRef, useEffect } from 'react'

interface MarqueeProps {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right'
  speed?: number
  pauseOnHover?: boolean
}

export function Marquee({ 
  children, 
  className = '', 
  direction = 'left',
  speed = 50,
  pauseOnHover = true
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return
    
    // Clone the content to create a seamless loop
    const content = inner.innerHTML
    inner.innerHTML = content + content
    
    // Calculate animation duration based on content width and speed
    const updateDuration = () => {
      const contentWidth = inner.offsetWidth / 2
      const duration = contentWidth / speed
      inner.style.animationDuration = `${duration}s`
    }
    
    updateDuration()
    window.addEventListener('resize', updateDuration)
    
    return () => window.removeEventListener('resize', updateDuration)
  }, [speed])
  
  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div 
        ref={innerRef}
        className={`inline-block animate-marquee ${direction === 'right' ? 'animate-marquee-reverse' : ''} ${pauseOnHover ? 'hover:animation-play-state-paused' : ''}`}
        style={{ 
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {children}
      </div>
    </div>
  )
}
      EOF