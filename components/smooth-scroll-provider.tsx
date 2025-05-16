      'use client'

import { ReactNode, useEffect, useState } from 'react'

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Simulating smooth scroll behavior without the library
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Add event listeners for smooth scrolling to anchor links
      const anchorLinks = document.querySelectorAll('a[href^="#"]')
      
      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          const targetId = link.getAttribute('href')?.substring(1)
          if (targetId) {
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 100, // Offset for header
                behavior: 'smooth'
              })
            }
          }
        })
      })
    }

    smoothScroll()

    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return <>{children}</>
}