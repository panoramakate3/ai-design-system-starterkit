"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  CreditCard,
  Activity,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  Plus,
  Download,
  Calendar,
  Filter,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="flex h-16 items-center px-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Date Range Selector */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-600" />
                <span className="font-medium text-green-600">+20.1%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-600" />
                <span className="font-medium text-green-600">+180.1%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-600" />
                <span className="font-medium text-green-600">+19%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-600" />
                <span className="font-medium text-green-600">+201</span>
                <span className="ml-1">from last hour</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
          {/* Main Content */}
          <div className="col-span-4 space-y-8">
            {/* Overview Chart */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>Monthly revenue and growth</CardDescription>
                  </div>
                  <Tabs defaultValue="revenue" className="w-auto">
                    <TabsList>
                      <TabsTrigger value="revenue">Revenue</TabsTrigger>
                      <TabsTrigger value="profit">Profit</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                {/* Chart Placeholder */}
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Chart Component</p>
                    <p className="text-xs">Revenue Overview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>You made 265 transactions this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>OM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Olivia Martin</div>
                            <div className="text-xs text-muted-foreground">olivia.martin@email.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Success
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-15</TableCell>
                      <TableCell className="text-right font-medium">+$1,999.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>JL</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Jackson Lee</div>
                            <div className="text-xs text-muted-foreground">jackson.lee@email.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Success
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-14</TableCell>
                      <TableCell className="text-right font-medium">+$39.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>IN</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Isabella Nguyen</div>
                            <div className="text-xs text-muted-foreground">isabella.nguyen@email.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-13</TableCell>
                      <TableCell className="text-right font-medium">+$299.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>WK</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">William Kim</div>
                            <div className="text-xs text-muted-foreground">will@email.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Success
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-12</TableCell>
                      <TableCell className="text-right font-medium">+$99.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>SD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Sofia Davis</div>
                            <div className="text-xs text-muted-foreground">sofia.davis@email.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Failed
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-11</TableCell>
                      <TableCell className="text-right font-medium">+$39.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Recent Sales */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-xs text-muted-foreground">olivia.martin@email.com</p>
                  </div>
                  <div className="font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-xs text-muted-foreground">jackson.lee@email.com</p>
                  </div>
                  <div className="font-medium">+$39.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-xs text-muted-foreground">isabella.nguyen@email.com</p>
                  </div>
                  <div className="font-medium">+$299.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">William Kim</p>
                    <p className="text-xs text-muted-foreground">will@email.com</p>
                  </div>
                  <div className="font-medium">+$99.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                    <p className="text-xs text-muted-foreground">sofia.davis@email.com</p>
                  </div>
                  <div className="font-medium">+$39.00</div>
                </div>
              </CardContent>
            </Card>

            {/* Goals Progress */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader>
                <CardTitle>Goals</CardTitle>
                <CardDescription>Your progress this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Revenue Goal</span>
                    <span className="text-muted-foreground">$45,231 / $50,000</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-xs text-muted-foreground">90% of monthly goal</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">New Customers</span>
                    <span className="text-muted-foreground">2,350 / 3,000</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground">78% of monthly goal</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Product Sales</span>
                    <span className="text-muted-foreground">12,234 / 15,000</span>
                  </div>
                  <Progress value={82} className="h-2" />
                  <p className="text-xs text-muted-foreground">82% of monthly goal</p>
                </div>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card className="outline outline-1 outline-offset-[-1px] outline-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New sale completed</p>
                    <p className="text-xs text-muted-foreground">Olivia Martin purchased Premium Plan</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-green-500/10 p-2 h-fit">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-xs text-muted-foreground">Jackson Lee joined the platform</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-blue-500/10 p-2 h-fit">
                    <Activity className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">System update</p>
                    <p className="text-xs text-muted-foreground">New features deployed to production</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
