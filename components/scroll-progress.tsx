      'use client'

import { useState, useEffect } from 'react'

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
  position?: 'top' | 'bottom'
}

export function ScrollProgress({ 
  color = 'hsl(var(--primary))', 
  height = 4,
  zIndex = 50,
  position = 'top'
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      
      if (scrollHeight > 0) {
        const percentage = (currentScrollY / scrollHeight) * 100
        setScrollProgress(percentage)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    
    // Initial calculation
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        left: 0,
        [position]: 0,
        height: `${height}px`,
        width: `${scrollProgress}%`,
        backgroundColor: color,
        zIndex,
        transition: 'width 0.1s',
      }}
    />
  )
}
