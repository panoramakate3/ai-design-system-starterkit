"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Phone,
  CreditCard,
  DollarSign,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function InputPage() {

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/input"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Input */}
        <ShowcaseSection title="Basic">
          <Input type="email" placeholder="Email" />
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* File Input */}
        <ShowcaseSection title="File">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <Input disabled type="email" placeholder="Email" />
        </ShowcaseSection>

        <Separator />

        {/* With Button */}
        <ShowcaseSection title="With Button">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Text */}
        <ShowcaseSection title="With Text">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder="shadcn" />
            <p className="text-sm text-muted-foreground">
              This is your public display name.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="grid w-full max-w-sm items-center gap-4">
            <div className="grid gap-2">
              <Label htmlFor="form-username">Username</Label>
              <Input type="text" id="form-username" placeholder="shadcn" />
              <p className="text-sm text-muted-foreground">
                This is your public display name.
              </p>
            </div>
            <Button>Submit</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icon - Search */}
        <ShowcaseSection title="With Icon (Search)">
          <Input
            type="search"
            placeholder="Search..."
            className="max-w-sm"
          />
        </ShowcaseSection>

        <Separator />

        {/* With Icon - Email */}
        <ShowcaseSection title="With Icon (Email)">
          <Input
            type="email"
            placeholder="Email address"
            className="max-w-sm"
          />
        </ShowcaseSection>

        <Separator />

        {/* Password with Toggle */}
        <ShowcaseSection title="Password with Toggle">
          <Input
            type="password"
            placeholder="Password"
            className="max-w-sm"
          />
        </ShowcaseSection>

        <Separator />

        {/* With Prefix */}
        <ShowcaseSection title="With Prefix">
          <div className="flex max-w-sm items-center">
            <span className="inline-flex h-9 items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              https://
            </span>
            <Input
              type="text"
              placeholder="example.com"
              className="rounded-l-none"
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Suffix */}
        <ShowcaseSection title="With Suffix">
          <div className="flex max-w-sm items-center">
            <Input
              type="text"
              placeholder="username"
              className="rounded-r-none"
            />
            <span className="inline-flex h-9 items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              @gmail.com
            </span>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Currency Input */}
        <ShowcaseSection title="Currency">
          <div className="relative max-w-sm">
            <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="number"
              placeholder="0.00"
              className="pl-10"
              step="0.01"
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Phone Input */}
        <ShowcaseSection title="Phone">
          <div className="relative max-w-sm">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="pl-10"
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Date Input */}
        <ShowcaseSection title="Date">
          <div className="relative max-w-sm">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="date"
              className="pl-10"
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Credit Card */}
        <ShowcaseSection title="Credit Card">
          <div className="relative max-w-sm">
            <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="pl-10"
              maxLength={19}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Inputs in Row */}
        <ShowcaseSection title="Multiple Inputs">
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="grid gap-4 max-w-sm">
            <Input
              type="text"
              placeholder="Small (custom)"
              className="h-8 text-xs"
            />
            <Input
              type="text"
              placeholder="Default (h-9)"
            />
            <Input
              type="text"
              placeholder="Large (custom)"
              className="h-11 text-base"
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Validation */}
        <ShowcaseSection title="With Validation">
          <div className="grid gap-4 max-w-sm">
            <div className="grid gap-2">
              <Label htmlFor="valid-email">Valid Email</Label>
              <div className="relative">
                <Input
                  type="email"
                  id="valid-email"
                  placeholder="user@example.com"
                  defaultValue="user@example.com"
                  className="border-green-500 focus-visible:ring-green-500/50"
                />
              </div>
              <p className="text-sm text-green-600">Email is valid!</p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="invalid-email" className="text-destructive">
                Invalid Email
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  id="invalid-email"
                  placeholder="user@example.com"
                  defaultValue="invalid-email"
                  aria-invalid="true"
                />
              </div>
              <p className="text-sm text-destructive">Please enter a valid email address.</p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Full Width Form */}
        <ShowcaseSection title="Full Width Form">
          <div className="w-full space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                type="text"
                placeholder="John Doe"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email-full">Email Address</Label>
              <Input
                id="email-full"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password-full">Password</Label>
              <Input
                id="password-full"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full">Create Account</Button>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
