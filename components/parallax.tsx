      'use client'

import { ReactNode, useRef, useEffect } from 'react'

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function Parallax({ 
  children, 
  className = '', 
  speed = 0.1,
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const initialPos = useRef<number>(0)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      const rect = element.getBoundingClientRect()
      
      // Only apply parallax when element is in view (with some buffer)
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        let translateValue = 0
        
        // Calculate translation based on scroll position
        switch(direction) {
          case 'up':
            translateValue = (scrollY - (rect.top + scrollY)) * speed * -1
            element.style.transform = `translateY(${translateValue}px)`
            break
          case 'down':
            translateValue = (scrollY - (rect.top + scrollY)) * speed
            element.style.transform = `translateY(${translateValue}px)`
            break
          case 'left':
            translateValue = (scrollY - (rect.top + scrollY)) * speed * -1
            element.style.transform = `translateX(${translateValue}px)`
            break
          case 'right':
            translateValue = (scrollY - (rect.top + scrollY)) * speed
            element.style.transform = `translateX(${translateValue}px)`
            break
        }
      }
    }
    
    // Store initial position
    initialPos.current = element.getBoundingClientRect().top
    
    window.addEventListener('scroll', handleScroll)
    // Run once to set initial position
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])
  
  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
