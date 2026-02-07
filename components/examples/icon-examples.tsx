/**
 * Icon Examples - Lucide React & Tabler Icons React
 *
 * This file demonstrates how to use both icon libraries in the project.
 */

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// Lucide React Icons
import {
  Home,
  User,
  Settings,
  Mail,
  Bell,
  Search,
  Heart,
  Star,
  Download,
  Upload,
  Trash2,
  Edit,
  Plus,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  File,
  Folder,
  Image,
  Video,
  Music,
  Camera,
  Lock,
  Unlock,
  Eye,
  EyeOff,
} from 'lucide-react'

// Tabler Icons React
import {
  IconHome,
  IconUser,
  IconSettings,
  IconMail,
  IconBell,
  IconSearch,
  IconHeart,
  IconStar,
  IconDownload,
  IconUpload,
  IconTrash,
  IconEdit,
  IconPlus,
  IconCheck,
  IconX,
  IconChevronRight,
  IconChevronLeft,
  IconChevronUp,
  IconChevronDown,
  IconArrowRight,
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconFile,
  IconFolder,
  IconPhoto,
  IconVideo,
  IconMusic,
  IconCamera,
  IconLock,
  IconLockOpen,
  IconEye,
  IconEyeOff,
} from '@tabler/icons-react'

export function IconExamples() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Icon Library Examples</h1>
        <p className="text-muted-foreground">
          Demonstrating Lucide React and Tabler Icons React
        </p>
      </div>

      {/* Lucide React Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Lucide React Icons</CardTitle>
          <CardDescription>
            Beautiful & consistent icon toolkit made by the Lucide community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Navigation Icons */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Navigation</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Home className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <User className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">User</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Settings className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Mail className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Mail</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Bell className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Bell</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Search className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Search</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Actions</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Star className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Star</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Download className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Download</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Upload className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Upload</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Trash2 className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Trash</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Edit className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Edit</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Arrows & Chevrons */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Arrows & Chevrons</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <ChevronRight className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Right</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ChevronLeft className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Left</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ChevronUp className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Up</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ChevronDown className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Down</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArrowRight className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Arrow R</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArrowLeft className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Arrow L</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabler Icons React */}
      <Card>
        <CardHeader>
          <CardTitle>Tabler Icons React</CardTitle>
          <CardDescription>
            Over 5200 pixel-perfect icons for web design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Navigation Icons */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Navigation</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <IconHome className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconUser className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">User</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconSettings className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconMail className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Mail</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconBell className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Bell</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconSearch className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Search</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Actions</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <IconHeart className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconStar className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Star</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconDownload className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Download</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconUpload className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Upload</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconTrash className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Trash</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconEdit className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Edit</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Arrows & Chevrons */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Arrows & Chevrons</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <IconChevronRight className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Right</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconChevronLeft className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Left</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconChevronUp className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Up</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconChevronDown className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Down</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconArrowRight className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Arrow R</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconArrowLeft className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Arrow L</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card>
        <CardHeader>
          <CardTitle>Size Variations</CardTitle>
          <CardDescription>
            Icons can be sized using className or size prop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Lucide Sizes */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Lucide React (className)</h3>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs text-muted-foreground">h-4 w-4</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">h-6 w-6</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-8 w-8" />
                  <span className="text-xs text-muted-foreground">h-8 w-8</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-12 w-12" />
                  <span className="text-xs text-muted-foreground">h-12 w-12</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tabler Sizes */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Tabler Icons (size prop or className)</h3>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  <IconHeart size={16} />
                  <span className="text-xs text-muted-foreground">size=16</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconHeart size={24} />
                  <span className="text-xs text-muted-foreground">size=24</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconHeart size={32} />
                  <span className="text-xs text-muted-foreground">size=32</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconHeart size={48} />
                  <span className="text-xs text-muted-foreground">size=48</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color & Stroke */}
      <Card>
        <CardHeader>
          <CardTitle>Colors & Stroke Width</CardTitle>
          <CardDescription>
            Customize icon appearance with Tailwind classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Colors</h3>
              <div className="flex items-center gap-6">
                <Star className="h-8 w-8 text-primary" />
                <Star className="h-8 w-8 text-destructive" />
                <Star className="h-8 w-8 text-yellow-500" />
                <Star className="h-8 w-8 text-green-500" />
                <Star className="h-8 w-8 text-blue-500" />
                <Star className="h-8 w-8 text-purple-500" />
              </div>
            </div>

            <Separator />

            {/* Stroke Width (Lucide) */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Stroke Width (Lucide)</h3>
              <div className="flex items-center gap-6">
                <Heart className="h-8 w-8" strokeWidth={1} />
                <Heart className="h-8 w-8" strokeWidth={1.5} />
                <Heart className="h-8 w-8" strokeWidth={2} />
                <Heart className="h-8 w-8" strokeWidth={2.5} />
                <Heart className="h-8 w-8" strokeWidth={3} />
              </div>
            </div>

            <Separator />

            {/* Stroke Width (Tabler) */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Stroke Width (Tabler)</h3>
              <div className="flex items-center gap-6">
                <IconHeart size={32} stroke={1} />
                <IconHeart size={32} stroke={1.5} />
                <IconHeart size={32} stroke={2} />
                <IconHeart size={32} stroke={2.5} />
                <IconHeart size={32} stroke={3} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Lucide React</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { Heart, Star, Home } from 'lucide-react'

// Basic usage
<Heart className="h-6 w-6" />

// With color
<Star className="h-6 w-6 text-yellow-500" />

// With stroke width
<Home className="h-6 w-6" strokeWidth={2} />`}
            </pre>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Tabler Icons React</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { IconHeart, IconStar, IconHome } from '@tabler/icons-react'

// Basic usage
<IconHeart size={24} />

// With color
<IconStar size={24} className="text-yellow-500" />

// With stroke width
<IconHome size={24} stroke={2} />`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
