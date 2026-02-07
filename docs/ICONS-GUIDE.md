# Icon Libraries Guide

This project includes two icon libraries for maximum flexibility:

## 📦 Installed Libraries

### 1. Lucide React
- **Version**: ^0.563.0
- **Website**: https://lucide.dev
- **Icons**: 1000+ icons
- **Style**: Clean, minimal, consistent stroke-based icons
- **Best for**: Modern UI, consistent design systems

### 2. Tabler Icons React
- **Package**: @tabler/icons-react
- **Website**: https://tabler.io/icons
- **Icons**: 5200+ icons
- **Style**: Pixel-perfect, outline icons
- **Best for**: Detailed icons, large icon sets

---

## 🎨 Usage Examples

### Lucide React

```tsx
import { Heart, Star, Home, Settings, User } from 'lucide-react'

function MyComponent() {
  return (
    <>
      {/* Basic usage */}
      <Heart className="h-6 w-6" />

      {/* With color */}
      <Star className="h-6 w-6 text-yellow-500" />

      {/* With stroke width */}
      <Home className="h-6 w-6" strokeWidth={2} />

      {/* With multiple props */}
      <Settings
        className="h-8 w-8 text-primary"
        strokeWidth={1.5}
      />
    </>
  )
}
```

### Tabler Icons React

```tsx
import {
  IconHeart,
  IconStar,
  IconHome,
  IconSettings,
  IconUser
} from '@tabler/icons-react'

function MyComponent() {
  return (
    <>
      {/* Basic usage with size prop */}
      <IconHeart size={24} />

      {/* With color */}
      <IconStar size={24} className="text-yellow-500" />

      {/* With stroke width */}
      <IconHome size={24} stroke={2} />

      {/* With multiple props */}
      <IconSettings
        size={32}
        stroke={1.5}
        className="text-primary"
      />
    </>
  )
}
```

---

## 📏 Size Guidelines

### Tailwind Size Classes (Lucide)
```tsx
<Icon className="h-3 w-3" />   // 12px - Very small
<Icon className="h-4 w-4" />   // 16px - Small
<Icon className="h-5 w-5" />   // 20px - Default
<Icon className="h-6 w-6" />   // 24px - Medium
<Icon className="h-8 w-8" />   // 32px - Large
<Icon className="h-10 w-10" /> // 40px - Extra large
<Icon className="h-12 w-12" /> // 48px - Huge
```

### Size Prop (Tabler)
```tsx
<IconHeart size={16} />  // Small
<IconHeart size={20} />  // Default
<IconHeart size={24} />  // Medium
<IconHeart size={32} />  // Large
<IconHeart size={48} />  // Huge
```

---

## 🎨 Colors

### Using Tailwind Colors
```tsx
// Semantic colors
<Icon className="text-primary" />
<Icon className="text-secondary" />
<Icon className="text-destructive" />
<Icon className="text-muted-foreground" />

// Standard colors
<Icon className="text-red-500" />
<Icon className="text-blue-500" />
<Icon className="text-green-500" />
<Icon className="text-yellow-500" />
<Icon className="text-purple-500" />
```

---

## ✏️ Stroke Width

### Lucide React
```tsx
<Heart strokeWidth={1} />    // Thin
<Heart strokeWidth={1.5} />  // Light
<Heart strokeWidth={2} />    // Default
<Heart strokeWidth={2.5} />  // Medium
<Heart strokeWidth={3} />    // Bold
```

### Tabler Icons
```tsx
<IconHeart stroke={1} />     // Thin
<IconHeart stroke={1.5} />   // Light
<IconHeart stroke={2} />     // Default
<IconHeart stroke={2.5} />   // Medium
<IconHeart stroke={3} />     // Bold
```

---

## 🔍 Finding Icons

### Lucide React
Browse at: https://lucide.dev/icons

Search example:
```tsx
// Search for "arrow" on lucide.dev
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
```

### Tabler Icons React
Browse at: https://tabler.io/icons

Search example:
```tsx
// Search for "arrow" on tabler.io/icons
import {
  IconArrowRight,
  IconArrowLeft,
  IconArrowUp,
  IconArrowDown
} from '@tabler/icons-react'
```

---

## 💡 Best Practices

### 1. **Consistency**
- Use one library primarily for consistency
- Mix libraries only when necessary
- Keep icon sizes consistent across similar UI elements

### 2. **Accessibility**
```tsx
// Add aria-label for screen readers
<Heart className="h-6 w-6" aria-label="Like" />

// Or use aria-hidden for decorative icons
<Star className="h-4 w-4" aria-hidden="true" />
```

### 3. **Performance**
```tsx
// ✅ Good - Named imports (tree-shakeable)
import { Heart, Star } from 'lucide-react'

// ❌ Bad - Default import
import * as Icons from 'lucide-react'
```

### 4. **Reusable Components**
```tsx
// Create icon wrapper components for consistency
interface IconProps {
  className?: string
  size?: number
}

export function HeartIcon({ className, size = 24 }: IconProps) {
  return <Heart className={className} size={size} />
}
```

---

## 📊 Common Use Cases

### Navigation Icons
```tsx
import { Home, User, Settings, Mail, Bell } from 'lucide-react'

<nav>
  <Home className="h-5 w-5" />
  <User className="h-5 w-5" />
  <Settings className="h-5 w-5" />
  <Mail className="h-5 w-5" />
  <Bell className="h-5 w-5" />
</nav>
```

### Action Buttons
```tsx
import { Download, Upload, Trash2, Edit, Plus } from 'lucide-react'

<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>
```

### Status Indicators
```tsx
import { CheckCircle2, AlertCircle, XCircle, Clock } from 'lucide-react'

<div className="flex items-center gap-2">
  <CheckCircle2 className="h-5 w-5 text-green-500" />
  <span>Success</span>
</div>
```

---

## 🎯 Quick Reference

| Feature | Lucide React | Tabler Icons |
|---------|--------------|--------------|
| Import Prefix | No prefix | `Icon` prefix |
| Size Control | `className="h-X w-X"` | `size={X}` |
| Color | `className="text-X"` | `className="text-X"` |
| Stroke Width | `strokeWidth={X}` | `stroke={X}` |
| Total Icons | 1000+ | 5200+ |
| Bundle Size | Smaller | Larger |

---

## 🔗 Resources

- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)
- [Tabler Icons Documentation](https://tabler.io/docs/icons/react)
- [Icon Examples Page](/icons) - View all examples in action

---

## 📝 Example Page

Visit `/icons` in the application to see:
- All icon categories
- Size variations
- Color options
- Stroke width examples
- Usage code snippets

---

Last updated: 2026-02-07
