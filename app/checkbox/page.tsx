"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

const sidebarItems = [
  { id: "recents", label: "Recents", defaultChecked: false },
  { id: "home", label: "Home", defaultChecked: false },
  { id: "applications", label: "Applications", defaultChecked: true },
  { id: "desktop", label: "Desktop", defaultChecked: false },
  { id: "downloads", label: "Downloads", defaultChecked: true },
  { id: "documents", label: "Documents", defaultChecked: false },
]

export default function CheckboxPage() {
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [cardChecked, setCardChecked] = useState(true)
  const [sidebarChecked, setSidebarChecked] = useState<Record<string, boolean>>(
    sidebarItems.reduce((acc, item) => ({ ...acc, [item.id]: item.defaultChecked }), {})
  )

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
      />

      <ComponentShowcase>
        {/* Default */}
        <ShowcaseSection title="Default">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Subtext */}
        <ShowcaseSection title="With Description">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms-subtext" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="terms-subtext" className="cursor-pointer">
                Accept terms and conditions
              </Label>
              <p className="text-sm text-muted-foreground">
                By clicking this checkbox, you agree to the terms and conditions.
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <div className="flex items-center space-x-2">
            <Checkbox id="notifications-disabled" disabled />
            <Label htmlFor="notifications-disabled" className="cursor-not-allowed opacity-50">
              Enable notifications
            </Label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Card Style */}
        <ShowcaseSection title="Card Style">
          <div className="space-y-4">
            {/* Unchecked Card */}
            <label
              htmlFor="card-unchecked"
              className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent/50 transition-colors"
            >
              <Checkbox
                id="card-unchecked"
                checked={notificationsEnabled}
                onCheckedChange={(checked) => setNotificationsEnabled(checked as boolean)}
                className="mt-0.5"
              />
              <div className="grid gap-1.5 leading-none">
                <span className="text-sm font-medium">Enable notifications</span>
                <span className="text-sm text-muted-foreground">
                  You can enable or disable notifications at any time.
                </span>
              </div>
            </label>

            {/* Checked Card */}
            <label
              htmlFor="card-checked"
              className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent/50 transition-colors border-primary/50 bg-primary/5"
            >
              <Checkbox
                id="card-checked"
                checked={cardChecked}
                onCheckedChange={(checked) => setCardChecked(checked as boolean)}
                className="mt-0.5"
              />
              <div className="grid gap-1.5 leading-none">
                <span className="text-sm font-medium">Enable notifications</span>
                <span className="text-sm text-muted-foreground">
                  You can enable or disable notifications at any time.
                </span>
              </div>
            </label>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form with Multiple Checkboxes */}
        <ShowcaseSection title="Form">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-medium">Sidebar</h3>
              <p className="text-sm text-muted-foreground">
                Select the items you want to display in the sidebar.
              </p>
            </div>

            <div className="space-y-3">
              {sidebarItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.id}
                    checked={sidebarChecked[item.id]}
                    onCheckedChange={(checked) =>
                      setSidebarChecked((prev) => ({ ...prev, [item.id]: checked as boolean }))
                    }
                  />
                  <Label htmlFor={item.id} className="cursor-pointer">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>

            <Button type="submit">Submit</Button>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
