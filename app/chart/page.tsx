"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react"

export default function ChartPage() {
  // Sample data
  const barChartData = [
    { label: "Jan", value: 45 },
    { label: "Feb", value: 52 },
    { label: "Mar", value: 38 },
    { label: "Apr", value: 65 },
    { label: "May", value: 58 },
    { label: "Jun", value: 72 },
  ]

  const lineChartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 28 },
    { month: "Apr", value: 42 },
    { month: "May", value: 55 },
    { month: "Jun", value: 48 },
  ]

  const pieChartData = [
    { label: "Desktop", value: 45, color: "bg-blue-500" },
    { label: "Mobile", value: 35, color: "bg-green-500" },
    { label: "Tablet", value: 20, color: "bg-orange-500" },
  ]

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Chart"
        description="Data visualization components for displaying charts and graphs."
      />

      <ComponentShowcase>
        {/* Note about recharts */}
        <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Using Recharts Library
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                For production-ready charts, install recharts: <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">npm install recharts</code>
              </p>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <ShowcaseSection title="Bar Chart">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Revenue data for the first half of 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end justify-between h-64 gap-2">
                  {barChartData.map((item, index) => {
                    const height = (item.value / 80) * 100
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="relative w-full flex items-end justify-center h-full">
                          <div
                            className="w-full bg-primary rounded-t-md hover:bg-primary/80 transition-colors relative group"
                            style={{ height: `${height}%` }}
                          >
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.value}k
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {item.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center justify-between text-sm pt-4 border-t">
                  <span className="text-muted-foreground">Total Revenue</span>
                  <span className="font-bold">$330,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Line Chart */}
        <ShowcaseSection title="Line Chart">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Active users over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative h-64">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-b border-dashed border-muted" />
                    ))}
                  </div>

                  {/* Line chart */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points={lineChartData.map((item, i) => {
                        const x = (i / (lineChartData.length - 1)) * 100
                        const y = 100 - (item.value / 60) * 100
                        return `${x}%,${y}%`
                      }).join(' ')}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className="drop-shadow-sm"
                    />
                    {lineChartData.map((item, i) => {
                      const x = (i / (lineChartData.length - 1)) * 100
                      const y = 100 - (item.value / 60) * 100
                      return (
                        <circle
                          key={i}
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="4"
                          fill="hsl(var(--primary))"
                          className="hover:r-6 transition-all"
                        />
                      )
                    })}
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between">
                  {lineChartData.map((item, index) => (
                    <span key={index} className="text-xs text-muted-foreground">
                      {item.month}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm pt-4 border-t">
                  <span className="text-muted-foreground">Average Growth</span>
                  <span className="font-bold flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    +15.3%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Pie/Donut Chart */}
        <ShowcaseSection title="Pie Chart">
          <Card>
            <CardHeader>
              <CardTitle>Device Usage</CardTitle>
              <CardDescription>Distribution of users by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Donut visualization */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="32"
                      />
                      {/* Desktop - 45% */}
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="32"
                        strokeDasharray={`${2 * Math.PI * 80 * 0.45} ${2 * Math.PI * 80}`}
                        className="transition-all"
                      />
                      {/* Mobile - 35% */}
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="hsl(142 76% 36%)"
                        strokeWidth="32"
                        strokeDasharray={`${2 * Math.PI * 80 * 0.35} ${2 * Math.PI * 80}`}
                        strokeDashoffset={`${-2 * Math.PI * 80 * 0.45}`}
                        className="transition-all"
                      />
                      {/* Tablet - 20% */}
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="hsl(25 95% 53%)"
                        strokeWidth="32"
                        strokeDasharray={`${2 * Math.PI * 80 * 0.20} ${2 * Math.PI * 80}`}
                        strokeDashoffset={`${-2 * Math.PI * 80 * 0.80}`}
                        className="transition-all"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold">100%</span>
                      <span className="text-xs text-muted-foreground">Total</span>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-col justify-center space-y-4">
                  {pieChartData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Area Chart */}
        <ShowcaseSection title="Area Chart">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Total sales over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative h-64">
                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-b border-dashed border-muted" />
                    ))}
                  </div>

                  {/* Area chart */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points={`
                        0%,100%
                        ${lineChartData.map((item, i) => {
                          const x = (i / (lineChartData.length - 1)) * 100
                          const y = 100 - (item.value / 60) * 100
                          return `${x}%,${y}%`
                        }).join(' ')}
                        100%,100%
                      `}
                      fill="url(#areaGradient)"
                    />
                    <polyline
                      points={lineChartData.map((item, i) => {
                        const x = (i / (lineChartData.length - 1)) * 100
                        const y = 100 - (item.value / 60) * 100
                        return `${x}%,${y}%`
                      }).join(' ')}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex justify-between">
                  {lineChartData.map((item, index) => (
                    <span key={index} className="text-xs text-muted-foreground">
                      {item.month}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Progress Bars as Charts */}
        <ShowcaseSection title="Progress Indicators">
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>Performance across different product categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { category: "Electronics", value: 85, amount: "$42,500" },
                { category: "Clothing", value: 65, amount: "$32,000" },
                { category: "Home & Garden", value: 45, amount: "$22,500" },
                { category: "Sports", value: 72, amount: "$36,000" },
                { category: "Books", value: 38, amount: "$19,000" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-muted-foreground">{item.amount}</span>
                  </div>
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Stat Cards with Mini Charts */}
        <ShowcaseSection title="Stats with Mini Charts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Total Revenue</span>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold mb-2">$45,231</div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 65, 45, 80, 60, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+20.1%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Active Users</span>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold mb-2">2,350</div>
                <div className="h-16">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,80 20,60 40,70 60,40 80,50 100,20"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Conversion</span>
                  <Badge variant="secondary">3.2%</Badge>
                </div>
                <div className="text-2xl font-bold mb-2">24.5%</div>
                <div className="h-16 flex items-end gap-1">
                  {[60, 55, 70, 50, 65, 75, 60].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-green-500 rounded-t transition-all hover:bg-green-400"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+8.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Bounce Rate</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <div className="text-2xl font-bold mb-2">42.1%</div>
                <div className="h-16 flex items-end gap-1">
                  {[50, 60, 55, 70, 65, 75, 80].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-red-500 rounded-t transition-all hover:bg-red-400"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-red-600">
                  <TrendingDown className="h-3 w-3" />
                  <span>-3.1%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
