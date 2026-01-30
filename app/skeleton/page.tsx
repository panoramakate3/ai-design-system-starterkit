"use client"

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"

export default function SkeletonPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Skeleton"
        description="Use to show a placeholder while content is loading."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/skeleton"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Skeleton */}
        <ShowcaseSection title="Basic Skeleton">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Card Skeleton */}
        <ShowcaseSection title="Card Skeleton">
          <div className="flex flex-col space-y-3 rounded-lg border p-6 w-full max-w-md">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <Skeleton className="h-10 w-20 rounded-md" />
              <Skeleton className="h-10 w-20 rounded-md" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Profile Skeleton */}
        <ShowcaseSection title="Profile Skeleton">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Avatar Variations */}
        <ShowcaseSection title="Avatar Variations">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-20 w-20 rounded-full" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Shapes */}
        <ShowcaseSection title="Different Shapes">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Square</span>
              <Skeleton className="h-24 w-24" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Rectangle</span>
              <Skeleton className="h-16 w-48 rounded-md" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Circle</span>
              <Skeleton className="h-24 w-24 rounded-full" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Rounded</span>
              <Skeleton className="h-20 w-full max-w-md rounded-xl" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Text Skeleton */}
        <ShowcaseSection title="Text Skeleton">
          <div className="w-full max-w-md space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* List Item Skeleton */}
        <ShowcaseSection title="List Items">
          <div className="w-full max-w-md space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Blog Post Skeleton */}
        <ShowcaseSection title="Blog Post">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <Skeleton className="h-8 w-2/3" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex items-center space-x-2 pt-4">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Table Row Skeleton */}
        <ShowcaseSection title="Table Rows">
          <div className="w-full max-w-2xl rounded-lg border">
            <div className="border-b p-4">
              <div className="grid grid-cols-4 gap-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-b p-4 last:border-b-0">
                <div className="grid grid-cols-4 gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Product Card Skeleton */}
        <ShowcaseSection title="Product Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3 rounded-lg border p-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex items-center justify-between pt-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Dashboard Widget Skeleton */}
        <ShowcaseSection title="Dashboard Widget">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
            <Skeleton className="h-32 w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Message Thread Skeleton */}
        <ShowcaseSection title="Message Thread">
          <div className="w-full max-w-md space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4">
                <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Skeleton */}
        <ShowcaseSection title="Form">
          <div className="w-full max-w-md space-y-6 rounded-lg border p-6">
            <Skeleton className="h-6 w-40" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-24 w-full rounded-md" />
            </div>
            <div className="flex space-x-3">
              <Skeleton className="h-10 w-24 rounded-md" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Navigation Skeleton */}
        <ShowcaseSection title="Navigation">
          <div className="w-full max-w-md rounded-lg border p-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Stats Grid Skeleton */}
        <ShowcaseSection title="Stats Grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-lg border p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-5 rounded" />
                </div>
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Gallery Skeleton */}
        <ShowcaseSection title="Image Gallery">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-lg" />
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Comment Section Skeleton */}
        <ShowcaseSection title="Comments">
          <div className="w-full max-w-2xl space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-start space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex items-center space-x-4 pt-2">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Search Results Skeleton */}
        <ShowcaseSection title="Search Results">
          <div className="w-full max-w-2xl space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2 rounded-lg border p-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Notification Skeleton */}
        <ShowcaseSection title="Notifications">
          <div className="w-full max-w-md space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-4 rounded-lg border p-4">
                <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Timeline Skeleton */}
        <ShowcaseSection title="Timeline">
          <div className="w-full max-w-md space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  {i < 3 && <div className="w-px h-16 bg-muted mt-2" />}
                </div>
                <div className="space-y-2 flex-1 pb-8">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
