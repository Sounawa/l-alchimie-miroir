'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Pause, Play, RotateCcw, X } from 'lucide-react'

interface MeditationTimerProps {
  onComplete?: () => void
  autoStart?: boolean
  presetMinutes?: number
  label?: string
  phaseLabel?: string
}

export function MeditationTimer({
  onComplete,
  autoStart = false,
  presetMinutes = 10,
  label = 'Méditation',
  phaseLabel,
}: MeditationTimerProps) {
  const [totalSeconds, setTotalSeconds] = useState(presetMinutes * 60)
  const [timeLeft, setTimeLeft] = useState(presetMinutes * 60)
  const [isRunning, setIsRunning] = useState(autoStart)
  const [isComplete, setIsComplete] = useState(false)
  const [presetInput, setPresetInput] = useState(presetMinutes.toString())
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsComplete(true)
            if (onComplete) onComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, timeLeft, onComplete])

  const reset = useCallback(() => {
    setIsRunning(false)
    setIsComplete(false)
    setTimeLeft(totalSeconds)
  }, [totalSeconds])

  const changePreset = (mins: number) => {
    const secs = mins * 60
    setTotalSeconds(secs)
    setTimeLeft(secs)
    setIsRunning(false)
    setIsComplete(false)
    setPresetInput(mins.toString())
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const progress = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0
  const circumference = 2 * Math.PI * 54
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {label && (
        <div className="text-center">
          <h4 className="font-serif text-gold text-sm">{label}</h4>
          {phaseLabel && <p className="text-xs text-muted-text mt-1">{phaseLabel}</p>}
        </div>
      )}

      {/* Circular timer */}
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(201,162,39,0.1)" strokeWidth="3" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={isComplete ? '#00d4ff' : '#c9a227'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000"
            style={{
              filter: isComplete ? 'drop-shadow(0 0 8px rgba(0,212,255,0.5))' : 'drop-shadow(0 0 4px rgba(201,162,39,0.3))',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          {isComplete ? (
            <div className="text-center">
              <SparkleIcon />
              <p className="text-teal text-xs mt-1 font-serif">Complété</p>
            </div>
          ) : (
            <>
              <span className="text-2xl font-mono text-warm-white tracking-wider">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
              {isRunning && (
                <div className="flex gap-1 mt-1">
                  <div className="w-1 h-1 rounded-full bg-gold breathing-circle" style={{ animationDuration: '2s' }} />
                  <div className="w-1 h-1 rounded-full bg-gold breathing-circle" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
                  <div className="w-1 h-1 rounded-full bg-gold breathing-circle" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Preset buttons */}
      <div className="flex gap-2">
        {[5, 10, 15, 20, 30].map((mins) => (
          <button
            key={mins}
            onClick={() => changePreset(mins)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
              totalSeconds === mins * 60
                ? 'border-gold/40 text-gold bg-[rgba(201,162,39,0.1)]'
                : 'border-[rgba(201,162,39,0.15)] text-muted-text hover:text-gold hover:border-gold/30'
            }`}
          >
            {mins}m
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={reset}
          className="text-muted-text hover:text-gold"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Recommencer
        </Button>
        <Button
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="bg-gold/20 hover:bg-gold/30 text-gold border border-gold/30"
        >
          {isRunning ? (
            <>
              <Pause className="w-4 h-4 mr-1" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-1" />
              {timeLeft < totalSeconds ? 'Reprendre' : 'Commencer'}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
