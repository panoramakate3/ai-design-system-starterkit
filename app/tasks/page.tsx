"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Circle,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  Plus,
} from "lucide-react"

interface Task {
  id: string
  taskNumber: string
  category: "Documentation" | "Bug" | "Feature"
  title: string
  status: "In Progress" | "Backlog" | "Todo" | "Canceled" | "Done"
  priority: "High" | "Medium" | "Low"
}

export default function TasksPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const tasks: Task[] = [
    {
      id: "1",
      taskNumber: "TASK-8782",
      category: "Documentation",
      title: "You can't compress the program without quantifying the open-source SSD pixel!",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "2",
      taskNumber: "TASK-7878",
      category: "Documentation",
      title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "3",
      taskNumber: "TASK-7839",
      category: "Bug",
      title: "We need to bypass the neural TCP card!",
      status: "Todo",
      priority: "High",
    },
    {
      id: "4",
      taskNumber: "TASK-5562",
      category: "Feature",
      title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "5",
      taskNumber: "TASK-8686",
      category: "Feature",
      title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: "Canceled",
      priority: "Medium",
    },
    {
      id: "6",
      taskNumber: "TASK-1280",
      category: "Bug",
      title: "Use the digital TLS panel, then you can transmit the haptic system!",
      status: "Done",
      priority: "High",
    },
    {
      id: "7",
      taskNumber: "TASK-7262",
      category: "Feature",
      title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
      status: "Done",
      priority: "High",
    },
    {
      id: "8",
      taskNumber: "TASK-1138",
      category: "Feature",
      title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "9",
      taskNumber: "TASK-7184",
      category: "Feature",
      title: "We need to program the back-end THX pixel!",
      status: "Todo",
      priority: "Low",
    },
    {
      id: "10",
      taskNumber: "TASK-5160",
      category: "Documentation",
      title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
      status: "In Progress",
      priority: "High",
    },
  ]

  const totalPages = Math.ceil(tasks.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentTasks = tasks.slice(startIndex, endIndex)

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const toggleAllRows = () => {
    if (selectedRows.length === tasks.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(tasks.map((task) => task.id))
    }
  }

  const getStatusIcon = () => {
    return <Circle className="h-4 w-4" />
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <ArrowUp className="h-4 w-4" />
      case "Low":
        return <ArrowDown className="h-4 w-4" />
      default:
        return <ArrowRight className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Documentation":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Bug":
        return "bg-red-50 text-red-700 border-red-200"
      case "Feature":
        return "bg-purple-50 text-purple-700 border-purple-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button variant="outline" size="sm">
          View in Shadcn
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Main Card */}
      <div className="border border-border rounded-lg bg-card">
        {/* Welcome Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Welcome back!</h2>
              <p className="text-muted-foreground">Here's a list of your tasks for this month!</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Filter Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Filter tasks..."
              className="max-w-sm"
            />
            <Button variant="outline" size="sm">
              <Circle className="mr-2 h-4 w-4" />
              Status
            </Button>
            <Button variant="outline" size="sm">
              <Circle className="mr-2 h-4 w-4" />
              Priority
            </Button>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Circle className="mr-2 h-4 w-4" />
                View
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedRows.length === tasks.length}
                    onCheckedChange={toggleAllRows}
                  />
                </TableHead>
                <TableHead className="w-32">Task</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead className="w-32">Priority</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(task.id)}
                      onCheckedChange={() => toggleRowSelection(task.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{task.taskNumber}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <span className="text-sm">{task.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon()}
                      <span className="text-sm">{task.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {getPriorityIcon(task.priority)}
                      <span className="text-sm">{task.priority}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {selectedRows.length} of {tasks.length} row(s) selected.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Rows per page</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setRowsPerPage(Number(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="h-8 w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
