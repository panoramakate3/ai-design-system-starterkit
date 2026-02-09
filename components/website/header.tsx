"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/website" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EV Power</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/website#features"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Features
          </Link>
          <Link
            href="/website#solutions"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Solutions
          </Link>
          <Link
            href="/website#pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pricing
          </Link>
          <Link
            href="/website#resources"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Resources
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
