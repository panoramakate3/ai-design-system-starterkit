"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Terminal, XCircle } from "lucide-react"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentSection,
} from "@/components/component-page"

const alertVariants = [
  {
    title: "Success Alert",
    variant: undefined,
    className: "border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600",
    descriptionClassName: "text-green-700",
    icon: CheckCircle2,
    alertTitle: "Success! Your changes have been saved",
    alertDescription: "This is an alert with icon, title and description.",
  },
  {
    title: "Default Alert (Title Only)",
    variant: undefined,
    className: undefined,
    icon: Terminal,
    alertTitle: "This Alert has a title and an icon. No description.",
    alertDescription: null,
  },
  {
    title: "Info Alert",
    variant: undefined,
    className: "border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-600",
    descriptionClassName: "text-blue-700",
    icon: AlertCircle,
    alertTitle: "Heads up!",
    alertDescription: "You can add components to your app using the CLI.",
  },
  {
    title: "Destructive Alert",
    variant: "destructive" as const,
    className: undefined,
    icon: XCircle,
    alertTitle: "Unable to process your payment.",
    alertDescription: "Please verify your billing information and try again.",
    listItems: ["Check your card details", "Ensure sufficient funds", "Verify billing address"],
  },
  {
    title: "Warning Alert",
    variant: undefined,
    className: "border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600",
    descriptionClassName: "text-yellow-700",
    icon: AlertCircle,
    alertTitle: "Warning",
    alertDescription: "Your session is about to expire. Please save your work.",
  },
]

export default function AlertPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Alert"
        description="Displays a callout for user attention."
      />

      <div className="space-y-6">
        {alertVariants.map((item) => {
          const Icon = item.icon
          return (
            <ComponentSection key={item.title} title={item.title}>
              <Alert variant={item.variant} className={item.className}>
                <Icon className="h-4 w-4" />
                <AlertTitle>{item.alertTitle}</AlertTitle>
                {item.alertDescription && (
                  <AlertDescription className={item.descriptionClassName}>
                    <p>{item.alertDescription}</p>
                    {item.listItems && (
                      <ul className="mt-2 list-disc list-inside space-y-1">
                        {item.listItems.map((listItem, index) => (
                          <li key={index}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </AlertDescription>
                )}
              </Alert>
            </ComponentSection>
          )
        })}
      </div>
    </ComponentPageLayout>
  )
}
