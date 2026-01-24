"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Title Section */}
        <div className="mb-8 space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Accordion
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="rounded-lg border bg-card p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek design.
                    Built with premium materials, it offers unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an intuitive
                    user interface designed for both beginners and experts.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We offer free standard shipping on all orders over $50. Orders are processed
                    within 1-2 business days and typically arrive within 5-7 business days.
                  </p>
                  <p>
                    Express shipping options are available at checkout for faster delivery.
                    International shipping is available to select countries.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We accept returns within 30 days of purchase. Items must be in original
                    condition with all tags attached and original packaging.
                  </p>
                  <p>
                    To initiate a return, please contact our customer service team with your
                    order number. Refunds are processed within 5-10 business days.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
