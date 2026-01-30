"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  Code2,
  Copy,
  Download,
  Settings,
  Palette,
  Type,
  Layout,
  Maximize2,
  RotateCcw,
} from "lucide-react"

export default function PlaygroundPage() {
  const [buttonVariant, setButtonVariant] = useState<"default" | "secondary" | "outline" | "ghost">("default")
  const [buttonSize, setButtonSize] = useState<"default" | "sm" | "lg">("default")
  const [buttonText, setButtonText] = useState("Click me")
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [borderRadius, setBorderRadius] = useState([6])

  const codeSnippet = `<Button
  variant="${buttonVariant}"
  size="${buttonSize}"${isLoading ? '\n  disabled' : ''}${isDisabled ? '\n  disabled' : ''}
>
  ${buttonText}
</Button>`

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="flex h-16 items-center px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Component Playground</h1>
              <p className="text-xs text-muted-foreground">Experiment with component variations</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button variant="outline" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy Code
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Controls */}
        <div className="w-80 border-r border-border bg-background overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Component Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Component</Label>
              <Select defaultValue="button">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="button">Button</SelectItem>
                  <SelectItem value="input">Input</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="badge">Badge</SelectItem>
                  <SelectItem value="alert">Alert</SelectItem>
                  <SelectItem value="dialog">Dialog</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Properties */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold">Properties</h3>
              </div>

              {/* Variant */}
              <div className="space-y-2">
                <Label className="text-sm">Variant</Label>
                <div className="grid grid-cols-2 gap-2">
                  {(["default", "secondary", "outline", "ghost"] as const).map((variant) => (
                    <Button
                      key={variant}
                      variant={buttonVariant === variant ? "default" : "outline"}
                      size="sm"
                      onClick={() => setButtonVariant(variant)}
                      className="justify-start"
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <Label className="text-sm">Size</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(["sm", "default", "lg"] as const).map((size) => (
                    <Button
                      key={size}
                      variant={buttonSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setButtonSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <Label className="text-sm">Button Text</Label>
                <Input
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="Enter button text"
                />
              </div>

              {/* States */}
              <div className="space-y-3">
                <Label className="text-sm">States</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="loading" className="text-sm font-normal">Loading</Label>
                    <Switch
                      id="loading"
                      checked={isLoading}
                      onCheckedChange={setIsLoading}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="disabled" className="text-sm font-normal">Disabled</Label>
                    <Switch
                      id="disabled"
                      checked={isDisabled}
                      onCheckedChange={setIsDisabled}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Styling */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold">Styling</h3>
              </div>

              {/* Border Radius */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Border Radius</Label>
                  <span className="text-xs text-muted-foreground">{borderRadius[0]}px</span>
                </div>
                <Slider
                  value={borderRadius}
                  onValueChange={setBorderRadius}
                  max={20}
                  step={1}
                />
              </div>

              {/* Theme */}
              <div className="space-y-2">
                <Label className="text-sm">Theme</Label>
                <Select defaultValue="light">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Layout */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layout className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold">Layout</h3>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Alignment</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">Left</Button>
                  <Button variant="outline" size="sm">Center</Button>
                  <Button variant="outline" size="sm">Right</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Width</Label>
                <Select defaultValue="auto">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="full">Full Width</SelectItem>
                    <SelectItem value="fit">Fit Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs defaultValue="preview" className="h-full flex flex-col">
            <div className="border-b border-border px-6 bg-background">
              <TabsList>
                <TabsTrigger value="preview" className="gap-2">
                  <Play className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="gap-2">
                  <Code2 className="h-4 w-4" />
                  Code
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Preview Tab */}
            <TabsContent value="preview" className="flex-1 m-0 p-0">
              <div className="h-full flex flex-col">
                {/* Preview Options */}
                <div className="border-b border-border px-6 py-3 bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="gap-1">
                        <Maximize2 className="h-3 w-3" />
                        Desktop
                      </Badge>
                      <Badge variant="outline">1440px</Badge>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <Label className="text-xs text-muted-foreground">Scale:</Label>
                      <Select defaultValue="100">
                        <SelectTrigger className="h-7 w-20 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50">50%</SelectItem>
                          <SelectItem value="75">75%</SelectItem>
                          <SelectItem value="100">100%</SelectItem>
                          <SelectItem value="125">125%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Preview Area */}
                <div className="flex-1 overflow-auto">
                  <div className="h-full flex items-center justify-center p-12">
                    <div className="space-y-8 text-center">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
                        <p className="text-sm text-muted-foreground">
                          Your component will appear here
                        </p>
                      </div>

                      {/* Preview Component */}
                      <div className="inline-flex items-center justify-center p-12 rounded-lg border-2 border-dashed border-border bg-muted/30">
                        <Button
                          variant={buttonVariant}
                          size={buttonSize}
                          disabled={isDisabled || isLoading}
                          style={{ borderRadius: `${borderRadius[0]}px` }}
                        >
                          {isLoading ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                              Loading...
                            </>
                          ) : (
                            buttonText
                          )}
                        </Button>
                      </div>

                      {/* Component Info */}
                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Type className="h-3 w-3" />
                          {buttonVariant}
                        </div>
                        <div className="flex items-center gap-1">
                          <Layout className="h-3 w-3" />
                          {buttonSize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Palette className="h-3 w-3" />
                          {borderRadius[0]}px radius
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Code Tab */}
            <TabsContent value="code" className="flex-1 m-0 p-0">
              <div className="h-full overflow-auto">
                <div className="p-6">
                  <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-base">Component Code</CardTitle>
                          <CardDescription>Copy and paste this code into your project</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono overflow-x-auto">
                          <code>{codeSnippet}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Installation */}
                  <Card className="mt-6 outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
                    <CardHeader>
                      <CardTitle className="text-base">Installation</CardTitle>
                      <CardDescription>Add this component to your project</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium mb-2 block">1. Install dependencies</Label>
                        <div className="rounded-lg bg-muted p-4">
                          <pre className="text-sm font-mono">
                            <code>npm install @radix-ui/react-slot</code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium mb-2 block">2. Add component</Label>
                        <div className="rounded-lg bg-muted p-4">
                          <pre className="text-sm font-mono">
                            <code>npx shadcn@latest add button</code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium mb-2 block">3. Import and use</Label>
                        <div className="rounded-lg bg-muted p-4">
                          <pre className="text-sm font-mono">
                            <code>{`import { Button } from "@/components/ui/button"\n\nexport default function MyComponent() {\n  return (\n    ${codeSnippet.split('\n').join('\n    ')}\n  )\n}`}</code>
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
