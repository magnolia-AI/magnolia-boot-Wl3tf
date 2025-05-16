      'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      
      setIsHovering(isLink)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  if (typeof window === 'undefined') return null

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'opacity 0.3s ease, transform 0.1s ease, width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
        pointerEvents: 'none'
      }}
    />
  )
}
      EOF