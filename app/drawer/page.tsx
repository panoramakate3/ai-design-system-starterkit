"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Menu,
  Settings,
  User,
  Bell,
  ShoppingCart,
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Image as ImageIcon,
  Share2,
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function DrawerPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Drawer"
        description="A drawer component that slides in from the edge of the screen."
      />

      <ComponentShowcase>
        {/* Bottom Drawer */}
        <ShowcaseSection title="Bottom Drawer">
          <div className="flex justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Bottom Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
                  <DrawerDescription>
                    This is a bottom drawer that slides up from the bottom of the screen.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Drawer content goes here. You can add forms, lists, or any other content.
                  </p>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* All Directions */}
        <ShowcaseSection title="Different Directions">
          <div className="flex flex-wrap justify-center gap-3">
            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="outline">Top</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Top Drawer</DrawerTitle>
                  <DrawerDescription>
                    Slides down from the top of the screen.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Content for top drawer.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">Right</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Right Drawer</DrawerTitle>
                  <DrawerDescription>
                    Slides in from the right side.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Content for right drawer.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Bottom Drawer</DrawerTitle>
                  <DrawerDescription>
                    Slides up from the bottom (default).
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Content for bottom drawer.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="outline">Left</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Left Drawer</DrawerTitle>
                  <DrawerDescription>
                    Slides in from the left side.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Content for left drawer.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Navigation Drawer */}
        <ShowcaseSection title="Navigation Menu">
          <div className="flex justify-center">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Menu className="mr-2 h-4 w-4" />
                  Menu
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerDescription>Browse through the menu</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                  <Separator className="my-2" />
                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    Logout
                  </Button>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Drawer */}
        <ShowcaseSection title="With Form">
          <div className="flex justify-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button>
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Edit Profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4 overflow-y-auto">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save Changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Shopping Cart Drawer */}
        <ShowcaseSection title="Shopping Cart">
          <div className="flex justify-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart (3)
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Shopping Cart</DrawerTitle>
                  <DrawerDescription>3 items in your cart</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4 overflow-y-auto">
                  {[
                    { name: "Wireless Headphones", price: "$99.00", qty: 1 },
                    { name: "Smart Watch", price: "$299.00", qty: 1 },
                    { name: "Phone Case", price: "$19.00", qty: 1 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                      </div>
                      <p className="font-semibold">{item.price}</p>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$417.00</span>
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">Checkout</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Continue Shopping</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Filter Drawer */}
        <ShowcaseSection title="Filters">
          <div className="flex justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filter Options</DrawerTitle>
                  <DrawerDescription>
                    Customize your search results
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="flex gap-2">
                      <Input type="number" placeholder="Min" />
                      <Input type="number" placeholder="Max" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Categories</Label>
                    <div className="space-y-2">
                      {["Electronics", "Clothing", "Books", "Home & Garden"].map((cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                          <input type="checkbox" id={cat} className="rounded" />
                          <label htmlFor={cat} className="text-sm cursor-pointer">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label>In Stock Only</Label>
                    <Switch />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Apply Filters</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Clear All</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Search Drawer */}
        <ShowcaseSection title="Search">
          <div className="flex justify-center">
            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Search</DrawerTitle>
                  <DrawerDescription>Find what you're looking for</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Type to search..." className="pl-8" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recent Searches</p>
                    {["React components", "Tailwind CSS", "Next.js tutorial"].map((term, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        className="w-full justify-start text-sm"
                      >
                        <Search className="mr-2 h-3 w-3" />
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Contact Info Drawer */}
        <ShowcaseSection title="Contact Information">
          <div className="flex justify-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Contact Details
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Contact Information</DrawerTitle>
                  <DrawerDescription>Get in touch with us</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@example.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">Send Message</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Image Gallery Drawer */}
        <ShowcaseSection title="Image Gallery">
          <div className="flex justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  View Gallery
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Image Gallery</DrawerTitle>
                  <DrawerDescription>Browse through our collection</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center"
                      >
                        <ImageIcon className="h-8 w-8 text-primary/40" />
                      </div>
                    ))}
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Gallery
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
