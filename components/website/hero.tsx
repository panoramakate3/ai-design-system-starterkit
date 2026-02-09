"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center self-stretch px-4 md:px-8 py-24">
      <div className="flex flex-col items-center self-stretch max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center w-full">
          {/* Heading */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px] leading-tight">
              Smart Charging Stations for the{" "}
              <span className="text-primary">Electric Future</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
              Empower your decision-making with advanced analytics that turn data
              into actionable insights. Drive your business forward with confidence.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="w-full max-w-5xl mt-12">
            <div className="aspect-video rounded-xl border border-border bg-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">EV Charging Station Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
