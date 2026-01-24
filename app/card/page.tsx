"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  Activity,
  CreditCard,
  Download,
  MoreVertical,
  Heart,
  Share2,
  MessageCircle
} from "lucide-react"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

export default function CardPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Card"
        description="A flexible container component for displaying content in a organized, visually appealing way."
      />

      <ComponentShowcase>
        {/* Basic Card */}
        <ShowcaseSection title="Basic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a basic card with header and content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Footer</CardTitle>
                <CardDescription>Includes footer section</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card content with action buttons in footer.
                </p>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Continue</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Action</CardTitle>
                <CardDescription>Header with action button</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card with action button in header.
                </p>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Stats Cards */}
        <ShowcaseSection title="Stats Cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 inline-flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +20.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 inline-flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +180.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 inline-flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +19%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600 inline-flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -2%
                  </span>{" "}
                  from last hour
                </p>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Profile Cards */}
        <ShowcaseSection title="Profile Cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  john.doe@example.com
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  San Francisco, CA
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/50 flex items-center justify-center">
                    <User className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Jane Smith</CardTitle>
                    <CardDescription>Product Designer</CardDescription>
                  </div>
                  <Badge>Pro</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">1.2K</div>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">456</div>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1">Follow</Button>
                <Button variant="outline" className="flex-1">Message</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Member</CardTitle>
                <CardDescription>Active contributor</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Developer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Card */}
        <ShowcaseSection title="Form Card">
          <div className="max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your information to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="terms" />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the terms and conditions
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Account</Button>
              </CardFooter>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Product Cards */}
        <ShowcaseSection title="Product Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-primary/40" />
              </div>
              <CardHeader>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Short product description</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">$99.99</span>
                  <span className="text-sm text-muted-foreground line-through">$129.99</span>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1">Add to Cart</Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <CreditCard className="h-16 w-16 text-secondary-foreground/40" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Premium Product</CardTitle>
                    <CardDescription>Limited edition</CardDescription>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$199.99</div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-sm">
                    <Heart className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>128</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MessageCircle className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>32</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent to-accent/20 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-accent-foreground/40" />
              </div>
              <CardHeader>
                <CardTitle>Special Offer</CardTitle>
                <CardDescription>Available until end of month</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">$79.99</span>
                  <Badge variant="destructive">-40%</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">Details</Button>
                <Button className="flex-1">Order</Button>
              </CardFooter>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Settings Cards */}
        <ShowcaseSection title="Settings Cards">
          <div className="max-w-2xl space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Manage your notification preferences</CardDescription>
                  </div>
                  <Switch />
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control your privacy and security</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Profile Visibility</p>
                    <p className="text-xs text-muted-foreground">Make your profile public</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Activity Status</p>
                    <p className="text-xs text-muted-foreground">Show when you're online</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                    <Download className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Data & Storage</CardTitle>
                    <CardDescription>Manage your data and storage</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Used</span>
                    <span className="font-medium">2.5 GB of 10 GB</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/4" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Bordered Cards */}
        <ShowcaseSection title="With Border Variations">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle>Primary Border</CardTitle>
                <CardDescription>Top border accent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card with colored top border for emphasis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle>Success Status</CardTitle>
                <CardDescription>Left border indicator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card with left border showing status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-dashed">
              <CardHeader>
                <CardTitle>Dashed Border</CardTitle>
                <CardDescription>Different border style</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card with dashed border style.
                </p>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
