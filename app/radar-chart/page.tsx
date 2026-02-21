"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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

export default function RadarChartPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Radar Chart"
        description="A radar chart component for visualizing multivariate data."
      />

      <ComponentShowcase>
        {/* Radar Chart - Default */}
        <ShowcaseSection title="Radar Chart">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - Default</CardTitle>
              <CardDescription>
                Showing total visitors for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </CardFooter>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Dots */}
        <ShowcaseSection title="Radar Chart - Dots">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - Dots</CardTitle>
              <CardDescription>
                With dot markers on each point
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                    dot={{
                      r: 4,
                      fillOpacity: 1,
                    }}
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Multiple */}
        <ShowcaseSection title="Radar Chart - Multiple">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - Multiple</CardTitle>
              <CardDescription>
                Comparing desktop and mobile visitors
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                  />
                  <Radar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    fillOpacity={0.6}
                  />
                  <ChartLegend content={(props) => <ChartLegendContent payload={props.payload} verticalAlign={props.verticalAlign} />} />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Lines Only */}
        <ShowcaseSection title="Radar Chart - Lines Only">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - Lines</CardTitle>
              <CardDescription>
                Line representation without fill
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0}
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                  />
                  <Radar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    fillOpacity={0}
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                  />
                  <ChartLegend content={(props) => <ChartLegendContent payload={props.payload} verticalAlign={props.verticalAlign} />} />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Grid Customization */}
        <ShowcaseSection title="Radar Chart - Grid Circle">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - Custom Grid</CardTitle>
              <CardDescription>
                Circular grid with custom styling
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                  />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Legend */}
        <ShowcaseSection title="Radar Chart - Legend">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - With Legend</CardTitle>
              <CardDescription>
                Multiple datasets with legend
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[300px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                    dot={{
                      r: 4,
                      fillOpacity: 1,
                    }}
                  />
                  <Radar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    fillOpacity={0.6}
                    dot={{
                      r: 4,
                      fillOpacity: 1,
                    }}
                  />
                  <ChartLegend content={(props) => <ChartLegendContent payload={props.payload} verticalAlign={props.verticalAlign} />} />
                </RadarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 pt-4 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Radar Chart - Icons */}
        <ShowcaseSection title="Radar Chart - Icons">
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart - With Icons</CardTitle>
              <CardDescription>
                Performance metrics visualization
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid gridType="circle" />
                  <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fillOpacity: 1,
                    }}
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 pt-4 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
