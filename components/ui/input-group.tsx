import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-full items-center", className)}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center whitespace-nowrap border border-input bg-muted px-3 text-sm text-muted-foreground",
      "first:rounded-l-md first:border-r-0",
      "last:rounded-r-md last:border-l-0",
      className
    )}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

const InputGroupIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { position?: "left" | "right" }
>(({ className, position = "left", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center text-muted-foreground",
      position === "left" ? "left-3" : "right-3",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
InputGroupIcon.displayName = "InputGroupIcon"

export { InputGroup, InputGroupAddon, InputGroupText, InputGroupIcon }
