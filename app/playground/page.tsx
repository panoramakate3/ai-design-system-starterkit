"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Code2,
  SquareArrowOutUpRight,
  RotateCw,
  MoreHorizontal,
  Copy,
  Share2,
  Save,
  ChevronDown,
} from "lucide-react"

export default function PlaygroundPage() {
  const [mode, setMode] = useState("complete")
  const [model, setModel] = useState("text-curie-001")
  const [temperature, setTemperature] = useState([0.56])
  const [maxLength, setMaxLength] = useState([256])
  const [topP, setTopP] = useState([0.9])
  const [prompt1, setPrompt1] = useState("Write a tagline for an ice cream shop")
  const [prompt2, setPrompt2] = useState("We're writing to [insert]. Congrats from OpenAI")
  const [prompt3, setPrompt3] = useState("We is going to the market.")
  const [instructions, setInstructions] = useState("Fix the grammar.")

  const PlaygroundSection = ({
    prompt,
    setPrompt,
    showInstructions = false,
  }: {
    prompt: string
    setPrompt: (value: string) => void
    showInstructions?: boolean
  }) => (
    <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Prompt Area */}
          <div className="flex-1 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Playground</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Load a preset
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Code2 className="mr-2 h-4 w-4" />
                  View code
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="min-h-[300px] resize-none font-mono text-sm"
            />

            {showInstructions && (
              <div className="mt-4">
                <Label className="text-sm font-medium">Instructions</Label>
                <Textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Enter instructions..."
                  className="mt-2 min-h-[100px] resize-none font-mono text-sm"
                />
              </div>
            )}

            <div className="mt-4 flex items-center gap-2">
              <Button>Submit</Button>
              <Button variant="ghost" size="icon">
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side - Controls */}
          <div className="w-full border-t border-border p-6 lg:w-80 lg:border-l lg:border-t-0">
            <div className="space-y-6">
              {/* Mode */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Mode</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant={mode === "complete" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setMode("complete")}
                    className="h-8 w-8"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={mode === "insert" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setMode("insert")}
                    className="h-8 w-8"
                  >
                    <Code2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={mode === "edit" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setMode("edit")}
                    className="h-8 w-8"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Model */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-curie-001">text-curie-001</SelectItem>
                    <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
                    <SelectItem value="text-ada-001">text-ada-001</SelectItem>
                    <SelectItem value="text-babbage-001">text-babbage-001</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Temperature */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Temperature</Label>
                  <span className="text-sm text-muted-foreground">{temperature[0].toFixed(2)}</span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={1}
                  step={0.01}
                  className="w-full"
                />
              </div>

              <Separator />

              {/* Maximum Length */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Maximum Length</Label>
                  <span className="text-sm text-muted-foreground">{maxLength[0]}</span>
                </div>
                <Slider
                  value={maxLength}
                  onValueChange={setMaxLength}
                  max={4000}
                  step={1}
                  className="w-full"
                />
              </div>

              <Separator />

              {/* Top P */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Top P</Label>
                  <span className="text-sm text-muted-foreground">{topP[0].toFixed(1)}</span>
                </div>
                <Slider
                  value={topP}
                  onValueChange={setTopP}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="flex h-16 items-center justify-between px-8">
          <h1 className="text-2xl font-semibold">Playground</h1>
          <Button variant="link" className="gap-2">
            View in Shadcn
            <SquareArrowOutUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Playground Section 1 */}
        <PlaygroundSection prompt={prompt1} setPrompt={setPrompt1} />

        <Separator />

        {/* Playground Section 2 */}
        <PlaygroundSection prompt={prompt2} setPrompt={setPrompt2} />

        <Separator />

        {/* Playground Section 3 */}
        <PlaygroundSection prompt={prompt3} setPrompt={setPrompt3} showInstructions />
      </div>
    </div>
  )
}
