"use client"

import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  AlertCircle,
  BarChart3,
  Layers,
  MousePointer2,
  ScrollText,
  Info,
  Home,
  BookOpen,
  Settings,
  FileText,
  Lightbulb,
  Code,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import React from "react"

const components = [
  {
    title: "Alert Dialog",
    href: "/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: AlertCircle,
  },
  {
    title: "Progress",
    href: "/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: BarChart3,
  },
  {
    title: "Tabs",
    href: "/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: Layers,
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    icon: MousePointer2,
  },
  {
    title: "Scroll-area",
    href: "/scroll-area",
    description: "Visually or semantically separates content.",
    icon: ScrollText,
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: Info,
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavigationMenuPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Navigation Menu"
        description="A collection of links for navigating websites."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/navigation-menu"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Navigation */}
        <ShowcaseSection title="Basic Navigation">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Home className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Docs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/" title="Dashboard">
                      View your overview and statistics.
                    </ListItem>
                    <ListItem href="/analytics" title="Analytics">
                      Detailed insights and reports.
                    </ListItem>
                    <ListItem href="/settings" title="Settings">
                      Manage your account preferences.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Code className="mr-2 h-4 w-4" />
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {components.slice(0, 4).map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={component.href}
                            className="flex select-none gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <component.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                            <div className="space-y-1">
                              <div className="text-sm font-medium leading-none">
                                {component.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Docs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>

        <Separator />

        {/* Simple Navigation */}
        <ShowcaseSection title="Simple Links">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>

        <Separator />

        {/* Multi-column Layout */}
        <ShowcaseSection title="Multi-column Layout">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                    <div className="space-y-3">
                      <h4 className="font-medium leading-none px-2">For Developers</h4>
                      <ListItem href="/api" title="API">
                        RESTful API documentation
                      </ListItem>
                      <ListItem href="/sdk" title="SDK">
                        Client libraries and tools
                      </ListItem>
                      <ListItem href="/cli" title="CLI">
                        Command-line interface
                      </ListItem>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium leading-none px-2">For Designers</h4>
                      <ListItem href="/design-system" title="Design System">
                        Components and patterns
                      </ListItem>
                      <ListItem href="/figma" title="Figma Kit">
                        Design resources
                      </ListItem>
                      <ListItem href="/icons" title="Icon Library">
                        SVG icon collection
                      </ListItem>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium leading-none px-2">Resources</h4>
                      <ListItem href="/blog" title="Blog">
                        Latest news and updates
                      </ListItem>
                      <ListItem href="/tutorials" title="Tutorials">
                        Step-by-step guides
                      </ListItem>
                      <ListItem href="/community" title="Community">
                        Join our community
                      </ListItem>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/docs" title="Documentation">
                      Complete documentation and guides.
                    </ListItem>
                    <ListItem href="/examples" title="Examples">
                      Real-world usage examples.
                    </ListItem>
                    <ListItem href="/changelog" title="Changelog">
                      Latest updates and changes.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>

        <Separator />

        {/* Featured Content */}
        <ShowcaseSection title="Featured Content">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-500/10 p-6 no-underline outline-none focus:shadow-md"
                          href="/learn"
                        >
                          <Lightbulb className="h-6 w-6 text-blue-600" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Getting Started
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Everything you need to know to get started with our platform.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/tutorials" title="Tutorials">
                      Step-by-step guides for common tasks.
                    </ListItem>
                    <ListItem href="/video-courses" title="Video Courses">
                      In-depth video tutorials and courses.
                    </ListItem>
                    <ListItem href="/certification" title="Certification">
                      Become a certified developer.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/about" title="About Us">
                      Learn about our mission and team.
                    </ListItem>
                    <ListItem href="/careers" title="Careers">
                      Join our growing team.
                    </ListItem>
                    <ListItem href="/press" title="Press">
                      News and media resources.
                    </ListItem>
                    <ListItem href="/contact" title="Contact">
                      Get in touch with us.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>

        <Separator />

        {/* Compact Navigation */}
        <ShowcaseSection title="Compact Navigation">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-r-none")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-none">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="/feature-1" title="Feature 1">
                      Description of feature 1
                    </ListItem>
                    <ListItem href="/feature-2" title="Feature 2">
                      Description of feature 2
                    </ListItem>
                    <ListItem href="/feature-3" title="Feature 3">
                      Description of feature 3
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-none")}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-l-none")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
