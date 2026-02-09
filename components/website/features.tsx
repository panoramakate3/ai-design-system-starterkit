"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Zap, BarChart, Shield, Cloud, Activity } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile App Control",
      description: "Control and monitor your charging sessions from anywhere with our intuitive mobile application.",
    },
    {
      icon: Zap,
      title: "Ultra-Fast Charging",
      description: "DC fast charging up to 350kW. Get 200+ miles of range in just 15 minutes.",
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Monitor usage, revenue, and performance metrics with our powerful dashboard.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with all major security standards.",
    },
    {
      icon: Cloud,
      title: "Cloud Connected",
      description: "Remote monitoring, updates, and management from anywhere in the world.",
    },
    {
      icon: Activity,
      title: "Load Balancing",
      description: "Intelligent power distribution to optimize grid usage and reduce costs.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-3xl">
            Everything You Need to Scale Your EV Infrastructure
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg">
            Our cloud-based management system gives you complete control over your charging network.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
