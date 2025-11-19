"use client"

import { usePathname } from "next/navigation"

export function ConditionalBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  if (isHomePage) {
    return null
  }

  return <>{children}</>
}

