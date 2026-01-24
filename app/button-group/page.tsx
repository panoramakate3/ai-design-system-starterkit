"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Copy,
  Download,
  Share2,
  Heart,
  Star,
  MessageCircle,
  Grid,
  List,
  Columns
} from "lucide-react"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

export default function ButtonGroupPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Button Group"
        description="A set of buttons grouped together, typically used for related actions or toggle controls."
      />

      <ComponentShowcase>
        {/* Basic Button Group */}
        <ShowcaseSection title="Basic">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" className="rounded-r-none">
                Years
              </Button>
              <Button variant="outline" className="rounded-none border-l-0">
                Months
              </Button>
              <Button variant="outline" className="rounded-l-none border-l-0">
                Days
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Toggle Group - Single Select */}
        <ShowcaseSection title="Toggle Group (Single)">
          <div className="flex flex-wrap items-center gap-6">
            <ToggleGroup type="single" defaultValue="center" spacing={0}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Toggle Group - Multiple Select */}
        <ShowcaseSection title="Toggle Group (Multiple)">
          <div className="flex flex-wrap items-center gap-6">
            <ToggleGroup type="multiple" defaultValue={["bold"]} spacing={0}>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Icon Button Group */}
        <ShowcaseSection title="Icon Only">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <Heart />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-l-0">
                <Star />
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                <MessageCircle />
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Action Button Group */}
        <ShowcaseSection title="Action Buttons">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" className="rounded-r-none">
                <Copy />
                Copy
              </Button>
              <Button variant="outline" className="rounded-none border-l-0">
                <Download />
                Download
              </Button>
              <Button variant="outline" className="rounded-l-none border-l-0">
                <Share2 />
                Share
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* View Switcher */}
        <ShowcaseSection title="View Switcher">
          <div className="flex flex-wrap items-center gap-6">
            <ToggleGroup type="single" defaultValue="grid" spacing={0}>
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <List />
              </ToggleGroupItem>
              <ToggleGroupItem value="columns" aria-label="Columns view">
                <Columns />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Navigation */}
        <ShowcaseSection title="Pagination">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <ChevronLeft />
              </Button>
              <Button variant="outline" className="rounded-none border-l-0">
                1
              </Button>
              <Button variant="outline" className="rounded-none border-l-0">
                2
              </Button>
              <Button variant="outline" className="rounded-none border-l-0">
                3
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Variants */}
        <ShowcaseSection title="Variants">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Default:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button className="rounded-r-none">First</Button>
                <Button className="rounded-none border-l-0">Second</Button>
                <Button className="rounded-l-none border-l-0">Third</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Secondary:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="secondary" className="rounded-r-none">First</Button>
                <Button variant="secondary" className="rounded-none border-l-0">Second</Button>
                <Button variant="secondary" className="rounded-l-none border-l-0">Third</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Destructive:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="destructive" className="rounded-r-none">
                  <Trash2 />
                  Delete
                </Button>
                <Button variant="destructive" className="rounded-l-none border-l-0">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Small:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="sm" variant="outline" className="rounded-r-none">First</Button>
                <Button size="sm" variant="outline" className="rounded-none border-l-0">Second</Button>
                <Button size="sm" variant="outline" className="rounded-l-none border-l-0">Third</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Default:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none">First</Button>
                <Button variant="outline" className="rounded-none border-l-0">Second</Button>
                <Button variant="outline" className="rounded-l-none border-l-0">Third</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Large:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="lg" variant="outline" className="rounded-r-none">First</Button>
                <Button size="lg" variant="outline" className="rounded-none border-l-0">Second</Button>
                <Button size="lg" variant="outline" className="rounded-l-none border-l-0">Third</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Spacing */}
        <ShowcaseSection title="With Spacing">
          <div className="flex flex-wrap items-center gap-6">
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
