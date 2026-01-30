"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarContextValue {
  isCollapsed: boolean
  toggleCollapse: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(
  undefined
)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultCollapsed?: boolean
}

function SidebarProvider({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  const toggleCollapse = React.useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right"
  collapsible?: boolean
}

function Sidebar({
  className,
  side = "left",
  collapsible = false,
  children,
  ...props
}: SidebarProps) {
  const { isCollapsed } = useSidebar()

  return (
    <div
      data-slot="sidebar"
      data-side={side}
      data-collapsed={collapsible ? isCollapsed : undefined}
      className={cn(
        "flex h-full flex-col border-r bg-background transition-all duration-300",
        collapsible && isCollapsed ? "w-16" : "w-64",
        side === "right" && "border-l border-r-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex items-center gap-2 border-b px-4 py-3", className)}
      {...props}
    />
  )
}

function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn("flex-1 overflow-y-auto px-3 py-4", className)}
      {...props}
    />
  )
}

function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("border-t px-4 py-3", className)}
      {...props}
    />
  )
}

function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("space-y-1", className)}
      {...props}
    />
  )
}

interface SidebarGroupLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

function SidebarGroupLabel({
  className,
  ...props
}: SidebarGroupLabelProps) {
  const { isCollapsed } = useSidebar()

  if (isCollapsed) return null

  return (
    <div
      data-slot="sidebar-group-label"
      className={cn(
        "mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
        className
      )}
      {...props}
    />
  )
}

interface SidebarMenuItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
  icon?: React.ReactNode
}

function SidebarMenuItem({
  className,
  isActive,
  icon,
  children,
  ...props
}: SidebarMenuItemProps) {
  const { isCollapsed } = useSidebar()

  return (
    <a
      data-slot="sidebar-menu-item"
      data-active={isActive}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-accent text-accent-foreground",
        isCollapsed && "justify-center px-0",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {!isCollapsed && <span>{children}</span>}
    </a>
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-separator"
      className={cn("my-2 h-px bg-border", className)}
      {...props}
    />
  )
}

interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function SidebarTrigger({
  className,
  ...props
}: SidebarTriggerProps) {
  const { toggleCollapse } = useSidebar()

  return (
    <button
      data-slot="sidebar-trigger"
      onClick={toggleCollapse}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
