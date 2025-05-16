      'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  threshold?: number
  delay?: number
  staggerChildren?: number
  duration?: number
  once?: boolean
}

export function TextReveal({ 
  text, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  staggerChildren = 0.03,
  duration = 0.5,
  once = true
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
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
  }, [threshold, once])
  
  // Split text into words
  const words = text.split(' ')
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay * i }
    })
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100, duration }
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
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="inline-block mr-[0.25em] whitespace-pre">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
      EOF