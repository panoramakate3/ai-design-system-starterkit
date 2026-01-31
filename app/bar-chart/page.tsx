"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, LabelList } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrendingUp } from "lucide-react"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const negativeChartData = [
  { month: "January", profit: 186 },
  { month: "February", profit: -80 },
  { month: "March", profit: 237 },
  { month: "April", profit: -73 },
  { month: "May", profit: 209 },
  { month: "June", profit: -140 },
]

const negativeChartConfig = {
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const stackedChartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 120 },
  { month: "February", desktop: 305, mobile: 200, tablet: 170 },
  { month: "March", desktop: 237, mobile: 120, tablet: 190 },
  { month: "April", desktop: 73, mobile: 190, tablet: 130 },
  { month: "May", desktop: 209, mobile: 130, tablet: 140 },
  { month: "June", desktop: 214, mobile: 140, tablet: 160 },
]

const stackedChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export default function BarChartPage() {
  const [timeRange, setTimeRange] = React.useState("90d")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Bar Chart"
        description="A bar chart component for comparing data across categories."
      />

      <ComponentShowcase>

        {/* Bar Chart - Interactive */}
        <ShowcaseSection title="Bar Chart - Interactive">
          <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
              <div className="grid flex-1 gap-1 text-center sm:text-left">
                <CardTitle>Bar Chart - Interactive</CardTitle>
                <CardDescription>
                  Showing total visitors for the last 3 months
                </CardDescription>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                  className="w-[160px] rounded-lg sm:ml-auto"
                  aria-label="Select a value"
                >
                  <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="90d" className="rounded-lg">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="30d" className="rounded-lg">
                    Last 30 days
                  </SelectItem>
                  <SelectItem value="7d" className="rounded-lg">
                    Last 7 days
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[250px] w-full"
              >
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Vertical */}
        <ShowcaseSection title="Bar Chart">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>
                Showing total revenue for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Horizontal */}
        <ShowcaseSection title="Bar Chart - Horizontal">
          <Card>
            <CardHeader>
              <CardTitle>Horizontal Bars</CardTitle>
              <CardDescription>
                Horizontal bar orientation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData} layout="vertical">
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <XAxis type="number" hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Multiple */}
        <ShowcaseSection title="Bar Chart - Multiple">
          <Card>
            <CardHeader>
              <CardTitle>Desktop vs Mobile</CardTitle>
              <CardDescription>
                Comparison of desktop and mobile users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Stacked */}
        <ShowcaseSection title="Bar Chart - Stacked">
          <Card>
            <CardHeader>
              <CardTitle>Stacked Revenue</CardTitle>
              <CardDescription>
                Combined desktop, mobile, and tablet revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={stackedChartConfig} className="h-[250px] w-full">
                <BarChart data={stackedChartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="tablet" stackId="a" fill="var(--color-tablet)" radius={[4, 4, 0, 0]} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Label */}
        <ShowcaseSection title="Bar Chart - Label">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart with Labels</CardTitle>
              <CardDescription>
                Showing values directly on the bars
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Mixed with Line */}
        <ShowcaseSection title="Bar Chart - Mixed">
          <Card>
            <CardHeader>
              <CardTitle>Desktop vs Mobile Trends</CardTitle>
              <CardDescription>
                Bar and line chart combination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Bar Chart - Negative Values */}
        <ShowcaseSection title="Bar Chart - Negative Values">
          <Card>
            <CardHeader>
              <CardTitle>Profit & Loss</CardTitle>
              <CardDescription>
                Monthly profit and loss comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={negativeChartConfig} className="h-[250px] w-full">
                <BarChart data={negativeChartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ReferenceLine y={0} stroke="hsl(var(--border))" strokeWidth={2} />
                  <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
                </BarChart>
              </ChartContainer>
              <div className="flex items-center justify-between text-sm pt-4 border-t mt-4">
                <div className="text-sm text-muted-foreground">Net Profit</div>
                <Badge variant="default" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.3%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
