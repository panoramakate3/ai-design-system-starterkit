"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { Info, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function LabelPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Label"
        description="Renders an accessible label associated with controls."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/label"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* With Checkbox */}
        <ShowcaseSection title="With Checkbox">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="font-normal cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Input */}
        <ShowcaseSection title="With Input">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Textarea */}
        <ShowcaseSection title="With Textarea">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Select */}
        <ShowcaseSection title="With Select">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Switch */}
        <ShowcaseSection title="With Switch">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="font-normal cursor-pointer">
              Airplane mode
            </Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Radio Group */}
        <ShowcaseSection title="With Radio Group">
          <div className="grid gap-3 max-w-sm">
            <Label>Notification Preferences</Label>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="font-normal cursor-pointer">
                  All notifications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mentions" id="mentions" />
                <Label htmlFor="mentions" className="font-normal cursor-pointer">
                  Mentions only
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none" className="font-normal cursor-pointer">
                  No notifications
                </Label>
              </div>
            </RadioGroup>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Required Field */}
        <ShowcaseSection title="Required Field">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="required-field">
              Username <span className="text-destructive">*</span>
            </Label>
            <Input id="required-field" placeholder="Enter your username" required />
            <p className="text-sm text-muted-foreground">
              This field is required.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icon */}
        <ShowcaseSection title="With Icon">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="info-field" className="flex items-center gap-2">
              API Key
              <Info className="h-4 w-4 text-muted-foreground" />
            </Label>
            <Input id="info-field" type="password" placeholder="Enter your API key" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="disabled-input" className="opacity-50">
              Disabled Input
            </Label>
            <Input id="disabled-input" disabled placeholder="Disabled" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Helper Text */}
        <ShowcaseSection title="With Helper Text">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="shadcn" />
            <p className="text-sm text-muted-foreground">
              This is your public display name.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Error */}
        <ShowcaseSection title="With Error">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="error-field" className="text-destructive">
              Email Address
            </Label>
            <Input
              id="error-field"
              type="email"
              placeholder="email@example.com"
              aria-invalid="true"
              defaultValue="invalid-email"
            />
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              Please enter a valid email address.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Checkboxes */}
        <ShowcaseSection title="Multiple Checkboxes">
          <div className="grid gap-3 max-w-sm">
            <Label>Select your interests</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="sports" />
                <Label htmlFor="sports" className="font-normal cursor-pointer">
                  Sports
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="music" />
                <Label htmlFor="music" className="font-normal cursor-pointer">
                  Music
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="technology" />
                <Label htmlFor="technology" className="font-normal cursor-pointer">
                  Technology
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="travel" />
                <Label htmlFor="travel" className="font-normal cursor-pointer">
                  Travel
                </Label>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Horizontal Form Layout */}
        <ShowcaseSection title="Horizontal Layout">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="first-name" className="w-24 text-right">
                First Name
              </Label>
              <Input id="first-name" className="flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="last-name" className="w-24 text-right">
                Last Name
              </Label>
              <Input id="last-name" className="flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="email-horizontal" className="w-24 text-right">
                Email
              </Label>
              <Input id="email-horizontal" type="email" className="flex-1" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact Form */}
        <ShowcaseSection title="Compact Form">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="city" className="text-xs">
                City
              </Label>
              <Input id="city" className="h-8 text-sm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state" className="text-xs">
                State
              </Label>
              <Input id="state" className="h-8 text-sm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zip" className="text-xs">
                ZIP Code
              </Label>
              <Input id="zip" className="h-8 text-sm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country-compact" className="text-xs">
                Country
              </Label>
              <Input id="country-compact" className="h-8 text-sm" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Description */}
        <ShowcaseSection title="With Description">
          <div className="grid w-full max-w-sm items-center gap-2">
            <div>
              <Label htmlFor="bio">Bio</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Tell us a bit about yourself
              </p>
            </div>
            <Textarea id="bio" placeholder="I'm a..." />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Optional Field */}
        <ShowcaseSection title="Optional Field">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="optional-field">
              Phone Number{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Input id="optional-field" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Font Weights */}
        <ShowcaseSection title="Different Font Weights">
          <div className="space-y-4 max-w-sm">
            <div className="grid gap-2">
              <Label htmlFor="normal" className="font-normal">
                Normal Weight
              </Label>
              <Input id="normal" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="medium" className="font-medium">
                Medium Weight (Default)
              </Label>
              <Input id="medium" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="semibold" className="font-semibold">
                Semibold Weight
              </Label>
              <Input id="semibold" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Nested Form Fields */}
        <ShowcaseSection title="Nested Form Fields">
          <div className="max-w-md space-y-4 rounded-lg border p-4">
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input id="contact-phone" type="tel" />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold mb-4">Preferences</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="font-normal cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="updates" />
                  <Label htmlFor="updates" className="font-normal cursor-pointer">
                    Receive product updates
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
