"use client"

import * as React from "react"
import { ArrowRight, ChevronRight, PenTool } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

interface LensCategory {
  id: string
  num: string
  tag: string
  title: string
  subtitle: string
  powerRange: string
  indexOptions: string
  dispatchSpeed: string
  coating: string
  description: string
  note: string
}

const CATEGORIES: LensCategory[] = [
  {
    id: "single-vision",
    num: "01 · ACTIVE BENCH",
    tag: "Ready Stock",
    title: "Single Vision",
    subtitle: "Instant Counter Stock · Polycarbonate & Hard-Coated CR-39",
    powerRange: "-8.00 to +6.00 SPH | CYL up to -4.00",
    indexOptions: "1.56, 1.60, 1.67 MR-8, 1.74 Polycarb",
    dispatchSpeed: "Same-Day Counter Dispatch (< 2 Hrs)",
    coating: "Super Hydrophobic + AR Warm Gold",
    description: "Standard diameter blanks with factory-aligned optical center and hydrophobic hard coat.",
    note: "Ready in bulk pairs straight to dispensary tray",
  },
  {
    id: "blue-cut",
    num: "02 · FILTERED",
    tag: "420nm UV Cut",
    title: "Blue-Cut & Anti-Glare",
    subtitle: "Warm Amber Shield · Zero residual green reflections",
    powerRange: "-6.00 to +4.00 SPH | CYL up to -2.00",
    indexOptions: "1.56, 1.60 Hi-Impact, 1.67 Aspheric",
    dispatchSpeed: "Same-Day Dispatch (< 3 Hrs)",
    coating: "Warm Amber Blue-Filter + Electrostatic Shield",
    description: "High-clarity 420nm blue light absorption monomer with crisp amber glare suppression.",
    note: "Optimal for computer users and high-illumination counters",
  },
  {
    id: "progressive",
    num: "03 · PROGRESSIVE",
    tag: "12-16mm Corridor",
    title: "Progressive Freeform",
    subtitle: "Smooth Power Gradients · Ultra-wide reading corridor",
    powerRange: "Add +0.75 to +3.50 | Distance SPH ±8.00",
    indexOptions: "1.56, 1.60, 1.67 MR-8 Digital",
    dispatchSpeed: "Direct Lab Surfacing (< 24 Hrs)",
    coating: "Digital Point-by-Point Freeform Hard Coat",
    description: "Back-surface digital freeform geometry calculated per prescription for zero swim effect.",
    note: "Prescription corridor laser-engraved with micro alignment dots",
  },
  {
    id: "custom-rx",
    num: "04 · PRECISION LAB",
    tag: "1.67 / 1.74 Hi-Index",
    title: "Custom Lab RX",
    subtitle: "Precision Edge Surfacing · High astigmatism & prism cut",
    powerRange: "High CYL up to -6.00 | Custom Prism 0.5–6Δ",
    indexOptions: "1.67 MR-7, 1.74 Ultra-Thin, Polycarbonate",
    dispatchSpeed: "Specialist Rx Lab (< 36 Hrs)",
    coating: "Multi-layer Anti-Reflective + Diamond Hydrophobic",
    description: "Specialized lab generators for high-power prescriptions, slab-off, and heavy prism corrections.",
    note: "Individually calipered and stress-tested before dispatch",
  },
]

