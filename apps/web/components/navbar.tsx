"use client"

import * as React from "react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#F0A132]/10 bg-[#0B0F14]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Aperture + Wordmark */}
        <Link className="group flex items-center gap-3.5" href="#">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#F0A132]/40 bg-[#0F1620] shadow-[0_0_15px_rgba(240,161,50,0.2)] transition-colors group-hover:border-[#F0A132]">
            <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#F0A132]/80">
              <div className="h-1.5 w-1.5 rounded-full bg-[#F0A132]"></div>
            </div>
            {/* Aperture notches */}
            <span className="absolute top-0.5 h-0.5 w-1 bg-[#F0A132]/50"></span>
            <span className="absolute bottom-0.5 h-0.5 w-1 bg-[#F0A132]/50"></span>
            <span className="absolute left-0.5 h-1 w-0.5 bg-[#F0A132]/50"></span>
            <span className="absolute right-0.5 h-1 w-0.5 bg-[#F0A132]/50"></span>
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight text-[#EAF0FA]">
            Drish<span className="text-[#F0A132]">X</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-9 text-sm tracking-wide text-[#AAB2C0] md:flex">
          <a className="transition-colors hover:text-[#EAF0FA]" href="#catalog">
            Catalog
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#dual-screens">
            Apps
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#dock">
            Support
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-6 sm:gap-7">
          <a
            className="text-sm font-medium text-[#AAB2C0] transition-colors hover:text-[#EAF0FA]"
            href="#dock"
          >
            Login
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg bg-[#F0A132] px-4 py-2 text-sm font-semibold text-[#0B0F14] shadow-sm transition-colors hover:bg-[#E8941F]"
            href="#dock"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  )
}
