      'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  threshold?: number
  delay?: number
  staggerChildren?: number
  duration?: number
  splitBy?: 'chars' | 'words'
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
}

export function SplitText({ 
  text, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  staggerChildren = 0.02,
  duration = 0.5,
  splitBy = 'chars',
  animation = 'slide-up'
}: SplitTextProps) {
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
  
  // Split text into words or characters
  const items = splitBy === 'chars' 
    ? text.split('') 
    : text.split(' ')
  
  // Get animation properties based on animation type
  const getAnimationProps = () => {
    switch (animation) {
      case 'fade':
        return { y: 0, x: 0, opacity: 0 }
      case 'slide-up':
        return { y: 20, opacity: 0 }
      case 'slide-down':
        return { y: -20, opacity: 0 }
      case 'slide-left':
        return { x: 20, opacity: 0 }
      case 'slide-right':
        return { x: -20, opacity: 0 }
      default:
        return { y: 20, opacity: 0 }
    }
  }
  
  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  }
  
  const itemAnimation = getAnimationProps()
  
  const child = {
    hidden: itemAnimation,
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration
      }
    }
  }
  
  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="inline-block"
      >
        {items.map((item, index) => (
          <motion.span 
            key={index} 
            variants={child} 
            className={`inline-block ${splitBy === 'words' ? 'mr-[0.25em]' : ''}`}
          >
            {item}{splitBy === 'chars' && index !== items.length - 1 && item !== ' ' ? '' : ''}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
      EOF