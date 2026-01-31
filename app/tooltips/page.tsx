"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Info,
  HelpCircle,
  Settings,
  Download,
  Share2,
  Heart,
  Star,
  Bookmark,
  Copy,
  Trash2,
  Edit,
  Eye,
  Lock,
  Unlock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"

export default function TooltipsPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Tooltips"
        description="Display contextual information on hover or focus with elegant tooltips."
      />

      <ComponentShowcase>
        {/* Info Note */}
        <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Tooltip Component
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Tooltips provide additional context and information when users hover over or focus on elements.
              </p>
            </div>
          </div>
        </div>

        {/* Basic Tooltips */}
        <ShowcaseSection title="Basic Tooltips">
          <Card>
            <CardHeader>
              <CardTitle>Simple Tooltips</CardTitle>
              <CardDescription>Hover over elements to see tooltips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a simple tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Primary Button</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to perform primary action</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This action cannot be undone</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge>New Feature</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Released in version 2.0</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Positioned Tooltips */}
        <ShowcaseSection title="Tooltip Positions">
          <Card>
            <CardHeader>
              <CardTitle>Directional Tooltips</CardTitle>
              <CardDescription>Tooltips can appear in different positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-8 py-8">
                {/* Top */}
                <div className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Middle row - Left and Right */}
                <div className="flex items-center gap-16">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on left</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on right</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Bottom */}
                <div className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Tooltip on bottom</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Icon Tooltips */}
        <ShowcaseSection title="Icon Tooltips">
          <Card>
            <CardHeader>
              <CardTitle>Icons with Tooltips</CardTitle>
              <CardDescription>Provide context for icon-only buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Settings</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download file</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share with others</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to favorites</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rate this item</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bookmark for later</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit content</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete permanently</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Tooltips with Rich Content */}
        <ShowcaseSection title="Rich Content Tooltips">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Tooltips</CardTitle>
              <CardDescription>Tooltips with multiple lines and formatting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Help
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="font-semibold mb-1">Need assistance?</p>
                    <p className="text-xs opacity-90">
                      Click here to access our comprehensive help documentation and support resources.
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Info className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-1">
                      <p className="font-semibold">Project Information</p>
                      <p className="text-xs opacity-90">Status: Active</p>
                      <p className="text-xs opacity-90">Last updated: 2 hours ago</p>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="cursor-help">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Beta
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="font-semibold mb-1">Beta Feature</p>
                    <p className="text-xs opacity-90">
                      This feature is currently in beta testing. Some functionality may change.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Keyboard Shortcuts */}
        <ShowcaseSection title="Tooltips with Shortcuts">
          <Card>
            <CardHeader>
              <CardTitle>Keyboard Shortcuts</CardTitle>
              <CardDescription>Display keyboard shortcuts in tooltips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Copy</span>
                      <kbd className="px-1.5 py-0.5 text-xs bg-background text-foreground rounded border">
                        ⌘C
                      </kbd>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Save</span>
                      <kbd className="px-1.5 py-0.5 text-xs bg-background text-foreground rounded border">
                        ⌘S
                      </kbd>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Open Settings</span>
                      <kbd className="px-1.5 py-0.5 text-xs bg-background text-foreground rounded border">
                        ⌘,
                      </kbd>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Status Tooltips */}
        <ShowcaseSection title="Status Indicators">
          <Card>
            <CardHeader>
              <CardTitle>Status with Tooltips</CardTitle>
              <CardDescription>Visual status indicators with explanatory tooltips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-help">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Active</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Service is running normally</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-help">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-sm font-medium">Warning</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Service experiencing minor issues</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-help">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium">Error</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Service is down or unavailable</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-help">
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                        <span className="text-sm font-medium">Inactive</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Service is not currently running</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Interactive Elements */}
        <ShowcaseSection title="Interactive Elements">
          <Card>
            <CardHeader>
              <CardTitle>Various Interactive Elements</CardTitle>
              <CardDescription>Tooltips on different types of interactive elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Action Buttons Grid */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Action Buttons</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="p-4 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                          <Eye className="h-5 w-5 mb-2" />
                          <div className="text-sm font-medium">Preview</div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View item preview</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="p-4 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                          <Lock className="h-5 w-5 mb-2" />
                          <div className="text-sm font-medium">Lock</div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lock for editing</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="p-4 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                          <Unlock className="h-5 w-5 mb-2" />
                          <div className="text-sm font-medium">Unlock</div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Unlock for editing</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="p-4 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                          <CheckCircle2 className="h-5 w-5 mb-2 text-green-600" />
                          <div className="text-sm font-medium">Approve</div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Approve this request</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Info Icons */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Information Labels</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Email Address</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>We'll use this email for account notifications and password recovery.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm">Two-Factor Authentication</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Add an extra layer of security by requiring a code from your phone in addition to your password.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm">API Rate Limit</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AlertCircle className="h-4 w-4 text-yellow-600 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold mb-1">Rate Limit Warning</p>
                          <p className="text-xs opacity-90">You've used 450 of 500 requests this hour. Rate limit resets in 15 minutes.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State Tooltips">
          <Card>
            <CardHeader>
              <CardTitle>Disabled Elements</CardTitle>
              <CardDescription>Explain why elements are disabled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button disabled>Disabled Button</Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This action is not available right now</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button disabled variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Download is disabled because the file is still processing</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button disabled variant="destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>You don't have permission to delete this item</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
