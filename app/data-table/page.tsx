"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  MoreHorizontal,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Download,
  Search,
  Filter,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const basicData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "User" },
]

const invoiceData = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  { id: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
  { id: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" },
]

const productData = [
  { id: 1, name: "Laptop", category: "Electronics", stock: 45, price: "$999.00", status: "In Stock" },
  { id: 2, name: "Mouse", category: "Electronics", stock: 120, price: "$29.00", status: "In Stock" },
  { id: 3, name: "Keyboard", category: "Electronics", stock: 8, price: "$79.00", status: "Low Stock" },
  { id: 4, name: "Monitor", category: "Electronics", stock: 0, price: "$299.00", status: "Out of Stock" },
  { id: 5, name: "Headphones", category: "Audio", stock: 67, price: "$149.00", status: "In Stock" },
]

export default function DataTablePage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const itemsPerPage = 5
  const filteredData = invoiceData.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(basicData.map((item) => item.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id])
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "unpaid":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      case "in stock":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "low stock":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "out of stock":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return ""
    }
  }

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Data Table"
        description="Display and interact with tabular data using sortable columns, pagination, and row selection."
      />

      <ComponentShowcase>
        {/* Basic Table */}
        <ShowcaseSection title="Basic Table">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>A list of all users in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {basicData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Table with Selection */}
        <ShowcaseSection title="With Row Selection">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                {selectedRows.length > 0 ? `${selectedRows.length} row(s) selected` : "Select rows to perform actions"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedRows.length === basicData.length}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {basicData.map((user) => (
                    <TableRow
                      key={user.id}
                      data-state={selectedRows.includes(user.id) ? "selected" : undefined}
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.includes(user.id)}
                          onCheckedChange={(checked) => handleSelectRow(user.id, checked as boolean)}
                          aria-label={`Select ${user.name}`}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Table with Actions */}
        <ShowcaseSection title="With Actions">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Manage your product inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(product.status)} variant="secondary">
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download Report
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Table with Search and Pagination */}
        <ShowcaseSection title="With Search & Pagination">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>A list of all invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search invoices..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1)
                      }}
                      className="pl-8"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                          No results found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedData.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(invoice.status)} variant="secondary">
                              {invoice.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{invoice.method}</TableCell>
                          <TableCell className="text-right">{invoice.amount}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>

                {filteredData.length > 0 && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
                      {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
                      {filteredData.length} results
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-9"
                          >
                            {page}
                          </Button>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Table with Footer */}
        <ShowcaseSection title="With Footer">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Revenue breakdown by payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$1,250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$700.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableRow className="bg-muted/50 font-medium">
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Compact Table */}
        <ShowcaseSection title="Compact Variant">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Time</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead className="w-24">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { time: "2m ago", event: "User login", user: "john@example.com", status: "Success" },
                    { time: "5m ago", event: "File uploaded", user: "jane@example.com", status: "Success" },
                    { time: "12m ago", event: "Password change", user: "bob@example.com", status: "Success" },
                    { time: "25m ago", event: "Failed login", user: "alice@example.com", status: "Failed" },
                  ].map((activity, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs text-muted-foreground">{activity.time}</TableCell>
                      <TableCell className="text-sm">{activity.event}</TableCell>
                      <TableCell className="text-sm">{activity.user}</TableCell>
                      <TableCell>
                        <Badge
                          variant={activity.status === "Success" ? "secondary" : "destructive"}
                          className="text-xs"
                        >
                          {activity.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>Activity log from the last hour</TableCaption>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Striped Table */}
        <ShowcaseSection title="Striped Rows">
          <Card>
            <CardHeader>
              <CardTitle>Server Status</CardTitle>
              <CardDescription>Monitor your infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Server Name</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>CPU</TableHead>
                    <TableHead>Memory</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Web Server 1", ip: "192.168.1.10", cpu: "45%", memory: "2.4GB", status: "Online" },
                    { name: "Web Server 2", ip: "192.168.1.11", cpu: "62%", memory: "3.1GB", status: "Online" },
                    { name: "Database", ip: "192.168.1.20", cpu: "78%", memory: "7.8GB", status: "Online" },
                    { name: "Cache Server", ip: "192.168.1.30", cpu: "23%", memory: "1.2GB", status: "Online" },
                    { name: "Backup Server", ip: "192.168.1.40", cpu: "12%", memory: "0.8GB", status: "Offline" },
                  ].map((server, i) => (
                    <TableRow key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <TableCell className="font-medium">{server.name}</TableCell>
                      <TableCell className="font-mono text-xs">{server.ip}</TableCell>
                      <TableCell>{server.cpu}</TableCell>
                      <TableCell>{server.memory}</TableCell>
                      <TableCell>
                        <Badge
                          className={getStatusColor(server.status === "Online" ? "In Stock" : "Out of Stock")}
                          variant="secondary"
                        >
                          {server.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
