"use client"

import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import {
  Info,
  HelpCircle,
  Settings,
  Download,
  Upload,
  Share2,
  Trash2,
  Edit,
  Eye,
  Copy,
  MoreHorizontal,
  Plus,
  Save,
  Star,
  Heart,
  Bookmark,
} from "lucide-react"

export default function TooltipPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/tooltip"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Tooltip */}
        <ShowcaseSection title="Basic Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </ShowcaseSection>

        <Separator />

        {/* Positioned Tooltips */}
        <ShowcaseSection title="Positions">
          <div className="flex flex-col items-center gap-16">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex gap-16">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Information</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get help</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Action Buttons */}
        <ShowcaseSection title="Action Buttons">
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upload</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Keyboard Shortcuts */}
        <ShowcaseSection title="With Keyboard Shortcuts">
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Save className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Save</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>S
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Copy</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>C
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiline Tooltip */}
        <ShowcaseSection title="Multiline Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover for details</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>
                This is a longer tooltip with multiple lines of text to show how
                it wraps and displays more detailed information.
              </p>
            </TooltipContent>
          </Tooltip>
        </ShowcaseSection>

        <Separator />

        {/* Toolbar with Tooltips */}
        <ShowcaseSection title="Toolbar with Tooltips">
          <div className="flex gap-1 rounded-lg border p-2 w-fit">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View</p>
              </TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="h-6" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Icon-only Navigation */}
        <ShowcaseSection title="Icon-only Navigation">
          <div className="flex flex-col gap-2 rounded-lg border p-2 w-fit">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full justify-start">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Downloads</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full justify-start">
                  <Star className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Favorites</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full justify-start">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Status Indicators */}
        <ShowcaseSection title="Status Indicators">
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm">Online</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>User is currently online</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="text-sm">Away</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>User is away from keyboard</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm">Busy</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>User is in do not disturb mode</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Card with Tooltip */}
        <ShowcaseSection title="Card with Tooltip">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Premium Plan</h3>
                <p className="text-sm text-muted-foreground">$29/month</p>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    Includes all features, priority support, and unlimited storage
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                ✓ Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                ✓ Priority support
              </li>
              <li className="flex items-center gap-2">
                ✓ Custom domain
              </li>
            </ul>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Field Help */}
        <ShowcaseSection title="Form Field Help">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Username</label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Choose a unique username. It can only contain letters, numbers, and underscores.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="johndoe"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">API Key</label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Your API key is used to authenticate requests. Keep it secret and never share it publicly.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="••••••••••••••••"
              />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Interactive Elements */}
        <ShowcaseSection title="Interactive Elements">
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to favorites</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like this item</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save for later</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* More Options Menu */}
        <ShowcaseSection title="More Options">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More options</p>
            </TooltipContent>
          </Tooltip>
        </ShowcaseSection>

        <Separator />

        {/* Add Button */}
        <ShowcaseSection title="Add Button">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create new item</p>
            </TooltipContent>
          </Tooltip>
        </ShowcaseSection>

        <Separator />

        {/* Different Offsets */}
        <ShowcaseSection title="Different Offsets">
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">No Offset</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={0}>
                <p>sideOffset: 0</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Small Offset</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>sideOffset: 5</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Large Offset</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={15}>
                <p>sideOffset: 15</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled Button */}
        <ShowcaseSection title="Disabled Element">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-block">
                <Button disabled>Disabled Button</Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>This action is not available</p>
            </TooltipContent>
          </Tooltip>
        </ShowcaseSection>

        <Separator />

        {/* List with Tooltips */}
        <ShowcaseSection title="List with Tooltips">
          <div className="w-full max-w-md space-y-2">
            {[
              { name: "Project Alpha", status: "Active", color: "bg-green-500" },
              { name: "Project Beta", status: "Pending", color: "bg-yellow-500" },
              { name: "Project Gamma", status: "Completed", color: "bg-blue-500" },
            ].map((project, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={`h-3 w-3 rounded-full ${project.color} cursor-help`} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Status: {project.status}</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="font-medium">{project.name}</span>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More actions</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
