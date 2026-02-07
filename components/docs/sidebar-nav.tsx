"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

interface SidebarNavProps {
  items: NavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    "Components": true,
  })

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start px-3 py-2 text-sm font-semibold",
                    "hover:bg-transparent"
                  )}
                  onClick={() => toggleSection(item.title)}
                >
                  {openSections[item.title] ? (
                    <ChevronDown className="mr-2 h-4 w-4" />
                  ) : (
                    <ChevronRight className="mr-2 h-4 w-4" />
                  )}
                  {item.title}
                </Button>
                {openSections[item.title] && item.items && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href!}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                          pathname === subItem.href
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
