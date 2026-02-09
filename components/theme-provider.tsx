"use client"

import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Apply theme immediately on mount
    const savedTheme = localStorage.getItem("theme") || "system"
    const root = document.documentElement

    if (savedTheme === "dark") {
      root.classList.remove("light", "midnight")
      root.classList.add("dark")
    } else if (savedTheme === "light") {
      root.classList.remove("dark", "midnight")
      root.classList.add("light")
    } else if (savedTheme === "midnight") {
      root.classList.remove("dark", "light")
      root.classList.add("midnight")
    } else {
      // System theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.remove("dark", "light", "midnight")
      root.classList.add(systemTheme)
    }
  }, [])

  return <>{children}</>
}
