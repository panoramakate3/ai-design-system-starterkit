"use client"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { NativeSelect } from "@/components/ui/native-select"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function NativeSelectPage() {
  const [status, setStatus] = useState("")
  const [department, setDepartment] = useState("")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Native Select"
        description="A styled native HTML select element with consistent design system integration."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/native-select"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic */}
        <ShowcaseSection title="Basic">
          <NativeSelect className="max-w-sm">
            <option value="">Select a status</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
            <option value="cancelled">Cancelled</option>
          </NativeSelect>
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="status">Select status</Label>
            <NativeSelect id="status">
              <option value="">Select a status</option>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
              <option value="cancelled">Cancelled</option>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Optgroups */}
        <ShowcaseSection title="With Optgroups">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="department">Select department</Label>
            <NativeSelect id="department">
              <option value="">Select department</option>
              <optgroup label="Engineering">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="devops">DevOps</option>
              </optgroup>
              <optgroup label="Sales">
                <option value="sales-rep">Sales Rep</option>
                <option value="account-manager">Account Manager</option>
                <option value="sales-director">Sales Director</option>
              </optgroup>
              <optgroup label="Operations">
                <option value="customer-support">Customer Support</option>
                <option value="product-manager">Product Manager</option>
                <option value="operations-manager">Operations Manager</option>
              </optgroup>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Controlled */}
        <ShowcaseSection title="Controlled">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="controlled-status">Status</Label>
            <NativeSelect
              id="controlled-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select a status</option>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
              <option value="cancelled">Cancelled</option>
            </NativeSelect>
            {status && (
              <p className="text-sm text-muted-foreground">
                Selected: <span className="font-medium">{status}</span>
              </p>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="disabled-select">Disabled Select</Label>
            <NativeSelect id="disabled-select" disabled>
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Default Value */}
        <ShowcaseSection title="With Default Value">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="default-value">Priority</Label>
            <NativeSelect id="default-value" defaultValue="medium">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Select */}
        <ShowcaseSection title="Multiple Select">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="multiple">Select multiple options</Label>
            <NativeSelect id="multiple" multiple className="h-auto py-2">
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
              <option value="solid">Solid</option>
            </NativeSelect>
            <p className="text-sm text-muted-foreground">
              Hold Cmd/Ctrl to select multiple items
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Size Variants */}
        <ShowcaseSection title="Size Variants">
          <div className="space-y-3 max-w-sm">
            <div className="grid gap-2">
              <Label htmlFor="small">Small</Label>
              <NativeSelect id="small" className="h-8 text-xs">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="default-size">Default</Label>
              <NativeSelect id="default-size">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="large">Large</Label>
              <NativeSelect id="large" className="h-11 text-base">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Create Task</h3>
              <p className="text-sm text-muted-foreground">
                Fill in the task details below
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="task-status">Status</Label>
                <NativeSelect id="task-status">
                  <option value="">Select a status</option>
                  <option value="todo">Todo</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                  <option value="cancelled">Cancelled</option>
                </NativeSelect>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="task-priority">Priority</Label>
                <NativeSelect id="task-priority">
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </NativeSelect>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="task-assignee">Assignee</Label>
                <NativeSelect id="task-assignee">
                  <option value="">Select assignee</option>
                  <option value="user-1">John Doe</option>
                  <option value="user-2">Jane Smith</option>
                  <option value="user-3">Bob Johnson</option>
                  <option value="user-4">Alice Williams</option>
                </NativeSelect>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Countries Example */}
        <ShowcaseSection title="Countries Example">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="country">Country</Label>
            <NativeSelect id="country">
              <option value="">Select a country</option>
              <optgroup label="North America">
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="uk">United Kingdom</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="es">Spain</option>
                <option value="it">Italy</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="jp">Japan</option>
                <option value="cn">China</option>
                <option value="in">India</option>
                <option value="kr">South Korea</option>
              </optgroup>
              <optgroup label="Oceania">
                <option value="au">Australia</option>
                <option value="nz">New Zealand</option>
              </optgroup>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Time Zones */}
        <ShowcaseSection title="Time Zones">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <NativeSelect id="timezone">
              <option value="">Select time zone</option>
              <optgroup label="US (Common)">
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Europe/Berlin">Berlin (CET)</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Asia/Shanghai">Shanghai (CST)</option>
                <option value="Asia/Dubai">Dubai (GST)</option>
              </optgroup>
            </NativeSelect>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Helper Text */}
        <ShowcaseSection title="With Helper Text">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="role">Role</Label>
            <NativeSelect id="role">
              <option value="">Select role</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
              <option value="guest">Guest</option>
            </NativeSelect>
            <p className="text-sm text-muted-foreground">
              Choose the user's permission level
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Error State */}
        <ShowcaseSection title="Error State">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="error-select" className="text-destructive">
              Required Field
            </Label>
            <NativeSelect
              id="error-select"
              className="border-destructive focus:ring-destructive"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </NativeSelect>
            <p className="text-sm text-destructive">This field is required</p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Grid Layout */}
        <ShowcaseSection title="Grid Layout">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <NativeSelect id="first-name">
                <option value="">Title</option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
                <option value="dr">Dr.</option>
              </NativeSelect>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <NativeSelect id="gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </NativeSelect>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="month">Month</Label>
              <NativeSelect id="month">
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </NativeSelect>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="year">Year</Label>
              <NativeSelect id="year">
                <option value="">Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </NativeSelect>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
