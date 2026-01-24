"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  ChevronsUpDown,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Settings,
  User,
  Bell,
  Shield,
  HelpCircle,
  FileText,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react"

export default function CollapsiblePage() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>(["section1"])

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Collapsible"
        description="An interactive component which expands and collapses content."
      />

      <ComponentShowcase>
        {/* Basic Collapsible */}
        <ShowcaseSection title="Basic">
          <Card>
            <CardContent className="p-6">
              <Collapsible open={isOpen1} onOpenChange={setIsOpen1}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="mt-2 rounded-md border px-4 py-2 text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2 mt-2">
                  <div className="rounded-md border px-4 py-2 text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Different Icons">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full group">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                      <span className="font-medium">Click to expand</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6 text-sm text-muted-foreground">
                    <p>
                      This is the collapsible content that appears when you click the trigger.
                      It smoothly animates in and out.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Collapsible open={isOpen2} onOpenChange={setIsOpen2}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <span className="font-medium">Details</span>
                    {isOpen2 ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                    <p>
                      Content revealed with plus/minus icons. This provides a clear
                      visual indication of the expand/collapse state.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Collapsible open={isOpen3} onOpenChange={setIsOpen3}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <span className="font-medium">Privacy Settings</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen3 ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                    <p>
                      Chevron rotates 180 degrees when opened, providing smooth visual feedback.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* FAQ Style */}
        <ShowcaseSection title="FAQ Style">
          <Card>
            <CardContent className="p-6 space-y-4">
              {[
                {
                  question: "What is a Collapsible component?",
                  answer:
                    "A collapsible component is an interactive element that allows users to show or hide content. It's perfect for FAQs, settings panels, and organizing information.",
                },
                {
                  question: "When should I use Collapsible?",
                  answer:
                    "Use collapsibles when you have content that doesn't need to be visible all the time, like detailed information, optional settings, or FAQ answers.",
                },
                {
                  question: "Can I nest Collapsibles?",
                  answer:
                    "Yes! Collapsibles can be nested within each other to create hierarchical structures like navigation menus or multi-level settings.",
                },
                {
                  question: "Is it accessible?",
                  answer:
                    "Yes, when built correctly with proper ARIA attributes and keyboard navigation support, collapsibles are fully accessible.",
                },
              ].map((faq, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex items-start justify-between w-full text-left group">
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 text-sm text-muted-foreground">
                    {faq.answer}
                  </CollapsibleContent>
                  {index < 3 && <Separator className="mt-4" />}
                </Collapsible>
              ))}
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Settings Panel */}
        <ShowcaseSection title="Settings Panel">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: "profile",
                  icon: User,
                  title: "Profile Settings",
                  badge: "3 items",
                  items: [
                    "Update your profile photo",
                    "Change your display name",
                    "Edit your bio and location",
                  ],
                },
                {
                  id: "notifications",
                  icon: Bell,
                  title: "Notifications",
                  badge: "5 items",
                  items: [
                    "Email notifications",
                    "Push notifications",
                    "SMS alerts",
                    "Weekly digest",
                    "Activity updates",
                  ],
                },
                {
                  id: "security",
                  icon: Shield,
                  title: "Security & Privacy",
                  badge: "4 items",
                  items: [
                    "Two-factor authentication",
                    "Login history",
                    "Connected devices",
                    "Privacy settings",
                  ],
                },
              ].map((section) => (
                <Collapsible
                  key={section.id}
                  open={openSections.includes(section.id)}
                  onOpenChange={() => toggleSection(section.id)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{section.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {section.badge}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openSections.includes(section.id) ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pt-2 pb-4">
                    <div className="ml-[52px] space-y-2">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="text-sm text-muted-foreground py-2 hover:text-foreground transition-colors cursor-pointer"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* With Badges and Status */}
        <ShowcaseSection title="With Status Indicators">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">Email Preferences</span>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pt-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Marketing emails: Enabled</p>
                    <p>• Product updates: Enabled</p>
                    <p>• Security alerts: Enabled</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Separator />

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">Security Settings</span>
                    <Badge variant="destructive">Action Required</Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pt-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Two-factor authentication: Not enabled</p>
                    <p>• Last password change: 90 days ago</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Update Security
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Separator />

              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Privacy Controls</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pt-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Profile visibility: Public</p>
                    <p>• Activity status: Hidden</p>
                    <p>• Data collection: Minimal</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Help Center */}
        <ShowcaseSection title="Help Center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  category: "Getting Started",
                  icon: FileText,
                  questions: [
                    "How do I create an account?",
                    "What payment methods are accepted?",
                    "How do I reset my password?",
                  ],
                },
                {
                  category: "Account Management",
                  icon: User,
                  questions: [
                    "How do I update my profile?",
                    "Can I change my email address?",
                    "How do I delete my account?",
                  ],
                },
                {
                  category: "Technical Support",
                  icon: Settings,
                  questions: [
                    "The app is not loading",
                    "I'm having login issues",
                    "How do I report a bug?",
                  ],
                },
              ].map((category, index) => (
                <Card key={index} className="border">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                      <div className="flex items-center gap-3">
                        <category.icon className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{category.category}</span>
                        <Badge variant="secondary">
                          {category.questions.length}
                        </Badge>
                      </div>
                      <ChevronRight className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <div className="ml-8 space-y-2">
                        {category.questions.map((question, i) => (
                          <div
                            key={i}
                            className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors py-1"
                          >
                            {question}
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Controlled vs Uncontrolled */}
        <ShowcaseSection title="Controlled vs Uncontrolled">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Controlled</CardTitle>
                <CardDescription>Managed by component state</CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible open={isOpen1} onOpenChange={setIsOpen1}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Toggle Content
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen1 ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      This collapsible is controlled by the component state. The parent
                      component manages the open/closed state.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <p className="text-xs text-muted-foreground mt-2">
                  Current state: {isOpen1 ? "Open" : "Closed"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Uncontrolled</CardTitle>
                <CardDescription>Self-managed state</CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Toggle Content
                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      This collapsible manages its own state internally. No external
                      state management needed.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <p className="text-xs text-muted-foreground mt-2">
                  State managed internally
                </p>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
