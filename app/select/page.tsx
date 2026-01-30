"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Globe,
  Clock,
  CreditCard,
  Palette,
  Languages,
  User,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SelectPage() {
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Select"
        description="Displays a list of options for the user to pick from—triggered by a button."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/select"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Select */}
        <ShowcaseSection title="Basic">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="fruit-select">Select Fruit</Label>
            <Select>
              <SelectTrigger id="fruit-select" className="w-[180px]">
                <SelectValue placeholder="Choose a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Small Size */}
        <ShowcaseSection title="Small Size">
          <Select>
            <SelectTrigger size="sm" className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Default Size */}
        <ShowcaseSection title="Default Size">
          <Select>
            <SelectTrigger size="default" className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Disabled */}
        <ShowcaseSection title="Disabled">
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* With Disabled Items */}
        <ShowcaseSection title="With Disabled Items">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2" disabled>
                Option 2 (Disabled)
              </SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4" disabled>
                Option 4 (Disabled)
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* With Description */}
        <ShowcaseSection title="With Description">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="timezone-select">Timezone</Label>
            <Select>
              <SelectTrigger id="timezone-select" className="w-[250px]">
                <SelectValue placeholder="Select your timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">EST</SelectItem>
                <SelectItem value="pst">PST</SelectItem>
                <SelectItem value="jst">JST</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Choose your preferred timezone for scheduling.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Icon - Country */}
        <ShowcaseSection title="Country Selection">
          <Select>
            <SelectTrigger className="w-[250px]">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">🇺🇸 United States</SelectItem>
              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="ca">🇨🇦 Canada</SelectItem>
              <SelectItem value="au">🇦🇺 Australia</SelectItem>
              <SelectItem value="jp">🇯🇵 Japan</SelectItem>
              <SelectItem value="th">🇹🇭 Thailand</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* With Icon - Timezone */}
        <ShowcaseSection title="Timezone Selection">
          <Select>
            <SelectTrigger className="w-[280px]">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
              <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
              <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
              <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
              <SelectItem value="jst">JST (Japan Standard Time)</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Grouped Options */}
        <ShowcaseSection title="Grouped Options">
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="spinach">Spinach</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* With Scrollable Content */}
        <ShowcaseSection title="Scrollable Content">
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a programming language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="go">Go</SelectItem>
              <SelectItem value="rust">Rust</SelectItem>
              <SelectItem value="php">PHP</SelectItem>
              <SelectItem value="ruby">Ruby</SelectItem>
              <SelectItem value="swift">Swift</SelectItem>
              <SelectItem value="kotlin">Kotlin</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="Form Example">
          <div className="grid w-full max-w-sm items-center gap-4">
            <div className="grid gap-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select>
                <SelectTrigger id="account-type">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose the type of account you want to create.
              </p>
            </div>
            <Button>Continue</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Selects */}
        <ShowcaseSection title="Multiple Selects">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language" size="sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="th">ไทย</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency">Currency</Label>
              <Select>
                <SelectTrigger id="currency" size="sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="jpy">JPY (¥)</SelectItem>
                  <SelectItem value="thb">THB (฿)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Controlled Select */}
        <ShowcaseSection title="Controlled Select">
          <div className="grid w-full max-w-sm items-center gap-4">
            <div className="grid gap-2">
              <Label htmlFor="controlled-select">Select Framework</Label>
              <Select value={selectedValue} onValueChange={setSelectedValue}>
                <SelectTrigger id="controlled-select">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                </SelectContent>
              </Select>
              {selectedValue && (
                <p className="text-sm text-muted-foreground">
                  Selected: <span className="font-medium">{selectedValue}</span>
                </p>
              )}
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Color Options */}
        <ShowcaseSection title="Color Selection">
          <Select>
            <SelectTrigger className="w-[200px]">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Choose a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="red">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-500" />
                  <span>Red</span>
                </div>
              </SelectItem>
              <SelectItem value="blue">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500" />
                  <span>Blue</span>
                </div>
              </SelectItem>
              <SelectItem value="green">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500" />
                  <span>Green</span>
                </div>
              </SelectItem>
              <SelectItem value="yellow">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-500" />
                  <span>Yellow</span>
                </div>
              </SelectItem>
              <SelectItem value="purple">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-purple-500" />
                  <span>Purple</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Payment Method */}
        <ShowcaseSection title="Payment Method">
          <Select>
            <SelectTrigger className="w-[250px]">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="credit">Credit Card</SelectItem>
              <SelectItem value="debit">Debit Card</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
              <SelectItem value="applepay">Apple Pay</SelectItem>
              <SelectItem value="googlepay">Google Pay</SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseSection>

        <Separator />

        {/* Full Form Example */}
        <ShowcaseSection title="Complete Form">
          <div className="w-full max-w-sm space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="role">
                <User className="inline h-4 w-4 mr-1" />
                Role
              </Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Project Manager</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="experience">
                <Languages className="inline h-4 w-4 mr-1" />
                Experience Level
              </Label>
              <Select>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid-level (2-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (5+ years)</SelectItem>
                  <SelectItem value="lead">Lead/Principal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="contact">
                <Mail className="inline h-4 w-4 mr-1" />
                Preferred Contact Method
              </Label>
              <Select>
                <SelectTrigger id="contact">
                  <SelectValue placeholder="How should we contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="slack">Slack</SelectItem>
                  <SelectItem value="teams">Microsoft Teams</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Save Preferences</Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Full Width */}
        <ShowcaseSection title="Full Width">
          <div className="grid gap-2 w-full">
            <Label htmlFor="full-width">Department</Label>
            <Select>
              <SelectTrigger id="full-width" className="w-full">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
