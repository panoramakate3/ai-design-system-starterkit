"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { addDays, subDays } from "date-fns"
import type { DateRange } from "react-day-picker"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
    addDays(new Date(), 2),
    addDays(new Date(), 5),
  ])

  const disabledDays = [
    { from: new Date(), to: addDays(new Date(), 2) },
    subDays(new Date(), 5),
  ]

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Calendar"
        description="A date picker component with single, multiple, and range selection modes."
      />

      <ComponentShowcase>
        {/* Default Calendar */}
        <ShowcaseSection title="Default">
          <div className="flex justify-center">
            <Calendar mode="single" />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Single Date Selection */}
        <ShowcaseSection title="Single Date Selection">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
            {date && (
              <p className="text-sm text-center text-muted-foreground">
                Selected: {date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Range Selection */}
        <ShowcaseSection title="Range Selection">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </div>
            {dateRange?.from && (
              <div className="text-sm text-center text-muted-foreground">
                {dateRange.to ? (
                  <p>
                    From: {dateRange.from.toLocaleDateString()} to{' '}
                    {dateRange.to.toLocaleDateString()}
                  </p>
                ) : (
                  <p>From: {dateRange.from.toLocaleDateString()}</p>
                )}
              </div>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Selection */}
        <ShowcaseSection title="Multiple Selection">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
              />
            </div>
            {multipleDates && multipleDates.length > 0 && (
              <div className="text-sm text-center text-muted-foreground">
                <p className="mb-2">Selected {multipleDates.length} dates:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {multipleDates.map((d, i) => (
                    <span key={i} className="px-2 py-1 bg-accent rounded-md text-xs">
                      {d.toLocaleDateString()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Dropdown Navigation */}
        <ShowcaseSection title="With Dropdown Navigation">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              fromYear={2020}
              toYear={2030}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled Dates */}
        <ShowcaseSection title="Disabled Dates">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                disabled={disabledDays}
              />
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Today and the next 2 days are disabled, as well as 5 days ago
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Week Numbers */}
        <ShowcaseSection title="With Week Numbers">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              showWeekNumber
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Months */}
        <ShowcaseSection title="Multiple Months">
          <div className="flex justify-center overflow-x-auto">
            <Calendar
              mode="single"
              numberOfMonths={2}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Today Highlighted */}
        <ShowcaseSection title="Today Highlighted">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Today's date is highlighted with a background color
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Fixed Weeks */}
        <ShowcaseSection title="Fixed Weeks">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                fixedWeeks
              />
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Always shows 6 weeks for consistent height
            </p>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
