"use client"

import { Separator } from "@/components/ui/separator"
import { Kbd } from "@/components/ui/kbd"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { Search } from "lucide-react"
import Link from "next/link"

export default function KpdPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="KPD"
        description="Used to display textual user input from keyboard."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/kbd"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Keys */}
        <ShowcaseSection title="Basic Keys">
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⌃</Kbd>
            <Kbd>Ctrl</Kbd>
            <Kbd>+</Kbd>
            <Kbd>B</Kbd>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Key Combinations */}
        <ShowcaseSection title="Key Combinations">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">Use</span>
              <Kbd>Ctrl</Kbd>
              <span className="text-sm">+</span>
              <Kbd>B</Kbd>
            </div>

            <div className="flex items-center gap-2">
              <Kbd>Ctrl</Kbd>
              <span className="text-sm">+</span>
              <Kbd>K</Kbd>
              <span className="text-sm text-muted-foreground">to open the command palette</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Action Keys */}
        <ShowcaseSection title="Action Keys">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">Accept</span>
              <Kbd>⏎</Kbd>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Cancel</span>
              <Kbd>Esc</Kbd>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Save Changes</span>
              <Kbd>⌘</Kbd>
              <span className="text-sm">+</span>
              <Kbd>S</Kbd>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Buttons */}
        <ShowcaseSection title="With Buttons">
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-between">
              Save
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>S</Kbd>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-between">
              Print
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>P</Kbd>
              </div>
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Search Input */}
        <ShowcaseSection title="Search Input">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 pr-16"
            />
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Common Shortcuts */}
        <ShowcaseSection title="Common Shortcuts">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Copy</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>C</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Paste</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>V</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Cut</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>X</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Undo</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>Z</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Redo</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>Z</Kbd>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* macOS Modifiers */}
        <ShowcaseSection title="macOS Modifiers">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Command</span>
              <Kbd>⌘</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Shift</span>
              <Kbd>⇧</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Option</span>
              <Kbd>⌥</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Control</span>
              <Kbd>⌃</Kbd>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Windows/Linux Modifiers */}
        <ShowcaseSection title="Windows/Linux Modifiers">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Control</span>
              <Kbd>Ctrl</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Alt</span>
              <Kbd>Alt</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Shift</span>
              <Kbd>Shift</Kbd>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <span className="text-sm">Windows</span>
              <Kbd>Win</Kbd>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Navigation Keys */}
        <ShowcaseSection title="Navigation Keys">
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
            <Kbd>Home</Kbd>
            <Kbd>End</Kbd>
            <Kbd>PgUp</Kbd>
            <Kbd>PgDn</Kbd>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Function Keys */}
        <ShowcaseSection title="Function Keys">
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>F1</Kbd>
            <Kbd>F2</Kbd>
            <Kbd>F3</Kbd>
            <Kbd>F4</Kbd>
            <Kbd>F5</Kbd>
            <Kbd>F6</Kbd>
            <Kbd>F7</Kbd>
            <Kbd>F8</Kbd>
            <Kbd>F9</Kbd>
            <Kbd>F10</Kbd>
            <Kbd>F11</Kbd>
            <Kbd>F12</Kbd>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Special Keys */}
        <ShowcaseSection title="Special Keys">
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>Tab</Kbd>
            <Kbd>Space</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>⏎</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>Delete</Kbd>
            <Kbd>⌫</Kbd>
            <Kbd>⌦</Kbd>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Editor Shortcuts */}
        <ShowcaseSection title="Editor Shortcuts">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Find</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>F</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Replace</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>⌥</Kbd>
                <Kbd>F</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Go to line</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>G</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Comment line</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>/</Kbd>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-sm">Format document</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>F</Kbd>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">Small:</span>
              <Kbd className="h-4 text-[9px]">⌘</Kbd>
              <Kbd className="h-4 text-[9px]">K</Kbd>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Default:</span>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Large:</span>
              <Kbd className="h-6 text-xs">⌘</Kbd>
              <Kbd className="h-6 text-xs">K</Kbd>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In Text */}
        <ShowcaseSection title="In Text">
          <div className="space-y-3 max-w-lg">
            <p className="text-sm text-muted-foreground">
              Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette
              and start typing to find commands.
            </p>

            <p className="text-sm text-muted-foreground">
              You can use <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy and{" "}
              <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> to paste text.
            </p>

            <p className="text-sm text-muted-foreground">
              Save your work frequently using <Kbd>⌘</Kbd> + <Kbd>S</Kbd> or{" "}
              <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> depending on your operating system.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Command Menu Example */}
        <ShowcaseSection title="Command Menu Example">
          <div className="w-full max-w-md space-y-2 rounded-lg border p-4">
            <div className="mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Type a command or search..."
                  className="pl-9 pr-16"
                />
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
                <span className="text-sm">New File</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>N</Kbd>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
                <span className="text-sm">Open File</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>O</Kbd>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
                <span className="text-sm">Save</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent">
                <span className="text-sm">Close</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>W</Kbd>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
