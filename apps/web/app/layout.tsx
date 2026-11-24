import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "DrishX — Wholesale Optical Lenses | Official Platform",
  description: "Browse live factory inventory, order prescription and stock uncut lenses straight from your counter desktop or mobile phone, and track every dispatch in real time.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        geistSans.variable,
        geistMono.variable,
        cormorant.variable
      )}
    >
      <body className="min-h-screen bg-[#0B0F14] text-[#EAF0FA]">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
