"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { File, Folder, Image as ImageIcon, Video, Music, FileText, Clock } from "lucide-react"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const artworks = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
]

const files = [
  { name: "Documents", type: "folder", size: "—", modified: "2 hours ago" },
  { name: "project-brief.pdf", type: "file", size: "2.4 MB", modified: "1 day ago" },
  { name: "presentation.pptx", type: "file", size: "8.7 MB", modified: "2 days ago" },
  { name: "Images", type: "folder", size: "—", modified: "3 days ago" },
  { name: "screenshot.png", type: "image", size: "1.2 MB", modified: "4 days ago" },
  { name: "video-recording.mp4", type: "video", size: "45 MB", modified: "5 days ago" },
  { name: "audio-track.mp3", type: "music", size: "3.5 MB", modified: "1 week ago" },
  { name: "notes.txt", type: "text", size: "12 KB", modified: "1 week ago" },
  { name: "Downloads", type: "folder", size: "—", modified: "2 weeks ago" },
  { name: "budget-2024.xlsx", type: "file", size: "456 KB", modified: "3 weeks ago" },
]

export default function ScrollAreaPage() {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <Folder className="h-4 w-4 text-blue-500" />
      case "image":
        return <ImageIcon className="h-4 w-4 text-green-500" />
      case "video":
        return <Video className="h-4 w-4 text-purple-500" />
      case "music":
        return <Music className="h-4 w-4 text-pink-500" />
      case "text":
        return <FileText className="h-4 w-4 text-yellow-500" />
      default:
        return <File className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Scroll-area"
        description="Augments native scroll functionality for custom, cross-browser styling."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/scroll-area"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Vertical Scroll */}
        <ShowcaseSection title="Basic Vertical Scroll">
          <ScrollArea className="h-72 w-full max-w-md rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-sm">
                  <h4 className="mb-1 font-medium">Item {i + 1}</h4>
                  <p className="text-muted-foreground">
                    This is a scrollable content area. You can scroll vertically to see more content.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Tags Example */}
        <ShowcaseSection title="Tags Example">
          <ScrollArea className="h-72 w-full max-w-md rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Horizontal Scroll */}
        <ShowcaseSection title="Horizontal Scroll">
          <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {artworks.map((artwork) => (
                <figure key={artwork.artist} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={artwork.art}
                      alt={`Photo by ${artwork.artist}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                      width={300}
                      height={400}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by{" "}
                    <span className="font-semibold text-foreground">
                      {artwork.artist}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Both Horizontal and Vertical */}
        <ShowcaseSection title="Both Scrolls">
          <ScrollArea className="h-80 w-full max-w-md rounded-md border">
            <div className="p-4">
              <table className="w-max">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left font-medium">Name</th>
                    <th className="px-4 py-2 text-left font-medium">Email</th>
                    <th className="px-4 py-2 text-left font-medium">Role</th>
                    <th className="px-4 py-2 text-left font-medium">Status</th>
                    <th className="px-4 py-2 text-left font-medium">Department</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2 text-sm">User {i + 1}</td>
                      <td className="px-4 py-2 text-sm">user{i + 1}@example.com</td>
                      <td className="px-4 py-2 text-sm">Developer</td>
                      <td className="px-4 py-2 text-sm">
                        <Badge variant={i % 3 === 0 ? "default" : "secondary"}>
                          {i % 3 === 0 ? "Active" : "Inactive"}
                        </Badge>
                      </td>
                      <td className="px-4 py-2 text-sm">Engineering</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Chat Messages */}
        <ShowcaseSection title="Chat Messages">
          <ScrollArea className="h-96 w-full max-w-md rounded-md border">
            <div className="p-4 space-y-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className={`flex gap-3 ${i % 3 === 0 ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{i % 3 === 0 ? "ME" : "U"}</AvatarFallback>
                  </Avatar>
                  <div className={`flex flex-col gap-1 ${i % 3 === 0 ? "items-end" : ""}`}>
                    <div className={`rounded-lg px-3 py-2 text-sm ${
                      i % 3 === 0 ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      {i % 3 === 0
                        ? "This is my message in the chat."
                        : "This is a response from the other user."}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Code Snippet */}
        <ShowcaseSection title="Code Snippet">
          <ScrollArea className="h-80 w-full max-w-2xl rounded-md border bg-black">
            <div className="p-4">
              <pre className="text-sm text-green-400">
                <code>{`import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Example() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

// Custom styling examples
const customStyles = {
  scrollbar: {
    width: '8px',
    borderRadius: '4px'
  },
  thumb: {
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '4px'
  }
}

// Usage with custom content
function CustomScrollArea() {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    title: \`Item \${i + 1}\`,
    description: \`Description for item \${i + 1}\`
  }))

  return (
    <ScrollArea className="h-full">
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </ScrollArea>
  )
}`}</code>
              </pre>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Notifications */}
        <ShowcaseSection title="Notifications">
          <ScrollArea className="h-96 w-full max-w-md rounded-md border">
            <div className="p-4 space-y-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex gap-3 rounded-lg border p-3 hover:bg-accent">
                  <div className={`h-2 w-2 rounded-full mt-2 ${
                    i < 3 ? "bg-blue-500" : "bg-muted"
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">
                      {i < 3 ? "New notification" : "Earlier notification"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You have a new message from user {i + 1}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {i < 3 ? "Just now" : `${i} hours ago`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* File List */}
        <ShowcaseSection title="File List">
          <ScrollArea className="h-80 w-full max-w-2xl rounded-md border">
            <div className="p-4">
              <div className="space-y-1">
                {files.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-md p-2 hover:bg-accent cursor-pointer"
                  >
                    {getFileIcon(file.type)}
                    <span className="flex-1 text-sm">{file.name}</span>
                    <span className="text-xs text-muted-foreground">{file.size}</span>
                    <span className="text-xs text-muted-foreground">{file.modified}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Settings Menu */}
        <ShowcaseSection title="Settings Menu">
          <ScrollArea className="h-96 w-full max-w-md rounded-md border">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Account</h3>
                <div className="space-y-1 text-sm">
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Profile</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Password</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Email Preferences</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Notifications</div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Privacy</h3>
                <div className="space-y-1 text-sm">
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Privacy Settings</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Data & Personalization</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Security</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Connected Apps</div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Appearance</h3>
                <div className="space-y-1 text-sm">
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Theme</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Language</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Accessibility</div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Billing</h3>
                <div className="space-y-1 text-sm">
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Subscription</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Payment Methods</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Invoices</div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Advanced</h3>
                <div className="space-y-1 text-sm">
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">API Keys</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Webhooks</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Integrations</div>
                  <div className="rounded-md p-2 hover:bg-accent cursor-pointer">Developer Settings</div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Timeline */}
        <ShowcaseSection title="Timeline">
          <ScrollArea className="h-96 w-full max-w-md rounded-md border">
            <div className="p-4">
              <div className="space-y-6">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        {i + 1}
                      </div>
                      {i < 9 && <div className="w-px h-full bg-border mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">Activity {i + 1}</h4>
                        <Badge variant="outline" className="text-xs">
                          {i === 0 ? "Now" : `${i}h ago`}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Description of the activity that occurred at this time.
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{new Date().toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Compact Height */}
        <ShowcaseSection title="Compact Height">
          <ScrollArea className="h-48 w-full max-w-md rounded-md border p-4">
            <div className="space-y-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="text-sm rounded-md border p-3">
                  Compact item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Large Height */}
        <ShowcaseSection title="Large Height">
          <ScrollArea className="h-[600px] w-full max-w-2xl rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Section {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    This is a large scrollable area with more content. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* With Badge List */}
        <ShowcaseSection title="With Badge List">
          <ScrollArea className="h-72 w-full max-w-md rounded-md border p-4">
            <div className="space-y-3">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">Feature {i + 1}</span>
                  <Badge variant={i % 3 === 0 ? "default" : i % 3 === 1 ? "secondary" : "outline"}>
                    {i % 3 === 0 ? "Active" : i % 3 === 1 ? "Beta" : "Coming Soon"}
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseSection>

        <Separator />

        {/* Image Grid */}
        <ShowcaseSection title="Image Grid">
          <ScrollArea className="h-96 w-full max-w-2xl rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-md bg-muted flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
