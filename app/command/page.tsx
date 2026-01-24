"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  Mail,
  MessageSquare,
  PlusCircle,
  Search,
  Terminal,
  Users,
  Database,
  Cloud,
  Folder,
  File,
  Trash2,
  Download,
  Upload,
  Copy,
  Edit,
  Eye,
} from "lucide-react"

export default function CommandPage() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Command"
        description="Fast, composable command menu for React with keyboard navigation."
      />

      <ComponentShowcase>
        {/* Command Dialog - Primary Feature */}
        <ShowcaseSection title="Command Dialog">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Button onClick={() => setOpen(true)} variant="outline" className="gap-2">
                <Search className="h-4 w-4" />
                Open Command Menu
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>{" "}
              to open the command menu
            </p>
          </div>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </ShowcaseSection>

        <Separator />

        {/* Static Command */}
        <ShowcaseSection title="Static Command">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* With Multiple Groups */}
        <ShowcaseSection title="With Multiple Groups">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search files, actions..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Files">
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>README.md</span>
                    </CommandItem>
                    <CommandItem>
                      <Folder className="mr-2 h-4 w-4" />
                      <span>src/components</span>
                    </CommandItem>
                    <CommandItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>package.json</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Copy</span>
                      <CommandShortcut>⌘C</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                      <CommandShortcut>⌘E</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                      <CommandShortcut>⌘⌫</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Tools">
                    <CommandItem>
                      <Terminal className="mr-2 h-4 w-4" />
                      <span>Terminal</span>
                      <CommandShortcut>⌘T</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Search className="mr-2 h-4 w-4" />
                      <span>Search</span>
                      <CommandShortcut>⌘F</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Team Workspace Commands */}
        <ShowcaseSection title="Team Workspace">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search teams, members..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Teams">
                    <CommandItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Engineering</span>
                      <Badge variant="secondary" className="ml-auto">
                        12
                      </Badge>
                    </CommandItem>
                    <CommandItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Design</span>
                      <Badge variant="secondary" className="ml-auto">
                        8
                      </Badge>
                    </CommandItem>
                    <CommandItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Marketing</span>
                      <Badge variant="secondary" className="ml-auto">
                        5
                      </Badge>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Create New Team</span>
                    </CommandItem>
                    <CommandItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Invite Members</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* File Manager Commands */}
        <ShowcaseSection title="File Manager">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search files and folders..." />
                <CommandList>
                  <CommandEmpty>No files found.</CommandEmpty>
                  <CommandGroup heading="Recent Files">
                    <CommandItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Project Proposal.docx</span>
                      <CommandShortcut>2h ago</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>Budget 2024.xlsx</span>
                      <CommandShortcut>5h ago</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Folder className="mr-2 h-4 w-4" />
                      <span>Marketing Assets</span>
                      <CommandShortcut>1d ago</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Quick Actions">
                    <CommandItem>
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Upload File</span>
                      <CommandShortcut>⌘U</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download Selected</span>
                      <CommandShortcut>⌘D</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>New Folder</span>
                      <CommandShortcut>⌘N</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Service Dashboard */}
        <ShowcaseSection title="Service Dashboard">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search services, databases..." />
                <CommandList>
                  <CommandEmpty>No services found.</CommandEmpty>
                  <CommandGroup heading="Services">
                    <CommandItem>
                      <Database className="mr-2 h-4 w-4" />
                      <span>PostgreSQL Database</span>
                      <Badge className="ml-auto bg-green-500">Active</Badge>
                    </CommandItem>
                    <CommandItem>
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>API Server</span>
                      <Badge className="ml-auto bg-green-500">Active</Badge>
                    </CommandItem>
                    <CommandItem>
                      <Terminal className="mr-2 h-4 w-4" />
                      <span>Worker Process</span>
                      <Badge variant="destructive" className="ml-auto">
                        Stopped
                      </Badge>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Management">
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configure Service</span>
                    </CommandItem>
                    <CommandItem>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View Logs</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Communication Hub */}
        <ShowcaseSection title="Communication Hub">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search messages, channels..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Channels">
                    <CommandItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>#general</span>
                      <Badge variant="secondary" className="ml-auto">
                        3 new
                      </Badge>
                    </CommandItem>
                    <CommandItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>#development</span>
                    </CommandItem>
                    <CommandItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>#design</span>
                      <Badge variant="secondary" className="ml-auto">
                        1 new
                      </Badge>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Direct Messages">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>John Doe</span>
                    </CommandItem>
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Jane Smith</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>New Channel</span>
                      <CommandShortcut>⌘N</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Compose Message</span>
                      <CommandShortcut>⌘M</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Custom Trigger Dialog */}
        <ShowcaseSection title="Custom Trigger">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Button onClick={() => setOpen2(true)} variant="default" size="lg" className="gap-2">
                <Terminal className="h-4 w-4" />
                Quick Actions
              </Button>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Open command palette with custom trigger button
            </p>
          </div>

          <CommandDialog open={open2} onOpenChange={setOpen2}>
            <CommandInput placeholder="What would you like to do?" />
            <CommandList>
              <CommandEmpty>No actions found.</CommandEmpty>
              <CommandGroup heading="Quick Actions">
                <CommandItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Create New Project</span>
                </CommandItem>
                <CommandItem>
                  <Upload className="mr-2 h-4 w-4" />
                  <span>Upload Files</span>
                </CommandItem>
                <CommandItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Invite Team Members</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Manage Settings</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>Browse Projects</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>View Documents</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Team Directory</span>
                  <CommandShortcut>⌘T</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
