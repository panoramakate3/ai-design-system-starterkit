"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldGroupLabel,
} from "@/components/ui/field"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function FieldPage() {
  const [priceRange, setPriceRange] = useState([400])

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Field"
        description="Combine labels, controls, and help text to compose accessible form fields and grouped inputs."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/field"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Field */}
        <ShowcaseSection title="Basic Field">
          <Field>
            <FieldLabel>Username</FieldLabel>
            <FieldControl>
              <Input placeholder="Max Leiter" />
            </FieldControl>
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
        </ShowcaseSection>

        <Separator />

        {/* Field with Error */}
        <ShowcaseSection title="With Error">
          <Field error>
            <FieldLabel>Password</FieldLabel>
            <FieldControl>
              <Input type="password" defaultValue="1234" />
            </FieldControl>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <FieldError>Password is too short.</FieldError>
          </Field>
        </ShowcaseSection>

        <Separator />

        {/* Textarea Field */}
        <ShowcaseSection title="Textarea">
          <Field>
            <FieldLabel>Feedback</FieldLabel>
            <FieldControl>
              <Textarea placeholder="Your feedback helps us improve..." rows={4} />
            </FieldControl>
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </ShowcaseSection>

        <Separator />

        {/* Select Field */}
        <ShowcaseSection title="Select">
          <Field>
            <FieldLabel>Department</FieldLabel>
            <FieldControl>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
            </FieldControl>
            <FieldDescription>
              Select your department or area of work.
            </FieldDescription>
          </Field>
        </ShowcaseSection>

        <Separator />

        {/* Slider Field */}
        <ShowcaseSection title="Slider">
          <Field>
            <FieldLabel>Price Range</FieldLabel>
            <FieldControl>
              <div className="pt-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={200}
                  max={800}
                  step={10}
                />
              </div>
            </FieldControl>
            <FieldDescription>
              Set your budget range (${priceRange[0]}).
            </FieldDescription>
          </Field>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Fields */}
        <ShowcaseSection title="Multiple Fields">
          <div className="space-y-4">
            <Field>
              <FieldLabel>Street Address</FieldLabel>
              <FieldControl>
                <Input placeholder="123 Main St" />
              </FieldControl>
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>City</FieldLabel>
                <FieldControl>
                  <Input placeholder="New York" />
                </FieldControl>
              </Field>

              <Field>
                <FieldLabel>Postal Code</FieldLabel>
                <FieldControl>
                  <Input placeholder="90502" />
                </FieldControl>
              </Field>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Checkbox Group */}
        <ShowcaseSection title="Checkbox Group">
          <FieldGroup>
            <FieldGroupLabel>Show these items on the desktop</FieldGroupLabel>
            <FieldDescription>
              Select the items you want to show on the desktop.
            </FieldDescription>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="hard-disks" />
                <Label htmlFor="hard-disks" className="font-normal cursor-pointer">
                  Hard disks
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="external-disks" />
                <Label htmlFor="external-disks" className="font-normal cursor-pointer">
                  External disks
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="removable-media" />
                <Label htmlFor="removable-media" className="font-normal cursor-pointer">
                  CDs, DVDs, and iPods
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="connected-servers" />
                <Label htmlFor="connected-servers" className="font-normal cursor-pointer">
                  Connected servers
                </Label>
              </div>
            </div>
          </FieldGroup>
        </ShowcaseSection>

        <Separator />

        {/* Radio Group */}
        <ShowcaseSection title="Radio Group">
          <FieldGroup>
            <FieldGroupLabel>Subscription Plan</FieldGroupLabel>
            <FieldDescription>
              Yearly and lifetime plans offer significant savings.
            </FieldDescription>
            <RadioGroup defaultValue="monthly" className="pt-2 space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="font-normal cursor-pointer">
                  Monthly ($9.99/month)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yearly" id="yearly" />
                <Label htmlFor="yearly" className="font-normal cursor-pointer">
                  Yearly ($99.99/year)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lifetime" id="lifetime" />
                <Label htmlFor="lifetime" className="font-normal cursor-pointer">
                  Lifetime ($299.99)
                </Label>
              </div>
            </RadioGroup>
          </FieldGroup>
        </ShowcaseSection>

        <Separator />

        {/* Card Details Example */}
        <ShowcaseSection title="Payment Form">
          <div className="rounded-lg border p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Payment Method</h3>
              <p className="text-sm text-muted-foreground">
                All transactions are secure and encrypted
              </p>
            </div>

            <div className="space-y-4">
              <Field>
                <FieldLabel>Name on Card</FieldLabel>
                <FieldControl>
                  <Input placeholder="Evil Rabbit" />
                </FieldControl>
              </Field>

              <Field>
                <FieldLabel>Card Number</FieldLabel>
                <FieldControl>
                  <Input placeholder="1234 1234 1234 1234" />
                </FieldControl>
                <FieldDescription>
                  Enter your 16-digit number.
                </FieldDescription>
              </Field>

              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel>Month</FieldLabel>
                  <FieldControl>
                    <Input placeholder="MM" />
                  </FieldControl>
                </Field>

                <Field>
                  <FieldLabel>Year</FieldLabel>
                  <FieldControl>
                    <Input placeholder="YYYY" />
                  </FieldControl>
                </Field>

                <Field>
                  <FieldLabel>CVV</FieldLabel>
                  <FieldControl>
                    <Input placeholder="123" />
                  </FieldControl>
                </Field>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Billing Address</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  The billing address associated with your payment method
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="same-address" defaultChecked />
                  <Label htmlFor="same-address" className="font-normal cursor-pointer">
                    Same as shipping address
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compute Environment Example */}
        <ShowcaseSection title="Compute Environment">
          <FieldGroup>
            <FieldGroupLabel>Compute Environment</FieldGroupLabel>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes" className="pt-2 space-y-3">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="kubernetes" id="kubernetes" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="kubernetes" className="font-medium cursor-pointer">
                    Kubernetes
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Run GPU workloads on a K8s configured cluster. This is the default.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="vm" id="vm" className="mt-1" disabled />
                <div className="flex-1">
                  <Label htmlFor="vm" className="font-medium cursor-pointer">
                    Virtual Machine
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Access a VM configured cluster to run workloads. (Coming soon)
                  </p>
                </div>
              </div>
            </RadioGroup>
          </FieldGroup>
        </ShowcaseSection>

        <Separator />

        {/* Notification Settings */}
        <ShowcaseSection title="Notification Settings">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-1">Responses</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get notified when ChatGPT responds to requests that take time, like research or image generation.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="responses-push" defaultChecked />
                  <Label htmlFor="responses-push" className="font-normal cursor-pointer">
                    Push notifications
                  </Label>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-1">Tasks</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get notified when tasks you've created have updates.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tasks-manage" className="font-normal cursor-pointer">
                      Manage tasks
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tasks-push" />
                    <Label htmlFor="tasks-push" className="font-normal cursor-pointer">
                      Push notifications
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tasks-email" />
                    <Label htmlFor="tasks-email" className="font-normal cursor-pointer">
                      Email notifications
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Complete Form Example */}
        <ShowcaseSection title="Complete Form">
          <div className="rounded-lg border p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Profile</h3>
              <p className="text-sm text-muted-foreground">
                Fill in your profile information.
              </p>
            </div>

            <div className="space-y-4">
              <Field>
                <FieldLabel>Name</FieldLabel>
                <FieldControl>
                  <Input placeholder="Evil Rabbit" />
                </FieldControl>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Message</FieldLabel>
                <FieldControl>
                  <Textarea
                    placeholder="Hello, world!"
                    rows={3}
                  />
                </FieldControl>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably under 100 characters.
                </FieldDescription>
              </Field>

              <div className="flex gap-2 pt-2">
                <Button>Submit</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
