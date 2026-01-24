"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
} from "@/components/component-page"

const accordionItems = [
  {
    value: "item-1",
    title: "Product Information",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    value: "item-2",
    title: "Shipping Details",
    content: [
      "We offer free standard shipping on all orders over $50. Orders are processed within 1-2 business days and typically arrive within 5-7 business days.",
      "Express shipping options are available at checkout for faster delivery. International shipping is available to select countries.",
    ],
  },
  {
    value: "item-3",
    title: "Return Policy",
    content: [
      "We accept returns within 30 days of purchase. Items must be in original condition with all tags attached and original packaging.",
      "To initiate a return, please contact our customer service team with your order number. Refunds are processed within 5-10 business days.",
    ],
  },
]

export default function AccordionPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      />

      <ComponentShowcase>
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  {item.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
