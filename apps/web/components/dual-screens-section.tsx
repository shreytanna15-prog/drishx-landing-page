import * as React from "react"
import { Receipt, MessageSquare, Bell } from "lucide-react"

export function DualScreensSection() {
  const stockItems = [
    { power: "SPH -0.50", qty: "14 Prs", isLow: false },
    { power: "SPH -0.75", qty: "22 Prs", isLow: false },
    { power: "SPH -1.00", qty: "30 Prs", isLow: false },
    { power: "SPH -1.25", qty: "18 Prs", isLow: false },
    { power: "SPH -1.50", qty: "25 Prs", isLow: false },
    { power: "SPH -1.75", qty: "Low (4)", isLow: true },
  ]

  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12" id="dual-screens">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ MULTI-SCREEN SYNC ]
          </div>
          <h2 className="font-heading mb-4 text-3xl font-normal tracking-tight text-[#EAF0FA] sm:text-4xl lg:text-5xl">
            One Shop Account. Everywhere You Dispense.
          </h2>
          <p className="text-base text-[#AAB2C0]">
            In your pocket on the go, or on your billing counter desktop. One synchronized shop account.
          </p>
        </div>

        {/* Layered Composition */}
        <div className="relative mx-auto mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
          {/* Background: Desktop Portal Mockup */}
          <div className="z-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0F1620] shadow-2xl lg:w-[82%]">
            {/* Browser Header */}
            <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-[#0B0F14]/80 px-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-4 font-mono text-[11px] text-[#AAB2C0]/60">
                  drishx.internal/counter-portal/inventory
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#F0A132]">
                LIVE LAB SYNC: CONNECTED
              </span>
            </div>

            {/* Desktop Dashboard Interface */}
            <div className="bg-[#0C121A] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div>
                  <div className="font-mono text-xs text-[#F0A132]">
                    SHOP DESK: OPTICS EXPRESS #08
                  </div>
                  <div className="text-lg font-medium text-[#EAF0FA]">
                    Bulk Diopter Power Matrix (Uncut CR-39 1.56 HMC)
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="rounded border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-[#AAB2C0]">
                    SPH / CYL GRID
                  </span>
                  <span className="rounded bg-[#F0A132] px-3 py-1 text-xs font-semibold text-[#0B0F14]">
                    Re-Order All
                  </span>
                </div>
              </div>

              {/* Matrix Grid */}
              <div className="mb-6 grid grid-cols-3 gap-2 text-center font-mono text-xs sm:grid-cols-6">
                {stockItems.map((item) => (
                  <div
                    key={item.power}
                    className={`rounded border p-2 ${
                      item.isLow
                        ? "border-[#F0A132]/40 bg-[#F0A132]/[0.08]"
                        : "border-white/[0.05] bg-[#0B0F14]"
                    }`}
                  >
                    <span className="block text-[10px] text-[#AAB2C0]">{item.power}</span>
                    <span className="font-semibold text-[#F0A132]">{item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Status Row */}
              <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-[#0B0F14] p-3">
                  <div className="flex items-center gap-2.5">
                    <Receipt className="h-4 w-4 text-[#F0A132]" />
                    <div>
                      <div className="font-medium text-[#EAF0FA]">Inv #DX-9402 · 18 Pairs</div>
                      <div className="text-[10px] text-[#AAB2C0]">Single Vision HC + BlueBlock</div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400">DISPATCHED</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-[#0B0F14] p-3">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="h-4 w-4 text-[#F0A132]" />
                    <div>
                      <div className="font-medium text-[#EAF0FA]">Direct Optical Surfacing Desk</div>
                      <div className="text-[10px] text-[#AAB2C0]">Lab Tech: &quot;Prism bevel confirmed for #9403&quot;</div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-[#F0A132]">ACTIVE CHAT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Foreground: Smartphone Frame */}
          <div className="relative z-20 w-72 rounded-[32px] border-[3px] border-[#F0A132]/40 bg-[#0B0F14] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:w-80 lg:-ml-28">
            <div className="w-full rounded-[24px] border border-white/[0.08] bg-[#0F1620] p-4">
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F0A132]/40 bg-[#F0A132]/20">
                    <span className="text-[9px] font-bold text-[#F0A132]">DX</span>
                  </div>
                  <span className="font-heading text-sm font-bold text-[#EAF0FA]">DrishX Mobile</span>
                </div>
                <Bell className="h-4 w-4 text-[#AAB2C0]" />
              </div>

              {/* Quick Selector */}
              <div className="mb-3 rounded-xl border border-white/[0.06] bg-[#0B0F14] p-3">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-[#AAB2C0]">
                  <span>QUICK RE-ORDER</span>
                  <span className="text-[#F0A132]">LEFT / RIGHT</span>
                </div>
                <div className="flex items-center justify-between text-center">
                  <div className="rounded border border-[#F0A132]/30 bg-[#0F1620] px-2 py-1 font-mono text-xs text-[#F0A132]">
                    -2.25 D
                  </div>
                  <span className="text-xs text-[#AAB2C0]">x</span>
                  <div className="rounded border border-[#F0A132]/30 bg-[#0F1620] px-2 py-1 font-mono text-xs text-[#F0A132]">
                    90° AXIS
                  </div>
                  <button className="rounded bg-[#F0A132] px-2.5 py-1.5 text-[10px] font-bold text-[#0B0F14]">
                    Add
                  </button>
                </div>
              </div>

              {/* Dispatch ETA */}
              <div className="rounded-xl border border-[#F0A132]/20 bg-[#0B0F14] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#F0A132]" />
                  <span className="text-[11px] font-medium text-[#EAF0FA]">
                    Courier Arriving at Store
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#AAB2C0]">
                  <span>Batch #4802 (3 Pkgs)</span>
                  <span className="font-mono font-semibold text-[#F0A132]">ETA: 24 mins</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0F1620]">
                  <div className="h-full w-[78%] bg-[#F0A132]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
