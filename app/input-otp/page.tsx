"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_CHARS } from "input-otp"

export default function InputOTPPage() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Input OTP"
        description="Accessible one-time password component with copy paste functionality."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/input-otp"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic */}
        <ShowcaseSection title="Basic">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="grid gap-2">
            <Label htmlFor="otp-label">One-Time Password</Label>
            <InputOTP id="otp-label" maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">
              Enter your one-time password.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Separator */}
        <ShowcaseSection title="With Separator">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </ShowcaseSection>

        <Separator />

        {/* Pattern - Digits Only */}
        <ShowcaseSection title="Digits Only">
          <div className="grid gap-2">
            <Label>Verification Code</Label>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">
              Only numbers are allowed.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Pattern - Letters Only */}
        <ShowcaseSection title="Letters Only">
          <div className="grid gap-2">
            <Label>Alpha Code</Label>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">
              Only letters are allowed.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Controlled */}
        <ShowcaseSection title="Controlled">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label>Enter Code</Label>
              <InputOTP
                maxLength={6}
                value={value1}
                onChange={(value) => setValue1(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            {value1 && (
              <div className="text-sm">
                <span className="text-muted-foreground">Current value: </span>
                <span className="font-mono font-medium">{value1}</span>
              </div>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="w-full max-w-sm space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">One-Time Password</h3>
              <p className="text-sm text-muted-foreground">
                Please enter the one-time password sent to your phone.
              </p>
            </div>
            <div className="grid gap-2">
              <InputOTP
                maxLength={6}
                value={value2}
                onChange={(value) => setValue2(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button className="w-full" disabled={value2.length !== 6}>
              Submit
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* 4 Digits */}
        <ShowcaseSection title="4 Digits">
          <div className="grid gap-2">
            <Label>PIN Code</Label>
            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">
              Enter your 4-digit PIN.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* 8 Digits with Separators */}
        <ShowcaseSection title="8 Digits with Separators">
          <div className="grid gap-2">
            <Label>Recovery Code</Label>
            <InputOTP maxLength={8}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <InputOTP maxLength={6} disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </ShowcaseSection>

        <Separator />

        {/* With Error State */}
        <ShowcaseSection title="With Error State">
          <div className="grid gap-2">
            <Label className="text-destructive">Verification Code</Label>
            <InputOTP maxLength={6} value="123456">
              <InputOTPGroup>
                <InputOTPSlot index={0} aria-invalid />
                <InputOTPSlot index={1} aria-invalid />
                <InputOTPSlot index={2} aria-invalid />
                <InputOTPSlot index={3} aria-invalid />
                <InputOTPSlot index={4} aria-invalid />
                <InputOTPSlot index={5} aria-invalid />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-destructive">
              Invalid code. Please try again.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Complete Verification Flow */}
        <ShowcaseSection title="Complete Verification Flow">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold">Verify Your Account</h3>
              <p className="text-sm text-muted-foreground">
                We sent a verification code to <strong>+1 (555) 123-4567</strong>
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={value3}
                  onChange={(value) => setValue3(value)}
                  pattern={REGEXP_ONLY_DIGITS}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {value3 && (
                <p className="text-center text-sm text-muted-foreground">
                  {value3.length === 6
                    ? "✓ Code complete"
                    : `${6 - value3.length} digits remaining`}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Button className="w-full" disabled={value3.length !== 6}>
                Verify Account
              </Button>
              <Button variant="ghost" className="w-full" size="sm">
                Didn't receive a code? Resend
              </Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Styling */}
        <ShowcaseSection title="Custom Styling">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Large Size</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={1} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={2} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={3} className="h-12 w-12 text-lg" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="grid gap-2">
              <Label>Small Size</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-8 w-8 text-xs" />
                  <InputOTPSlot index={1} className="h-8 w-8 text-xs" />
                  <InputOTPSlot index={2} className="h-8 w-8 text-xs" />
                  <InputOTPSlot index={3} className="h-8 w-8 text-xs" />
                  <InputOTPSlot index={4} className="h-8 w-8 text-xs" />
                  <InputOTPSlot index={5} className="h-8 w-8 text-xs" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="grid gap-2">
              <Label>Rounded</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="rounded-full" />
                  <InputOTPSlot index={1} className="rounded-full" />
                  <InputOTPSlot index={2} className="rounded-full" />
                  <InputOTPSlot index={3} className="rounded-full" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
