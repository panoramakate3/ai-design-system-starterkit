"use client"

import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function SpinnerPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleAsyncAction = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Spinner"
        description="A loading indicator component that provides visual feedback during async operations."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Spinner */}
        <ShowcaseSection title="Basic Spinner">
          <Spinner />
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xs" />
              <span className="text-xs text-muted-foreground">Extra Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-muted-foreground">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-muted-foreground">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted-foreground">Extra Large</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Variants */}
        <ShowcaseSection title="Variants">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="default" />
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="secondary" />
              <span className="text-xs text-muted-foreground">Secondary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="muted" />
              <span className="text-xs text-muted-foreground">Muted</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="success" />
              <span className="text-xs text-muted-foreground">Success</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="warning" />
              <span className="text-xs text-muted-foreground">Warning</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="destructive" />
              <span className="text-xs text-muted-foreground">Destructive</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Text */}
        <ShowcaseSection title="With Text">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Spinner size="sm" />
              <span className="text-sm">Loading...</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="md" />
              <span className="text-base">Processing your request...</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="lg" />
              <span className="text-lg font-medium">Please wait</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In Button */}
        <ShowcaseSection title="In Button">
          <div className="flex flex-wrap gap-3">
            <Button disabled>
              <Spinner size="sm" className="mr-2" />
              Loading
            </Button>
            <Button variant="secondary" disabled>
              <Spinner size="sm" className="mr-2" />
              Processing
            </Button>
            <Button variant="outline" disabled>
              <Spinner size="sm" className="mr-2" />
              Saving
            </Button>
            <Button variant="destructive" disabled>
              <Spinner size="sm" className="mr-2" />
              Deleting
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Interactive Button */}
        <ShowcaseSection title="Interactive Loading">
          <div className="space-y-4">
            <Button onClick={handleAsyncAction} disabled={isLoading}>
              {isLoading && <Spinner size="sm" className="mr-2" />}
              {isLoading ? "Loading..." : "Click to Load"}
            </Button>
            {isLoading && (
              <p className="text-sm text-muted-foreground">
                Simulating a 3-second loading operation...
              </p>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Centered */}
        <ShowcaseSection title="Centered">
          <div className="flex justify-center items-center h-32 rounded-lg border bg-muted/10">
            <Spinner size="lg" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Full Page Loading */}
        <ShowcaseSection title="Full Page Loading">
          <div className="relative h-64 rounded-lg border bg-muted/10">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <Spinner size="xl" />
              <p className="text-sm text-muted-foreground">Loading content...</p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Card Loading */}
        <ShowcaseSection title="Card Loading">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border p-6 flex flex-col items-center justify-center gap-3 h-48"
              >
                <Spinner size="lg" variant="muted" />
                <p className="text-sm text-muted-foreground">Loading card {i}...</p>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Inline Loading */}
        <ShowcaseSection title="Inline Loading">
          <div className="w-full max-w-md space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">User Profile</span>
                <Spinner size="sm" variant="muted" />
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Settings</span>
                <Spinner size="sm" variant="success" />
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Notifications</span>
                <Spinner size="sm" variant="warning" />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Upload Progress */}
        <ShowcaseSection title="Upload Progress">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Spinner size="md" variant="success" />
              <div className="flex-1">
                <p className="font-medium">Uploading files...</p>
                <p className="text-sm text-muted-foreground">3 of 5 files completed</p>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Submission */}
        <ShowcaseSection title="Form Submission">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <h3 className="font-semibold">Contact Form</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md"
                disabled
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
                disabled
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-3 py-2 border rounded-md"
                disabled
              />
              <Button className="w-full" disabled>
                <Spinner size="sm" className="mr-2" />
                Submitting...
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Data Fetching */}
        <ShowcaseSection title="Data Fetching">
          <div className="w-full max-w-2xl space-y-4">
            <div className="rounded-lg border p-6">
              <div className="flex items-center justify-center gap-3 py-8">
                <Spinner size="lg" />
                <span className="text-lg">Fetching data from server...</span>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* List Loading */}
        <ShowcaseSection title="List Loading">
          <div className="w-full max-w-md space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                <Spinner size="sm" variant="muted" />
                <div className="flex-1">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Search Loading */}
        <ShowcaseSection title="Search Loading">
          <div className="w-full max-w-md space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 border rounded-md"
                disabled
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Spinner size="sm" variant="muted" />
              </div>
            </div>
            <div className="rounded-lg border p-6 text-center text-muted-foreground">
              <Spinner size="md" className="mx-auto mb-3" />
              <p>Searching...</p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Authentication */}
        <ShowcaseSection title="Authentication">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <h3 className="font-semibold text-center">Sign In</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
                disabled
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md"
                disabled
              />
              <Button className="w-full" disabled>
                <Spinner size="sm" className="mr-2" />
                Signing in...
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Table Loading */}
        <ShowcaseSection title="Table Loading">
          <div className="w-full max-w-2xl rounded-lg border">
            <div className="p-8 flex flex-col items-center justify-center gap-3">
              <Spinner size="xl" variant="muted" />
              <p className="text-muted-foreground">Loading table data...</p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Overlay Loading */}
        <ShowcaseSection title="Overlay Loading">
          <div className="relative w-full max-w-md rounded-lg border p-6">
            <div className="space-y-4 opacity-50">
              <h3 className="font-semibold">Content Below</h3>
              <p className="text-sm text-muted-foreground">
                This content is disabled while loading...
              </p>
              <Button disabled>Action Button</Button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="flex flex-col items-center gap-3">
                <Spinner size="lg" />
                <span className="text-sm font-medium">Processing...</span>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Spinners */}
        <ShowcaseSection title="Multiple States">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="rounded-lg border p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Spinner size="sm" variant="success" />
                <span className="font-medium">Syncing</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your data is being synchronized...
              </p>
            </div>
            <div className="rounded-lg border p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Spinner size="sm" variant="warning" />
                <span className="font-medium">Processing</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Processing your payment...
              </p>
            </div>
            <div className="rounded-lg border p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Spinner size="sm" variant="default" />
                <span className="font-medium">Downloading</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Downloading updates...
              </p>
            </div>
            <div className="rounded-lg border p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Spinner size="sm" variant="destructive" />
                <span className="font-medium">Deleting</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Removing files...
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Speed (using animation class) */}
        <ShowcaseSection title="Custom Speed">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="animate-spin-slow" />
              <span className="text-xs text-muted-foreground">Slow</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner />
              <span className="text-xs text-muted-foreground">Normal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="animate-spin-fast" />
              <span className="text-xs text-muted-foreground">Fast</span>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
