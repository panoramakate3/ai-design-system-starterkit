"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyAction
} from "@/components/ui/empty"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import {
  FileX,
  Inbox,
  Search,
  ShoppingCart,
  Users,
  FileText,
  Plus,
  Upload,
  FolderOpen
} from "lucide-react"
import Link from "next/link"

export default function EmptyPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Empty"
        description="Use the Empty component to display a empty state."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/empty"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Empty State */}
        <ShowcaseSection title="Basic">
          <Empty>
            <EmptyIcon>
              <Inbox className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No data available</EmptyTitle>
            <EmptyDescription>
              There is no data to display at the moment.
            </EmptyDescription>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* With Action Button */}
        <ShowcaseSection title="With Action">
          <Empty>
            <EmptyIcon>
              <FileText className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No documents found</EmptyTitle>
            <EmptyDescription>
              Get started by creating your first document.
            </EmptyDescription>
            <EmptyAction>
              <Button>
                <Plus />
                Create Document
              </Button>
            </EmptyAction>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Actions */}
        <ShowcaseSection title="Multiple Actions">
          <Empty>
            <EmptyIcon>
              <FolderOpen className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No files uploaded</EmptyTitle>
            <EmptyDescription>
              Upload your first file or create a new folder to get started.
            </EmptyDescription>
            <EmptyAction>
              <Button>
                <Upload />
                Upload File
              </Button>
              <Button variant="outline">
                <Plus />
                New Folder
              </Button>
            </EmptyAction>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Search Results Empty */}
        <ShowcaseSection title="Search Results">
          <Empty>
            <EmptyIcon>
              <Search className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search terms or filters.
            </EmptyDescription>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Shopping Cart Empty */}
        <ShowcaseSection title="Shopping Cart">
          <Empty>
            <EmptyIcon>
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>Your cart is empty</EmptyTitle>
            <EmptyDescription>
              Add items to your cart to continue shopping.
            </EmptyDescription>
            <EmptyAction>
              <Button>Continue Shopping</Button>
            </EmptyAction>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Users Empty */}
        <ShowcaseSection title="Users List">
          <Empty>
            <EmptyIcon>
              <Users className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No users found</EmptyTitle>
            <EmptyDescription>
              Invite team members to start collaborating.
            </EmptyDescription>
            <EmptyAction>
              <Button>
                <Plus />
                Invite Users
              </Button>
            </EmptyAction>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Error State */}
        <ShowcaseSection title="Error State">
          <Empty>
            <EmptyIcon className="bg-destructive/10">
              <FileX className="h-10 w-10 text-destructive" />
            </EmptyIcon>
            <EmptyTitle>Failed to load data</EmptyTitle>
            <EmptyDescription>
              Something went wrong while loading the data. Please try again.
            </EmptyDescription>
            <EmptyAction>
              <Button variant="outline">Try Again</Button>
            </EmptyAction>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Compact Size */}
        <ShowcaseSection title="Compact">
          <Empty className="min-h-[200px]">
            <EmptyIcon className="h-12 w-12">
              <Inbox className="h-6 w-6 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle className="text-base">No messages</EmptyTitle>
            <EmptyDescription className="text-xs">
              Your inbox is empty.
            </EmptyDescription>
          </Empty>
        </ShowcaseSection>

        <Separator />

        {/* Without Border */}
        <ShowcaseSection title="Without Border">
          <Empty className="border-0">
            <EmptyIcon>
              <FileText className="h-10 w-10 text-muted-foreground" />
            </EmptyIcon>
            <EmptyTitle>No content</EmptyTitle>
            <EmptyDescription>
              There is no content to display.
            </EmptyDescription>
          </Empty>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
