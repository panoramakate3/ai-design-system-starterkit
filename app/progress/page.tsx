"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Download, Upload, Check, AlertCircle } from "lucide-react"

export default function ProgressPage() {
  const [progress, setProgress] = useState(13)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [downloadProgress, setDownloadProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const simulateDownload = () => {
    setDownloadProgress(0)
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 300)
  }

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/progress"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Progress */}
        <ShowcaseSection title="Basic Progress">
          <div className="w-full max-w-md space-y-2">
            <Progress value={44} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Loading...</span>
              <span className="text-muted-foreground">44%</span>
            </div>
            <Progress value={44} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Values */}
        <ShowcaseSection title="Different Values">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>0%</span>
              </div>
              <Progress value={0} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>25%</span>
              </div>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>50%</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Animated Progress */}
        <ShowcaseSection title="Animated Progress">
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Processing</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Small (h-1)</span>
              <Progress value={60} className="h-1" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Default (h-2)</span>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Medium (h-3)</span>
              <Progress value={60} className="h-3" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Large (h-4)</span>
              <Progress value={60} className="h-4" />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Success State */}
        <ShowcaseSection title="Success State">
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="font-medium">Completed</span>
              </div>
              <span className="text-green-600">100%</span>
            </div>
            <Progress value={100} className="[&>*]:bg-green-600" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Error State */}
        <ShowcaseSection title="Error State">
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="font-medium text-red-600">Failed</span>
              </div>
              <span className="text-red-600">35%</span>
            </div>
            <Progress value={35} className="[&>*]:bg-red-600" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Warning State */}
        <ShowcaseSection title="Warning State">
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-yellow-600">Low Storage</span>
              <span className="text-yellow-600">85%</span>
            </div>
            <Progress value={85} className="[&>*]:bg-yellow-600" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* File Upload Example */}
        <ShowcaseSection title="File Upload Example">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">document.pdf</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} />
            </div>
            <Button onClick={simulateUpload} size="sm" disabled={uploadProgress > 0 && uploadProgress < 100}>
              {uploadProgress === 100 ? "Upload Complete" : "Start Upload"}
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* File Download Example */}
        <ShowcaseSection title="File Download Example">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">presentation.pptx</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Downloading...</span>
                <span>{downloadProgress}%</span>
              </div>
              <Progress value={downloadProgress} />
            </div>
            <Button onClick={simulateDownload} size="sm" disabled={downloadProgress > 0 && downloadProgress < 100}>
              {downloadProgress === 100 ? "Download Complete" : "Start Download"}
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Progress Bars */}
        <ShowcaseSection title="Multiple Progress Bars">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">CPU Usage</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Memory Usage</span>
                <span className="text-muted-foreground">72%</span>
              </div>
              <Progress value={72} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Disk Usage</span>
                <span className="text-muted-foreground">88%</span>
              </div>
              <Progress value={88} className="[&>*]:bg-yellow-600" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Network Usage</span>
                <span className="text-muted-foreground">23%</span>
              </div>
              <Progress value={23} />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Task Progress */}
        <ShowcaseSection title="Task Progress">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Project Setup</h3>
              <p className="text-sm text-muted-foreground">3 of 5 tasks completed</p>
            </div>
            <Progress value={60} />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="line-through text-muted-foreground">Initialize repository</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="line-through text-muted-foreground">Install dependencies</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="line-through text-muted-foreground">Configure build tools</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-muted" />
                <span>Write documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-muted" />
                <span>Deploy to staging</span>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Skills/Proficiency Levels */}
        <ShowcaseSection title="Skills & Proficiency">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">JavaScript</span>
                <span className="text-muted-foreground">Expert</span>
              </div>
              <Progress value={95} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">TypeScript</span>
                <span className="text-muted-foreground">Advanced</span>
              </div>
              <Progress value={85} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">React</span>
                <span className="text-muted-foreground">Advanced</span>
              </div>
              <Progress value={90} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Python</span>
                <span className="text-muted-foreground">Intermediate</span>
              </div>
              <Progress value={65} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Go</span>
                <span className="text-muted-foreground">Beginner</span>
              </div>
              <Progress value={35} />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Storage Usage */}
        <ShowcaseSection title="Storage Usage">
          <div className="w-full max-w-md rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Storage</h3>
                <span className="text-sm text-muted-foreground">42.5 GB of 100 GB used</span>
              </div>
              <Progress value={42.5} />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Documents</span>
                  </div>
                  <p className="font-medium">15.2 GB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">Photos</span>
                  </div>
                  <p className="font-medium">18.7 GB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Videos</span>
                  </div>
                  <p className="font-medium">8.6 GB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-muted" />
                    <span className="text-muted-foreground">Other</span>
                  </div>
                  <p className="font-medium">57.5 GB</p>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Loading States */}
        <ShowcaseSection title="Loading States">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Processing request...</span>
              <Progress value={33} />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Analyzing data...</span>
              <Progress value={66} />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Generating report...</span>
              <Progress value={15} />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Compact Progress */}
        <ShowcaseSection title="Compact Progress">
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium min-w-[100px]">Installation</span>
              <Progress value={100} className="h-1" />
              <span className="text-xs text-green-600 min-w-[50px] text-right">Done</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium min-w-[100px]">Configuration</span>
              <Progress value={75} className="h-1" />
              <span className="text-xs text-muted-foreground min-w-[50px] text-right">75%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium min-w-[100px]">Optimization</span>
              <Progress value={30} className="h-1" />
              <span className="text-xs text-muted-foreground min-w-[50px] text-right">30%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium min-w-[100px]">Testing</span>
              <Progress value={0} className="h-1" />
              <span className="text-xs text-muted-foreground min-w-[50px] text-right">0%</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Background Color */}
        <ShowcaseSection title="With Background Color">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Default Background</span>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Light Background</span>
              <Progress value={60} className="bg-muted" />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Dark Background</span>
              <Progress value={60} className="bg-slate-200" />
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
