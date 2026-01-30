"use client"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"
import { CreditCard, Truck, Clock, Zap, Shield, Star } from "lucide-react"

export default function RadioGroupPage() {
  const [notifyValue, setNotifyValue] = useState("email")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingSpeed, setShippingSpeed] = useState("standard")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Radio Group"
        description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/radio-group"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Radio Group */}
        <ShowcaseSection title="Basic Radio Group">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* With Description */}
        <ShowcaseSection title="With Description">
          <RadioGroup defaultValue="email" className="gap-4">
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="email" id="notify-email" className="mt-0.5" />
              <div className="grid gap-1.5">
                <Label htmlFor="notify-email" className="font-medium">
                  Email
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get notified via email when something happens.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="sms" id="notify-sms" className="mt-0.5" />
              <div className="grid gap-1.5">
                <Label htmlFor="notify-sms" className="font-medium">
                  SMS
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get notified via SMS when something happens.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="push" id="notify-push" className="mt-0.5" />
              <div className="grid gap-1.5">
                <Label htmlFor="notify-push" className="font-medium">
                  Push Notification
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get notified via push notification on your device.
                </p>
              </div>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Horizontal Layout */}
        <ShowcaseSection title="Horizontal Layout">
          <RadioGroup defaultValue="option-one" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option Three</Label>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State">
          <RadioGroup defaultValue="option-1" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="disabled-1" />
              <Label htmlFor="disabled-1">Option 1 (Disabled)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="disabled-2" />
              <Label htmlFor="disabled-2">Option 2 (Disabled)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="disabled-3" />
              <Label htmlFor="disabled-3">Option 3 (Disabled)</Label>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Individual Disabled Items */}
        <ShowcaseSection title="Individual Disabled Items">
          <RadioGroup defaultValue="available">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="item-1" />
              <Label htmlFor="item-1">Available Option</Label>
            </div>
            <div className="flex items-center space-x-2 opacity-50">
              <RadioGroupItem value="unavailable" id="item-2" disabled />
              <Label htmlFor="item-2">Unavailable Option</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="another" id="item-3" />
              <Label htmlFor="item-3">Another Available Option</Label>
            </div>
            <div className="flex items-center space-x-2 opacity-50">
              <RadioGroupItem value="soldout" id="item-4" disabled />
              <Label htmlFor="item-4">Sold Out</Label>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Controlled */}
        <ShowcaseSection title="Controlled">
          <div className="space-y-4">
            <RadioGroup value={notifyValue} onValueChange={setNotifyValue}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="controlled-email" />
                <Label htmlFor="controlled-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sms" id="controlled-sms" />
                <Label htmlFor="controlled-sms">SMS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="push" id="controlled-push" />
                <Label htmlFor="controlled-push">Push</Label>
              </div>
            </RadioGroup>
            {notifyValue && (
              <p className="text-sm text-muted-foreground">
                Selected: <span className="font-medium">{notifyValue}</span>
              </p>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <RadioGroup defaultValue="fast">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="fast" id="fast" />
              <Label htmlFor="fast" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Fast Delivery
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Standard Delivery
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Scheduled Delivery
              </Label>
            </div>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Card Style */}
        <ShowcaseSection title="Card Style">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="gap-3">
            <Label
              htmlFor="payment-card"
              className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-colors ${
                paymentMethod === "card" ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="card" id="payment-card" />
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <div className="grid gap-0.5">
                    <span className="font-medium">Credit Card</span>
                    <span className="text-xs text-muted-foreground">Pay with credit or debit card</span>
                  </div>
                </div>
              </div>
            </Label>
            <Label
              htmlFor="payment-bank"
              className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-colors ${
                paymentMethod === "bank" ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="bank" id="payment-bank" />
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <div className="grid gap-0.5">
                    <span className="font-medium">Bank Transfer</span>
                    <span className="text-xs text-muted-foreground">Direct bank account transfer</span>
                  </div>
                </div>
              </div>
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Shipping Options */}
        <ShowcaseSection title="Shipping Options">
          <RadioGroup value={shippingSpeed} onValueChange={setShippingSpeed} className="gap-3">
            <Label
              htmlFor="shipping-standard"
              className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-colors ${
                shippingSpeed === "standard" ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="standard" id="shipping-standard" />
                <div className="grid gap-0.5">
                  <span className="font-medium">Standard Shipping</span>
                  <span className="text-sm text-muted-foreground">5-7 business days</span>
                </div>
              </div>
              <span className="font-semibold">Free</span>
            </Label>
            <Label
              htmlFor="shipping-express"
              className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-colors ${
                shippingSpeed === "express" ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="express" id="shipping-express" />
                <div className="grid gap-0.5">
                  <span className="font-medium">Express Shipping</span>
                  <span className="text-sm text-muted-foreground">2-3 business days</span>
                </div>
              </div>
              <span className="font-semibold">$9.99</span>
            </Label>
            <Label
              htmlFor="shipping-overnight"
              className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-colors ${
                shippingSpeed === "overnight" ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="overnight" id="shipping-overnight" />
                <div className="grid gap-0.5">
                  <span className="font-medium">Overnight Shipping</span>
                  <span className="text-sm text-muted-foreground">Next business day</span>
                </div>
              </div>
              <span className="font-semibold">$24.99</span>
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Plan Selection */}
        <ShowcaseSection title="Plan Selection">
          <RadioGroup defaultValue="pro" className="gap-3">
            <Label
              htmlFor="plan-free"
              className="flex flex-col rounded-lg border p-4 cursor-pointer hover:bg-accent"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="free" id="plan-free" />
                  <span className="font-semibold">Free</span>
                </div>
                <span className="text-2xl font-bold">$0</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li>• Up to 3 projects</li>
                <li>• Basic features</li>
                <li>• Community support</li>
              </ul>
            </Label>
            <Label
              htmlFor="plan-pro"
              className="flex flex-col rounded-lg border-2 border-primary bg-primary/5 p-4 cursor-pointer relative"
            >
              <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                Popular
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pro" id="plan-pro" />
                  <span className="font-semibold">Pro</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">$29</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li>• Unlimited projects</li>
                <li>• Advanced features</li>
                <li>• Priority support</li>
                <li>• Analytics dashboard</li>
              </ul>
            </Label>
            <Label
              htmlFor="plan-enterprise"
              className="flex flex-col rounded-lg border p-4 cursor-pointer hover:bg-accent"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="plan-enterprise" />
                  <span className="font-semibold">Enterprise</span>
                </div>
                <span className="text-2xl font-bold">Custom</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li>• Everything in Pro</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantee</li>
              </ul>
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Size Options */}
        <ShowcaseSection title="Size Options">
          <RadioGroup defaultValue="m" className="flex gap-2">
            <Label
              htmlFor="size-xs"
              className="flex items-center justify-center rounded-md border px-3 py-2 cursor-pointer hover:bg-accent"
            >
              <RadioGroupItem value="xs" id="size-xs" className="sr-only" />
              <span className="font-medium">XS</span>
            </Label>
            <Label
              htmlFor="size-s"
              className="flex items-center justify-center rounded-md border px-3 py-2 cursor-pointer hover:bg-accent"
            >
              <RadioGroupItem value="s" id="size-s" className="sr-only" />
              <span className="font-medium">S</span>
            </Label>
            <Label
              htmlFor="size-m"
              className="flex items-center justify-center rounded-md border-2 border-primary bg-primary/5 px-3 py-2 cursor-pointer"
            >
              <RadioGroupItem value="m" id="size-m" className="sr-only" />
              <span className="font-medium">M</span>
            </Label>
            <Label
              htmlFor="size-l"
              className="flex items-center justify-center rounded-md border px-3 py-2 cursor-pointer hover:bg-accent"
            >
              <RadioGroupItem value="l" id="size-l" className="sr-only" />
              <span className="font-medium">L</span>
            </Label>
            <Label
              htmlFor="size-xl"
              className="flex items-center justify-center rounded-md border px-3 py-2 cursor-pointer hover:bg-accent"
            >
              <RadioGroupItem value="xl" id="size-xl" className="sr-only" />
              <span className="font-medium">XL</span>
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Color Selection */}
        <ShowcaseSection title="Color Selection">
          <RadioGroup defaultValue="blue" className="flex gap-2">
            <Label htmlFor="color-red" className="cursor-pointer">
              <RadioGroupItem value="red" id="color-red" className="sr-only" />
              <div className="h-8 w-8 rounded-full bg-red-500 border-2 border-transparent hover:border-red-300" />
            </Label>
            <Label htmlFor="color-blue" className="cursor-pointer">
              <RadioGroupItem value="blue" id="color-blue" className="sr-only" />
              <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-blue-300" />
            </Label>
            <Label htmlFor="color-green" className="cursor-pointer">
              <RadioGroupItem value="green" id="color-green" className="sr-only" />
              <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-transparent hover:border-green-300" />
            </Label>
            <Label htmlFor="color-yellow" className="cursor-pointer">
              <RadioGroupItem value="yellow" id="color-yellow" className="sr-only" />
              <div className="h-8 w-8 rounded-full bg-yellow-500 border-2 border-transparent hover:border-yellow-300" />
            </Label>
            <Label htmlFor="color-purple" className="cursor-pointer">
              <RadioGroupItem value="purple" id="color-purple" className="sr-only" />
              <div className="h-8 w-8 rounded-full bg-purple-500 border-2 border-transparent hover:border-purple-300" />
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Rating Selection */}
        <ShowcaseSection title="Rating Selection">
          <RadioGroup defaultValue="4" className="gap-2">
            <Label htmlFor="rating-5" className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="5" id="rating-5" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm ml-2">5 stars</span>
              </div>
            </Label>
            <Label htmlFor="rating-4" className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="4" id="rating-4" />
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm ml-2">4 stars & up</span>
              </div>
            </Label>
            <Label htmlFor="rating-3" className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="3" id="rating-3" />
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-4 w-4 text-muted-foreground" />
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm ml-2">3 stars & up</span>
              </div>
            </Label>
          </RadioGroup>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="w-full max-w-md rounded-lg border p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Survey Form</h3>
              <p className="text-sm text-muted-foreground">
                Please answer the following questions
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="text-base font-medium">How satisfied are you with our service?</Label>
                <RadioGroup defaultValue="satisfied">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                    <Label htmlFor="very-satisfied">Very Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="satisfied" id="satisfied" />
                    <Label htmlFor="satisfied">Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unsatisfied" id="unsatisfied" />
                    <Label htmlFor="unsatisfied">Unsatisfied</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label className="text-base font-medium">Would you recommend us to others?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="recommend-yes" />
                    <Label htmlFor="recommend-yes">Yes, definitely</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="recommend-maybe" />
                    <Label htmlFor="recommend-maybe">Maybe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="recommend-no" />
                    <Label htmlFor="recommend-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button className="w-full">Submit Survey</Button>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
