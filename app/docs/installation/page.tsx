import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, AlertCircle, CheckCircle2, Package } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>

      <Separator />

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Prerequisites</h2>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Requirements</AlertTitle>
          <AlertDescription>
            Make sure you have Node.js 18.x or higher installed on your machine.
          </AlertDescription>
        </Alert>
      </div>

      {/* Framework Setup */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">New Project</h2>
        <p className="text-muted-foreground">
          Start by creating a new Next.js project using <code className="bg-muted px-1.5 py-0.5 rounded">create-next-app</code>:
        </p>

        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1 space-y-2">
                    <code className="text-sm">npx create-next-app@latest my-app --typescript --tailwind --eslint</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pnpm" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1 space-y-2">
                    <code className="text-sm">pnpm create next-app@latest my-app --typescript --tailwind --eslint</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="yarn" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1 space-y-2">
                    <code className="text-sm">yarn create next-app my-app --typescript --tailwind --eslint</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bun" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1 space-y-2">
                    <code className="text-sm">bun create next-app my-app --typescript --tailwind --eslint</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Separator />

      {/* Install shadcn/ui */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Install shadcn/ui</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Run the CLI</h3>
            <p className="text-muted-foreground mb-4">
              Run the <code className="bg-muted px-1.5 py-0.5 rounded">shadcn@latest init</code> command to setup your project:
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <code className="text-sm">npx shadcn@latest init</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Configure components.json</h3>
            <p className="text-muted-foreground mb-4">
              You will be asked a few questions to configure <code className="bg-muted px-1.5 py-0.5 rounded">components.json</code>:
            </p>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Which style would you like to use?</p>
                    <p className="text-sm text-muted-foreground">› New York</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Which color would you like to use as base color?</p>
                    <p className="text-sm text-muted-foreground">› Slate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Would you like to use CSS variables for colors?</p>
                    <p className="text-sm text-muted-foreground">› Yes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Add Components */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Add Components</h2>
        <p className="text-muted-foreground">
          You can now start adding components to your project.
        </p>

        <Tabs defaultValue="button">
          <TabsList>
            <TabsTrigger value="button">Button</TabsTrigger>
            <TabsTrigger value="card">Card</TabsTrigger>
            <TabsTrigger value="dialog">Dialog</TabsTrigger>
          </TabsList>
          <TabsContent value="button" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Add Button Component
                </CardTitle>
                <CardDescription>
                  Install the button component and its dependencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">npx shadcn@latest add button</code>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Usage:</p>
                  <div className="rounded-lg bg-muted p-4">
                    <pre className="text-sm">
{`import { Button } from "@/components/ui/button"

export default function Home() {
  return <Button>Click me</Button>
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="card" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Add Card Component
                </CardTitle>
                <CardDescription>
                  Install the card component and its dependencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">npx shadcn@latest add card</code>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Usage:</p>
                  <div className="rounded-lg bg-muted p-4">
                    <pre className="text-sm">
{`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
    </Card>
  )
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dialog" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Add Dialog Component
                </CardTitle>
                <CardDescription>
                  Install the dialog component and its dependencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">npx shadcn@latest add dialog</code>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Usage:</p>
                  <div className="rounded-lg bg-muted p-4">
                    <pre className="text-sm">
{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Separator />

      {/* Manual Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Manual Installation</h2>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Alternative Method</AlertTitle>
          <AlertDescription>
            If you prefer manual installation, you can copy component code directly from the documentation.
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          <p className="text-sm font-medium">Steps:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Copy the component code from the documentation</li>
            <li>Create a new file in <code className="bg-muted px-1.5 py-0.5 rounded">components/ui</code></li>
            <li>Paste the code and install any required dependencies</li>
            <li>Import and use the component in your project</li>
          </ol>
        </div>
      </div>

      {/* Next Steps */}
      <div className="rounded-lg border border-border bg-muted/50 p-6">
        <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
        <p className="text-muted-foreground mb-4">
          Now that you have installed shadcn/ui, you can start building your application.
        </p>
        <div className="flex gap-4">
          <Badge variant="secondary">Browse Components →</Badge>
          <Badge variant="secondary">View Examples →</Badge>
        </div>
      </div>
    </div>
  )
}
