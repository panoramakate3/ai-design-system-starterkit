"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

export default function CarouselPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Update current slide on carousel change
  useState(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  })

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Carousel"
        description="A slideshow component for cycling through elements—images or slides of text."
      />

      <ComponentShowcase>
        {/* Basic Carousel */}
        <ShowcaseSection title="Basic">
          <div className="mx-auto max-w-xs">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With API - Show Current Slide */}
        <ShowcaseSection title="With Current Slide Indicator">
          <div className="space-y-4">
            <div className="mx-auto max-w-xs">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <div className="text-4xl font-semibold mb-2">{index + 1}</div>
                            <p className="text-sm text-muted-foreground">Slide {index + 1}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            {count > 0 && (
              <div className="text-center text-sm text-muted-foreground">
                Slide {current} of {count}
              </div>
            )}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Multiple Items Per View */}
        <ShowcaseSection title="Multiple Items">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ShowcaseSection>

        <Separator />

        {/* Product Cards Carousel */}
        <ShowcaseSection title="Product Cards">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                { name: "Wireless Headphones", price: 99.99, rating: 4.5, reviews: 128 },
                { name: "Smart Watch", price: 199.99, rating: 4.8, reviews: 256 },
                { name: "Laptop Stand", price: 49.99, rating: 4.3, reviews: 89 },
                { name: "USB-C Hub", price: 79.99, rating: 4.6, reviews: 142 },
                { name: "Mechanical Keyboard", price: 129.99, rating: 4.7, reviews: 203 },
              ].map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                      <ShoppingCart className="h-16 w-16 text-primary/40" />
                      <Badge className="absolute top-2 right-2">New</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({product.reviews})
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ShowcaseSection>

        <Separator />

        {/* Auto-play Carousel */}
        <ShowcaseSection title="Auto-play">
          <div className="mx-auto max-w-md space-y-4">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { title: "Summer Sale", subtitle: "Up to 50% off", color: "from-orange-500 to-red-500" },
                  { title: "New Arrivals", subtitle: "Check out latest products", color: "from-blue-500 to-purple-500" },
                  { title: "Free Shipping", subtitle: "On orders over $50", color: "from-green-500 to-teal-500" },
                  { title: "Member Exclusive", subtitle: "Special deals for you", color: "from-pink-500 to-rose-500" },
                ].map((slide, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0">
                      <CardContent className={`flex flex-col items-center justify-center p-8 bg-gradient-to-br ${slide.color} text-white rounded-xl`}>
                        <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-lg opacity-90">{slide.subtitle}</p>
                        <Button variant="secondary" className="mt-4">
                          Shop Now
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-sm text-center text-muted-foreground">
              Auto-playing every 2 seconds
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Vertical Carousel */}
        <ShowcaseSection title="Vertical Orientation">
          <div className="mx-auto max-w-xs">
            <Carousel
              orientation="vertical"
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="h-[400px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <div className="text-center">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                            <p className="text-sm text-muted-foreground mt-2">Vertical Slide</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Testimonials Carousel */}
        <ShowcaseSection title="Testimonials">
          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Sarah Johnson",
                  role: "Product Manager",
                  content: "This product has completely transformed how we work. Highly recommend!",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Software Engineer",
                  content: "Excellent quality and great customer service. Worth every penny.",
                  rating: 5,
                },
                {
                  name: "Emily Davis",
                  role: "Designer",
                  content: "Beautiful design and very intuitive to use. Love it!",
                  rating: 5,
                },
                {
                  name: "David Wilson",
                  role: "Marketing Director",
                  content: "Game-changer for our team. Can't imagine working without it now.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ShowcaseSection>

        <Separator />

        {/* Image Gallery Carousel */}
        <ShowcaseSection title="Image Gallery">
          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {[
                { title: "Mountain View", views: "2.5k", likes: 342 },
                { title: "Ocean Sunset", views: "3.8k", likes: 521 },
                { title: "City Lights", views: "4.2k", likes: 689 },
                { title: "Forest Path", views: "1.9k", likes: 278 },
                { title: "Desert Landscape", views: "2.1k", likes: 401 },
              ].map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-0">
                    <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center relative group">
                      <div className="text-center">
                        <Eye className="h-16 w-16 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
                        <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">
                          {image.title}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">{image.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm">{image.likes}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="secondary">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ShowcaseSection>

        <Separator />

        {/* Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Small:</p>
              <div className="mx-auto max-w-sm">
                <Carousel>
                  <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="flex aspect-video items-center justify-center p-4">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Large:</p>
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-[21/9] items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
