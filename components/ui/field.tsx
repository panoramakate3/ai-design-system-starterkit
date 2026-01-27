import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

type FieldContextValue = {
  id: string
  error?: boolean
}

const FieldContext = React.createContext<FieldContextValue | undefined>(undefined)

const useFieldContext = () => {
  const context = React.useContext(FieldContext)
  if (!context) {
    throw new Error("Field components must be used within <Field>")
  }
  return context
}

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => {
  const id = React.useId()

  return (
    <FieldContext.Provider value={{ id, error }}>
      <div
        ref={ref}
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FieldContext.Provider>
  )
})
Field.displayName = "Field"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<typeof Label>
>(({ className, ...props }, ref) => {
  const { id, error } = useFieldContext()

  return (
    <Label
      ref={ref}
      htmlFor={`${id}-control`}
      className={cn(
        error && "text-destructive",
        className
      )}
      {...props}
    />
  )
})
FieldLabel.displayName = "FieldLabel"

const FieldControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { id, error } = useFieldContext()

  // Clone the child element and add the id and aria-describedby
  const child = React.Children.only(children) as React.ReactElement
  const clonedChild = React.cloneElement(child, {
    id: `${id}-control`,
    "aria-describedby": `${id}-description`,
    "aria-invalid": error,
    ...child.props,
  })

  return (
    <div ref={ref} className={className} {...props}>
      {clonedChild}
    </div>
  )
})
FieldControl.displayName = "FieldControl"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { id } = useFieldContext()

  return (
    <p
      ref={ref}
      id={`${id}-description`}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { id, error } = useFieldContext()

  if (!error) return null

  return (
    <p
      ref={ref}
      id={`${id}-error`}
      className={cn("text-sm text-destructive", className)}
      {...props}
    />
  )
})
FieldError.displayName = "FieldError"

const FieldGroup = React.forwardRef<
  HTMLFieldSetElement,
  React.HTMLAttributes<HTMLFieldSetElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => {
  const id = React.useId()

  return (
    <FieldContext.Provider value={{ id, error }}>
      <fieldset
        ref={ref}
        className={cn("space-y-3", className)}
        {...props}
      />
    </FieldContext.Provider>
  )
})
FieldGroup.displayName = "FieldGroup"

const FieldGroupLabel = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement>
>(({ className, ...props }, ref) => {
  const { error } = useFieldContext()

  return (
    <legend
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none",
        error && "text-destructive",
        className
      )}
      {...props}
    />
  )
})
FieldGroupLabel.displayName = "FieldGroupLabel"

export {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldGroupLabel,
}
