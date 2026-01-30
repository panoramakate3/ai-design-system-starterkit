"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  Flag,
  MoreHorizontal,
  CheckCircle2,
  Circle,
  AlertCircle,
} from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority: "low" | "medium" | "high"
  dueDate: string
  assignee: string
  tags: string[]
}

export default function TasksPage() {
  const [selectedTab, setSelectedTab] = useState("all")

  const tasks: Task[] = [
    {
      id: "1",
      title: "Design system documentation",
      description: "Create comprehensive documentation for the design system components",
      status: "in-progress",
      priority: "high",
      dueDate: "2024-02-15",
      assignee: "Sarah Chen",
      tags: ["documentation", "design"],
    },
    {
      id: "2",
      title: "Implement dark mode",
      description: "Add dark mode support across all components",
      status: "todo",
      priority: "medium",
      dueDate: "2024-02-20",
      assignee: "Alex Kim",
      tags: ["feature", "ui"],
    },
    {
      id: "3",
      title: "Fix responsive layout issues",
      description: "Address mobile responsiveness bugs in the dashboard",
      status: "in-progress",
      priority: "high",
      dueDate: "2024-02-12",
      assignee: "Maria Garcia",
      tags: ["bug", "responsive"],
    },
    {
      id: "4",
      title: "User authentication flow",
      description: "Implement OAuth integration for social login",
      status: "todo",
      priority: "high",
      dueDate: "2024-02-25",
      assignee: "John Smith",
      tags: ["feature", "backend"],
    },
    {
      id: "5",
      title: "Performance optimization",
      description: "Optimize bundle size and improve loading times",
      status: "done",
      priority: "medium",
      dueDate: "2024-02-08",
      assignee: "Emma Wilson",
      tags: ["performance"],
    },
    {
      id: "6",
      title: "Unit test coverage",
      description: "Increase test coverage to 80% for critical components",
      status: "in-progress",
      priority: "medium",
      dueDate: "2024-02-18",
      assignee: "David Lee",
      tags: ["testing"],
    },
    {
      id: "7",
      title: "API error handling",
      description: "Improve error messages and user feedback for API failures",
      status: "todo",
      priority: "low",
      dueDate: "2024-02-28",
      assignee: "Sarah Chen",
      tags: ["api", "ux"],
    },
    {
      id: "8",
      title: "Accessibility audit",
      description: "Conduct WCAG 2.1 AA compliance audit",
      status: "done",
      priority: "high",
      dueDate: "2024-02-05",
      assignee: "Alex Kim",
      tags: ["a11y", "audit"],
    },
  ]

  const filteredTasks = tasks.filter((task) => {
    if (selectedTab === "all") return true
    return task.status === selectedTab
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "low":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      default:
        return <Circle className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="flex h-16 items-center px-8">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-9" />
            </div>

            {/* Stats Cards */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Tasks</span>
                  <span className="text-2xl font-bold">{tasks.length}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="text-sm font-semibold text-green-600">
                    {tasks.filter((t) => t.status === "done").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">In Progress</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {tasks.filter((t) => t.status === "in-progress").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">To Do</span>
                  <span className="text-sm font-semibold text-gray-600">
                    {tasks.filter((t) => t.status === "todo").length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Priority Filter */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Priority</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-red-600" />
                    <span className="text-sm">High</span>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    {tasks.filter((t) => t.priority === "high").length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Medium</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    {tasks.filter((t) => t.priority === "medium").length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Low</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {tasks.filter((t) => t.priority === "low").length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" onValueChange={setSelectedTab}>
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="all">
                    All
                    <Badge variant="secondary" className="ml-2">
                      {tasks.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="todo">
                    To Do
                    <Badge variant="secondary" className="ml-2">
                      {tasks.filter((t) => t.status === "todo").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="in-progress">
                    In Progress
                    <Badge variant="secondary" className="ml-2">
                      {tasks.filter((t) => t.status === "in-progress").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="done">
                    Done
                    <Badge variant="secondary" className="ml-2">
                      {tasks.filter((t) => t.status === "done").length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <Select defaultValue="date">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Due Date</SelectItem>
                    <SelectItem value="priority">Priority</SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                    <SelectItem value="assignee">Assignee</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value={selectedTab} className="mt-0 space-y-4">
                {filteredTasks.map((task) => (
                  <Card
                    key={task.id}
                    className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] hover:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Checkbox className="mt-1" />
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                {getStatusIcon(task.status)}
                                <h3 className="font-semibold">{task.title}</h3>
                              </div>
                              <p className="text-sm text-muted-foreground">{task.description}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-4 flex-wrap">
                            <Badge variant="outline" className={getPriorityColor(task.priority)}>
                              <Flag className="mr-1 h-3 w-3" />
                              {task.priority}
                            </Badge>

                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {task.dueDate}
                            </div>

                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {task.assignee.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{task.assignee}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {task.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredTasks.length === 0 && (
                  <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
                    <CardContent className="p-12 text-center">
                      <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-semibold mb-2">No tasks found</h3>
                      <p className="text-sm text-muted-foreground">
                        There are no tasks in this category.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
