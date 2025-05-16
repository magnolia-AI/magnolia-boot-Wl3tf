      'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export function FloatingElements() {
  useEffect(() => {
    // Animate floating elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    })
    
    return () => {
      gsap.killTweensOf('.floating-element')
    }
  }, [])
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="floating-element absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
      <div className="floating-element absolute top-[60%] right-[15%] w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
      <div className="floating-element absolute bottom-[20%] left-[20%] w-40 h-40 rounded-full bg-primary/10 blur-xl"></div>
    </div>
  )
}

export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-float-slow"></div>
    </div>
  )
}

export function AnimatedCircles() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/10 animate-spin-slow"></div>
      <div className="absolute top-40 right-10 w-40 h-40 rounded-full border border-white/5 animate-rotate-reverse"></div>
      <div className="absolute bottom-20 left-1/2 w-60 h-60 rounded-full border border-white/5 animate-spin-slow"></div>
    </div>
  )
}

export function MouseTrailEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([])
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', updateMousePosition)
    
    const interval = setInterval(() => {
      setTrail(prev => [
        { x: mousePosition.x, y: mousePosition.y, opacity: 1 },
        ...prev.slice(0, 5).map(point => ({ ...point, opacity: point.opacity * 0.8 }))
      ])
    }, 50)
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      clearInterval(interval)
    }
  }, [mousePosition])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, i) => (
        <div 
          key={i}
          className="absolute w-6 h-6 rounded-full bg-primary/30 blur-sm"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: point.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20
      
      ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div ref={ref} className="absolute inset-0 transition-transform duration-200 ease-out">
      {/* Your background elements here */}
    </div>
  )
}
