"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  ChevronDown,
  ExternalLink,
  UserPlus,
  Loader2,
  Search,
  Link as LinkIcon,
  Copy,
  Send,
  Paperclip,
  Plus,
  Minus,
  Check,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  List
} from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="p-14 bg-background rounded-3xl outline outline-1 outline-offset-[-1px] outline-border inline-flex flex-col justify-start items-start gap-10">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-foreground text-4xl font-semibold font-['Inter'] leading-10">
              Examples
            </div>
          </div>
          <a
            href="https://ui.shadcn.com/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-3 bg-secondary rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center gap-1.5 hover:bg-secondary/80 transition-colors"
          >
            <div className="flex justify-center items-center gap-2.5">
              <div className="justify-start text-foreground text-sm font-medium font-['Inter'] underline leading-5">
                View in Shadcn
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-foreground" />
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="inline-flex justify-start items-start gap-8 flex-wrap">
          {/* Column 1: Payment Method Card */}
          <div className="w-96 p-6 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex flex-col justify-start items-start gap-6">
            {/* Payment Method Section */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="pb-3 inline-flex justify-center items-center gap-2.5">
                  <div className="justify-center text-card-foreground text-base font-medium font-['Inter'] leading-6">
                    Payment Method
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-center text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                    All transactions are secure and encrypted
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="self-stretch flex flex-col justify-start items-start gap-7">
                {/* Name on Card */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <Label htmlFor="cardName" className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                    Name on Card
                  </Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    className="self-stretch h-9 px-3 py-1 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border text-sm"
                  />
                </div>

                {/* Card Number and CVV */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <Label className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      Card Number
                    </Label>
                    <Input
                      placeholder="1234 1234 1234 1234"
                      className="self-stretch h-9 px-3 py-1 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border text-sm"
                    />
                    <div className="justify-start text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                      Enter your 16-digit number.
                    </div>
                  </div>
                  <div className="w-20 inline-flex flex-col justify-start items-start gap-2">
                    <Label className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      CVV
                    </Label>
                    <Input
                      placeholder="123"
                      className="self-stretch h-9 px-3 py-1 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border text-sm"
                    />
                  </div>
                </div>

                {/* Month and Year */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                    <Label className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      Month
                    </Label>
                    <div className="self-stretch h-9 px-3 py-1 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">MM</span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                    <Label className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      Year
                    </Label>
                    <div className="self-stretch h-9 px-3 py-1 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">YYYY</span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <Separator />

            {/* Billing Address Section */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="pb-3 inline-flex justify-center items-center gap-2.5">
                  <div className="justify-center text-card-foreground text-base font-medium font-['Inter'] leading-6">
                    Billing Address
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-center text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                    The billing address associated with your payment method
                  </div>
                </div>
              </div>

              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <Checkbox id="sameAddress" defaultChecked className="w-4 h-4" />
                <label
                  htmlFor="sameAddress"
                  className="flex-1 text-card-foreground text-sm font-normal font-['Inter'] leading-5 cursor-pointer"
                >
                  Same as shipping address
                </label>
              </div>
            </div>

            {/* Separator */}
            <Separator />

            {/* Comments */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <Label className="justify-start text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                Comments
              </Label>
              <Textarea
                placeholder="Add any additional comments"
                className="self-stretch min-h-16 px-3 py-2 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="self-stretch inline-flex justify-start items-start gap-3">
              <Button className="h-9 px-4 py-2 bg-primary rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] text-primary-foreground text-xs font-medium font-['Inter'] leading-4">
                Submit
              </Button>
              <Button
                variant="outline"
                className="h-9 px-4 py-2 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border text-card-foreground text-sm font-medium font-['Inter'] leading-5"
              >
                Cancel
              </Button>
            </div>
          </div>

          {/* Column 2: Team Members and Badges */}
          <div className="inline-flex flex-col justify-center items-start gap-6">
            {/* Team Members Card */}
            <div className="w-80 p-12 rounded-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-center gap-6">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <div className="inline-flex justify-start items-center -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-muted border-2 border-background" />
                    <div className="w-12 h-12 rounded-full bg-muted border-2 border-background" />
                    <div className="w-12 h-12 rounded-full bg-muted border-2 border-background" />
                  </div>
                  <div className="justify-center text-card-foreground text-lg font-medium font-['Inter'] leading-7">
                    No Team Members
                  </div>
                  <div className="self-stretch text-center text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                    Invite your team to<br />collaborate on this project.
                  </div>
                </div>
                <Button className="h-8 px-2.5 bg-primary rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] gap-1.5">
                  <UserPlus className="w-4 h-4" />
                  <span className="text-primary-foreground text-sm font-medium font-['Inter'] leading-5">
                    Invite Members
                  </span>
                </Button>
              </div>
            </div>

            {/* Status Badges */}
            <div className="inline-flex justify-start items-center gap-2">
              <div className="h-5 px-2 py-0.5 bg-primary rounded-full flex justify-center items-center gap-1">
                <Loader2 className="w-3 h-3 text-primary-foreground" />
                <span className="text-primary-foreground text-xs font-medium font-['Inter'] leading-4">
                  Syncing
                </span>
              </div>
              <div className="h-5 px-2 py-0.5 bg-secondary rounded-full flex justify-center items-center gap-1">
                <Loader2 className="w-3 h-3 text-secondary-foreground" />
                <span className="text-secondary-foreground text-xs font-medium font-['Inter'] leading-4">
                  Updating
                </span>
              </div>
              <div className="h-5 px-2 py-0.5 rounded-full outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center gap-1">
                <Loader2 className="w-3 h-3 text-foreground" />
                <span className="text-foreground text-xs font-medium font-['Inter'] leading-4">
                  Loading
                </span>
              </div>
            </div>

            {/* Message Input */}
            <div className="w-80 inline-flex justify-start items-center gap-2">
              <button className="w-9 h-9 bg-background rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center">
                <Plus className="w-4 h-4 text-foreground" />
              </button>
              <div className="flex-1 bg-background rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex justify-start items-center">
                <div className="flex-1 h-9 pl-3 pr-2 py-1 flex justify-start items-center">
                  <span className="text-muted-foreground text-base font-normal font-['Inter'] leading-6">
                    Send a message...
                  </span>
                </div>
                <div className="h-9 pr-3 py-1.5 flex justify-center items-center">
                  <Send className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="w-80 flex flex-col justify-start items-start gap-3">
              <Label className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                Price Range
              </Label>
              <div className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                Set your budget range ($200 - 800).
              </div>
              <div className="self-stretch h-1.5 relative bg-muted rounded-full">
                <div className="w-52 h-1.5 absolute left-[69px] top-0 bg-primary rounded-full" />
                <div className="w-5 h-5 absolute left-[59px] top-[-7px] bg-background rounded-full border border-primary" />
                <div className="w-5 h-5 absolute left-[265px] top-[-7px] bg-background rounded-full border border-primary" />
              </div>
            </div>

            {/* Search Input with Results */}
            <div className="w-80 h-9 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center">
              <div className="pl-3 py-1.5 flex items-center">
                <Search className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 h-9 px-2 py-1 flex items-center">
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  Search...
                </span>
              </div>
              <div className="pr-3 py-1.5">
                <span className="text-muted-foreground text-sm font-medium font-['Inter'] leading-5">
                  12 results
                </span>
              </div>
            </div>

            {/* URL Input */}
            <div className="w-80 h-9 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center">
              <div className="pl-3 py-1.5">
                <span className="text-muted-foreground text-sm font-medium font-['Inter'] leading-5">
                  https://
                </span>
              </div>
              <div className="flex-1 h-9 px-2 py-1 flex items-center">
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  example.com
                </span>
              </div>
              <div className="pr-3 py-1.5">
                <LinkIcon className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* AI Chat Input */}
            <div className="w-80 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex flex-col">
              <div className="self-stretch h-16 p-3">
                <span className="text-muted-foreground text-base font-normal font-['Inter'] leading-6">
                  Ask, Search or Chat...
                </span>
              </div>
              <div className="self-stretch px-3 pt-1.5 pb-3 inline-flex justify-start items-center gap-2">
                <button className="w-6 h-6 bg-background rounded-full outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center">
                  <Paperclip className="w-4 h-4 text-muted-foreground" />
                </button>
                <span className="text-muted-foreground text-base font-medium font-['Inter'] leading-6">
                  Auto
                </span>
                <span className="flex-1 text-right text-muted-foreground text-base font-medium font-['Inter'] leading-6">
                  52% used
                </span>
                <Separator orientation="vertical" className="h-4" />
                <button className="w-6 h-6 bg-primary rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] flex justify-center items-center">
                  <Send className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Username Input */}
            <div className="w-80 h-9 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center">
              <div className="flex-1 h-9 pl-3 pr-2 py-1">
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  @shadcn
                </span>
              </div>
              <div className="pr-3 py-1.5">
                <Check className="w-4 h-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Column 3: Settings and Controls */}
          <div className="w-80 inline-flex flex-col justify-start items-start gap-7">
            {/* URL Bar with Icon */}
            <div className="self-stretch h-9 bg-background rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center">
              <div className="pl-1.5 py-1.5">
                <div className="w-6 h-6 bg-secondary rounded-full flex justify-center items-center">
                  <LinkIcon className="w-4 h-4 text-secondary-foreground" />
                </div>
              </div>
              <div className="flex-1 h-9 px-2 py-1">
                <span className="text-muted-foreground text-sm font-medium font-['Inter'] leading-5">
                  https://
                </span>
              </div>
              <div className="pr-3 py-1.5">
                <Copy className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="self-stretch p-4 rounded-md outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center gap-4">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                <span className="text-foreground text-sm font-medium font-['Inter'] leading-5">
                  Two-factor authentication
                </span>
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  Verify via email or phone number.
                </span>
              </div>
              <Button className="h-8 px-3 bg-primary rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] text-primary-foreground text-xs font-medium font-['Inter'] leading-4">
                Enable
              </Button>
            </div>

            {/* Success Alert */}
            <div className="self-stretch px-4 py-3 rounded-md outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-foreground" />
              <span className="flex-1 text-foreground text-sm font-medium font-['Inter'] leading-5">
                Your profile has been verified.
              </span>
              <X className="w-4 h-4 text-foreground cursor-pointer" />
            </div>

            {/* Divider with Text */}
            <div className="w-80 h-4 inline-flex justify-start items-center">
              <Separator className="flex-1" />
              <div className="px-2">
                <span className="text-muted-foreground text-xs font-normal font-['Inter'] leading-4">
                  Appearance Settings
                </span>
              </div>
              <Separator className="flex-1" />
            </div>

            {/* Compute Environment */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="pb-3">
                  <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                    Compute Environment
                  </span>
                </div>
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  Select the compute environment for your cluster.
                </span>
              </div>

              {/* Radio Options */}
              <div className="self-stretch flex flex-col gap-3">
                <div className="self-stretch p-3 bg-accent rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-primary inline-flex justify-start items-center gap-3">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      Kubernetes
                    </span>
                    <span className="text-muted-foreground text-xs font-normal font-['Inter'] leading-4">
                      Run GPU workloads on a K8s configured cluster. This is the default.
                    </span>
                  </div>
                  <div className="w-4 h-4 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-ring flex justify-center items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                </div>

                <div className="self-stretch p-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border inline-flex justify-start items-center gap-3">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                      Virtual Machine
                    </span>
                    <span className="text-muted-foreground text-xs font-normal font-['Inter'] leading-4">
                      Access a VM configured cluster to run workloads. (Coming soon)
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-background rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] border border-border" />
                </div>
              </div>
            </div>

            <Separator />

            {/* Accent Color Selector */}
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                  Accent
                </span>
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  Select the accent color.
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500 cursor-pointer" />
                <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer" />
                <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer" />
                <div className="w-6 h-6 rounded-full bg-rose-500 cursor-pointer" />
              </div>
            </div>

            <Separator />

            {/* Number Input */}
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                  Number of GPUs
                </span>
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  You can add more later.
                </span>
              </div>
              <div className="bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex">
                <div className="w-14 h-8 px-3 py-1 border-r border-border flex justify-center items-center">
                  <span className="text-card-foreground text-sm font-normal font-['Inter'] leading-5 opacity-50">
                    8
                  </span>
                </div>
                <button className="w-8 h-8 border-r border-border flex justify-center items-center hover:bg-muted">
                  <Minus className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 flex justify-center items-center hover:bg-muted">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            <Separator />

            {/* Toggle Switch */}
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                  Wallpaper Tinting
                </span>
                <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                  Allow the wallpaper to be tinted.
                </span>
              </div>
              <Switch defaultChecked className="w-8 h-4" />
            </div>
          </div>

          {/* Column 4: Additional Components */}
          <div className="w-80 inline-flex flex-col justify-start items-start gap-6">
            {/* AI Search Card */}
            <div className="self-stretch bg-card rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex flex-col">
              <div className="self-stretch px-3 pt-3 pb-1.5">
                <div className="px-2.5 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-border inline-flex items-center gap-1.5">
                  <Paperclip className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm font-medium font-['Inter'] leading-5">
                    Add context
                  </span>
                </div>
              </div>
              <div className="self-stretch h-16 p-3">
                <span className="text-muted-foreground text-base font-normal font-['Inter'] leading-6">
                  Ask, search or make anything...
                </span>
              </div>
              <div className="self-stretch px-3 pt-1.5 pb-3 inline-flex items-center gap-2">
                <button className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-muted">
                  <Paperclip className="w-4 h-4 text-muted-foreground" />
                </button>
                <span className="text-muted-foreground text-base font-medium font-['Inter'] leading-6">
                  Auto
                </span>
                <button className="px-2.5 py-2 flex items-center gap-1.5 hover:bg-muted rounded">
                  <List className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-base font-medium font-['Inter'] leading-6">
                    All Sources
                  </span>
                </button>
                <div className="flex-1" />
                <button className="w-8 h-8 bg-primary rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] flex justify-center items-center">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Button Groups */}
            <div className="inline-flex items-center gap-2">
              <button className="w-8 h-8 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center hover:bg-muted">
                <Plus className="w-4 h-4 text-foreground" />
              </button>
              <div className="bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex overflow-hidden">
                <button className="h-8 px-3 border-r border-border flex items-center hover:bg-muted">
                  <span className="text-foreground text-base font-medium font-['Inter'] leading-6">
                    Archive
                  </span>
                </button>
                <button className="h-8 px-3 flex items-center hover:bg-muted">
                  <span className="text-foreground text-base font-medium font-['Inter'] leading-6">
                    Report
                  </span>
                </button>
              </div>
              <div className="bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex overflow-hidden">
                <button className="h-8 px-3 border-r border-border flex items-center hover:bg-muted">
                  <span className="text-foreground text-base font-medium font-['Inter'] leading-6">
                    Snooze
                  </span>
                </button>
                <button className="w-8 h-8 flex justify-center items-center hover:bg-muted">
                  <ChevronDown className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Checkbox with Accent */}
            <div className="self-stretch p-4 bg-accent rounded-md outline outline-1 outline-offset-[-1px] outline-primary inline-flex items-center gap-3">
              <Checkbox defaultChecked className="w-4 h-4" />
              <span className="flex-1 text-foreground text-sm font-medium font-['Inter'] leading-5">
                I agree to the terms and conditions
              </span>
            </div>

            {/* Pagination */}
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="flex gap-2">
                <div className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] flex">
                  <button className="h-8 px-3 rounded-l-md border-l border-t border-b border-border flex items-center hover:bg-muted">
                    <span className="text-foreground text-sm font-medium font-['Inter'] leading-5">1</span>
                  </button>
                  <button className="h-8 px-3 outline outline-1 outline-offset-[-1px] outline-border flex items-center hover:bg-muted">
                    <span className="text-foreground text-sm font-medium font-['Inter'] leading-5">2</span>
                  </button>
                  <button className="h-8 px-3 rounded-r-md border-r border-t border-b border-border flex items-center hover:bg-muted">
                    <span className="text-foreground text-sm font-medium font-['Inter'] leading-5">3</span>
                  </button>
                </div>
                <div className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] flex">
                  <button className="w-8 h-8 rounded-l-md border-l border-t border-b border-border flex justify-center items-center hover:bg-muted">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-r-md outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center hover:bg-muted">
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
              <div className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] flex">
                <button className="h-8 px-2.5 rounded-l-md border-l border-t border-b border-border flex items-center gap-1.5 hover:bg-muted">
                  <MessageSquare className="w-4 h-4 text-foreground" />
                  <span className="text-foreground text-sm font-medium font-['Inter'] leading-5">
                    Copilot
                  </span>
                </button>
                <button className="w-8 h-8 rounded-r-md outline outline-1 outline-offset-[-1px] outline-border flex justify-center items-center hover:bg-muted">
                  <ChevronDown className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Survey Question */}
            <div className="self-stretch py-4 bg-card rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border flex flex-col">
              <div className="self-stretch px-4 flex flex-col gap-4">
                <div className="self-stretch flex flex-col">
                  <div className="pb-3">
                    <span className="text-card-foreground text-base font-semibold font-['Inter'] leading-6">
                      How did you hear about us?
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                    Select the option that best describes how you heard about us.
                  </span>
                </div>
                <div className="w-60 inline-flex flex-wrap gap-2">
                  <button className="h-8 px-2 py-1.5 bg-accent rounded-full outline outline-1 outline-offset-[-1px] outline-accent-foreground flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-foreground" />
                    <span className="text-accent-foreground text-xs font-medium font-['Inter'] leading-4">
                      Social Media
                    </span>
                  </button>
                  <button className="h-8 px-2 py-1.5 bg-background rounded-full outline outline-1 outline-offset-[-1px] outline-border flex items-center hover:bg-muted">
                    <span className="text-accent-foreground text-xs font-medium font-['Inter'] leading-4">
                      Search Engine
                    </span>
                  </button>
                  <button className="h-8 px-2 py-1.5 bg-background rounded-full outline outline-1 outline-offset-[-1px] outline-border flex items-center hover:bg-muted">
                    <span className="text-accent-foreground text-xs font-medium font-['Inter'] leading-4">
                      Referral
                    </span>
                  </button>
                  <button className="h-8 px-2 py-1.5 bg-background rounded-full outline outline-1 outline-offset-[-1px] outline-border flex items-center hover:bg-muted">
                    <span className="text-accent-foreground text-xs font-medium font-['Inter'] leading-4">
                      Other
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            <div className="self-stretch p-12 rounded-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-center gap-6">
              <div className="self-stretch flex flex-col items-center gap-6">
                <div className="self-stretch flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-muted rounded-lg flex justify-center items-center">
                    <Loader2 className="w-4 h-4 text-foreground animate-spin" />
                  </div>
                  <span className="text-card-foreground text-lg font-medium font-['Inter'] leading-7">
                    Processing your request
                  </span>
                  <span className="text-center text-muted-foreground text-sm font-normal font-['Inter'] leading-5">
                    Please wait while we process your request. Do not refresh the page.
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="h-8 px-3 bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-border"
                >
                  <span className="text-card-foreground text-sm font-medium font-['Inter'] leading-5">
                    Cancel
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
