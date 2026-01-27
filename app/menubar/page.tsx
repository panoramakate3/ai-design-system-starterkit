"use client"

import { Separator } from "@/components/ui/separator"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [position, setPosition] = useState("bottom")

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Menubar"
        description="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/menubar"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Menubar */}
        <ShowcaseSection title="Basic Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
                  Show Bookmarks Bar <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
                  Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Fullscreen</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={position} onValueChange={setPosition}>
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>

        <Separator />

        {/* With Submenus */}
        <ShowcaseSection title="With Submenus">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email Link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>

        <Separator />

        {/* Application Menu */}
        <ShowcaseSection title="Application Menu">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>App</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>About App</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Services</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Import Bookmarks</MenubarItem>
                    <MenubarItem>Export Bookmarks</MenubarItem>
                    <MenubarItem>Sync Settings</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Hide App <MenubarShortcut>⌘H</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Hide Others</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Quit App</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open... <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Save As...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Window</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Minimize</MenubarItem>
                <MenubarItem>Zoom</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Bring All to Front</MenubarItem>
                <MenubarSeparator />
                <MenubarItem disabled>Window 1</MenubarItem>
                <MenubarItem>Window 2</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>Keyboard Shortcuts</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Report a Bug</MenubarItem>
                <MenubarItem>Contact Support</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>

        <Separator />

        {/* Editor Menu */}
        <ShowcaseSection title="Editor Menu">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New File <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Folder <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Open File... <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Open Folder...</MenubarItem>
                <MenubarItem>Open Recent</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Save All</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Find <MenubarShortcut>⌘F</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Replace <MenubarShortcut>⌥⌘F</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Selection</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Select All <MenubarShortcut>⌘A</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Expand Selection</MenubarItem>
                <MenubarItem>Shrink Selection</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Copy Line Up <MenubarShortcut>⇧⌥↑</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy Line Down <MenubarShortcut>⇧⌥↓</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Move Line Up <MenubarShortcut>⌥↑</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Move Line Down <MenubarShortcut>⌥↓</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Command Palette <MenubarShortcut>⇧⌘P</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Toggle Sidebar <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Toggle Panel</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Appearance</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Zoom In</MenubarItem>
                    <MenubarItem>Zoom Out</MenubarItem>
                    <MenubarItem>Reset Zoom</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Full Screen</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>

        <Separator />

        {/* Browser Menu */}
        <ShowcaseSection title="Browser Menu">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Chrome</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>About Chrome</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Settings <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Extensions</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Manage Extensions</MenubarItem>
                    <MenubarItem>Visit Chrome Web Store</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Clear Browsing Data <MenubarShortcut>⇧⌘⌫</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Quit Chrome <MenubarShortcut>⌘Q</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Incognito Window <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Open Location... <MenubarShortcut>⌘L</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open File... <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Close Tab <MenubarShortcut>⌘W</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Close Window <MenubarShortcut>⇧⌘W</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save Page As... <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste and Match Style <MenubarShortcut>⇧⌘V</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Select All <MenubarShortcut>⌘A</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Find... <MenubarShortcut>⌘F</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem>
                  Reload This Page <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Force Reload This Page <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Actual Size <MenubarShortcut>⌘0</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Developer Tools <MenubarShortcut>⌥⌘I</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>History</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Home</MenubarItem>
                <MenubarItem>Back</MenubarItem>
                <MenubarItem>Forward</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Show Full History</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="person-1">
                  <MenubarRadioItem value="person-1">Person 1</MenubarRadioItem>
                  <MenubarRadioItem value="person-2">Person 2</MenubarRadioItem>
                  <MenubarRadioItem value="guest">Guest</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>

        <Separator />

        {/* Simple Menu */}
        <ShowcaseSection title="Simple Menu">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Open</MenubarItem>
                <MenubarItem>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Exit</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>About</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
