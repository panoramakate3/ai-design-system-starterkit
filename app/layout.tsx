import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { DocsWrapper } from "@/components/docs/docs-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shadcn/ui Starter Kit",
  description: "A production-ready Next.js starter with shadcn/ui components, design tokens, and Tailwind CSS",
  keywords: ["nextjs", "shadcn", "ui", "tailwind", "design-system"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "shadcn/ui Starter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const savedTheme = localStorage.getItem('theme') || 'system';
              const root = document.documentElement;

              if (savedTheme === 'dark') {
                root.classList.remove('light', 'midnight');
                root.classList.add('dark');
              } else if (savedTheme === 'light') {
                root.classList.remove('dark', 'midnight');
                root.classList.add('light');
              } else if (savedTheme === 'midnight') {
                root.classList.remove('dark', 'light');
                root.classList.add('midnight');
              } else {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                root.classList.remove('dark', 'light', 'midnight');
                root.classList.add(systemTheme);
              }
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <DocsWrapper>
            {children}
          </DocsWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
