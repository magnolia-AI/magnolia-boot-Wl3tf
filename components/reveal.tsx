      'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'
}

export function Reveal({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  duration = 1,
  animation = 'fade-up'
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])
  
  // Define animation classes based on the animation prop
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up'
      case 'fade-down':
        return 'animate-fade-in-down'
      case 'fade-left':
        return 'animate-fade-in-left'
      case 'fade-right':
        return 'animate-fade-in-right'
      case 'scale':
        return 'animate-scale-in'
      case 'blur':
        return 'animate-blur-in'
      default:
        return 'animate-fade-in-up'
    }
  }
  
  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  )
}
