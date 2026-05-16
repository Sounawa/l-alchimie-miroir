'use client'

import { useMemo } from 'react'

export function Starfield() {
  const stars = useMemo(() => {
    const s = []
    for (let i = 0; i < 120; i++) {
      s.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${2 + Math.random() * 5}s`,
        delay: `${Math.random() * 5}s`,
        large: Math.random() > 0.85,
      })
    }
    return s
  }, [])

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.large ? 'large' : ''}`}
          style={{
            left: star.left,
            top: star.top,
            ['--duration' as string]: star.duration,
            ['--delay' as string]: star.delay,
          }}
        />
      ))}
    </div>
  )
}
