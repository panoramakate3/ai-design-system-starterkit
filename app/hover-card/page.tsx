"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  CalendarDays,
  MapPin,
  Mail,
  Globe,
  Building2,
  Star,
  Package,
  Users,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function HoverCardPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Hover Card"
        description="For sighted users to preview content available behind a link."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/hover-card"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic User Profile */}
        <ShowcaseSection title="Basic User Profile">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Hover over</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  @nextjs
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm text-muted-foreground">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User with Stats */}
        <ShowcaseSection title="User with Stats">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Check out</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  @shadcn
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold">shadcn</h4>
                        <Badge variant="secondary" className="h-5 text-xs">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Building open source UI components and design systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-2 border-t">
                    <div className="text-center">
                      <div className="text-sm font-semibold">128</div>
                      <div className="text-xs text-muted-foreground">Following</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">1.2k</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">42</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Company Profile */}
        <ShowcaseSection title="Company Profile">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Learn about</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  Vercel Inc.
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">Vercel Inc.</h4>
                      <p className="text-xs text-muted-foreground">
                        Technology Company
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">vercel.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">500+ employees</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Product Preview */}
        <ShowcaseSection title="Product Preview">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Hover over</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  MacBook Pro M3
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <Package className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">MacBook Pro M3</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        </div>
                        <span className="text-xs text-muted-foreground">(248 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Supercharged by M3 chip. Up to 22 hours battery life. Liquid Retina XDR display.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <div className="text-xs text-muted-foreground">Starting at</div>
                      <div className="text-lg font-semibold">$1,599</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      In Stock
                    </Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Repository Info */}
        <ShowcaseSection title="Repository Info">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View repo</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  shadcn/ui
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold">shadcn/ui</h4>
                    <p className="text-xs text-muted-foreground">Public repository</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span className="text-xs text-muted-foreground">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span className="text-xs text-muted-foreground">45.2k</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span>Updated 2 hours ago</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Contact Card */}
        <ShowcaseSection title="Contact Card">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Contact</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  John Doe
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-muted-foreground">
                        Senior Product Designer
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">Design Team, Acme Inc.</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">New York, NY</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Hover Cards */}
        <ShowcaseSection title="Multiple Triggers">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Contributors:</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  @alice
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Alice Johnson</h4>
                    <p className="text-xs text-muted-foreground">
                      Frontend Developer
                    </p>
                    <div className="flex items-center gap-1 pt-1">
                      <CalendarDays className="h-3 w-3 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined Jan 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  @bob
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>BB</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Bob Smith</h4>
                    <p className="text-xs text-muted-foreground">
                      Backend Developer
                    </p>
                    <div className="flex items-center gap-1 pt-1">
                      <CalendarDays className="h-3 w-3 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined Feb 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  @charlie
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>CH</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Charlie Davis</h4>
                    <p className="text-xs text-muted-foreground">
                      UI/UX Designer
                    </p>
                    <div className="flex items-center gap-1 pt-1">
                      <CalendarDays className="h-3 w-3 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined Mar 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Width */}
        <ShowcaseSection title="Custom Width">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Hover for</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">
                  more details
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Extended Information</h4>
                  <p className="text-sm text-muted-foreground">
                    This hover card has a custom width of 96 (384px) to accommodate more content. You can adjust the width prop on HoverCardContent to fit your needs. The default width is 64 (256px), but you can use any Tailwind width class.
                  </p>
                  <div className="pt-2 flex gap-2">
                    <Badge>Feature</Badge>
                    <Badge variant="secondary">New</Badge>
                    <Badge variant="outline">Beta</Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
