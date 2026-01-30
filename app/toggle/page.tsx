"use client"

import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"
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
  Code,
  Quote,
  Link as LinkIcon,
  Image,
  Video,
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Star,
  Heart,
  Bookmark,
  Bell,
  BellOff,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Sun,
  Moon,
  Mic,
  MicOff,
  Grid,
  LayoutList,
} from "lucide-react"
import { useState } from "react"

export default function TogglePage() {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [alignment, setAlignment] = useState<string>("left")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Toggle"
        description="A two-state button that can be either on or off."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/toggle"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Toggle */}
        <ShowcaseSection title="Basic Toggle">
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </ShowcaseSection>

        <Separator />

        {/* With Text */}
        <ShowcaseSection title="With Text">
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4 mr-2" />
              Bold
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Toggle size="sm" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle size="default" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle size="lg" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Large</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Variants */}
        <ShowcaseSection title="Variants">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="default" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Outline</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State">
          <div className="flex gap-2">
            <Toggle disabled aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle disabled defaultPressed aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Text Editor Toolbar */}
        <ShowcaseSection title="Text Editor Toolbar">
          <div className="w-full max-w-3xl rounded-lg border p-4 space-y-4">
            <div className="flex flex-wrap gap-1">
              <Toggle
                variant="outline"
                pressed={isBold}
                onPressedChange={setIsBold}
                aria-label="Toggle bold"
              >
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle
                variant="outline"
                pressed={isItalic}
                onPressedChange={setIsItalic}
                aria-label="Toggle italic"
              >
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Separator orientation="vertical" className="h-8 mx-1" />
              <Toggle variant="outline" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Align justify">
                <AlignJustify className="h-4 w-4" />
              </Toggle>
              <Separator orientation="vertical" className="h-8 mx-1" />
              <Toggle variant="outline" aria-label="Bullet list">
                <List className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4" />
              </Toggle>
            </div>
            <div className="min-h-32 rounded-md border p-4">
              <p className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""}`}>
                Sample text with{" "}
                {isBold && "bold"}
                {isBold && isItalic && " and "}
                {isItalic && "italic"} formatting applied.
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Media Controls */}
        <ShowcaseSection title="Media Controls">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Toggle variant="outline" aria-label="Play">
                <Play className="h-5 w-5" />
              </Toggle>
              <Toggle variant="outline" aria-label="Pause">
                <Pause className="h-5 w-5" />
              </Toggle>
              <Separator orientation="vertical" className="h-8 mx-1" />
              <Toggle variant="outline" aria-label="Toggle mute">
                <Volume2 className="h-5 w-5" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle fullscreen">
                <Maximize className="h-5 w-5" />
              </Toggle>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* View Mode Toggle */}
        <ShowcaseSection title="View Mode Toggle">
          <div className="flex gap-2 rounded-lg border p-2 w-fit">
            <Toggle variant="outline" aria-label="Grid view">
              <Grid className="h-4 w-4 mr-2" />
              Grid
            </Toggle>
            <Toggle variant="outline" aria-label="List view">
              <LayoutList className="h-4 w-4 mr-2" />
              List
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Icon Only Toggles */}
        <ShowcaseSection title="Icon Only">
          <div className="flex flex-wrap gap-2">
            <Toggle variant="outline" aria-label="Toggle favorite">
              <Star className="h-4 w-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle like">
              <Heart className="h-4 w-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle bookmark">
              <Bookmark className="h-4 w-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle notifications">
              <Bell className="h-4 w-4" />
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Alignment Group */}
        <ShowcaseSection title="Alignment Group">
          <div className="flex gap-1">
            <Toggle
              variant="outline"
              pressed={alignment === "left"}
              onPressedChange={() => setAlignment("left")}
              aria-label="Align left"
            >
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle
              variant="outline"
              pressed={alignment === "center"}
              onPressedChange={() => setAlignment("center")}
              aria-label="Align center"
            >
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle
              variant="outline"
              pressed={alignment === "right"}
              onPressedChange={() => setAlignment("right")}
              aria-label="Align right"
            >
              <AlignRight className="h-4 w-4" />
            </Toggle>
            <Toggle
              variant="outline"
              pressed={alignment === "justify"}
              onPressedChange={() => setAlignment("justify")}
              aria-label="Align justify"
            >
              <AlignJustify className="h-4 w-4" />
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Code Editor Toggles */}
        <ShowcaseSection title="Code Editor">
          <div className="w-full max-w-3xl rounded-lg border p-4">
            <div className="flex flex-wrap gap-1 mb-4">
              <Toggle variant="outline" aria-label="Insert code">
                <Code className="h-4 w-4 mr-2" />
                Code
              </Toggle>
              <Toggle variant="outline" aria-label="Insert quote">
                <Quote className="h-4 w-4 mr-2" />
                Quote
              </Toggle>
              <Toggle variant="outline" aria-label="Insert link">
                <LinkIcon className="h-4 w-4 mr-2" />
                Link
              </Toggle>
              <Toggle variant="outline" aria-label="Insert image">
                <Image className="h-4 w-4 mr-2" />
                Image
              </Toggle>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Settings Toggles */}
        <ShowcaseSection title="Settings Toggles">
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="font-medium">Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Enable or disable notifications
                </div>
              </div>
              <Toggle variant="outline" aria-label="Toggle notifications">
                <Bell className="h-4 w-4" />
              </Toggle>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="font-medium">Dark Mode</div>
                <div className="text-sm text-muted-foreground">
                  Switch between light and dark theme
                </div>
              </div>
              <Toggle variant="outline" aria-label="Toggle dark mode">
                <Moon className="h-4 w-4" />
              </Toggle>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="font-medium">Privacy</div>
                <div className="text-sm text-muted-foreground">
                  Lock your profile
                </div>
              </div>
              <Toggle variant="outline" aria-label="Toggle privacy">
                <Lock className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Toolbar Groups */}
        <ShowcaseSection title="Toolbar Groups">
          <div className="w-full max-w-4xl rounded-lg border p-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-1">
                <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center">
                  Format:
                </span>
                <Toggle variant="outline" size="sm" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="sm" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="sm" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex gap-1">
                <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center">
                  Media:
                </span>
                <Toggle variant="outline" size="sm" aria-label="Image">
                  <Image className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="sm" aria-label="Video">
                  <Video className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="sm" aria-label="Audio">
                  <Music className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Audio Controls */}
        <ShowcaseSection title="Audio Controls">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Recording Controls</span>
              <div className="flex gap-2">
                <Toggle variant="outline" aria-label="Toggle microphone">
                  <Mic className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle speakers">
                  <Volume2 className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Filter Toggles */}
        <ShowcaseSection title="Filter Toggles">
          <div className="w-full max-w-2xl space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium mr-2 flex items-center">
                Filter by:
              </span>
              <Toggle variant="outline" size="sm">
                Active
              </Toggle>
              <Toggle variant="outline" size="sm">
                Pending
              </Toggle>
              <Toggle variant="outline" size="sm">
                Completed
              </Toggle>
              <Toggle variant="outline" size="sm">
                Archived
              </Toggle>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Status Toggles */}
        <ShowcaseSection title="Status Toggles">
          <div className="flex gap-2">
            <Toggle variant="outline" aria-label="Toggle visibility">
              <Eye className="h-4 w-4 mr-2" />
              Visible
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle public">
              <Unlock className="h-4 w-4 mr-2" />
              Public
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notify
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* On/Off States */}
        <ShowcaseSection title="On/Off States">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="outline" aria-label="Notifications on">
                <Bell className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Off</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle
                variant="outline"
                defaultPressed
                aria-label="Notifications off"
              >
                <BellOff className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">On (Pressed)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="outline" aria-label="Volume on">
                <Volume2 className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">Off</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle
                variant="outline"
                defaultPressed
                aria-label="Volume muted"
              >
                <VolumeX className="h-4 w-4" />
              </Toggle>
              <span className="text-xs text-muted-foreground">On (Pressed)</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Theme Toggle */}
        <ShowcaseSection title="Theme Toggle">
          <div className="flex gap-2">
            <Toggle variant="outline" aria-label="Light mode">
              <Sun className="h-4 w-4 mr-2" />
              Light
            </Toggle>
            <Toggle variant="outline" aria-label="Dark mode">
              <Moon className="h-4 w-4 mr-2" />
              Dark
            </Toggle>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact Toolbar */}
        <ShowcaseSection title="Compact Toolbar">
          <div className="rounded-lg border p-2 w-fit">
            <div className="flex gap-1">
              <Toggle size="sm" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="sm" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle size="sm" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Separator orientation="vertical" className="h-6 mx-1" />
              <Toggle size="sm" aria-label="Code">
                <Code className="h-4 w-4" />
              </Toggle>
              <Toggle size="sm" aria-label="Link">
                <LinkIcon className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Action Toggles */}
        <ShowcaseSection title="Action Toggles">
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Toggle variant="outline" size="sm" aria-label="Like">
                <Heart className="h-4 w-4" />
              </Toggle>
              <span className="text-sm">Like this post</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Toggle variant="outline" size="sm" aria-label="Bookmark">
                <Bookmark className="h-4 w-4" />
              </Toggle>
              <span className="text-sm">Save for later</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Toggle variant="outline" size="sm" aria-label="Star">
                <Star className="h-4 w-4" />
              </Toggle>
              <span className="text-sm">Add to favorites</span>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
