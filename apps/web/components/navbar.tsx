"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#F0A132]/10 bg-[#0B0F14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Full Merged Brand Logo */}
        <Link className="flex items-center transition-opacity hover:opacity-90" href="#">
          <Image
            src="/drishx-logo-full.png"
            alt="DrishX"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-[#AAB2C0] md:flex">
          <a className="transition-colors hover:text-[#EAF0FA]" href="#dual-screens">
            Apps
          </a>
          <a className="transition-colors hover:text-[#EAF0FA]" href="#dock">
            Support
          </a>
          <Link className="transition-colors hover:text-[#EAF0FA]" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="transition-colors hover:text-[#EAF0FA]" href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-[#F0A132] px-4 py-2 text-xs font-semibold text-[#0B0F14] shadow-[0_2px_10px_rgba(240,161,50,0.2)] transition-all hover:bg-[#E8941F]"
            href="#dock"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  )
}
