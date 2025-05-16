      'use client'

import { useEffect, useRef } from 'react'

type MarqueeTextProps = {
  text: string
  speed?: number
  reverse?: boolean
  className?: string
  repeat?: number
}

export default function MarqueeText({
  text,
  speed = 50,
  reverse = false,
  className = '',
  repeat = 4,
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const textElement = textRef.current
    if (!container || !textElement) return

    const textWidth = textElement.offsetWidth
    const containerWidth = container.offsetWidth

    // Only animate if text is wider than container
    if (textWidth <= containerWidth) return

    const duration = textWidth / speed

    const keyframes = [
      { transform: reverse ? 'translateX(0)' : `translateX(0)` },
      { transform: reverse ? `translateX(${textWidth}px)` : `translateX(-${textWidth}px)` },
    ]

    const animation = textElement.animate(keyframes, {
      duration: duration * 1000, // Convert to milliseconds
      iterations: Infinity,
      easing: 'linear',
    })

    return () => {
      animation.cancel()
    }
  }, [speed, reverse])

  // Create repeated text
  const repeatedText = Array(repeat).fill(text).join(' • ')

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div ref={textRef} className="inline-block">
        {repeatedText}
      </div>
    </div>
  )
}
      EOF