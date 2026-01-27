"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Item,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemAction,
} from "@/components/ui/item"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Music,
  User,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function ItemPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Item"
        description="A versatile component that you can use to display any content."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/item"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Item */}
        <ShowcaseSection title="Basic Item">
          <Item>
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A simple item with title and description.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm">Action</Button>
            </ItemAction>
          </Item>
        </ShowcaseSection>

        <Separator />

        {/* With Icon */}
        <ShowcaseSection title="With Icon">
          <Item>
            <ItemIcon>
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
          </Item>
        </ShowcaseSection>

        <Separator />

        {/* Variants */}
        <ShowcaseSection title="Variants">
          <div className="space-y-3">
            <Item variant="default">
              <ItemContent>
                <ItemTitle>Default Variant</ItemTitle>
                <ItemDescription>
                  Standard styling with subtle background and borders.
                </ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="outline">
                  Open
                </Button>
              </ItemAction>
            </Item>

            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Outline Variant</ItemTitle>
                <ItemDescription>
                  Outlined style with clear borders and transparent background.
                </ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="outline">
                  Open
                </Button>
              </ItemAction>
            </Item>

            <Item variant="muted">
              <ItemContent>
                <ItemTitle>Muted Variant</ItemTitle>
                <ItemDescription>
                  Subdued appearance with muted colors for secondary content.
                </ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="outline">
                  Open
                </Button>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Alert Items */}
        <ShowcaseSection title="Alert Items">
          <div className="space-y-3">
            <Item variant="default">
              <ItemIcon>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Your profile has been verified.</ItemTitle>
              </ItemContent>
            </Item>

            <Item variant="outline">
              <ItemIcon>
                <AlertCircle className="h-5 w-5 text-amber-600" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Security Alert</ItemTitle>
                <ItemDescription>
                  New login detected from unknown device.
                </ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="outline">
                  Review
                </Button>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User Profile Item */}
        <ShowcaseSection title="User Profile">
          <Item>
            <ItemIcon>
              <Avatar>
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </ItemIcon>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
            </ItemContent>
          </Item>
        </ShowcaseSection>

        <Separator />

        {/* Empty State */}
        <ShowcaseSection title="Empty State">
          <Item variant="muted">
            <ItemIcon>
              <Users className="h-5 w-5 text-muted-foreground" />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>No Team Members</ItemTitle>
              <ItemDescription>
                Invite your team to collaborate on this project.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm">Invite</Button>
            </ItemAction>
          </Item>
        </ShowcaseSection>

        <Separator />

        {/* Music Playlist Items */}
        <ShowcaseSection title="Music Playlist">
          <div className="space-y-2">
            <Item variant="outline" interactive>
              <ItemIcon>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500">
                  <Music className="h-6 w-6 text-white" />
                </div>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Midnight City Lights</ItemTitle>
                <ItemDescription>Electric Nights • Neon Dreams</ItemDescription>
              </ItemContent>
              <ItemAction>
                <span className="text-sm text-muted-foreground">3:45</span>
              </ItemAction>
            </Item>

            <Item variant="outline" interactive>
              <ItemIcon>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Music className="h-6 w-6 text-white" />
                </div>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Coffee Shop Conversations</ItemTitle>
                <ItemDescription>Urban Stories • The Morning Brew</ItemDescription>
              </ItemContent>
              <ItemAction>
                <span className="text-sm text-muted-foreground">4:05</span>
              </ItemAction>
            </Item>

            <Item variant="outline" interactive>
              <ItemIcon>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-green-500 to-emerald-500">
                  <Music className="h-6 w-6 text-white" />
                </div>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Digital Rain</ItemTitle>
                <ItemDescription>Binary Beats • Cyber Symphony</ItemDescription>
              </ItemContent>
              <ItemAction>
                <span className="text-sm text-muted-foreground">3:30</span>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User List */}
        <ShowcaseSection title="User List">
          <div className="space-y-2">
            <Item variant="default" interactive>
              <ItemIcon>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>shadcn</ItemTitle>
                <ItemDescription>shadcn@vercel.com</ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="default" interactive>
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>maxleiter</ItemTitle>
                <ItemDescription>maxleiter@vercel.com</ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="default" interactive>
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>evilrabbit</ItemTitle>
                <ItemDescription>evilrabbit@vercel.com</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Model Selection */}
        <ShowcaseSection title="Model Selection">
          <div className="space-y-2">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>v0-1.5-sm</ItemTitle>
                <ItemDescription>
                  Everyday tasks and UI generation.
                </ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="outline">
              <ItemIcon>
                <Sparkles className="h-5 w-5 text-amber-500" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>v0-1.5-lg</ItemTitle>
                <ItemDescription>
                  Advanced thinking or reasoning.
                </ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="outline">
              <ItemContent>
                <ItemTitle>v0-2.0-mini</ItemTitle>
                <ItemDescription>
                  Open Source model for everyone.
                </ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge variant="secondary">New</Badge>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* External Link */}
        <ShowcaseSection title="External Link">
          <Item variant="default" interactive>
            <ItemContent>
              <ItemTitle>Visit our documentation</ItemTitle>
              <ItemDescription>
                Learn how to get started with our components.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </ItemAction>
          </Item>

          <Item variant="outline" interactive className="mt-2">
            <ItemContent>
              <ItemTitle>External resource</ItemTitle>
              <ItemDescription>
                Opens in a new tab with security attributes.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </ItemAction>
          </Item>
        </ShowcaseSection>

        <Separator />

        {/* Selectable Items */}
        <ShowcaseSection title="Selectable Items">
          <div className="space-y-2">
            <Item variant="outline" interactive>
              <ItemIcon>
                <Checkbox id="user1" />
              </ItemIcon>
              <ItemIcon>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>shadcn</ItemTitle>
                <ItemDescription>shadcn@vercel.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="ghost">
                  Select
                </Button>
              </ItemAction>
            </Item>

            <Item variant="outline" interactive>
              <ItemIcon>
                <Checkbox id="user2" />
              </ItemIcon>
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>maxleiter</ItemTitle>
                <ItemDescription>maxleiter@vercel.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="ghost">
                  Select
                </Button>
              </ItemAction>
            </Item>

            <Item variant="outline" interactive>
              <ItemIcon>
                <Checkbox id="user3" />
              </ItemIcon>
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>evilrabbit</ItemTitle>
                <ItemDescription>evilrabbit@vercel.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button size="sm" variant="ghost">
                  Select
                </Button>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact Size */}
        <ShowcaseSection title="Compact Size">
          <div className="space-y-2">
            <Item variant="outline" className="p-2">
              <ItemIcon>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SC</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent className="gap-0">
                <ItemTitle className="text-xs">shadcn</ItemTitle>
                <ItemDescription className="text-xs">
                  shadcn@vercel.com
                </ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="outline" className="p-2">
              <ItemIcon>
                <User className="h-4 w-4 text-muted-foreground" />
              </ItemIcon>
              <ItemContent className="gap-0">
                <ItemTitle className="text-xs">Compact Item</ItemTitle>
                <ItemDescription className="text-xs">
                  Smaller padding and text
                </ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Status Badge */}
        <ShowcaseSection title="With Status">
          <div className="space-y-2">
            <Item variant="default">
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>John Doe</ItemTitle>
                <ItemDescription>john@example.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge className="bg-green-500">Active</Badge>
              </ItemAction>
            </Item>

            <Item variant="default">
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Jane Smith</ItemTitle>
                <ItemDescription>jane@example.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge variant="secondary">Away</Badge>
              </ItemAction>
            </Item>

            <Item variant="default">
              <ItemIcon>
                <Avatar>
                  <AvatarFallback>BD</AvatarFallback>
                </Avatar>
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Bob Davis</ItemTitle>
                <ItemDescription>bob@example.com</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge variant="outline">Offline</Badge>
              </ItemAction>
            </Item>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
