"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Copy,
  Scissors,
  Clipboard,
  Trash2,
  Download,
  Share2,
  Edit,
  Star,
  Eye,
  EyeOff,
  MoreHorizontal,
  File,
  Folder,
  Image,
  FileText,
  Settings,
  User,
  Mail,
  MessageSquare,
  Heart,
  Bookmark,
  Link,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
} from "lucide-react"

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showUrlBar, setShowUrlBar] = useState(false)
  const [viewMode, setViewMode] = useState("grid")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Context Menu"
        description="Displays a menu to the user when right-clicking or long-pressing an element."
      />

      <ComponentShowcase>
        {/* Basic Context Menu */}
        <ShowcaseSection title="Basic">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Scissors className="mr-2 h-4 w-4" />
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Clipboard
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                  <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Checkbox Items */}
        <ShowcaseSection title="With Checkboxes">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click to toggle options
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  <Bookmark className="mr-2 h-4 w-4" />
                  Show Bookmarks Bar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showUrlBar}
                  onCheckedChange={setShowUrlBar}
                >
                  <Link className="mr-2 h-4 w-4" />
                  Show URL Bar
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Bookmarks: {showBookmarks ? "Shown" : "Hidden"} | URL Bar: {showUrlBar ? "Shown" : "Hidden"}
          </p>
        </ShowcaseSection>

        <Separator />

        {/* With Radio Items */}
        <ShowcaseSection title="With Radio Group">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click to change view
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Mode</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
                  <ContextMenuRadioItem value="grid">
                    Grid View
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="list">
                    List View
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="columns">
                    Column View
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Current view: {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)}
          </p>
        </ShowcaseSection>

        <Separator />

        {/* With Submenu */}
        <ShowcaseSection title="With Submenu">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click for nested menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </ContextMenuItem>
                <ContextMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* File Manager Context Menu */}
        <ShowcaseSection title="File Manager">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContextMenu>
              <ContextMenuTrigger>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Folder className="h-12 w-12 text-blue-500 mb-2" />
                    <p className="text-sm font-medium">Documents</p>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Open
                </ContextMenuItem>
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Rename
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </ContextMenuItem>
                <ContextMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>

            <ContextMenu>
              <ContextMenuTrigger>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <FileText className="h-12 w-12 text-green-500 mb-2" />
                    <p className="text-sm font-medium">Report.pdf</p>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Open
                </ContextMenuItem>
                <ContextMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </ContextMenuItem>
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Rename
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  Add to Favorites
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>

            <ContextMenu>
              <ContextMenuTrigger>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Image className="h-12 w-12 text-purple-500 mb-2" />
                    <p className="text-sm font-medium">Photo.jpg</p>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </ContextMenuItem>
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    More Actions
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <ZoomIn className="mr-2 h-4 w-4" />
                      Zoom In
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <ZoomOut className="mr-2 h-4 w-4" />
                      Zoom Out
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Rotate Left
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <RotateCw className="mr-2 h-4 w-4" />
                      Rotate Right
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </ContextMenuItem>
                <ContextMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Right-click on any file or folder to see options
          </p>
        </ShowcaseSection>

        <Separator />

        {/* Text Editor Context Menu */}
        <ShowcaseSection title="Text Editor">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger>
                <Card className="w-full max-w-2xl">
                  <CardHeader>
                    <CardTitle>Document Editor</CardTitle>
                    <CardDescription>Right-click on the text area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="min-h-[200px] p-4 rounded-md border bg-muted/50">
                      <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Scissors className="mr-2 h-4 w-4" />
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Clipboard
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Edit className="mr-2 h-4 w-4" />
                    Format
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Bold</ContextMenuItem>
                    <ContextMenuItem>Italic</ContextMenuItem>
                    <ContextMenuItem>Underline</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Clear Formatting</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Select All
                  <ContextMenuShortcut>⌘A</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User Profile Context Menu */}
        <ShowcaseSection title="User Profile">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger>
                <Card className="w-80 cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View Profile
                </ContextMenuItem>
                <ContextMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Favorites
                </ContextMenuItem>
                <ContextMenuItem>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  Block User
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled Items */}
        <ShowcaseSection title="With Disabled Items">
          <div className="flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click (some items disabled)
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <Scissors className="mr-2 h-4 w-4" />
                  Cut (No selection)
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Clipboard (Clipboard empty)
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  Add to Favorites
                </ContextMenuItem>
                <ContextMenuItem disabled variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete (Read-only)
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Gallery Context Menu */}
        <ShowcaseSection title="Image Gallery">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <ContextMenu key={num}>
                <ContextMenuTrigger>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center cursor-pointer hover:from-primary/30 hover:to-primary/10 transition-colors">
                    <Image className="h-16 w-16 text-primary/40" />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-56">
                  <ContextMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View Full Size
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Maximize className="mr-2 h-4 w-4" />
                    Open in New Tab
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Image
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Link className="mr-2 h-4 w-4" />
                    Copy Link
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <Star className="mr-2 h-4 w-4" />
                    Set as Wallpaper
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Right-click on any image for options
          </p>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
