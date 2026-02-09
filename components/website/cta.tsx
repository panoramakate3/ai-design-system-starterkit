"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Power the Future?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Join thousands of businesses building the EV infrastructure of tomorrow. Get started with a free consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button size="lg" className="sm:w-auto w-full">
              Sign up
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            By clicking Sign Up you're confirming that you agree with our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
