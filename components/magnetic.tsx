      'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 30 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    
    const distance = Math.sqrt(x * x + y * y)
    const maxDistance = Math.max(width, height) / 2
    
    if (distance < maxDistance) {
      // Scale the movement based on distance from center
      const factor = 1 - distance / maxDistance
      setPosition({ 
        x: x * factor * (strength / 100), 
        y: y * factor * (strength / 100) 
      })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])

  return (
    <div 
      ref={ref} 
      className={`magnetic ${className}`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.5s ease' : 'none'
      }}
    >
      {children}
    </div>
  )
}
