"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Settings,
  Info,
  HelpCircle,
  User,
  Bell,
  Share2,
  Filter,
  Calendar as CalendarIcon,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { format } from "date-fns"

export default function PopoverPage() {
  const [date, setDate] = useState<Date>()

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/popover"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Popover */}
        <ShowcaseSection title="Basic Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="320px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* With Icon */}
        <ShowcaseSection title="With Icon">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Configure your preferences
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Notifications</Label>
                    <input type="checkbox" id="notifications" className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emails">Email alerts</Label>
                    <input type="checkbox" id="emails" className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Different Alignments */}
        <ShowcaseSection title="Different Alignments">
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Start</Button>
              </PopoverTrigger>
              <PopoverContent align="start">
                <p className="text-sm">Aligned to start</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Center</Button>
              </PopoverTrigger>
              <PopoverContent align="center">
                <p className="text-sm">Aligned to center</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">End</Button>
              </PopoverTrigger>
              <PopoverContent align="end">
                <p className="text-sm">Aligned to end</p>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Sides */}
        <ShowcaseSection title="Different Sides">
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Top</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                <p className="text-sm">Positioned on top</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <p className="text-sm">Positioned on bottom</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Left</Button>
              </PopoverTrigger>
              <PopoverContent side="left">
                <p className="text-sm">Positioned on left</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Right</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                <p className="text-sm">Positioned on right</p>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User Profile */}
        <ShowcaseSection title="User Profile">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" className="justify-start" size="sm">
                    Settings
                  </Button>
                  <Button variant="outline" className="justify-start text-destructive" size="sm">
                    Sign Out
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Notifications */}
        <ShowcaseSection title="Notifications">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium leading-none">Notifications</h4>
                  <span className="text-xs text-muted-foreground">3 new</span>
                </div>
                <Separator className="-mx-4 w-[calc(100%+2rem)]" />
                <div className="grid gap-3">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">System Update</p>
                      <p className="text-xs text-muted-foreground">
                        A new update is available
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">New Follower</p>
                      <p className="text-xs text-muted-foreground">
                        Someone started following you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Share Options */}
        <ShowcaseSection title="Share Options">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Share this page</h4>
                  <p className="text-sm text-muted-foreground">
                    Anyone with the link can view
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value="https://example.com/share"
                    className="h-8"
                  />
                  <Button size="sm">Copy</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Filter Menu */}
        <ShowcaseSection title="Filter Menu">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Filters</h4>
                  <p className="text-sm text-muted-foreground">
                    Set your filter preferences
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <select id="status" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm">
                      <option>All</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm">
                      <option>All</option>
                      <option>Design</option>
                      <option>Development</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <Button size="sm" className="mt-2">Apply Filters</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Help Tooltip */}
        <ShowcaseSection title="Help Tooltip">
          <div className="flex items-center gap-2">
            <span className="text-sm">Need help?</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <h4 className="font-medium">Getting Started</h4>
                  <p className="text-sm text-muted-foreground">
                    Click the button below to view our documentation and learn how to use this feature.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Documentation
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Date Picker */}
        <ShowcaseSection title="Date Picker">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[280px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Contact Form */}
        <ShowcaseSection title="Contact Form">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Contact Us</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Send us a message</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you as soon as possible
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="h-8" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="email-contact">Email</Label>
                    <Input id="email-contact" type="email" placeholder="your@email.com" className="h-8" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" rows={3} />
                  </div>
                  <Button size="sm">Send Message</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseSection>

        <Separator />

        {/* Custom Width */}
        <ShowcaseSection title="Custom Width">
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Small</Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <p className="text-sm">This is a small popover with w-48</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Large</Button>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <p className="text-sm">
                  This is a large popover with w-96. It can contain more content and is useful for displaying detailed information or forms.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
