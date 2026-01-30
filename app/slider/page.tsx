"use client"

import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"
import { Volume2, VolumeX, Brightness4, DollarSign } from "lucide-react"

export default function SliderPage() {
  const [value, setValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])
  const [volumeValue, setVolumeValue] = useState([70])
  const [brightnessValue, setBrightnessValue] = useState([60])
  const [priceRange, setPriceRange] = useState([300, 700])
  const [stepValue, setStepValue] = useState([50])
  const [verticalValue, setVerticalValue] = useState([40])

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Slider"
        description="An input where the user selects a value from within a given range."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/slider"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Slider */}
        <ShowcaseSection title="Basic Slider">
          <div className="w-full max-w-md">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Value Display */}
        <ShowcaseSection title="With Value Display">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Value</span>
              <span className="text-sm text-muted-foreground">{value[0]}</span>
            </div>
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Range Slider */}
        <ShowcaseSection title="Range Slider">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Range</span>
              <span className="text-sm text-muted-foreground">
                {rangeValue[0]} - {rangeValue[1]}
              </span>
            </div>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              step={1}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Values */}
        <ShowcaseSection title="Different Values">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>0%</span>
              </div>
              <Slider defaultValue={[0]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>25%</span>
              </div>
              <Slider defaultValue={[25]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>50%</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>75%</span>
              </div>
              <Slider defaultValue={[75]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>100%</span>
              </div>
              <Slider defaultValue={[100]} max={100} step={1} />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Step */}
        <ShowcaseSection title="With Step">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Step: 10</span>
              <span className="text-sm text-muted-foreground">{stepValue[0]}</span>
            </div>
            <Slider
              value={stepValue}
              onValueChange={setStepValue}
              max={100}
              step={10}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
              <span>60</span>
              <span>70</span>
              <span>80</span>
              <span>90</span>
              <span>100</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled at 50%</span>
              <Slider defaultValue={[50]} max={100} step={1} disabled />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">
                Disabled Range (25-75)
              </span>
              <Slider defaultValue={[25, 75]} max={100} step={1} disabled />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Volume Control */}
        <ShowcaseSection title="Volume Control">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {volumeValue[0] === 0 ? (
                  <VolumeX className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Volume2 className="h-5 w-5 text-muted-foreground" />
                )}
                <span className="text-sm font-medium">Volume</span>
              </div>
              <span className="text-sm text-muted-foreground">{volumeValue[0]}%</span>
            </div>
            <Slider
              value={volumeValue}
              onValueChange={setVolumeValue}
              max={100}
              step={1}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Brightness Control */}
        <ShowcaseSection title="Brightness Control">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brightness4 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Brightness</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {brightnessValue[0]}%
              </span>
            </div>
            <Slider
              value={brightnessValue}
              onValueChange={setBrightnessValue}
              max={100}
              step={1}
            />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Price Range */}
        <ShowcaseSection title="Price Range">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Price Range</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              min={0}
              step={10}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$1,000</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Vertical Slider */}
        <ShowcaseSection title="Vertical Slider">
          <div className="flex items-center gap-8 h-64">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {verticalValue[0]}%
              </span>
              <Slider
                value={verticalValue}
                onValueChange={setVerticalValue}
                max={100}
                step={1}
                orientation="vertical"
                className="h-full"
              />
              <span className="text-xs text-muted-foreground">Vertical</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-muted-foreground">75%</span>
              <Slider
                defaultValue={[75]}
                max={100}
                step={1}
                orientation="vertical"
                className="h-full"
              />
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-muted-foreground">50%</span>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                orientation="vertical"
                className="h-full"
                disabled
              />
              <span className="text-xs text-muted-foreground">Disabled</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Temperature Control */}
        <ShowcaseSection title="Temperature Control">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Temperature</span>
              <span className="text-sm text-muted-foreground">22°C</span>
            </div>
            <Slider defaultValue={[22]} max={30} min={16} step={0.5} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>16°C</span>
              <span>30°C</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Sliders */}
        <ShowcaseSection title="Multiple Sliders">
          <div className="w-full max-w-md space-y-6 rounded-lg border p-6">
            <h3 className="font-semibold">Equalizer</h3>
            <div className="grid grid-cols-5 gap-4">
              {[60, 40, 80, 50, 70].map((val, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <span className="text-xs text-muted-foreground">{val}%</span>
                  <Slider
                    defaultValue={[val]}
                    max={100}
                    step={1}
                    orientation="vertical"
                    className="h-32"
                  />
                  <span className="text-xs text-muted-foreground">
                    {["60", "170", "310", "600", "1K"][i]}Hz
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Age Range */}
        <ShowcaseSection title="Age Range">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Age Range</span>
              <span className="text-sm text-muted-foreground">18 - 65</span>
            </div>
            <Slider defaultValue={[18, 65]} max={100} min={0} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>100+</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Rating Slider */}
        <ShowcaseSection title="Rating Filter">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Minimum Rating</span>
              <span className="text-sm text-muted-foreground">3.5 ⭐</span>
            </div>
            <Slider defaultValue={[3.5]} max={5} min={0} step={0.5} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 ⭐</span>
              <span>5 ⭐</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* File Size Range */}
        <ShowcaseSection title="File Size Range">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">File Size (MB)</span>
              <span className="text-sm text-muted-foreground">10 - 100 MB</span>
            </div>
            <Slider defaultValue={[10, 100]} max={500} min={0} step={5} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 MB</span>
              <span>500 MB</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Opacity Control */}
        <ShowcaseSection title="Opacity Control">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Opacity</span>
              <span className="text-sm text-muted-foreground">80%</span>
            </div>
            <Slider defaultValue={[80]} max={100} min={0} step={5} />
            <div className="h-24 rounded-lg bg-primary transition-opacity" style={{ opacity: 0.8 }} />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Time Range */}
        <ShowcaseSection title="Time Range">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Available Hours</span>
              <span className="text-sm text-muted-foreground">
                {9}:00 - {17}:00
              </span>
            </div>
            <Slider defaultValue={[9, 17]} max={24} min={0} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>00:00</span>
              <span>24:00</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Zoom Control */}
        <ShowcaseSection title="Zoom Control">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Zoom Level</span>
              <span className="text-sm text-muted-foreground">100%</span>
            </div>
            <Slider defaultValue={[100]} max={200} min={25} step={25} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>25%</span>
              <span>50%</span>
              <span>100%</span>
              <span>150%</span>
              <span>200%</span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Quality Settings */}
        <ShowcaseSection title="Quality Settings">
          <div className="w-full max-w-md space-y-6 rounded-lg border p-6">
            <h3 className="font-semibold">Video Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Quality</span>
                  <span className="text-muted-foreground">1080p</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={25} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>360p</span>
                  <span>720p</span>
                  <span>1080p</span>
                  <span>4K</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Speed</span>
                  <span className="text-muted-foreground">1x</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={25} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0.5x</span>
                  <span>1x</span>
                  <span>1.5x</span>
                  <span>2x</span>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Budget Slider */}
        <ShowcaseSection title="Budget Slider">
          <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Monthly Budget</span>
              <span className="text-lg font-bold">$5,000</span>
            </div>
            <Slider defaultValue={[5000]} max={10000} min={0} step={100} />
            <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
              <div>
                <div className="font-medium">Min</div>
                <div>$0</div>
              </div>
              <div className="text-center">
                <div className="font-medium">Current</div>
                <div>$5,000</div>
              </div>
              <div className="text-right">
                <div className="font-medium">Max</div>
                <div>$10,000</div>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
