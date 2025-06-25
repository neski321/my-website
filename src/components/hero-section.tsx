"use client"

import { useEffect, useState } from "react"
import { HeroBackground } from "./HeroBackground"
import { HeroForeground } from "./HeroForeground"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh] w-full overflow-hidden">
      <HeroBackground />
      <HeroForeground />
    </section>
  )
}
