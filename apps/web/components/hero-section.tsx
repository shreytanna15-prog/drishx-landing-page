import * as React from "react"
import { Download, ExternalLink, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden border-b border-[#F0A132]/10 px-6 py-16 lg:px-12 lg:py-24">
      {/* Caustic Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#F0A132]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[480px] w-[480px] rounded-full bg-[#F0A132]/[0.07] blur-[160px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left (~55%): Hero Pitch */}
        <div className="z-10 flex flex-col items-start lg:col-span-7">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F0A132]/30 bg-[#0F1620] px-3.5 py-1 font-mono text-xs tracking-wider text-[#F0A132] uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F0A132]" />
            B2B OPTICAL WHOLESALE
          </div>

          <h1 className="font-heading mb-6 text-4xl font-normal tracking-[-0.02em] text-[#EAF0FA] sm:text-5xl lg:text-[62px] lg:leading-[1.1]">
            Wholesale Optical Lenses. Ordered in Seconds, Delivered to Your Counter.
          </h1>

          <p className="mb-9 max-w-xl text-base leading-relaxed text-[#AAB2C0] sm:text-lg">
            Browse live factory inventory, order prescription and stock uncut lenses straight
            from your counter desktop or mobile phone, and track every dispatch in real time.
          </p>

          {/* CTA Group */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#F0A132] px-6 py-3.5 text-sm font-semibold text-[#0B0F14] shadow-[0_4px_20px_rgba(240,161,50,0.25)] transition-all hover:bg-[#E8941F] sm:text-base"
              href="#dock"
            >
              <Download className="h-5 w-5" />
              Download Mobile App
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-medium text-white/90 transition-all hover:border-[#F0A132]/40 hover:bg-[#0F1620]/50 sm:text-base"
              href="#dual-screens"
            >
              <ExternalLink className="h-4 w-4 text-[#F0A132]" />
              Open Web Portal
            </a>
          </div>

          {/* Reassurance Note */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#AAB2C0]/80">
            <ShieldCheck className="h-4 w-4 text-[#F0A132]" />
            <span>Built exclusively for optical retailers &amp; eye care shops · Instant shop counter setup</span>
          </div>
        </div>

        {/* Right (~45%): Cinematic Optical Glass Showcase with Doodle Mascot */}
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="optical-reticle shadow-lens-glow relative flex h-[480px] w-full max-w-[440px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-[#F0A132]/20 bg-[#0F1620]/90 p-7 backdrop-blur-xl">
            {/* Shimmer Overlay */}
            <div className="lens-shimmer pointer-events-none absolute inset-0 opacity-60" />

            {/* Reticle Calibration Header */}
            <div className="z-10 flex w-full items-center justify-between font-mono text-[11px] text-[#AAB2C0]/70">
              <span className="flex items-center gap-1.5 text-[#F0A132]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F0A132]" />
                REFRACTIVE STAGE
              </span>
              <span className="rounded border border-white/10 bg-[#0B0F14]/60 px-2 py-0.5">
                Ø 75mm · AR: 99.4%
              </span>
            </div>

            {/* Optical Centerpiece with DrishX Doodle Mascot */}
            <div className="relative my-auto flex h-64 w-64 items-center justify-center">
              {/* Outer Diopter Ring */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full border border-[#F0A132]/25">
                <div className="h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-[#F0A132]/30" />
              </div>
              <div className="absolute inset-4 rounded-full border border-white/10 bg-[#0B0F14]/40 backdrop-blur-sm" />

              {/* Refractive Highlight Arc */}
              <div className="absolute top-6 left-10 h-12 w-24 -rotate-12 rounded-full border-t-2 border-l border-[#F0A132]/70 blur-[0.5px]" />

              {/* Hand-Drawn Doodle Lens Mascot SVG */}
              <svg
                aria-label="DrishX Doodle Mascot"
                className="relative z-20 h-48 w-48"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lens Body */}
                <circle
                  cx="100"
                  cy="100"
                  fill="#0B0F14"
                  fillOpacity="0.92"
                  r="54"
                  stroke="#F0A132"
                  strokeWidth="2.5"
                />
                {/* Internal Curvature Highlight */}
                <path
                  d="M72 70 A 42 42 0 0 1 128 70"
                  stroke="rgba(240, 161, 50, 0.45)"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                {/* Doodle Trial Frame Glasses */}
                <g stroke="#EAF0FA" strokeLinecap="round" strokeWidth="2.2">
                  <circle cx="83" cy="95" r="14" stroke="#EAF0FA" />
                  <circle cx="117" cy="95" r="14" stroke="#EAF0FA" />
                  <path d="M97 93 Q 100 89 103 93" />
                  <line x1="69" x2="65" y1="95" y2="95" />
                  <line x1="131" x2="135" y1="95" y2="95" />
                </g>
                {/* Expressive Doodle Eyes */}
                <circle cx="83" cy="95" fill="#F0A132" r="3.5" />
                <circle cx="117" cy="95" fill="#F0A132" r="3.5" />
                <circle cx="81.5" cy="93.5" fill="#FFFFFF" r="1" />
                <circle cx="115.5" cy="93.5" fill="#FFFFFF" r="1" />
                {/* Smile */}
                <path
                  d="M92 118 Q 100 126 108 118"
                  stroke="#F0A132"
                  strokeLinecap="round"
                  strokeWidth="2.6"
                />
                {/* Stick Arms */}
                <path
                  d="M46 108 Q 32 94 36 78"
                  stroke="#AAB2C0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
                <path
                  d="M36 78 L 32 80"
                  stroke="#AAB2C0"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                />
                <path
                  d="M36 78 L 38 72"
                  stroke="#AAB2C0"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                />
                {/* Arm holding Loupe */}
                <path
                  d="M154 108 Q 166 116 172 102"
                  stroke="#AAB2C0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
                <circle cx="174" cy="98" r="6" stroke="#F0A132" strokeWidth="1.8" />
                <line
                  stroke="#AAB2C0"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="172"
                  x2="167"
                  y1="102"
                  y2="108"
                />
              </svg>

              {/* Axis indicator */}
              <span className="absolute bottom-3 font-mono text-[10px] tracking-widest text-[#F0A132]/80">
                AXIS: 180° · SPH: -2.75
              </span>
            </div>

            {/* Bottom Slot Label */}
            <div className="z-10 flex w-full items-center justify-between border-t border-white/[0.06] pt-3">
              <span className="font-mono text-[11px] tracking-wider text-[#AAB2C0] uppercase">
                [ ANIMATED DOODLE LENS CHARACTER ]
              </span>
              <span className="rounded-md border border-[#F0A132]/30 bg-[#F0A132]/15 px-2.5 py-1 font-mono text-[10px] text-[#F0A132]">
                Mascot &amp; Refraction Slot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
