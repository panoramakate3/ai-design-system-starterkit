# Theme Toggle Guide

## Overview

The project includes two theme toggle components for switching between Primary (Light) and Dark modes:

1. **ThemeToggle** - Full-featured dropdown with System option
2. **ThemeToggleSimple** - Simple toggle button

Both components:
- ✅ Persist theme preference to localStorage
- ✅ Support system theme detection
- ✅ Prevent flash of wrong theme (FOUC)
- ✅ Handle SSR hydration correctly
- ✅ Accessible with keyboard navigation

---

## Components

### 1. ThemeToggle (Recommended)

**Location**: `components/theme-toggle.tsx`

Full-featured dropdown menu with three options:
- **Primary (Light)** - Sky/Blue theme
- **Dark** - Neutral/Gray theme
- **System** - Auto-detect from OS preferences

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header>
      <nav>
        <ThemeToggle />
      </nav>
    </header>
  )
}
```

**Features**:
- Dropdown menu with icons
- System theme auto-detection
- Animated icon transitions
- ARIA labels for accessibility

---

### 2. ThemeToggleSimple

**Location**: `components/theme-toggle-simple.tsx`

Simple toggle button that switches between light and dark:

```tsx
import { ThemeToggleSimple } from "@/components/theme-toggle-simple"

export function Navigation() {
  return (
    <nav>
      <ThemeToggleSimple />
    </nav>
  )
}
```

**Features**:
- Single button click toggle
- Light <-> Dark only (no system option)
- Minimal UI footprint

---

## Current Integration

The ThemeToggle is already integrated in the documentation header:

**File**: `components/docs/docs-wrapper.tsx`

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export function DocsWrapper({ children }) {
  return (
    <div>
      <header>
        {/* Search bar */}
        <ThemeToggle />  {/* Added here */}
      </header>
      {/* Content */}
    </div>
  )
}
```

**Result**: Theme toggle appears in the top-right corner of all documentation pages.

---

## How It Works

### Theme Initialization

**File**: `app/layout.tsx`

A script runs before React hydration to prevent flash:

```tsx
<Script id="theme-script" strategy="beforeInteractive">
  {`
    (function() {
      const savedTheme = localStorage.getItem('theme') || 'system';
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        // System theme detection
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemTheme) {
          document.documentElement.classList.add('dark');
        }
      }
    })();
  `}
</Script>
```

**Why**: Runs immediately to set theme class before any React rendering.

### Theme Provider

**File**: `components/theme-provider.tsx`

Ensures theme is applied correctly on client-side:

```tsx
export function ThemeProvider({ children }) {
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system"
    // Apply theme...
  }, [])

  return <>{children}</>
}
```

### Theme Persistence

Themes are saved to `localStorage`:

```javascript
// Keys and values
localStorage.setItem('theme', 'light')   // Primary mode
localStorage.setItem('theme', 'dark')    // Dark mode
localStorage.setItem('theme', 'system')  // System preference
```

---

## Usage Examples

### Example 1: Add to Custom Page

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export default function CustomPage() {
  return (
    <div>
      <header>
        <h1>My Page</h1>
        <ThemeToggle />
      </header>
      <main>
        {/* Content automatically adapts to theme */}
      </main>
    </div>
  )
}
```

### Example 2: Programmatic Theme Change

```tsx
"use client"

import { useState } from "react"

export function ThemeDemo() {
  const setTheme = (theme: 'light' | 'dark') => {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}
```

### Example 3: Detect Current Theme

```tsx
"use client"

import { useEffect, useState } from "react"

export function ThemeIndicator() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  return <div>Current theme: {theme}</div>
}
```

---

## Customization

### Change Toggle Position

Edit `components/docs/docs-wrapper.tsx`:

```tsx
// Current: Top-right corner
<div className="flex items-center space-x-2">
  <ThemeToggle />
</div>

// Option 1: Left side
<div className="flex items-center">
  <ThemeToggle />
  <div className="ml-auto">{/* Other content */}</div>
</div>

// Option 2: Bottom
<footer>
  <ThemeToggle />
