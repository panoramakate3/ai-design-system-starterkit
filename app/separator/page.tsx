"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Home,
  User,
  Settings,
  Mail,
  Bell,
  Search,
  Calendar,
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react"
import Link from "next/link"

export default function SeparatorPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Separator"
        description="Visually or semantically separates content."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/separator"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Horizontal */}
        <ShowcaseSection title="Basic Horizontal">
          <div className="w-full max-w-md space-y-4">
            <div>
              <h4 className="text-sm font-medium">Section 1</h4>
              <p className="text-sm text-muted-foreground">
                This is the first section of content.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium">Section 2</h4>
              <p className="text-sm text-muted-foreground">
                This is the second section of content.
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Basic Vertical */}
        <ShowcaseSection title="Basic Vertical">
          <div className="flex h-20 items-center space-x-4">
            <div className="text-sm">Item 1</div>
            <Separator orientation="vertical" />
            <div className="text-sm">Item 2</div>
            <Separator orientation="vertical" />
            <div className="text-sm">Item 3</div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In Navigation */}
        <ShowcaseSection title="Navigation Menu">
          <div className="w-full max-w-md space-y-1 rounded-lg border p-4">
            <div className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">Home</span>
            </div>
            <div className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Profile</span>
            </div>
            <div className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Settings</span>
            </div>
            <Separator className="my-2" />
            <div className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Messages</span>
            </div>
            <div className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <Bell className="h-4 w-4" />
              <span className="text-sm font-medium">Notifications</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In Toolbar */}
        <ShowcaseSection title="Toolbar with Vertical Separators">
          <div className="flex items-center space-x-2 rounded-lg border p-2">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In Card */}
        <ShowcaseSection title="In Card Layout">
          <div className="w-full max-w-md rounded-lg border shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Card description goes here
              </p>
            </div>
            <Separator />
            <div className="p-6">
              <p className="text-sm">
                This is the main content area of the card, separated from the header.
              </p>
            </div>
            <Separator />
            <div className="flex items-center justify-end gap-2 p-4">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <Button size="sm">Confirm</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Text Label */}
        <ShowcaseSection title="With Text Label">
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Content before the separator
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Content after the separator
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Login Form Example */}
        <ShowcaseSection title="Login Form Example">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Sign In</h3>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to continue
              </p>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Spacing */}
        <ShowcaseSection title="Different Spacing">
          <div className="w-full max-w-md space-y-8">
            <div>
              <p className="text-sm">Tight spacing (my-1)</p>
              <Separator className="my-1" />
              <p className="text-sm">Content below</p>
            </div>

            <div>
              <p className="text-sm">Default spacing (my-2)</p>
              <Separator className="my-2" />
              <p className="text-sm">Content below</p>
            </div>

            <div>
              <p className="text-sm">Loose spacing (my-4)</p>
              <Separator className="my-4" />
              <p className="text-sm">Content below</p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Colors */}
        <ShowcaseSection title="Custom Colors">
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-sm mb-2">Default</p>
              <Separator />
            </div>

            <div>
              <p className="text-sm mb-2">Primary</p>
              <Separator className="bg-primary" />
            </div>

            <div>
              <p className="text-sm mb-2">Muted</p>
              <Separator className="bg-muted" />
            </div>

            <div>
              <p className="text-sm mb-2">Accent</p>
              <Separator className="bg-accent" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Thickness */}
        <ShowcaseSection title="Different Thickness">
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-sm mb-2">Thin (default - 1px)</p>
              <Separator />
            </div>

            <div>
              <p className="text-sm mb-2">Medium (2px)</p>
              <Separator className="h-0.5" />
            </div>

            <div>
              <p className="text-sm mb-2">Thick (4px)</p>
              <Separator className="h-1" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* In List */}
        <ShowcaseSection title="In List">
          <div className="w-full max-w-md rounded-lg border">
            <div className="p-4">
              <h4 className="font-semibold">Notifications</h4>
            </div>
            <Separator />
            <div className="divide-y">
              <div className="p-4 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">New message received</p>
                <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
              </div>
              <div className="p-4 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">Your post was liked</p>
                <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
              </div>
              <div className="p-4 hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">New follower</p>
                <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Social Actions */}
        <ShowcaseSection title="Social Actions Bar">
          <div className="w-full max-w-md rounded-lg border p-4 space-y-4">
            <div>
              <h4 className="font-semibold">Sample Post</h4>
              <p className="text-sm text-muted-foreground mt-2">
                This is a sample post content that demonstrates how separators can be used
                to divide different sections of a card.
              </p>
            </div>
            <Separator />
            <div className="flex items-center justify-around">
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span>Like</span>
              </button>
              <Separator orientation="vertical" className="h-4" />
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Comment</span>
              </button>
              <Separator orientation="vertical" className="h-4" />
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <Separator orientation="vertical" className="h-4" />
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Bookmark className="h-4 w-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Vertical in Sidebar */}
        <ShowcaseSection title="Vertical in Sidebar Layout">
          <div className="flex h-64 w-full max-w-2xl rounded-lg border overflow-hidden">
            <div className="w-48 bg-muted/30 p-4">
              <h4 className="font-semibold mb-4">Sidebar</h4>
              <nav className="space-y-2">
                <div className="text-sm cursor-pointer hover:text-primary">Dashboard</div>
                <div className="text-sm cursor-pointer hover:text-primary">Projects</div>
                <div className="text-sm cursor-pointer hover:text-primary">Team</div>
                <div className="text-sm cursor-pointer hover:text-primary">Settings</div>
              </nav>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 p-6">
              <h4 className="font-semibold mb-2">Main Content</h4>
              <p className="text-sm text-muted-foreground">
                This is the main content area separated from the sidebar with a vertical separator.
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Breadcrumb Style */}
        <ShowcaseSection title="Breadcrumb Style">
          <div className="flex items-center text-sm">
            <span className="cursor-pointer hover:text-primary">Home</span>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <span className="cursor-pointer hover:text-primary">Products</span>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <span className="cursor-pointer hover:text-primary">Category</span>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <span className="text-muted-foreground">Current Page</span>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Stats Grid */}
        <ShowcaseSection title="Stats Grid">
          <div className="w-full max-w-2xl rounded-lg border">
            <div className="grid grid-cols-3 divide-x">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold">1,234</div>
                <div className="text-sm text-muted-foreground mt-1">Users</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold">5,678</div>
                <div className="text-sm text-muted-foreground mt-1">Views</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold">91%</div>
                <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Semantic vs Decorative */}
        <ShowcaseSection title="Semantic vs Decorative">
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Decorative (default - not read by screen readers)</p>
              <Separator decorative={true} />
              <p className="text-xs text-muted-foreground mt-2">
                Used for visual separation only
              </p>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Semantic (read by screen readers)</p>
              <Separator decorative={false} />
              <p className="text-xs text-muted-foreground mt-2">
                Used for meaningful content separation
              </p>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
