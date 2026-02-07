import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Palette,
  Blocks,
  Sparkles,
  Zap,
  Code,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="mr-1 h-3 w-3" />
            shadcn/ui Documentation
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Build your component library
        </h1>
        <p className="text-xl text-muted-foreground">
          Beautifully designed components that you can copy and paste into your apps.
          Accessible. Customizable. Open Source.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="/components">
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs/installation">
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Quick Start Section */}
      <div id="overview" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-lg text-muted-foreground">
          This is a collection of re-usable components built using Radix UI and Tailwind CSS.
          The components are accessible, customizable, and open source.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Blocks className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>50+ Components</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A comprehensive library of UI components ready to be used in your projects.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Accessible</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with accessibility in mind using Radix UI primitives and WCAG guidelines.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <Palette className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Customizable</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Easily theme components to match your brand using CSS variables and Tailwind.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Code className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>TypeScript</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Fully typed components with TypeScript for better developer experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Zap className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle>Dark Mode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built-in dark mode support with automatic theme switching capabilities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10">
                  <BookOpen className="h-5 w-5 text-pink-600" />
                </div>
                <CardTitle>Documentation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive documentation with examples and usage guides for every component.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Installation Section */}
      <div id="installation" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Quick Start</h2>
        <p className="text-lg text-muted-foreground">
          Get started with shadcn/ui in minutes.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>
              Install dependencies and set up your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">1. Install Tailwind CSS</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">npm install -D tailwindcss postcss autoprefixer</code>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">2. Install shadcn/ui CLI</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">npx shadcn@latest init</code>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">3. Add components</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">npx shadcn@latest add button</code>
              </div>
            </div>

            <Button asChild className="w-full sm:w-auto">
              <Link href="/docs/installation">
                View Full Installation Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Usage Section */}
      <div id="usage" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Usage</h2>
        <p className="text-lg text-muted-foreground">
          Import and use components in your application.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Example Usage</CardTitle>
            <CardDescription>
              Here's how to use a button component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted p-6">
              <pre className="text-sm">
                <code>{`import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Button>Click me</Button>
  )
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Examples Section */}
      <div id="examples" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Examples</h2>
        <p className="text-lg text-muted-foreground">
          Explore real-world examples and templates.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group cursor-pointer transition-shadow hover:shadow-lg">
            <Link href="/dashboard">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Dashboard</CardTitle>
                <CardDescription>
                  A complete dashboard example with charts and data visualization
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-shadow hover:shadow-lg">
            <Link href="/tasks">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Task Manager</CardTitle>
                <CardDescription>
                  A task management interface with tables and filters
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-shadow hover:shadow-lg">
            <Link href="/authentication">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Authentication</CardTitle>
                <CardDescription>
                  Login and signup forms with validation
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-shadow hover:shadow-lg">
            <Link href="/components">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Component Gallery</CardTitle>
                <CardDescription>
                  Browse all available components in one place
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to build?</h3>
        <p className="text-muted-foreground mb-6">
          Start building your next project with shadcn/ui components
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/components">
              Browse Components
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
              Official Docs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