export function CatalogSection() {
  const [activeId, setActiveId] = React.useState("single-vision")
  const active = CATEGORIES.find((c) => c.id === activeId) || CATEGORIES[0]!

  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12" id="catalog">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
              [ PRECISION CATALOG ]
            </div>
            <h2 className="font-heading text-3xl font-normal tracking-tight text-[#EAF0FA] sm:text-4xl lg:text-5xl">
              Direct Lab Power Stocks Ready for Counter Dispatch
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#AAB2C0]">
            Raw factory batches calibrated for prompt optical shop delivery. Uncut, surfaced, and certified under digital ISO optical standards.
          </p>
        </div>

        {/* 2-Column Showcase Matrix */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Category Selector List */}
          <div className="flex flex-col justify-between gap-3.5 lg:col-span-5">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveId(cat.id)}
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "group relative cursor-pointer rounded-2xl p-5 transition-all duration-300",
                    isActive
                      ? "border-2 border-[#F0A132]/70 bg-[#0F1620] shadow-[0_0_20px_rgba(240,161,50,0.15)]"
                      : "border border-white/8 bg-[#0F1620] hover:border-[#F0A132]/40 hover:bg-[#0F1620]/60"
                  )}
                >
                  {isActive && (
                    <div className="absolute top-3 bottom-3 left-0 w-1.5 rounded-r bg-[#F0A132]" />
                  )}
                  <div className={cn("mb-1.5 flex items-center justify-between", isActive && "pl-2")}>
                    <span
                      className={cn(
                        "font-mono text-xs tracking-wider uppercase",
                        isActive ? "font-semibold text-[#F0A132]" : "text-[#AAB2C0]/60"
                      )}
                    >
                      {cat.num}
                    </span>
                    <span
                      className={cn(
                        "rounded px-2 py-0.5 font-mono text-[10px]",
                        isActive
                          ? "border border-[#F0A132]/40 bg-[#F0A132]/20 text-[#F0A132]"
                          : "border border-white/10 bg-white/5 text-[#AAB2C0]"
                      )}
                    >
                      {cat.tag}
                    </span>
                  </div>

                  <div className={cn("flex items-center justify-between", isActive && "pl-2")}>
                    <h4
                      className={cn(
                        "font-heading text-2xl font-medium transition-colors",
                        isActive ? "text-[#EAF0FA]" : "text-[#EAF0FA] group-hover:text-[#F0A132]"
                      )}
                    >
                      {cat.title}
                    </h4>
                    {isActive ? (
                      <ArrowRight className="h-5 w-5 text-[#F0A132]" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-[#AAB2C0]/60 transition-colors group-hover:text-[#F0A132]" />
                    )}
                  </div>

                  <p className={cn("mt-1 text-xs text-[#AAB2C0]", isActive && "pl-2")}>
                    {cat.subtitle}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right: Active Optical Lens Display Stage */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F0A132]/25 bg-[#0F1620]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-9 lg:col-span-7">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F0A132]/10 blur-3xl" />

            {/* Display Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <span className="block font-mono text-[11px] tracking-wider text-[#F0A132] uppercase">
                  Active Selection Stage
                </span>
                <h3 className="font-heading text-3xl font-semibold text-[#EAF0FA]">
                  {active.title} Calibration
                </h3>
              </div>
              <span className="rounded-full border border-[#F0A132]/30 bg-[#F0A132]/15 px-3 py-1 font-mono text-xs text-[#F0A132]">
                ISO 8980-1 Certified
              </span>
            </div>

            {/* Centerpiece Optical Graphic & Notes */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-8 md:flex-row">
              {/* Rotating Lens Graphic with Doodle Placeholder */}
              <div className="relative flex h-56 w-56 items-center justify-center">
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border border-[#F0A132]/30" />
                <div className="absolute inset-3 rounded-full border border-dashed border-white/20" />
                <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-[#F0A132]/60 bg-[#0B0F14]/80 shadow-[0_0_25px_rgba(240,161,50,0.2)]">
                  {/* Subtle crosshairs */}
                  <div className="absolute inset-x-0 top-1/2 h-px bg-[#F0A132]/30" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-[#F0A132]/30" />
                  {/* Arc reflection */}
                  <div className="absolute top-3 left-6 h-8 w-16 -rotate-12 rounded-full border-t border-l border-[#F0A132]/70 blur-[0.5px]" />

                  {/* Doodle Placeholder Text */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#F0A132] uppercase">
                      Doodle
                    </span>
                    <span className="mt-0.5 text-[9px] text-[#AAB2C0]/60">
                      will be here
                    </span>
                  </div>

                  <span className="absolute bottom-2 font-mono text-[9px] text-[#F0A132]/80">
                    Ø 70/75mm
                  </span>
                </div>
              </div>

              {/* Specification Card */}
              <div className="flex max-w-xs flex-col gap-2 font-sans text-xs">
                <div className="rounded-xl border border-white/6 bg-[#0B0F14] p-3">
                  <div className="font-mono text-[10px] text-[#AAB2C0] uppercase">
                    Direct Lab Power Calibration
                  </div>
                  <div className="mt-0.5 font-semibold text-[#EAF0FA]">
                    {active.title} Finished Blanks
                  </div>
                  <div className="mt-1 text-[11px] text-[#AAB2C0]/80">
                    {active.description}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-[#F0A132]/30 bg-[#F0A132]/[0.07] p-2.5 font-mono text-[11px] text-[#F0A132]">
                  <PenTool className="h-4 w-4 shrink-0" />
                  <span>{active.note}</span>
                </div>
              </div>
            </div>

            {/* Spec Matrix Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-3 border-t border-white/8 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/6 bg-[#0B0F14]/70 p-3">
                <span className="block font-mono text-[10px] text-[#AAB2C0] uppercase">Power Range</span>
                <span className="mt-0.5 block text-xs font-semibold text-[#EAF0FA]">{active.powerRange}</span>
              </div>
              <div className="rounded-xl border border-white/6 bg-[#0B0F14]/70 p-3">
                <span className="block font-mono text-[10px] text-[#AAB2C0] uppercase">Index Options</span>
                <span className="mt-0.5 block text-xs font-semibold text-[#EAF0FA]">{active.indexOptions}</span>
              </div>
              <div className="rounded-xl border border-white/6 bg-[#0B0F14]/70 p-3">
                <span className="block font-mono text-[10px] text-[#AAB2C0] uppercase">Dispatch Speed</span>
                <span className="mt-0.5 block text-xs font-semibold text-[#F0A132]">{active.dispatchSpeed}</span>
              </div>
              <div className="rounded-xl border border-white/6 bg-[#0B0F14]/70 p-3">
                <span className="block font-mono text-[10px] text-[#AAB2C0] uppercase">Coating</span>
                <span className="mt-0.5 block text-xs font-semibold text-[#EAF0FA]">{active.coating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
