"use client"

import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function SwitchPage() {
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked states."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/switch"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Switch */}
        <ShowcaseSection title="Basic Switch">
          <Switch />
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Checked State */}
        <ShowcaseSection title="Checked State">
          <div className="flex items-center space-x-2">
            <Switch id="checked-switch" defaultChecked />
            <Label htmlFor="checked-switch">Enabled by default</Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">
                Disabled (Off)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">
                Disabled (On)
              </Label>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Controlled Switch */}
        <ShowcaseSection title="Controlled Switch">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-controlled"
                checked={airplaneMode}
                onCheckedChange={setAirplaneMode}
              />
              <Label htmlFor="airplane-controlled">Airplane Mode</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Status: {airplaneMode ? "On" : "Off"}
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Alignments */}
        <ShowcaseSection title="Different Alignments">
          <div className="space-y-4 w-full max-w-md">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Push Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="emails">Email Notifications</Label>
              <Switch id="emails" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms">SMS Notifications</Label>
              <Switch id="sms" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Settings Panel */}
        <ShowcaseSection title="Settings Panel">
          <div className="w-full max-w-md space-y-6 rounded-lg border p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notif">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notif"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new products and features
                    </p>
                  </div>
                  <Switch
                    id="marketing-emails"
                    checked={marketing}
                    onCheckedChange={setMarketing}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security-emails">Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Important security updates and alerts
                    </p>
                  </div>
                  <Switch id="security-emails" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Privacy Settings */}
        <ShowcaseSection title="Privacy Settings">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="profile-public">Public Profile</Label>
                <Switch id="profile-public" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-email">Show Email</Label>
                <Switch id="show-email" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-phone">Show Phone Number</Label>
                <Switch id="show-phone" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="allow-messages">Allow Direct Messages</Label>
                <Switch id="allow-messages" defaultChecked />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Create Account</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="john@example.com"
                />
              </div>
              <Separator />
              <div className="flex items-center space-x-2">
                <Switch id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="newsletter" defaultChecked />
                <Label htmlFor="newsletter" className="text-sm">
                  Subscribe to newsletter
                </Label>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Accessibility Settings */}
        <ShowcaseSection title="Accessibility Settings">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Accessibility</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="dark-mode-toggle">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch to dark theme
                  </p>
                </div>
                <Switch
                  id="dark-mode-toggle"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="high-contrast">High Contrast</Label>
                  <p className="text-sm text-muted-foreground">
                    Increase color contrast
                  </p>
                </div>
                <Switch id="high-contrast" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="reduce-motion">Reduce Motion</Label>
                  <p className="text-sm text-muted-foreground">
                    Minimize animations
                  </p>
                </div>
                <Switch id="reduce-motion" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="screen-reader">Screen Reader Support</Label>
                  <p className="text-sm text-muted-foreground">
                    Enhanced screen reader compatibility
                  </p>
                </div>
                <Switch id="screen-reader" defaultChecked />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Feature Toggles */}
        <ShowcaseSection title="Feature Toggles">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Features</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-save">Auto-save</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save your work
                  </p>
                </div>
                <Switch id="auto-save" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="spell-check">Spell Check</Label>
                  <p className="text-sm text-muted-foreground">
                    Check spelling as you type
                  </p>
                </div>
                <Switch id="spell-check" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="grammar-check">Grammar Check</Label>
                  <p className="text-sm text-muted-foreground">
                    Check grammar and style
                  </p>
                </div>
                <Switch id="grammar-check" />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Account Settings */}
        <ShowcaseSection title="Account Settings">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Account Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <Switch id="two-factor" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="login-alerts">Login Alerts</Label>
                <Switch id="login-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="session-timeout">Auto Logout</Label>
                <Switch id="session-timeout" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="data-sharing">Share Analytics Data</Label>
                <Switch id="data-sharing" />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Communication Preferences */}
        <ShowcaseSection title="Communication Preferences">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">How we contact you</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="email-updates">Email Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Product updates and announcements
                  </p>
                </div>
                <Switch id="email-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="weekly-digest">Weekly Digest</Label>
                  <p className="text-sm text-muted-foreground">
                    Summary of your weekly activity
                  </p>
                </div>
                <Switch id="weekly-digest" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label htmlFor="social-mentions">Social Mentions</Label>
                  <p className="text-sm text-muted-foreground">
                    When someone mentions you
                  </p>
                </div>
                <Switch id="social-mentions" defaultChecked />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact List */}
        <ShowcaseSection title="Compact List">
          <div className="w-full max-w-md space-y-2 rounded-lg border p-4">
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="wifi" className="text-sm">
                Wi-Fi
              </Label>
              <Switch id="wifi" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="bluetooth" className="text-sm">
                Bluetooth
              </Label>
              <Switch id="bluetooth" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="airplane" className="text-sm">
                Airplane Mode
              </Label>
              <Switch id="airplane" />
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="location" className="text-sm">
                Location Services
              </Label>
              <Switch id="location" defaultChecked />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Status Indicators */}
        <ShowcaseSection title="Status Indicators">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <Label htmlFor="online-status">Online Status</Label>
              </div>
              <Switch id="online-status" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <Label htmlFor="busy-status">Do Not Disturb</Label>
              </div>
              <Switch id="busy-status" />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-gray-500" />
                <Label htmlFor="invisible-status">Invisible Mode</Label>
              </div>
              <Switch id="invisible-status" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Interactive Demo */}
        <ShowcaseSection title="Interactive Demo">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Subscription Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="premium">Premium Features</Label>
                  <p className="text-sm text-muted-foreground">
                    {notifications ? "Active" : "Inactive"}
                  </p>
                </div>
                <Switch
                  id="premium"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              {notifications && (
                <div className="rounded-lg bg-muted p-4 space-y-2">
                  <p className="text-sm font-medium">Premium features enabled:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Advanced analytics</li>
                    <li>• Priority support</li>
                    <li>• Custom branding</li>
                    <li>• API access</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Switches Grid */}
        <ShowcaseSection title="Multiple Switches">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="rounded-lg border p-4 space-y-3">
              <h4 className="font-semibold text-sm">Display</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-1" className="text-sm">Auto-brightness</Label>
                  <Switch id="grid-1" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-2" className="text-sm">Night Shift</Label>
                  <Switch id="grid-2" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4 space-y-3">
              <h4 className="font-semibold text-sm">Sound</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-3" className="text-sm">Vibration</Label>
                  <Switch id="grid-3" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-4" className="text-sm">Silent Mode</Label>
                  <Switch id="grid-4" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4 space-y-3">
              <h4 className="font-semibold text-sm">Battery</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-5" className="text-sm">Power Saving</Label>
                  <Switch id="grid-5" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-6" className="text-sm">Battery %</Label>
                  <Switch id="grid-6" defaultChecked />
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4 space-y-3">
              <h4 className="font-semibold text-sm">Connections</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-7" className="text-sm">Mobile Data</Label>
                  <Switch id="grid-7" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="grid-8" className="text-sm">Hotspot</Label>
                  <Switch id="grid-8" />
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
