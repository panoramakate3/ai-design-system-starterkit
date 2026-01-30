"use client"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import {
  User,
  Settings,
  Bell,
  Lock,
  CreditCard,
  Mail,
  Heart,
  Star,
  ShoppingCart,
  Home,
  Search,
  FileText,
  Image,
  Video,
  Music,
} from "lucide-react"

export default function TabsPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Tabs"
        description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/tabs"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Tabs */}
        <ShowcaseSection title="Basic Tabs">
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here. Click save when you're done.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Password Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Change your password here. After saving, you'll be logged out.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <Tabs defaultValue="profile" className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Profile Information</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Update your profile information and manage your public profile.
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Display Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Bio</label>
                    <textarea
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                      rows={3}
                      placeholder="Tell us about yourself"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how you receive notifications.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* With Badges */}
        <ShowcaseSection title="With Badges">
          <Tabs defaultValue="all" className="w-full max-w-2xl">
            <TabsList>
              <TabsTrigger value="all">
                All
                <Badge variant="secondary" className="ml-2">
                  12
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                <Badge variant="default" className="ml-2">
                  5
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="archived">
                Archived
                <Badge variant="secondary" className="ml-2">
                  7
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Showing all 12 messages
                </p>
              </div>
            </TabsContent>
            <TabsContent value="unread" className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Showing 5 unread messages
                </p>
              </div>
            </TabsContent>
            <TabsContent value="archived" className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Showing 7 archived messages
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* Many Tabs */}
        <ShowcaseSection title="Many Tabs">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Overview Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  View your dashboard overview and key metrics.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed analytics and insights.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Generate and view reports.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your notifications.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Configure your preferences.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* Settings Panel */}
        <ShowcaseSection title="Settings Panel">
          <Tabs defaultValue="general" className="w-full max-w-3xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4">
              <div className="rounded-lg border p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Language</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <div className="rounded-lg border p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-4">Security Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">
                          Update your password regularly
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="billing" className="space-y-4">
              <div className="rounded-lg border p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-4">Billing Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">$29/month</p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Manage Payment Methods
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <input type="checkbox" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications
                      </p>
                    </div>
                    <input type="checkbox" defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* E-commerce Product Tabs */}
        <ShowcaseSection title="Product Details">
          <Tabs defaultValue="description" className="w-full max-w-3xl">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-3">Product Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This premium product combines cutting-edge technology with elegant
                  design. Crafted with attention to detail, it offers exceptional
                  performance and durability. Perfect for both professional and
                  personal use, this item is built to last and exceed your
                  expectations.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-3">Technical Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="font-medium">15 x 10 x 5 cm</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-medium">500g</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">Premium Aluminum</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="font-medium">Space Gray</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">4.8 out of 5</span>
                  <span className="text-sm text-muted-foreground">(24 reviews)</span>
                </div>
                <Button variant="outline" className="w-full">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-3">Shipping Information</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Standard Shipping:</strong> 5-7 business days
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Express Shipping:</strong> 2-3 business days
                  </p>
                  <p className="text-muted-foreground">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* Media Library */}
        <ShowcaseSection title="Media Library">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">
                <FileText className="mr-2 h-4 w-4" />
                All Files
              </TabsTrigger>
              <TabsTrigger value="images">
                <Image className="mr-2 h-4 w-4" />
                Images
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="mr-2 h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="audio">
                <Music className="mr-2 h-4 w-4" />
                Audio
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg border bg-muted flex items-center justify-center"
                  >
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="images" className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg border bg-muted flex items-center justify-center"
                  >
                    <Image className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos" className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg border bg-muted flex items-center justify-center"
                  >
                    <Video className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="audio" className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg border bg-muted flex items-center justify-center"
                  >
                    <Music className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* Dashboard Navigation */}
        <ShowcaseSection title="Dashboard Navigation">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="search">
                <Search className="mr-2 h-4 w-4" />
                Search
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="cart">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="font-semibold mb-2">Welcome Home</h3>
                <p className="text-sm text-muted-foreground">
                  Your personalized dashboard with recent activity and recommendations.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="search" className="space-y-4">
              <div className="rounded-lg border p-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="favorites" className="space-y-4">
              <div className="rounded-lg border p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  No favorites yet. Start adding items you love!
                </p>
              </div>
            </TabsContent>
            <TabsContent value="cart" className="space-y-4">
              <div className="rounded-lg border p-6 text-center">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Your cart is empty</p>
                <Button className="mt-4">Start Shopping</Button>
              </div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>

        <Separator />

        {/* Vertical Tabs (using flex-row) */}
        <ShowcaseSection title="Custom Layout">
          <div className="w-full max-w-3xl">
            <Tabs defaultValue="account" className="flex gap-6">
              <TabsList className="flex flex-col h-fit">
                <TabsTrigger value="account" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="security" className="w-full justify-start">
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="notifications" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="billing" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent value="account" className="mt-0">
                  <div className="rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Account Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your account information and preferences.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="security" className="mt-0">
                  <div className="rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Security Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure security options and authentication methods.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="mt-0">
                  <div className="rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Notification Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose how you want to be notified.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="billing" className="mt-0">
                  <div className="rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Billing Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your subscription and payment methods.
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact Tabs */}
        <ShowcaseSection title="Compact Tabs">
          <Tabs defaultValue="today" className="w-full max-w-md">
            <TabsList className="h-8 p-[2px]">
              <TabsTrigger value="today" className="text-xs h-full">
                Today
              </TabsTrigger>
              <TabsTrigger value="week" className="text-xs h-full">
                This Week
              </TabsTrigger>
              <TabsTrigger value="month" className="text-xs h-full">
                This Month
              </TabsTrigger>
              <TabsTrigger value="year" className="text-xs h-full">
                This Year
              </TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <div className="text-sm text-muted-foreground">Today's data</div>
            </TabsContent>
            <TabsContent value="week">
              <div className="text-sm text-muted-foreground">Week's data</div>
            </TabsContent>
            <TabsContent value="month">
              <div className="text-sm text-muted-foreground">Month's data</div>
            </TabsContent>
            <TabsContent value="year">
              <div className="text-sm text-muted-foreground">Year's data</div>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
