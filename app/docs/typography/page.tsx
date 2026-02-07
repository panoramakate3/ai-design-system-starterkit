import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-xl text-muted-foreground">
          Styles for headings, paragraphs, lists...etc
        </p>
      </div>

      <Separator />

      {/* Headings */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Headings</h2>
        <Card>
          <CardHeader>
            <CardTitle>h1 - h6</CardTitle>
            <CardDescription>
              Heading elements from h1 to h6
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
              <code className="text-sm bg-muted px-2 py-1 rounded">text-4xl font-bold tracking-tight</code>
            </div>
            <Separator />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Heading 2</h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">text-3xl font-bold tracking-tight</code>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
              <code className="text-sm bg-muted px-2 py-1 rounded">text-2xl font-semibold tracking-tight</code>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">text-xl font-semibold tracking-tight</code>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Paragraph */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Paragraph</h2>
        <Card>
          <CardHeader>
            <CardTitle>Default Paragraph</CardTitle>
            <CardDescription>
              Standard paragraph text styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-7">
              The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
            </p>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="leading-7"</code>
          </CardContent>
        </Card>
      </div>

      {/* Lead Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Lead</h2>
        <Card>
          <CardHeader>
            <CardTitle>Lead Text</CardTitle>
            <CardDescription>
              Larger text for introductions or callouts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xl text-muted-foreground">
              A modal dialog that interrupts the user with important content and expects a response.
            </p>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="text-xl text-muted-foreground"</code>
          </CardContent>
        </Card>
      </div>

      {/* Large Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Large</h2>
        <Card>
          <CardHeader>
            <CardTitle>Large Text</CardTitle>
            <CardDescription>
              Slightly larger than default text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg font-semibold">
              Are you absolutely sure?
            </div>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="text-lg font-semibold"</code>
          </CardContent>
        </Card>
      </div>

      {/* Small Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Small</h2>
        <Card>
          <CardHeader>
            <CardTitle>Small Text</CardTitle>
            <CardDescription>
              Smaller text for captions or metadata
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <small className="text-sm font-medium leading-none">Email address</small>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="text-sm font-medium leading-none"</code>
          </CardContent>
        </Card>
      </div>

      {/* Muted Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Muted</h2>
        <Card>
          <CardHeader>
            <CardTitle>Muted Text</CardTitle>
            <CardDescription>
              De-emphasized text with reduced opacity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your email address.
            </p>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="text-sm text-muted-foreground"</code>
          </CardContent>
        </Card>
      </div>

      {/* Lists */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Lists</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Unordered List</CardTitle>
              <CardDescription>
                Bullet point list
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners: 20 gold coins</li>
              </ul>
              <code className="text-sm bg-muted px-2 py-1 rounded">className="ml-6 list-disc [&amp;&gt;li]:mt-2"</code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ordered List</CardTitle>
              <CardDescription>
                Numbered list
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="ml-6 list-decimal [&>li]:mt-2">
                <li>Install dependencies</li>
                <li>Configure project</li>
                <li>Start development</li>
              </ol>
              <code className="text-sm bg-muted px-2 py-1 rounded">className="ml-6 list-decimal [&amp;&gt;li]:mt-2"</code>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Inline Code */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Inline Code</h2>
        <Card>
          <CardHeader>
            <CardTitle>Code Inline</CardTitle>
            <CardDescription>
              Inline code snippets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-7">
              Install using <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">npm install</code> command.
            </p>
            <code className="text-sm bg-muted px-2 py-1 rounded block">
              className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
            </code>
          </CardContent>
        </Card>
      </div>

      {/* Blockquote */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Blockquote</h2>
        <Card>
          <CardHeader>
            <CardTitle>Quote</CardTitle>
            <CardDescription>
              Quoted text with border
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
            </blockquote>
            <code className="text-sm bg-muted px-2 py-1 rounded">className="mt-6 border-l-2 pl-6 italic"</code>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Font Weights</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-light">Light (300)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">font-light</code>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-normal">Regular (400)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">font-normal</code>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium">Medium (500)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">font-medium</code>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Semibold (600)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">font-semibold</code>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-bold">Bold (700)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">font-bold</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
