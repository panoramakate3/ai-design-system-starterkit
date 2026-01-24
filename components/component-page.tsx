import { cn } from "@/lib/utils"

interface ComponentPageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function ComponentPageLayout({ children, className }: ComponentPageLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  )
}

interface ComponentHeaderProps {
  title: string
  description: string
}

export function ComponentHeader({ title, description }: ComponentHeaderProps) {
  return (
    <div className="mb-8 space-y-2">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface ComponentSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function ComponentSection({ title, children, className }: ComponentSectionProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6", className)}>
      {title && <h2 className="text-lg font-medium mb-4">{title}</h2>}
      {children}
    </div>
  )
}

interface ComponentShowcaseProps {
  children: React.ReactNode
  className?: string
}

export function ComponentShowcase({ children, className }: ComponentShowcaseProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6 space-y-6", className)}>
      {children}
    </div>
  )
}

interface ShowcaseSectionProps {
  title: string
  children: React.ReactNode
}

export function ShowcaseSection({ title, children }: ShowcaseSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      {children}
    </div>
  )
}
