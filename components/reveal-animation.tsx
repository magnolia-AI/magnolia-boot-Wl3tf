      'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

type RevealAnimationProps = {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function RevealAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = '',
}: RevealAnimationProps) {
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
      {
        threshold,
      }
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

  const getDirectionStyles = () => {
    const baseStyles = {
      opacity: 0,
      transform: '',
    }

    switch (direction) {
      case 'up':
        baseStyles.transform = 'translateY(50px)'
        break
      case 'down':
        baseStyles.transform = 'translateY(-50px)'
        break
      case 'left':
        baseStyles.transform = 'translateX(50px)'
        break
      case 'right':
        baseStyles.transform = 'translateX(-50px)'
        break
    }

    return baseStyles
  }

  const initialStyles = getDirectionStyles()

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        ...initialStyles,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : initialStyles.transform,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
