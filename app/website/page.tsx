import { Header } from "@/components/website/header"
import { Hero } from "@/components/website/hero"
import { Statistics } from "@/components/website/statistics"
import { Features } from "@/components/website/features"
import { CTA } from "@/components/website/cta"
import { Footer } from "@/components/website/footer"

export const metadata = {
  title: "Homepage - Modern Website",
  description: "A modern, responsive homepage built with Next.js and shadcn/ui",
}

export default function WebsitePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
