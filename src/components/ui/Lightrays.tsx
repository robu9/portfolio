"use client"

import React, { useEffect, useState, type CSSProperties } from "react"
import ReactDOM from "react-dom"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  color?: string
  blur?: number
  speed?: number
  length?: string
}

type LightRay = {
  id: string
  left: number
  rotate: number
  width: number
  swing: number
  delay: number
  duration: number
  intensity: number
}

/* ---------- helper to create rays ---------- */
const createRays = (count: number, cycle: number): LightRay[] => {
  if (count <= 0) return []

  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84
    const rotate = -28 + Math.random() * 56
    const width = 160 + Math.random() * 160
    const swing = 0.8 + Math.random() * 1.8
    const delay = Math.random() * cycle
    const duration = cycle * (0.75 + Math.random() * 0.5)
    const intensity = 0.6 + Math.random() * 0.5

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
    }
  })
}

/* ---------- single animated ray ---------- */
const Ray = ({
  left,
  rotate,
  width,
  swing,
  delay,
  duration,
  intensity,
}: LightRay) => {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]"
      style={
        {
          "--ray-left": `${left}%`,
          "--ray-width": `${width}px`,
        } as CSSProperties
      }
      initial={{ rotate: rotate }}
      animate={{
        opacity: [0, intensity, 0],
        rotate: [rotate - swing, rotate + swing, rotate - swing],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        repeatDelay: duration * 0.1,
      }}
    />
  )
}

/* ---------- Portal-based LightRays component ---------- */
export function LightRays({
  className,
  style,
  count = 7,
  color = "rgba(160, 210, 255, 0.2)",
  blur = 36,
  speed = 14,
  length = "70vh",
  ...props
}: LightRaysProps) {
  const [rays, setRays] = useState<LightRay[]>([])
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const cycleDuration = Math.max(speed, 0.1)

  useEffect(() => {
    setRays(createRays(count, cycleDuration))
  }, [count, cycleDuration])

  useEffect(() => {
    // Create a top-level container on mount and append to body
    const el = document.createElement("div")
    // inline styles ensure it's fixed, covers viewport, behind everything, and non-interactive
    el.style.position = "fixed"
    el.style.inset = "0"
    el.style.zIndex = "-1" // behind default stacking (body children)
    el.style.pointerEvents = "none"
    el.style.overflow = "hidden"
    el.setAttribute("data-lightrays-portal", "true")
    document.body.appendChild(el)
    setContainer(el)

    return () => {
      // cleanup
      if (el.parentElement) el.parentElement.removeChild(el)
      setContainer(null)
    }
  }, [])

  // If portal hasn't been created yet, render nothing (client-only)
  if (!container) return null

  // Compose the inner content that will be portaled to body
  const content = (
    <div
      className={cn(
        // root uses full-viewport sizing and keeps pointer-events none
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={
        {
          // CSS custom properties used by rays
          "--light-rays-color": color,
          "--light-rays-blur": `${blur}px`,
          "--light-rays-length": length,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* soft radial glows */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={
            {
              background:
                "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)",
            } as CSSProperties
          }
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={
            {
              background:
                "radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)",
            } as CSSProperties
          }
        />

        {/* animated rays */}
        {rays.map((ray) => (
          <Ray key={ray.id} {...ray} />
        ))}
      </div>
    </div>
  )

  // Render into the portal container appended to document.body
  return ReactDOM.createPortal(content, container)
}

export default LightRays
