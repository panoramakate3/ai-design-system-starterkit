"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
} from "@/components/component-page"
import {
  LayoutDashboard,
  PanelLeft,
  Menu,
  LogIn,
  Image,
  ArrowRight,
  Check,
  BarChart3,
  Users,
  Activity,
  Settings,
  Home,
  FileText,
  Folder,
  ChevronRight,
} from "lucide-react"

export default function FeaturedPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Featured"
        description="Curated examples of layouts and components built with shadcn/ui."
      />

      <ComponentShowcase>
        {/* Featured Examples Container */}
        <div className="space-y-8">

          {/* Example 1: Dashboard with sidebar, charts and data table */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">A dashboard with sidebar, charts and data table</h3>
            </div>
            <Card className="overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="w-56 border-r bg-muted/30 p-4 space-y-4">
                  <div className="flex items-center gap-2 px-2 py-1.5">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-semibold">A</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Acme Inc</div>
                      <div className="text-xs text-muted-foreground">Dashboard</div>
                    </div>
                  </div>
                  <nav className="space-y-1">
                    {[
                      { icon: Home, label: "Dashboard", active: true },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: Users, label: "Customers" },
                      { icon: FileText, label: "Reports" },
                      { icon: Folder, label: "Files" },
                      { icon: Settings, label: "Settings" },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          item.active
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
                      { label: "Active Users", value: "2,350", change: "+12.5%" },
                      { label: "Conversion", value: "24.5%", change: "+8.2%" },
                    ].map((stat, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-2">
                          <CardDescription>{stat.label}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <Activity className="h-3 w-3" />
                            {stat.change}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 flex items-end gap-2">
                        {[65, 45, 70, 55, 80, 60, 85, 75, 90].map((height, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          <Separator />

          {/* Example 2: A sidebar that collapses to icons */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PanelLeft className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">A sidebar that collapses to icons</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Expanded Sidebar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Expanded</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-56 border rounded-lg bg-muted/30 p-3 space-y-2">
                    <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
                      <div className="w-6 h-6 rounded bg-primary" />
                      <span className="text-sm font-semibold">Menu</span>
                    </div>
                    {["Dashboard", "Analytics", "Reports", "Settings"].map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-sm"
                      >
                        <div className="w-4 h-4 rounded bg-muted-foreground/20" />
                        {item}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Collapsed Sidebar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Collapsed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-16 border rounded-lg bg-muted/30 p-3 space-y-2">
                    <div className="w-6 h-6 rounded bg-primary mx-auto mb-2" />
                    {[1, 2, 3, 4].map((idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center justify-center p-1.5 rounded hover:bg-muted"
                      >
                        <div className="w-4 h-4 rounded bg-muted-foreground/20" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          {/* Example 3: A sidebar with submenus */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Menu className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">A sidebar with submenus</h3>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="w-64 border rounded-lg bg-muted/30 p-3 space-y-1">
                  <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-sm">
                    <Home className="h-4 w-4" />
                    <span className="flex-1 text-left">Home</span>
                  </button>
                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded bg-muted text-sm">
                      <BarChart3 className="h-4 w-4" />
                      <span className="flex-1 text-left">Analytics</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="ml-6 space-y-1 border-l pl-2">
                      <button className="w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-muted text-xs text-muted-foreground">
                        Overview
                      </button>
                      <button className="w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-muted text-xs text-muted-foreground">
                        Reports
                      </button>
                      <button className="w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-muted text-xs text-muted-foreground">
                        Charts
                      </button>
                    </div>
                  </div>
                  <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-sm">
                    <Users className="h-4 w-4" />
                    <span className="flex-1 text-left">Customers</span>
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-sm">
                    <Settings className="h-4 w-4" />
                    <span className="flex-1 text-left">Settings</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Example 4: A login page with a muted background color */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogIn className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">A login page with a muted background color</h3>
            </div>
            <Card className="bg-muted/30">
              <CardContent className="p-12">
                <div className="max-w-sm mx-auto space-y-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center">
                      <span className="text-primary-foreground text-xl font-bold">A</span>
                    </div>
                    <h2 className="text-2xl font-bold">Welcome back</h2>
                    <p className="text-muted-foreground">Enter your credentials to continue</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <div className="h-10 px-3 rounded-md border bg-background flex items-center text-sm text-muted-foreground">
                        email@example.com
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <div className="h-10 px-3 rounded-md border bg-background flex items-center text-sm text-muted-foreground">
                        ••••••••
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button className="text-primary hover:underline">Sign up</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Example 5: A login page with form and image */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">A login page with form and image</h3>
            </div>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Start your journey</h3>
                      <p className="text-muted-foreground">
                        Join thousands of users already using our platform
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="p-12">
                  <div className="max-w-sm space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Sign in</h2>
                      <p className="text-muted-foreground">to continue to your account</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <div className="h-10 px-3 rounded-md border bg-background flex items-center text-sm text-muted-foreground">
                          email@example.com
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Password</label>
                          <button className="text-xs text-primary hover:underline">
                            Forgot password?
                          </button>
                        </div>
                        <div className="h-10 px-3 rounded-md border bg-background flex items-center text-sm text-muted-foreground">
                          ••••••••
                        </div>
                      </div>
                      <Button className="w-full">Continue</Button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="gap-2">
                        <div className="w-4 h-4 rounded bg-muted" />
                        Google
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <div className="w-4 h-4 rounded bg-muted" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