</footer>
```

### Customize Dropdown Labels

Edit `components/theme-toggle.tsx`:

```tsx
<DropdownMenuItem onClick={() => handleThemeChange("light")}>
  <Sun className="mr-2 h-4 w-4" />
  <span>Light Mode</span>  {/* Change label */}
</DropdownMenuItem>

<DropdownMenuItem onClick={() => handleThemeChange("dark")}>
  <Moon className="mr-2 h-4 w-4" />
  <span>Dark Mode</span>  {/* Change label */}
</DropdownMenuItem>
```

### Customize Icons

Replace Lucide icons with custom SVGs:

```tsx
import { Moon, Sun } from "lucide-react"

// Replace with custom icons
import CustomSunIcon from "@/icons/sun.svg"
import CustomMoonIcon from "@/icons/moon.svg"

<Button variant="ghost" size="icon">
  <CustomSunIcon className="h-5 w-5 dark:hidden" />
  <CustomMoonIcon className="h-5 w-5 hidden dark:block" />
</Button>
```

---

## System Theme Detection

The toggle automatically detects system preferences when "System" is selected:

```tsx
React.useEffect(() => {
  if (theme === "system") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    // Listen for system theme changes
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }
}, [theme])
```

**Result**: Theme updates automatically when user changes system settings.

---

## Accessibility

Both components follow WCAG accessibility guidelines:

✅ **Keyboard Navigation**
- Tab to focus
- Enter/Space to activate
- Arrow keys in dropdown

✅ **Screen Reader Support**
- ARIA labels on buttons
- Semantic HTML
- Clear announcements

✅ **Focus Indicators**
- Visible focus ring
- High contrast states

```tsx
<Button
  variant="ghost"
  size="icon"
  aria-label="Toggle theme"  // Screen reader
>
  <Sun className="h-5 w-5" />
  <span className="sr-only">Toggle theme</span>  // Screen reader only
</Button>
```

---

## Troubleshooting

### Flash of Wrong Theme (FOUC)

**Problem**: Page briefly shows wrong theme before switching

**Solution**: Ensure theme script runs `beforeInteractive`:

```tsx
<Script id="theme-script" strategy="beforeInteractive">
  {/* Theme detection code */}
</Script>
```

### Theme Not Persisting

**Problem**: Theme resets on page reload

**Solution**: Check localStorage is not blocked:

```tsx
// Test localStorage
try {
  localStorage.setItem('test', 'test')
  localStorage.removeItem('test')
  console.log('localStorage works')
} catch (e) {
  console.error('localStorage blocked')
}
```

### Hydration Mismatch

**Problem**: "Hydration failed" error in console

**Solution**: Use `suppressHydrationWarning` on html element:

```tsx
<html lang="en" suppressHydrationWarning>
```

### System Theme Not Updating

**Problem**: Theme doesn't change when OS setting changes

**Solution**: Check media query listener is attached:

```tsx
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
mediaQuery.addEventListener("change", handleChange)
```

---

## Testing

### Manual Testing Checklist

- [ ] Toggle switches between light and dark
- [ ] Theme persists after page reload
- [ ] System theme option works
- [ ] No flash of wrong theme
- [ ] Keyboard navigation works
- [ ] Screen reader announces changes
- [ ] Works in all major browsers

### Browser DevTools

Test system theme changes:

**Chrome/Edge**:
1. Open DevTools (F12)
2. Click ⋮ menu → More tools → Rendering
3. Find "Emulate CSS media feature prefers-color-scheme"
4. Select light/dark/no preference

**Firefox**:
1. about:config
2. Search `ui.systemUsesDarkTheme`
3. Toggle value (0 = light, 1 = dark)

---

## Complete Code Reference

See source files:
- `components/theme-toggle.tsx` - Full dropdown toggle
- `components/theme-toggle-simple.tsx` - Simple toggle
- `components/theme-provider.tsx` - Theme initialization
- `app/layout.tsx` - Theme script injection
- `components/docs/docs-wrapper.tsx` - Integration example

Related documentation:
- [MODES-GUIDE.md](./MODES-GUIDE.md) - Color modes overview
- [TOKEN-USAGE-GUIDE.md](./TOKEN-USAGE-GUIDE.md) - Design tokens usage
