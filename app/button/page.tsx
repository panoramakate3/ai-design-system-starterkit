"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GitBranch, Loader2, Mail, ChevronRight, Download, Trash2, Settings, Plus } from "lucide-react"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

const buttonVariants = [
  { variant: "default" as const, label: "Button" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "destructive" as const, label: "Destructive" },
  { variant: "outline" as const, label: "Outline" },
  { variant: "ghost" as const, label: "Ghost" },
  { variant: "link" as const, label: "Link" },
]

export default function ButtonPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Button"
        description="Displays a button or a component that looks like a button."
      />

      <ComponentShowcase>
        {/* Variants */}
        <ShowcaseSection title="Variants">
          <div className="flex flex-wrap items-center gap-3">
            {buttonVariants.map((item) => (
              <Button key={item.variant} variant={item.variant}>
                {item.label}
              </Button>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <Mail />
              Login with Email
            </Button>
            <Button variant="secondary">
              <GitBranch />
              New Branch
            </Button>
            <Button variant="outline">
              <Download />
              Download
            </Button>
            <Button variant="destructive">
              <Trash2 />
              Delete
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Loading State */}
        <ShowcaseSection title="Loading">
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
            <Button variant="outline" disabled>
              <Loader2 className="animate-spin" />
              Loading
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Icon Buttons */}
        <ShowcaseSection title="Icon Only">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="icon-sm" variant="outline">
              <Plus />
            </Button>
            <Button size="icon" variant="outline">
              <Settings />
            </Button>
            <Button size="icon-lg" variant="outline">
              <ChevronRight />
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled">
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
            <Button variant="destructive" disabled>Disabled</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Right Icon */}
        <ShowcaseSection title="With Trailing Icon">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">
              Continue
              <ChevronRight />
            </Button>
            <Button variant="outline">
              Next Step
              <ChevronRight />
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Variants with Sizes */}
        <ShowcaseSection title="All Variants × Sizes">
          <div className="space-y-4">
            {buttonVariants.map((item) => (
              <div key={item.variant} className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground w-24">{item.label}:</span>
                <Button variant={item.variant} size="sm">
                  Small
                </Button>
                <Button variant={item.variant} size="default">
                  Default
                </Button>
                <Button variant={item.variant} size="lg">
                  Large
                </Button>
              </div>
            ))}
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
