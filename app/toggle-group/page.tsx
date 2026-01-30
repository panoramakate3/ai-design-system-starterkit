"use client"

import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Grid,
  LayoutList,
  Calendar,
  Clock,
  Tag,
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  Zap,
  Star,
  Circle,
  Square,
  Triangle,
  Type,
  Palette,
  Image,
  Video,
  Music,
  FileText,
} from "lucide-react"
import { useState } from "react"

export default function ToggleGroupPage() {
  const [textFormat, setTextFormat] = useState<string[]>([])
  const [alignment, setAlignment] = useState("left")
  const [view, setView] = useState("grid")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/toggle-group"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Toggle Group */}
        <ShowcaseSection title="Basic Toggle Group">
          <ToggleGroup type="single">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Single Selection */}
        <ShowcaseSection title="Single Selection">
          <ToggleGroup
            type="single"
            value={alignment}
            onValueChange={(value) => value && setAlignment(value)}
          >
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Align justify">
              <AlignJustify className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Selection */}
        <ShowcaseSection title="Multiple Selection">
          <div className="space-y-4">
            <ToggleGroup
              type="multiple"
              value={textFormat}
              onValueChange={setTextFormat}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p className="text-sm text-muted-foreground">
              Selected: {textFormat.length > 0 ? textFormat.join(", ") : "none"}
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Outline Variant */}
        <ShowcaseSection title="Outline Variant">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm text-muted-foreground">Small</span>
              <ToggleGroup type="single" size="sm">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm text-muted-foreground">Default</span>
              <ToggleGroup type="single" size="default">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm text-muted-foreground">Large</span>
              <ToggleGroup type="single" size="lg">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Text Labels */}
        <ShowcaseSection title="With Text Labels">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold">
              <Bold className="h-4 w-4 mr-2" />
              Bold
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* View Mode Toggle */}
        <ShowcaseSection title="View Mode">
          <ToggleGroup
            type="single"
            variant="outline"
            value={view}
            onValueChange={(value) => value && setView(value)}
          >
            <ToggleGroupItem value="grid">
              <Grid className="h-4 w-4 mr-2" />
              Grid
            </ToggleGroupItem>
            <ToggleGroupItem value="list">
              <LayoutList className="h-4 w-4 mr-2" />
              List
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* List Type Selector */}
        <ShowcaseSection title="List Type">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bullet">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="numbered">
              <ListOrdered className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Time Period Selector */}
        <ShowcaseSection title="Time Period">
          <ToggleGroup type="single" variant="outline" defaultValue="day">
            <ToggleGroupItem value="hour">
              <Clock className="h-4 w-4 mr-2" />
              Hour
            </ToggleGroupItem>
            <ToggleGroupItem value="day">
              <Calendar className="h-4 w-4 mr-2" />
              Day
            </ToggleGroupItem>
            <ToggleGroupItem value="week">
              <Calendar className="h-4 w-4 mr-2" />
              Week
            </ToggleGroupItem>
            <ToggleGroupItem value="month">
              <Calendar className="h-4 w-4 mr-2" />
              Month
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Weather Icons */}
        <ShowcaseSection title="Weather Selector">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="sunny">
              <Sun className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="cloudy">
              <Cloud className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="rainy">
              <CloudRain className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="snowy">
              <Snowflake className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="stormy">
              <Zap className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Priority Selector */}
        <ShowcaseSection title="Priority Levels">
          <ToggleGroup type="single" variant="outline" defaultValue="medium">
            <ToggleGroupItem value="low">Low</ToggleGroupItem>
            <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
            <ToggleGroupItem value="high">High</ToggleGroupItem>
            <ToggleGroupItem value="urgent">Urgent</ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Text Editor Toolbar */}
        <ShowcaseSection title="Text Editor Toolbar">
          <div className="w-full max-w-3xl space-y-4 rounded-lg border p-4">
            <div className="flex flex-wrap gap-2">
              <ToggleGroup type="multiple" variant="outline" size="sm">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" variant="outline" size="sm">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" variant="outline" size="sm">
                <ToggleGroupItem value="bullet">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="numbered">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Shape Selector */}
        <ShowcaseSection title="Shape Selector">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="circle">
              <Circle className="h-4 w-4 mr-2" />
              Circle
            </ToggleGroupItem>
            <ToggleGroupItem value="square">
              <Square className="h-4 w-4 mr-2" />
              Square
            </ToggleGroupItem>
            <ToggleGroupItem value="triangle">
              <Triangle className="h-4 w-4 mr-2" />
              Triangle
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Rating Selector */}
        <ShowcaseSection title="Rating Selector">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="1">
              <Star className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="2">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="3">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="4">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="5">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Size Selector */}
        <ShowcaseSection title="Size Selector">
          <ToggleGroup type="single" variant="outline" defaultValue="m">
            <ToggleGroupItem value="xs">XS</ToggleGroupItem>
            <ToggleGroupItem value="s">S</ToggleGroupItem>
            <ToggleGroupItem value="m">M</ToggleGroupItem>
            <ToggleGroupItem value="l">L</ToggleGroupItem>
            <ToggleGroupItem value="xl">XL</ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Media Type Selector */}
        <ShowcaseSection title="Media Type">
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="text">
              <Type className="h-4 w-4 mr-2" />
              Text
            </ToggleGroupItem>
            <ToggleGroupItem value="image">
              <Image className="h-4 w-4 mr-2" />
              Image
            </ToggleGroupItem>
            <ToggleGroupItem value="video">
              <Video className="h-4 w-4 mr-2" />
              Video
            </ToggleGroupItem>
            <ToggleGroupItem value="audio">
              <Music className="h-4 w-4 mr-2" />
              Audio
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Tag Filter */}
        <ShowcaseSection title="Tag Filter">
          <div className="space-y-4">
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="javascript">
                <Tag className="h-4 w-4 mr-2" />
                JavaScript
              </ToggleGroupItem>
              <ToggleGroupItem value="typescript">
                <Tag className="h-4 w-4 mr-2" />
                TypeScript
              </ToggleGroupItem>
              <ToggleGroupItem value="react">
                <Tag className="h-4 w-4 mr-2" />
                React
              </ToggleGroupItem>
              <ToggleGroupItem value="nextjs">
                <Tag className="h-4 w-4 mr-2" />
                Next.js
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Status Filter */}
        <ShowcaseSection title="Status Filter">
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="active">Active</ToggleGroupItem>
            <ToggleGroupItem value="pending">Pending</ToggleGroupItem>
            <ToggleGroupItem value="completed">Completed</ToggleGroupItem>
            <ToggleGroupItem value="archived">Archived</ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Date Range */}
        <ShowcaseSection title="Date Range">
          <ToggleGroup type="single" variant="outline" defaultValue="7d">
            <ToggleGroupItem value="24h">Last 24h</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="90d">Last 90 days</ToggleGroupItem>
            <ToggleGroupItem value="custom">Custom</ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Color Theme */}
        <ShowcaseSection title="Color Theme">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="red">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2" />
              Red
            </ToggleGroupItem>
            <ToggleGroupItem value="blue">
              <div className="h-4 w-4 rounded-full bg-blue-500 mr-2" />
              Blue
            </ToggleGroupItem>
            <ToggleGroupItem value="green">
              <div className="h-4 w-4 rounded-full bg-green-500 mr-2" />
              Green
            </ToggleGroupItem>
            <ToggleGroupItem value="purple">
              <div className="h-4 w-4 rounded-full bg-purple-500 mr-2" />
              Purple
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Sort Order */}
        <ShowcaseSection title="Sort Order">
          <ToggleGroup type="single" variant="outline" defaultValue="newest">
            <ToggleGroupItem value="newest">Newest First</ToggleGroupItem>
            <ToggleGroupItem value="oldest">Oldest First</ToggleGroupItem>
            <ToggleGroupItem value="popular">Most Popular</ToggleGroupItem>
            <ToggleGroupItem value="alphabetical">A-Z</ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Disabled Items */}
        <ShowcaseSection title="Disabled Items">
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" disabled>
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* Vertical Layout */}
        <ShowcaseSection title="Vertical Layout">
          <ToggleGroup
            type="single"
            variant="outline"
            className="flex-col items-stretch"
          >
            <ToggleGroupItem value="option1">
              <FileText className="h-4 w-4 mr-2" />
              Option 1
            </ToggleGroupItem>
            <ToggleGroupItem value="option2">
              <Image className="h-4 w-4 mr-2" />
              Option 2
            </ToggleGroupItem>
            <ToggleGroupItem value="option3">
              <Video className="h-4 w-4 mr-2" />
              Option 3
            </ToggleGroupItem>
          </ToggleGroup>
        </ShowcaseSection>

        <Separator />

        {/* With Spacing */}
        <ShowcaseSection title="With Spacing">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm text-muted-foreground">No Spacing (Connected)</span>
              <ToggleGroup type="single" variant="outline" spacing={0}>
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm text-muted-foreground">With Spacing (Separated)</span>
              <ToggleGroup type="single" variant="outline" spacing={2}>
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
