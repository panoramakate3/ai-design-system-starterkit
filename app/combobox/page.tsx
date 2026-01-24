"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { Check, ChevronsUpDown, Search, User, Building2, MapPin, Globe, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
]

const countries = [
  { value: "us", label: "United States", icon: "🇺🇸" },
  { value: "uk", label: "United Kingdom", icon: "🇬🇧" },
  { value: "ca", label: "Canada", icon: "🇨🇦" },
  { value: "au", label: "Australia", icon: "🇦🇺" },
  { value: "de", label: "Germany", icon: "🇩🇪" },
  { value: "fr", label: "France", icon: "🇫🇷" },
  { value: "jp", label: "Japan", icon: "🇯🇵" },
  { value: "cn", label: "China", icon: "🇨🇳" },
]

const users = [
  { value: "john", label: "John Doe", email: "john@example.com" },
  { value: "jane", label: "Jane Smith", email: "jane@example.com" },
  { value: "bob", label: "Bob Johnson", email: "bob@example.com" },
  { value: "alice", label: "Alice Williams", email: "alice@example.com" },
  { value: "charlie", label: "Charlie Brown", email: "charlie@example.com" },
]

const cities = [
  { value: "nyc", label: "New York", country: "United States", population: "8.3M" },
  { value: "london", label: "London", country: "United Kingdom", population: "8.9M" },
  { value: "tokyo", label: "Tokyo", country: "Japan", population: "13.9M" },
  { value: "paris", label: "Paris", country: "France", population: "2.1M" },
  { value: "sydney", label: "Sydney", country: "Australia", population: "5.3M" },
]

export default function ComboboxPage() {
  const [open1, setOpen1] = useState(false)
  const [value1, setValue1] = useState("")
  const [open2, setOpen2] = useState(false)
  const [value2, setValue2] = useState("")
  const [open3, setOpen3] = useState(false)
  const [value3, setValue3] = useState("")
  const [open4, setOpen4] = useState(false)
  const [value4, setValue4] = useState("")
  const [open5, setOpen5] = useState(false)
  const [value5, setValue5] = useState("")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Combobox"
        description="Autocomplete input and command palette with a list of suggestions."
      />

      <ComponentShowcase>
        {/* Basic Combobox */}
        <ShowcaseSection title="Basic">
          <div className="flex justify-center">
            <Popover open={open1} onOpenChange={setOpen1}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open1}
                  className="w-[300px] justify-between"
                >
                  {value1
                    ? frameworks.find((framework) => framework.value === value1)?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue1(currentValue === value1 ? "" : currentValue)
                            setOpen1(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value1 === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {value1 && (
            <p className="text-sm text-center text-muted-foreground mt-4">
              Selected: {frameworks.find((f) => f.value === value1)?.label}
            </p>
          )}
        </ShowcaseSection>

        <Separator />

        {/* With Icons */}
        <ShowcaseSection title="With Icons">
          <div className="flex justify-center">
            <Popover open={open2} onOpenChange={setOpen2}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open2}
                  className="w-[300px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {value2
                      ? countries.find((country) => country.value === value2)?.label
                      : "Select country..."}
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                      {countries.map((country) => (
                        <CommandItem
                          key={country.value}
                          value={country.value}
                          onSelect={(currentValue) => {
                            setValue2(currentValue === value2 ? "" : currentValue)
                            setOpen2(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value2 === country.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <span className="mr-2">{country.icon}</span>
                          {country.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* User Selection */}
        <ShowcaseSection title="User Selection">
          <div className="flex justify-center">
            <Popover open={open3} onOpenChange={setOpen3}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open3}
                  className="w-[350px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {value3
                      ? users.find((user) => user.value === value3)?.label
                      : "Select user..."}
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[350px] p-0">
                <Command>
                  <CommandInput placeholder="Search user..." />
                  <CommandList>
                    <CommandEmpty>No user found.</CommandEmpty>
                    <CommandGroup heading="Users">
                      {users.map((user) => (
                        <CommandItem
                          key={user.value}
                          value={user.value}
                          onSelect={(currentValue) => {
                            setValue3(currentValue === value3 ? "" : currentValue)
                            setOpen3(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value3 === user.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{user.label}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Additional Info */}
        <ShowcaseSection title="With Additional Information">
          <div className="flex justify-center">
            <Popover open={open4} onOpenChange={setOpen4}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open4}
                  className="w-[350px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {value4
                      ? cities.find((city) => city.value === value4)?.label
                      : "Select city..."}
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[350px] p-0">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandList>
                    <CommandEmpty>No city found.</CommandEmpty>
                    <CommandGroup heading="Major Cities">
                      {cities.map((city) => (
                        <CommandItem
                          key={city.value}
                          value={city.value}
                          onSelect={(currentValue) => {
                            setValue4(currentValue === value4 ? "" : currentValue)
                            setOpen4(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value4 === city.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div className="flex items-center justify-between flex-1">
                            <div>
                              <p className="text-sm font-medium">{city.label}</p>
                              <p className="text-xs text-muted-foreground">{city.country}</p>
                            </div>
                            <Badge variant="secondary" className="ml-2">
                              {city.population}
                            </Badge>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Form Example */}
        <ShowcaseSection title="In Form">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Project Settings</CardTitle>
              <CardDescription>Configure your project preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Framework</label>
                <Popover open={open5} onOpenChange={setOpen5}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open5}
                      className="w-full justify-between"
                    >
                      {value5
                        ? frameworks.find((framework) => framework.value === value5)?.label
                        : "Select framework..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue5(currentValue === value5 ? "" : currentValue)
                                setOpen5(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value5 === framework.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              {value5 && (
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">
                    Selected framework: <span className="font-medium text-foreground">
                      {frameworks.find((f) => f.value === value5)?.label}
                    </span>
                  </p>
                </div>
              )}
              <Button className="w-full">Save Settings</Button>
            </CardContent>
          </Card>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Small:</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-[250px] justify-between">
                    Select framework...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] p-0">
                  <Command>
                    <CommandInput placeholder="Search..." className="h-8" />
                    <CommandList>
                      <CommandEmpty>No results.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.slice(0, 4).map((framework) => (
                          <CommandItem key={framework.value} value={framework.value}>
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Default:</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[300px] justify-between">
                    Select framework...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No results.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.slice(0, 4).map((framework) => (
                          <CommandItem key={framework.value} value={framework.value}>
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Large:</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="lg" className="w-[350px] justify-between">
                    Select framework...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No results.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.slice(0, 4).map((framework) => (
                          <CommandItem key={framework.value} value={framework.value}>
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Grouped Options */}
        <ShowcaseSection title="Grouped Options">
          <div className="flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[350px] justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Select option...
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[350px] p-0">
                <Command>
                  <CommandInput placeholder="Search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Frontend Frameworks">
                      <CommandItem value="react">React</CommandItem>
                      <CommandItem value="vue">Vue</CommandItem>
                      <CommandItem value="angular">Angular</CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Backend Frameworks">
                      <CommandItem value="express">Express</CommandItem>
                      <CommandItem value="fastapi">FastAPI</CommandItem>
                      <CommandItem value="django">Django</CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Full-stack Frameworks">
                      <CommandItem value="nextjs">Next.js</CommandItem>
                      <CommandItem value="nuxtjs">Nuxt.js</CommandItem>
                      <CommandItem value="remix">Remix</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
