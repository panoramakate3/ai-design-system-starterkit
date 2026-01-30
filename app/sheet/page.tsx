"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Image as ImageIcon,
  Upload,
} from "lucide-react"
import Link from "next/link"

export default function SheetPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Sheet"
        description="Extends the Dialog component to display content that complements the main content of the screen."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/sheet"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic - Right Side */}
        <ShowcaseSection title="Basic - Right Side">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a basic sheet that slides in from the right side of the screen.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Sheet content goes here. You can add any components or content you need.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Left Side */}
        <ShowcaseSection title="Left Side">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="h-4 w-4 mr-2" />
                Open Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Navigate through different sections of the app.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent">
                    Home
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent">
                    Products
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent">
                    Services
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent">
                    About
                  </a>
                  <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent">
                    Contact
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Top Side */}
        <ShowcaseSection title="Top Side">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  You have 3 unread notifications.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">New message received</p>
                  <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">Your order has been shipped</p>
                  <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">New comment on your post</p>
                  <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Bottom Side */}
        <ShowcaseSection title="Bottom Side">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Filter Options</SheetTitle>
                <SheetDescription>
                  Refine your search with these filters.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-50">$0 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100+">$100+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Sort By</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Clear Filters</Button>
                </SheetClose>
                <Button>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* With Form */}
        <ShowcaseSection title="Edit Profile Form">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Software developer and designer" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Settings */}
        <ShowcaseSection title="Settings Panel">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Settings</SheetTitle>
                <SheetDescription>
                  Manage your account settings and preferences.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Appearance</h4>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="system">
                      <SelectTrigger id="theme">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Notifications</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notif">Email Notifications</Label>
                      <input type="checkbox" id="email-notif" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-notif">Push Notifications</Label>
                      <input type="checkbox" id="push-notif" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Language & Region</h4>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="th">ไทย</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <Button className="w-full">Save Preferences</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Shopping Cart */}
        <ShowcaseSection title="Shopping Cart">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (3)
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  You have 3 items in your cart.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                {/* Cart Item 1 */}
                <div className="flex gap-4 pb-4 border-b">
                  <div className="h-20 w-20 rounded-md bg-muted flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Product Name 1</h4>
                    <p className="text-xs text-muted-foreground mt-1">Size: M, Color: Blue</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold">$29.99</span>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">-</Button>
                        <span className="text-sm">1</span>
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">+</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cart Item 2 */}
                <div className="flex gap-4 pb-4 border-b">
                  <div className="h-20 w-20 rounded-md bg-muted flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Product Name 2</h4>
                    <p className="text-xs text-muted-foreground mt-1">Size: L, Color: Black</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold">$49.99</span>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">-</Button>
                        <span className="text-sm">2</span>
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">+</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cart Item 3 */}
                <div className="flex gap-4 pb-4">
                  <div className="h-20 w-20 rounded-md bg-muted flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Product Name 3</h4>
                    <p className="text-xs text-muted-foreground mt-1">Size: S, Color: White</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold">$39.99</span>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">-</Button>
                        <span className="text-sm">1</span>
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">+</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$169.96</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Total</span>
                    <span>$179.96</span>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <Button className="w-full">Checkout</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Contact Form */}
        <ShowcaseSection title="Contact Form">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Contact Us</SheetTitle>
                <SheetDescription>
                  Fill out the form below and we'll get back to you shortly.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">
                    <User className="inline h-3 w-3 mr-1" />
                    Full Name
                  </Label>
                  <Input id="contact-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">
                    <Mail className="inline h-3 w-3 mr-1" />
                    Email
                  </Label>
                  <Input id="contact-email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">
                    <Phone className="inline h-3 w-3 mr-1" />
                    Phone
                  </Label>
                  <Input id="contact-phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Send Message</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* File Upload */}
        <ShowcaseSection title="File Upload">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Upload Files</SheetTitle>
                <SheetDescription>
                  Upload your documents here. Maximum file size: 10MB.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm font-medium">Drag and drop files here</p>
                  <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Choose Files
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Uploaded Files</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-md border">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">document.pdf</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6">Remove</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md border">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">image.png</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6">Remove</Button>
                    </div>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Upload</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* Appointment Booking */}
        <ShowcaseSection title="Book Appointment">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Book an Appointment</SheetTitle>
                <SheetDescription>
                  Schedule your appointment with us.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="checkup">General Checkup</SelectItem>
                      <SelectItem value="followup">Follow-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">
                    <Calendar className="inline h-3 w-3 mr-1" />
                    Date
                  </Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">
                    <Clock className="inline h-3 w-3 mr-1" />
                    Time
                  </Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    Location
                  </Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown Office</SelectItem>
                      <SelectItem value="uptown">Uptown Office</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <textarea
                    id="notes"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Any special requirements or notes..."
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Confirm Booking</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>

        <Separator />

        {/* With Footer Only */}
        <ShowcaseSection title="Simple Sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Simple Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <SheetFooter className="mt-6">
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button variant="destructive">Delete Account</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
