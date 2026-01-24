"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"

const avatarSizes = [
  { size: "h-6 w-6", label: "xs" },
  { size: "h-8 w-8", label: "sm" },
  { size: "h-10 w-10", label: "md" },
  { size: "h-12 w-12", label: "lg" },
  { size: "h-16 w-16", label: "xl" },
]

const avatarImages = {
  shadcn: "https://github.com/shadcn.png",
  vercel: "https://github.com/vercel.png",
  radix: "https://github.com/radix-ui.png",
}

export default function AvatarPage() {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Avatar"
        description="An image element with a fallback for representing the user."
      />

      <ComponentShowcase>
        {/* Circle Avatar */}
        <ShowcaseSection title="Circle">
          <div className="flex items-center gap-4">
            {["h-8 w-8", "h-10 w-10", "h-12 w-12"].map((size) => (
              <Avatar key={size} className={size}>
                <AvatarImage src={avatarImages.shadcn} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Square Avatar */}
        <ShowcaseSection title="Square">
          <div className="flex items-center gap-4">
            {["h-8 w-8", "h-10 w-10", "h-12 w-12"].map((size) => (
              <Avatar key={size} className={`${size} rounded-md`}>
                <AvatarImage src={avatarImages.vercel} alt="@vercel" className="rounded-md" />
                <AvatarFallback className="rounded-md">VC</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Avatar Group */}
        <ShowcaseSection title="Avatar Group">
          <div className="flex -space-x-2">
            {[
              { src: avatarImages.shadcn, fallback: "CN" },
              { src: avatarImages.vercel, fallback: "VC" },
              { src: avatarImages.radix, fallback: "RX" },
            ].map((avatar, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={avatar.src} alt={avatar.fallback} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-muted text-muted-foreground text-xs">+3</AvatarFallback>
            </Avatar>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Avatar with Fallback */}
        <ShowcaseSection title="Fallback">
          <div className="flex items-center gap-4">
            {[
              { size: "h-8 w-8", fallback: "JD", className: "" },
              { size: "h-10 w-10", fallback: "AB", className: "bg-primary text-primary-foreground" },
              { size: "h-12 w-12", fallback: "XY", className: "bg-destructive text-destructive-foreground" },
            ].map((avatar, index) => (
              <Avatar key={index} className={avatar.size}>
                <AvatarFallback className={avatar.className}>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Avatar Sizes */}
        <ShowcaseSection title="Sizes">
          <div className="flex items-end gap-4">
            {avatarSizes.map(({ size, label }) => (
              <div key={label} className="text-center">
                <Avatar className={`${size} mb-2`}>
                  <AvatarImage src={avatarImages.shadcn} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
