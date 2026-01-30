"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { toast } from "sonner"

export default function SonnerPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Sonner"
        description="An opinionated toast component for React. Sonner provides beautiful, customizable toast notifications."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/sonner"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Toast */}
        <ShowcaseSection title="Basic Toast">
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
              })
            }
          >
            Show Toast
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Success Toast */}
        <ShowcaseSection title="Success">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast.success("Successfully saved!")}
              variant="outline"
            >
              Simple Success
            </Button>
            <Button
              onClick={() =>
                toast.success("Account created successfully", {
                  description: "Welcome to our platform! You can now start using all features.",
                })
              }
              variant="outline"
            >
              Success with Description
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Error Toast */}
        <ShowcaseSection title="Error">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast.error("Something went wrong")}
              variant="outline"
            >
              Simple Error
            </Button>
            <Button
              onClick={() =>
                toast.error("Failed to save changes", {
                  description: "Please check your internet connection and try again.",
                })
              }
              variant="outline"
            >
              Error with Description
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Warning Toast */}
        <ShowcaseSection title="Warning">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast.warning("This action cannot be undone")}
              variant="outline"
            >
              Simple Warning
            </Button>
            <Button
              onClick={() =>
                toast.warning("Low storage space", {
                  description: "You have less than 10% of your storage remaining.",
                })
              }
              variant="outline"
            >
              Warning with Description
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Info Toast */}
        <ShowcaseSection title="Info">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast.info("New update available")}
              variant="outline"
            >
              Simple Info
            </Button>
            <Button
              onClick={() =>
                toast.info("System maintenance scheduled", {
                  description: "Our services will be down on Sunday from 2-4 AM EST.",
                })
              }
              variant="outline"
            >
              Info with Description
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Loading Toast */}
        <ShowcaseSection title="Loading">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast.loading("Loading...")}
              variant="outline"
            >
              Simple Loading
            </Button>
            <Button
              onClick={() => {
                const id = toast.loading("Uploading file...", {
                  description: "Please wait while we process your request.",
                })
                setTimeout(() => {
                  toast.success("File uploaded successfully!", { id })
                }, 3000)
              }}
              variant="outline"
            >
              Loading with Auto Success
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Action */}
        <ShowcaseSection title="With Action">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast("Email sent successfully", {
                  description: "Your message has been delivered.",
                  action: {
                    label: "Undo",
                    onClick: () => toast.info("Send cancelled"),
                  },
                })
              }
              variant="outline"
            >
              Toast with Action
            </Button>
            <Button
              onClick={() =>
                toast.error("Failed to delete item", {
                  action: {
                    label: "Retry",
                    onClick: () => toast.success("Item deleted successfully"),
                  },
                })
              }
              variant="outline"
            >
              Error with Retry Action
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Duration */}
        <ShowcaseSection title="Custom Duration">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast("This toast will disappear quickly", {
                  duration: 1000,
                })
              }
              variant="outline"
            >
              1 Second
            </Button>
            <Button
              onClick={() =>
                toast("This toast stays longer", {
                  duration: 5000,
                })
              }
              variant="outline"
            >
              5 Seconds
            </Button>
            <Button
              onClick={() =>
                toast("This toast stays until dismissed", {
                  duration: Infinity,
                })
              }
              variant="outline"
            >
              Infinite Duration
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Promise Toast */}
        <ShowcaseSection title="Promise">
          <Button
            onClick={() => {
              const promise = () =>
                new Promise((resolve) => setTimeout(() => resolve({ name: "John" }), 2000))

              toast.promise(promise, {
                loading: "Loading data...",
                success: (data: any) => {
                  return `${data.name}'s data has been loaded`
                },
                error: "Error loading data",
              })
            }}
            variant="outline"
          >
            Show Promise Toast
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Toasts */}
        <ShowcaseSection title="Multiple Toasts">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => {
                toast.success("First notification")
                toast.info("Second notification")
                toast.warning("Third notification")
              }}
              variant="outline"
            >
              Show 3 Toasts
            </Button>
            <Button
              onClick={() => {
                for (let i = 1; i <= 5; i++) {
                  setTimeout(() => {
                    toast(`Notification ${i}`, {
                      description: `This is notification number ${i}`,
                    })
                  }, i * 500)
                }
              }}
              variant="outline"
            >
              Show 5 Toasts (Staggered)
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Dismiss Toasts */}
        <ShowcaseSection title="Dismiss">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => {
                toast("This toast can be dismissed", {
                  id: "dismissible-toast",
                })
              }}
              variant="outline"
            >
              Show Toast
            </Button>
            <Button
              onClick={() => toast.dismiss("dismissible-toast")}
              variant="outline"
            >
              Dismiss Specific Toast
            </Button>
            <Button onClick={() => toast.dismiss()} variant="outline">
              Dismiss All Toasts
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Positions */}
        <ShowcaseSection title="Positions">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              onClick={() =>
                toast("Top Left", {
                  position: "top-left",
                })
              }
              variant="outline"
            >
              Top Left
            </Button>
            <Button
              onClick={() =>
                toast("Top Center", {
                  position: "top-center",
                })
              }
              variant="outline"
            >
              Top Center
            </Button>
            <Button
              onClick={() =>
                toast("Top Right", {
                  position: "top-right",
                })
              }
              variant="outline"
            >
              Top Right
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Left", {
                  position: "bottom-left",
                })
              }
              variant="outline"
            >
              Bottom Left
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Center", {
                  position: "bottom-center",
                })
              }
              variant="outline"
            >
              Bottom Center
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Right", {
                  position: "bottom-right",
                })
              }
              variant="outline"
            >
              Bottom Right
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Real-world Examples */}
        <ShowcaseSection title="Form Submission">
          <Button
            onClick={() => {
              const submitForm = () =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    Math.random() > 0.5 ? resolve({ success: true }) : reject(new Error("Failed"))
                  }, 2000)
                })

              toast.promise(submitForm, {
                loading: "Submitting form...",
                success: "Form submitted successfully!",
                error: "Failed to submit form. Please try again.",
              })
            }}
            variant="outline"
          >
            Submit Form
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* File Upload Example */}
        <ShowcaseSection title="File Upload">
          <Button
            onClick={() => {
              const uploadFile = () =>
                new Promise((resolve) => {
                  setTimeout(() => resolve({ fileName: "document.pdf" }), 3000)
                })

              toast.promise(uploadFile, {
                loading: "Uploading file...",
                success: (data: any) => `${data.fileName} uploaded successfully`,
                error: "Upload failed",
              })
            }}
            variant="outline"
          >
            Upload File
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Delete Confirmation */}
        <ShowcaseSection title="Delete Confirmation">
          <Button
            onClick={() => {
              toast.warning("Are you sure you want to delete this item?", {
                description: "This action cannot be undone.",
                action: {
                  label: "Delete",
                  onClick: () => {
                    toast.promise(
                      new Promise((resolve) => setTimeout(resolve, 1500)),
                      {
                        loading: "Deleting...",
                        success: "Item deleted successfully",
                        error: "Failed to delete item",
                      }
                    )
                  },
                },
              })
            }}
            variant="outline"
          >
            Delete Item
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Copy to Clipboard */}
        <ShowcaseSection title="Copy to Clipboard">
          <Button
            onClick={() => {
              navigator.clipboard.writeText("https://example.com/share/12345")
              toast.success("Link copied to clipboard", {
                description: "You can now share this link with others.",
              })
            }}
            variant="outline"
          >
            Copy Link
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Network Status */}
        <ShowcaseSection title="Network Status">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast.success("Connected to internet", {
                  description: "Your connection has been restored.",
                })
              }
              variant="outline"
            >
              Online
            </Button>
            <Button
              onClick={() =>
                toast.error("No internet connection", {
                  description: "Please check your network settings.",
                  duration: Infinity,
                })
              }
              variant="outline"
            >
              Offline
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Saved to Draft */}
        <ShowcaseSection title="Auto-save">
          <Button
            onClick={() => {
              toast.info("Draft saved", {
                description: "Your changes have been automatically saved.",
                duration: 2000,
              })
            }}
            variant="outline"
          >
            Trigger Auto-save
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Notification Settings */}
        <ShowcaseSection title="Settings Updated">
          <Button
            onClick={() => {
              toast.success("Settings saved", {
                description: "Your preferences have been updated successfully.",
                action: {
                  label: "View",
                  onClick: () => toast.info("Opening settings..."),
                },
              })
            }}
            variant="outline"
          >
            Save Settings
          </Button>
        </ShowcaseSection>

        <Separator />

        {/* Login Example */}
        <ShowcaseSection title="Authentication">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => {
                const login = () =>
                  new Promise((resolve) => {
                    setTimeout(() => resolve({ user: "John Doe" }), 2000)
                  })

                toast.promise(login, {
                  loading: "Signing in...",
                  success: (data: any) => `Welcome back, ${data.user}!`,
                  error: "Invalid credentials",
                })
              }}
              variant="outline"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                toast.success("Signed out successfully", {
                  description: "You have been logged out of your account.",
                })
              }}
              variant="outline"
            >
              Sign Out
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Custom Message */}
        <ShowcaseSection title="Custom Messages">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast("New message from Sarah", {
                  description: "Hey! Are we still meeting tomorrow?",
                  action: {
                    label: "Reply",
                    onClick: () => toast.info("Opening chat..."),
                  },
                })
              }
              variant="outline"
            >
              New Message
            </Button>
            <Button
              onClick={() =>
                toast.info("3 new comments", {
                  description: "People are discussing your recent post.",
                  action: {
                    label: "View",
                    onClick: () => toast.info("Opening comments..."),
                  },
                })
              }
              variant="outline"
            >
              New Comments
            </Button>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Update Available */}
        <ShowcaseSection title="App Updates">
          <Button
            onClick={() =>
              toast.info("Update available", {
                description: "A new version of the app is ready to install.",
                duration: Infinity,
                action: {
                  label: "Update Now",
                  onClick: () => {
                    toast.promise(
                      new Promise((resolve) => setTimeout(resolve, 3000)),
                      {
                        loading: "Installing update...",
                        success: "Update installed successfully",
                        error: "Update failed",
                      }
                    )
                  },
                },
              })
            }
            variant="outline"
          >
            Show Update Notice
          </Button>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
