"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CircleCheck, Star, Bell, Zap, Heart, AlertTriangle } from "lucide-react"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

const badgeVariants = [
  { variant: "default" as const, label: "Badge" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "destructive" as const, label: "Destructive" },
  { variant: "outline" as const, label: "Outline" },
]

const badgesWithIcons = [
  { variant: "secondary" as const, label: "Verified", icon: CircleCheck },
  { variant: "default" as const, label: "Featured", icon: Star },
  { variant: "outline" as const, label: "Notifications", icon: Bell },
  { variant: "destructive" as const, label: "Warning", icon: AlertTriangle },
]

const numberBadges = [
  { variant: "default" as const, label: "8" },
  { variant: "destructive" as const, label: "99" },
  { variant: "secondary" as const, label: "20+" },
]

export default function BadgePage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Badge"
        description="Displays a badge or a component that looks like a badge."
      />

      <ComponentShowcase>
        {/* Default Variants */}
        <ShowcaseSection title="Variants">
          <div className="flex flex-wrap items-center gap-2">
            {badgeVariants.map((item) => (
              <Badge key={item.variant} variant={item.variant}>
                {item.label}
              </Badge>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <div className="flex flex-wrap items-center gap-2">
            {badgesWithIcons.map((item) => {
              const Icon = item.icon
              return (
                <Badge key={item.label} variant={item.variant}>
                  <Icon className="size-3" />
                  {item.label}
                </Badge>
              )
            })}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Number Badges */}
        <ShowcaseSection title="Number Badges">
          <div className="flex flex-wrap items-center gap-2">
            {numberBadges.map((item, index) => (
              <Badge key={index} variant={item.variant}>
                {item.label}
              </Badge>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Use Cases */}
        <ShowcaseSection title="Use Cases">
          <div className="space-y-4">
            {/* Status indicators */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Status:</span>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-green-500">Active</Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="destructive">Inactive</Badge>
              </div>
            </div>

            {/* Category tags */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Tags:</span>
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind</Badge>
              </div>
            </div>

            {/* Notification count */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Alerts:</span>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <Badge variant="destructive">3</Badge>
              </div>
            </div>

            {/* Pro/Premium label */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Plan:</span>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <Zap className="size-3" />
                  Pro
                </Badge>
                <Badge variant="secondary">
                  <Heart className="size-3" />
                  Supporter
                </Badge>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default" className="text-[10px] px-1.5 py-0">
              Tiny
            </Badge>
            <Badge variant="default">
              Default
            </Badge>
            <Badge variant="default" className="text-sm px-3 py-1">
              Large
            </Badge>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
