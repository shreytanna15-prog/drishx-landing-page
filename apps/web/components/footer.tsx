import * as React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0F14] px-6 py-12 lg:px-12">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center justify-between gap-6 border-b border-white/[0.06] pb-8 md:flex-row">
        {/* Brand Logo Mark + Wordmark */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F0A132]/40 bg-[#0F1620]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#F0A132]"></div>
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-[#EAF0FA]">
            Drish<span className="text-[#F0A132]">X</span>
          </span>
          <span className="pl-2 font-mono text-xs text-[#AAB2C0]/60">
            · Optical Wholesale Platform
          </span>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center gap-7 text-xs text-[#AAB2C0]">
          <a className="transition-colors hover:text-[#EAF0FA]" href="#catalog">
            Catalog
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#dual-screens">
            Apps
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#">
            Privacy Policy
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#">
            Terms of Service
          </a>
        </nav>

        {/* Live Lab Status */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#AAB2C0]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>
            LAB DISPATCH STATUS:{" "}
            <span className="font-semibold text-[#F0A132]">OPTIMAL</span>
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-xs text-[#AAB2C0]/50 sm:flex-row">
        <div>© 2026 DrishX Optical Wholesale Inc. All rights reserved.</div>
        <div>Designed exclusively for optical retailers and dispensing counters.</div>
      </div>
    </footer>
  )
}
