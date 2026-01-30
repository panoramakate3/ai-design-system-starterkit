"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  ShoppingCart,
  Mail,
  Calendar,
  Folder,
  Search,
  Bell,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  Inbox,
  Send,
  Archive,
  Trash2,
  Star,
  Plus,
  HelpCircle,
  Zap,
  Package,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SidebarPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Sidebar"
        description="A vertical navigation component that provides access to different sections of an application."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/sidebar"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Sidebar */}
        <ShowcaseSection title="Basic Sidebar">
          <div className="h-[400px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold">My App</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<LayoutDashboard className="h-4 w-4" />}>
                        Dashboard
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        Users
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Settings
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    This is the main content area. The sidebar provides navigation to different sections.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Sidebar with Groups */}
        <ShowcaseSection title="With Grouped Items">
          <div className="h-[500px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Overview</SidebarGroupLabel>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<LayoutDashboard className="h-4 w-4" />}>
                        Dashboard
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<BarChart3 className="h-4 w-4" />}>
                        Analytics
                      </SidebarMenuItem>
                    </SidebarGroup>

                    <SidebarSeparator />

                    <SidebarGroup>
                      <SidebarGroupLabel>Management</SidebarGroupLabel>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        Users
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<ShoppingCart className="h-4 w-4" />}>
                        Orders
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Package className="h-4 w-4" />}>
                        Products
                      </SidebarMenuItem>
                    </SidebarGroup>

                    <SidebarSeparator />

                    <SidebarGroup>
                      <SidebarGroupLabel>Settings</SidebarGroupLabel>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Preferences
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<CreditCard className="h-4 w-4" />}>
                        Billing
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Sidebar with grouped navigation items for better organization.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Collapsible Sidebar */}
        <ShowcaseSection title="Collapsible Sidebar">
          <div className="h-[400px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar collapsible>
                  <SidebarHeader>
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-lg font-semibold">My App</h2>
                      <SidebarTrigger>
                        <ChevronLeft className="h-4 w-4" />
                      </SidebarTrigger>
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<LayoutDashboard className="h-4 w-4" />}>
                        Dashboard
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        Users
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Settings
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the chevron icon in the sidebar header to collapse/expand the sidebar.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Search */}
        <ShowcaseSection title="With Search">
          <div className="h-[400px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold mb-2">My App</h2>
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        className="pl-8 h-8"
                      />
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<FileText className="h-4 w-4" />}>
                        Documents
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Folder className="h-4 w-4" />}>
                        Projects
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        Team
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Sidebar with a search input in the header.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Footer */}
        <ShowcaseSection title="With Footer">
          <div className="h-[500px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold">My App</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<LayoutDashboard className="h-4 w-4" />}>
                        Dashboard
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        Users
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<FileText className="h-4 w-4" />}>
                        Documents
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Settings
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">John Doe</p>
                        <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </div>
                  </SidebarFooter>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Sidebar with a user profile in the footer.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Email Client Style */}
        <ShowcaseSection title="Email Client Style">
          <div className="h-[500px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <Button className="w-full" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Compose
                    </Button>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Inbox className="h-4 w-4" />}>
                        <span className="flex-1">Inbox</span>
                        <Badge variant="secondary" className="ml-auto">12</Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Send className="h-4 w-4" />}>
                        Sent
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<FileText className="h-4 w-4" />}>
                        Drafts
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Star className="h-4 w-4" />}>
                        Starred
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Archive className="h-4 w-4" />}>
                        Archive
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Trash2 className="h-4 w-4" />}>
                        Trash
                      </SidebarMenuItem>
                    </SidebarGroup>

                    <SidebarSeparator />

                    <SidebarGroup>
                      <SidebarGroupLabel>Labels</SidebarGroupLabel>
                      <SidebarMenuItem href="#">
                        <div className="h-3 w-3 rounded-full bg-blue-500 mr-2" />
                        Work
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2" />
                        Personal
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2" />
                        Important
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Inbox</h3>
                  <p className="text-sm text-muted-foreground">
                    Email client style sidebar with badges and labels.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Notifications Badge */}
        <ShowcaseSection title="With Notifications">
          <div className="h-[400px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <Sidebar>
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Mail className="h-4 w-4" />}>
                        <span className="flex-1">Messages</span>
                        <Badge variant="destructive" className="ml-auto h-5 w-5 p-0 flex items-center justify-center text-xs">
                          5
                        </Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Bell className="h-4 w-4" />}>
                        <span className="flex-1">Notifications</span>
                        <Badge variant="secondary" className="ml-auto">3</Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Calendar className="h-4 w-4" />}>
                        <span className="flex-1">Calendar</span>
                        <Badge variant="outline" className="ml-auto">2</Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Settings
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Sidebar with notification badges on menu items.
                  </p>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Full Featured */}
        <ShowcaseSection title="Full Featured Sidebar">
          <div className="h-[600px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider defaultCollapsed={false}>
              <div className="flex h-full">
                <Sidebar collapsible>
                  <SidebarHeader>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                          <Zap className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <h2 className="text-lg font-semibold">Acme Inc</h2>
                      </div>
                      <SidebarTrigger>
                        <Menu className="h-4 w-4" />
                      </SidebarTrigger>
                    </div>
                    <div className="relative mt-2">
                      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        className="pl-8 h-8"
                      />
                    </div>
                  </SidebarHeader>

                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Main</SidebarGroupLabel>
                      <SidebarMenuItem href="#" isActive icon={<Home className="h-4 w-4" />}>
                        Home
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<LayoutDashboard className="h-4 w-4" />}>
                        Dashboard
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<BarChart3 className="h-4 w-4" />}>
                        Analytics
                      </SidebarMenuItem>
                    </SidebarGroup>

                    <SidebarSeparator />

                    <SidebarGroup>
                      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                      <SidebarMenuItem href="#" icon={<FileText className="h-4 w-4" />}>
                        <span className="flex-1">Documents</span>
                        <Badge variant="secondary" className="ml-auto">24</Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Folder className="h-4 w-4" />}>
                        Projects
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Users className="h-4 w-4" />}>
                        <span className="flex-1">Team</span>
                        <Badge variant="outline" className="ml-auto">8</Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Calendar className="h-4 w-4" />}>
                        Calendar
                      </SidebarMenuItem>
                    </SidebarGroup>

                    <SidebarSeparator />

                    <SidebarGroup>
                      <SidebarGroupLabel>Support</SidebarGroupLabel>
                      <SidebarMenuItem href="#" icon={<HelpCircle className="h-4 w-4" />}>
                        Help Center
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Settings
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>

                  <SidebarFooter>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">John Doe</p>
                        <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </div>
                  </SidebarFooter>
                </Sidebar>

                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Welcome to Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is a full-featured sidebar with all components: search, groups, badges, footer, and collapse functionality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="rounded-lg border p-4">
                      <h4 className="text-sm font-semibold mb-1">Total Users</h4>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="text-sm font-semibold mb-1">Revenue</h4>
                      <p className="text-2xl font-bold">$45,678</p>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Right Side */}
        <ShowcaseSection title="Right Side Sidebar">
          <div className="h-[400px] w-full max-w-4xl overflow-hidden rounded-lg border">
            <SidebarProvider>
              <div className="flex h-full">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-sm text-muted-foreground">
                    The sidebar can also be positioned on the right side.
                  </p>
                </div>
                <Sidebar side="right">
                  <SidebarHeader>
                    <h2 className="text-lg font-semibold">Settings</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Appearance</SidebarGroupLabel>
                      <SidebarMenuItem href="#" icon={<User className="h-4 w-4" />}>
                        Profile
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Bell className="h-4 w-4" />}>
                        Notifications
                      </SidebarMenuItem>
                      <SidebarMenuItem href="#" icon={<Settings className="h-4 w-4" />}>
                        Preferences
                      </SidebarMenuItem>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
              </div>
            </SidebarProvider>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
