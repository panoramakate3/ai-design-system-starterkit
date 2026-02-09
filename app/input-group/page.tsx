"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupIcon,
} from "@/components/ui/input-group"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Search,
  DollarSign,
  Globe,
  AtSign,
  Mail,
  Lock,
  Loader2,
  Settings,
  Copy,
  FolderOpen,
  Play,
  Send,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InputGroupPage() {
  const [charCount, setCharCount] = useState(0)
  const maxChars = 120

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Input Group"
        description="Display additional information or actions to an input or textarea."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/input-group"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Text Suffix */}
        <ShowcaseSection title="Text Suffix">
          <InputGroup className="max-w-sm">
            <Input placeholder="Search..." className="rounded-r-none" />
            <InputGroupAddon>12 results</InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* URL with Prefix */}
        <ShowcaseSection title="URL with Prefix">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>https://</InputGroupAddon>
            <Input placeholder="example.com" className="rounded-l-none" />
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* URL with Suffix */}
        <ShowcaseSection title="URL with Suffix">
          <InputGroup className="max-w-sm">
            <Input placeholder="example" className="rounded-r-none" />
            <InputGroupAddon>.com</InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* URL with Prefix and Suffix */}
        <ShowcaseSection title="URL with Prefix and Suffix">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>https://</InputGroupAddon>
            <Input
              placeholder="example"
              className="rounded-none border-x-0"
            />
            <InputGroupAddon>.com</InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* Email with Domain */}
        <ShowcaseSection title="Email with Domain">
          <InputGroup className="max-w-sm">
            <Input
              placeholder="Enter your username"
              className="rounded-r-none"
            />
            <InputGroupAddon>@company.com</InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* Currency Input */}
        <ShowcaseSection title="Currency">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>$</InputGroupAddon>
            <Input
              type="number"
              placeholder="0.00"
              className="rounded-none border-x-0"
              step="0.01"
            />
            <InputGroupAddon>USD</InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* With Icon Prefix */}
        <ShowcaseSection title="With Icon Prefix">
          <div className="relative max-w-sm">
            <InputGroupIcon>
              <Search className="h-4 w-4" />
            </InputGroupIcon>
            <Input placeholder="Search..." className="pl-10" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icon and Text */}
        <ShowcaseSection title="With Icon and Addon">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>
              <AtSign className="h-4 w-4" />
            </InputGroupAddon>
            <Input placeholder="shadcn" className="rounded-l-none" />
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* With Button */}
        <ShowcaseSection title="With Button">
          <InputGroup className="max-w-sm">
            <Input placeholder="Enter your email" className="rounded-r-none" />
            <Button className="rounded-l-none border-l-0">Subscribe</Button>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* Search with Button */}
        <ShowcaseSection title="Search with Button">
          <InputGroup className="max-w-sm">
            <div className="relative flex-1">
              <InputGroupIcon>
                <Search className="h-4 w-4" />
              </InputGroupIcon>
              <Input placeholder="Search..." className="rounded-r-none pl-10" />
            </div>
            <Button className="rounded-l-none">Search</Button>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* With Dropdown */}
        <ShowcaseSection title="With Dropdown">
          <InputGroup className="max-w-md">
            <Input
              placeholder="Enter search query"
              className="rounded-r-none"
            />
            <Select defaultValue="docs">
              <SelectTrigger className="w-[160px] rounded-l-none border-l-0">
                <SelectValue placeholder="Search In..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="docs">Documentation</SelectItem>
                <SelectItem value="blog">Blog Posts</SelectItem>
                <SelectItem value="changelog">Changelog</SelectItem>
              </SelectContent>
            </Select>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* Character Counter */}
        <ShowcaseSection title="Character Counter">
          <div className="space-y-2 max-w-sm">
            <Textarea
              placeholder="Enter your message"
              rows={3}
              maxLength={maxChars}
              onChange={(e) => setCharCount(e.target.value.length)}
            />
            <div className="flex justify-end">
              <InputGroupText>
                {charCount}/{maxChars} characters
              </InputGroupText>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Helper Text */}
        <ShowcaseSection title="With Helper Text">
          <div className="space-y-2 max-w-sm">
            <Label htmlFor="email-help">Your email address</Label>
            <Input id="email-help" type="email" placeholder="Email" />
            <InputGroupText>
              We'll use this to send you notifications
            </InputGroupText>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Help Icon */}
        <ShowcaseSection title="With Help Icon">
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2">
              <Label htmlFor="api-key">API Key</Label>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </div>
            <Input id="api-key" type="text" placeholder="Enter API key" />
            <InputGroupText>
              Click for help with API keys
            </InputGroupText>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Loading State */}
        <ShowcaseSection title="Loading State">
          <div className="space-y-3 max-w-sm">
            <div className="relative">
              <Input
                placeholder="Searching..."
                disabled
                className="pr-9"
              />
              <InputGroupIcon position="right">
                <Loader2 className="h-4 w-4 animate-spin" />
              </InputGroupIcon>
            </div>

            <div className="relative">
              <Input
                placeholder="Processing..."
                disabled
                className="pr-9"
              />
              <InputGroupIcon position="right">
                <Loader2 className="h-4 w-4 animate-spin" />
              </InputGroupIcon>
            </div>

            <InputGroup>
              <Input
                placeholder="Saving..."
                disabled
                className="rounded-r-none"
              />
              <InputGroupAddon>
                <Loader2 className="h-4 w-4 animate-spin" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Addons */}
        <ShowcaseSection title="Multiple Addons">
          <InputGroup className="max-w-md">
            <InputGroupAddon>
              <Mail className="h-4 w-4" />
            </InputGroupAddon>
            <Input
              type="email"
              placeholder="shadcn@vercel.com"
              className="rounded-none border-x-0"
            />
            <Button variant="outline" size="icon" className="rounded-l-none">
              <Copy className="h-4 w-4" />
            </Button>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* File Input with Actions */}
        <ShowcaseSection title="File Input with Actions">
          <div className="space-y-2 max-w-md">
            <InputGroup>
              <Input
                placeholder="Enter file name"
                className="rounded-r-none"
              />
              <Button variant="outline" size="sm" className="rounded-none border-x-0">
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="rounded-none border-x-0">
                <Copy className="h-4 w-4 mr-1" />
                Copy path
              </Button>
              <Button variant="outline" size="sm" className="rounded-l-none">
                <FolderOpen className="h-4 w-4 mr-1" />
                Open location
              </Button>
            </InputGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Code Editor Style */}
        <ShowcaseSection title="Code Editor Style">
          <div className="space-y-2 max-w-2xl">
            <div className="rounded-lg border">
              <div className="border-b bg-muted/50 px-3 py-2">
                <InputGroupText className="text-xs">script.js</InputGroupText>
              </div>
              <Textarea
                placeholder="console.log('Hello, world!');"
                className="min-h-[120px] border-0 font-mono text-sm rounded-none resize-none focus-visible:ring-0"
              />
              <div className="flex items-center justify-between border-t bg-muted/50 px-3 py-2">
                <InputGroupText className="text-xs">
                  Line 1, Column 1
                </InputGroupText>
                <Button size="sm" variant="ghost">
                  <Play className="h-3 w-3 mr-1" />
                  Run
                </Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Status Badge */}
        <ShowcaseSection title="With Status Badge">
          <InputGroup className="max-w-sm">
            <div className="relative flex-1">
              <InputGroupIcon>
                <Search className="h-4 w-4" />
              </InputGroupIcon>
              <Input
                placeholder="Ask, Search or Chat..."
                className="rounded-r-none pl-10"
              />
            </div>
            <InputGroupAddon>
              <Badge variant="secondary" className="text-xs">
                Auto
              </Badge>
            </InputGroupAddon>
          </InputGroup>
        </ShowcaseSection>

        <Separator />

        {/* Storage Usage */}
        <ShowcaseSection title="Storage Usage">
          <div className="space-y-2 max-w-sm">
            <Label>Storage</Label>
            <InputGroup>
              <Input
                type="number"
                defaultValue="52"
                className="rounded-r-none"
              />
              <InputGroupAddon>% used</InputGroupAddon>
            </InputGroup>
            <InputGroupText>52% of your storage is being used</InputGroupText>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Password with Validation */}
        <ShowcaseSection title="Password with Validation">
          <div className="space-y-2 max-w-sm">
            <Label htmlFor="password-validation">Password</Label>
            <div className="relative">
              <InputGroupIcon>
                <Lock className="h-4 w-4" />
              </InputGroupIcon>
              <Input
                id="password-validation"
                type="password"
                placeholder="Enter password"
                className="pl-10"
              />
            </div>
            <InputGroupText>
              Password must be at least 8 characters
            </InputGroupText>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* URL Preview */}
        <ShowcaseSection title="URL Preview">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="url-input">Profile URL</Label>
            <InputGroup>
              <InputGroupAddon>https://</InputGroupAddon>
              <Input
                id="url-input"
                defaultValue="x.com/shadcn"
                className="rounded-none border-x-0"
              />
              <Button variant="outline" size="icon" className="rounded-l-none">
                <Copy className="h-4 w-4" />
              </Button>
            </InputGroup>
            <InputGroupText className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              https://x.com/shadcn
            </InputGroupText>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Textarea with Submit */}
        <ShowcaseSection title="Textarea with Submit">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="message-textarea">Message</Label>
            <div className="relative">
              <Textarea
                id="message-textarea"
                placeholder="Autoresize textarea..."
                rows={3}
                className="pr-12"
              />
              <Button
                size="icon"
                className="absolute bottom-2 right-2 h-8 w-8"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Card Number Input */}
        <ShowcaseSection title="Card Number">
          <div className="space-y-2 max-w-sm">
            <Label htmlFor="card-1">Card number</Label>
            <Input
              id="card-1"
              placeholder="Card number"
              maxLength={19}
            />
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
