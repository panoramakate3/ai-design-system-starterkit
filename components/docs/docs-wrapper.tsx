"use client"

import { SidebarNav } from "@/components/docs/sidebar-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Typography",
        href: "/docs/typography",
      },
      {
        title: "Icons",
        href: "/icons",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/accordion",
      },
      {
        title: "Alert",
        href: "/alert",
      },
      {
        title: "Avatar",
        href: "/avatar",
      },
      {
        title: "Badge",
        href: "/badge",
      },
      {
        title: "Breadcrumb",
        href: "/breadcrumb",
      },
      {
        title: "Button",
        href: "/button",
      },
      {
        title: "Button Group",
        href: "/button-group",
      },
      {
        title: "Calendar",
        href: "/calendar",
      },
      {
        title: "Card",
        href: "/card",
      },
      {
        title: "Carousel",
        href: "/carousel",
      },
      {
        title: "Checkbox",
        href: "/checkbox",
      },
      {
        title: "Collapsible",
        href: "/collapsible",
      },
      {
        title: "Combobox",
        href: "/combobox",
      },
      {
        title: "Command",
        href: "/command",
      },
      {
        title: "Context Menu",
        href: "/context-menu",
      },
      {
        title: "Data Table",
        href: "/data-table",
      },
      {
        title: "Date Picker",
        href: "/date-picker",
      },
      {
        title: "Dialog",
        href: "/dialog",
      },
      {
        title: "Drawer",
        href: "/drawer",
      },
      {
        title: "Dropdown Menu",
        href: "/dropdown-menu",
      },
      {
        title: "Empty",
        href: "/empty",
      },
      {
        title: "Hover Card",
        href: "/hover-card",
      },
      {
        title: "Input",
        href: "/input",
      },
      {
        title: "Input Group",
        href: "/input-group",
      },
      {
        title: "Input OTP",
        href: "/input-otp",
      },
      {
        title: "Label",
        href: "/label",
      },
      {
        title: "Menubar",
        href: "/menubar",
      },
      {
        title: "Navigation Menu",
        href: "/navigation-menu",
      },
      {
        title: "Pagination",
        href: "/pagination",
      },
      {
        title: "Popover",
        href: "/popover",
      },
      {
        title: "Progress",
        href: "/progress",
      },
      {
        title: "Radio Group",
        href: "/radio-group",
      },
      {
        title: "Scroll Area",
        href: "/scroll-area",
      },
      {
        title: "Select",
        href: "/select",
      },
      {
        title: "Separator",
        href: "/separator",
      },
      {
        title: "Sheet",
        href: "/sheet",
      },
      {
        title: "Sidebar",
        href: "/sidebar",
      },
      {
        title: "Skeleton",
        href: "/skeleton",
      },
      {
        title: "Slider",
        href: "/slider",
      },
      {
        title: "Spinner",
        href: "/spinner",
      },
      {
        title: "Switch",
        href: "/switch",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
      {
        title: "Textarea",
        href: "/textarea",
      },
      {
        title: "Toast",
        href: "/sonner",
      },
      {
        title: "Toggle",
        href: "/toggle",
      },
      {
        title: "Toggle Group",
        href: "/toggle-group",
      },
      {
        title: "Tooltip",
        href: "/tooltip",
      },
    ],
  },
  {
    title: "Charts",
    items: [
      {
        title: "Area Chart",
        href: "/area-chart",
      },
      {
        title: "Bar Chart",
        href: "/bar-chart",
      },
      {
        title: "Line Chart",
        href: "/line-chart",
      },
      {
        title: "Pie Chart",
        href: "/pie-chart",
      },
      {
        title: "Radar Chart",
        href: "/radar-chart",
      },
      {
        title: "Radial Chart",
        href: "/radial-chart",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "Tasks",
        href: "/tasks",
      },
      {
        title: "Authentication",
        href: "/authentication",
      },
      {
        title: "Login",
        href: "/login",
      },
    ],
  },
]

// Pages that should show the docs layout
const docsPages = [
  "/docs",
  "/icons",
  "/accordion",
  "/alert",
  "/avatar",
  "/badge",
  "/breadcrumb",
  "/button",
  "/button-group",
  "/calendar",
  "/card",
  "/carousel",
  "/checkbox",
  "/collapsible",
  "/combobox",
  "/command",
  "/context-menu",
  "/data-table",
  "/date-picker",
  "/dialog",
  "/drawer",
  "/dropdown-menu",
  "/empty",
  "/hover-card",
  "/input",
  "/input-group",
  "/input-otp",
  "/label",
  "/menubar",
  "/navigation-menu",
  "/pagination",
  "/popover",
  "/progress",
  "/radio-group",
  "/scroll-area",
  "/select",
  "/separator",
  "/sheet",
  "/sidebar",
  "/skeleton",
  "/slider",
  "/spinner",
  "/switch",
  "/table",
  "/tabs",
  "/textarea",
  "/sonner",
  "/toggle",
  "/toggle-group",
  "/tooltip",
  "/area-chart",
  "/bar-chart",
  "/line-chart",
  "/pie-chart",
  "/radar-chart",
  "/radial-chart",
  "/chart",
]

export function DocsWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Check if current page should show docs layout
  const shouldShowDocs = docsPages.some(page => pathname?.startsWith(page))

  if (!shouldShowDocs) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="p-6">
                <Link href="/docs" className="flex items-center space-x-2">
                  <span className="font-bold">shadcn/ui</span>
                </Link>
              </div>
              <SidebarNav items={sidebarNavItems} />
            </SheetContent>
          </Sheet>

          <div className="mr-4 hidden lg:flex">
            <Link href="/docs" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">shadcn/ui</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <SidebarNav items={sidebarNavItems} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
