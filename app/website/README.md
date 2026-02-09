# EV Power - Website Homepage

A modern, responsive EV charging station website homepage built with Next.js, shadcn/ui components, and design tokens extracted directly from Figma.

**Design Source:** Figma Design System
**Node ID:** 5021:113
**Theme:** Electric Vehicle Charging Infrastructure

## Structure

```
app/website/
├── page.tsx           # Main homepage
└── README.md          # This file

components/website/
├── header.tsx         # Navigation header with logo, nav links, and CTAs
├── hero.tsx          # Hero section with heading, description, and CTAs
├── statistics.tsx    # Statistics/metrics showcase
├── features.tsx      # Feature cards with icons and descriptions
├── cta.tsx           # Call-to-action section
└── footer.tsx        # Footer with links and copyright
```

## Features

### 🎨 Design System Integration
- Uses design tokens from Figma variables
- Consistent spacing, colors, and typography
- Border radius: 6px (--radius: 0.5rem)

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fluid typography and spacing
- Optimized layouts for all screen sizes

### 🧩 shadcn/ui Components Used
- Button (primary and outline variants)
- Card (for feature showcase)
- Separator (in footer)
- ThemeToggle (for dark/light mode)

### 🌓 Theme Support
- Light mode
- Dark mode
- Midnight mode (blue theme)
- Automatic theme persistence

## Sections

### Header
- Sticky navigation bar
- Logo/brand
- Navigation links (Features, Pricing, About, Contact)
- Theme toggle
- Sign In and Get Started buttons
- Responsive mobile menu (hidden on mobile, shown on md+)

### Hero
- Eye-catching headline
- Descriptive subheading
- Dual CTAs (Get Started + Learn More)
- Hero image placeholder
- Badge/announcement
- Fully responsive layout

### Statistics
- 4 key metrics displayed in grid
- Responsive grid (2 columns mobile, 4 columns desktop)
- Large, bold numbers
- Descriptive labels

### Features
- 4 feature cards with icons
- Icon, title, and description for each
- Icons from lucide-react (Zap, Shield, Users, BarChart)
- Responsive grid layout

### CTA (Call to Action)
- Conversion-focused section
- Dual CTAs (Start Free Trial + Schedule Demo)
- Trust indicators (no credit card, 14-day trial)
- Muted background for visual separation

### Footer
- 4-column layout (Product, Company, Resources, Legal)
- Multiple navigation links
- Logo and copyright
- Responsive: 2 columns on mobile, 4 on desktop

## Design Tokens Used

### Colors
- Background: `bg-background`
- Foreground: `text-foreground`
- Muted: `bg-muted`, `text-muted-foreground`
- Border: `border-border`
- Primary: `bg-primary`, `text-primary`
- Card: `bg-card`

### Spacing
- Container padding: `px-4 md:px-8`
- Section padding: `py-12 md:py-24 lg:py-32`
- Grid gaps: `gap-4`, `gap-6`, `gap-8`

### Typography
- Headings: `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`
- Body: `text-base`, `text-lg`, `text-xl`
- Font weights: `font-medium`, `font-semibold`, `font-bold`

### Border Radius
- Buttons: `rounded-md` (6px)
- Cards: `rounded-lg` (8px)
- Images: `rounded-xl` (12px)
- Pills: `rounded-full`

## Accessing the Page

Navigate to: `http://localhost:3000/website`

## Customization

### Update Content
Edit the individual component files in `components/website/` to change:
- Navigation links
- Hero text and CTAs
- Statistics numbers
- Feature cards
- Footer links

### Update Styling
All components use Tailwind CSS classes that reference design tokens.
Modify colors, spacing, and typography by updating:
- `app/globals.css` for theme variables
- `src/tokens/colors.ts` for color tokens
- Individual component classes for specific adjustments

### Add Sections
Create new components in `components/website/` and import them into `app/website/page.tsx`.

## Best Practices

1. **Design Tokens**: Always use design tokens (CSS variables) instead of hard-coded values
2. **Responsive**: Test on multiple screen sizes
3. **Accessibility**: Maintain semantic HTML and proper ARIA labels
4. **Performance**: Optimize images and use Next.js Image component
5. **SEO**: Update metadata in page.tsx for better search visibility
