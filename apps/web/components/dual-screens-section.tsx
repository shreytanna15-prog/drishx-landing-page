"use client"

import * as React from "react"
import {
  Package,
  TrendingUp,
  Truck,
  CheckCircle2,
  Lock,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  Home,
  ShoppingBag,
  Receipt,
  ShoppingCart,
  User,
  Sparkles,
  Layers,
  Palette,
  SunMedium,
  Compass,
  Eye,
  FileText,
  RotateCcw,
  ArrowRight,
  Clock,
} from "lucide-react"

export function DualScreensSection() {
  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-28 lg:px-12" id="dual-screens">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ MULTI-SCREEN SYNC ]
          </div>
          <h2 className="font-heading mb-4 text-3xl font-normal tracking-tight text-[#EAF0FA] sm:text-4xl lg:text-5xl">
            One Shop Account. Everywhere You Dispense.
          </h2>
          <p className="text-base leading-relaxed text-[#AAB2C0]">
            In your pocket on the counter floor, or on your billing desk browser. Every stock order and prescription synced in real time.
          </p>
        </div>

        {/* Layered Interactive Showcase */}
        <div className="relative mx-auto mt-6 flex w-full max-w-6xl flex-col items-center justify-center lg:flex-row">
          {/* ========================================================= */}
          {/* 1. APPLE SAFARI / MAC BROWSER WINDOW (Desktop Customer Portal) */}
          {/* ========================================================= */}
          <div className="z-10 w-full overflow-hidden rounded-2xl border border-white/12 bg-[#0E141D] shadow-[0_35px_80px_rgba(0,0,0,0.85)] lg:w-[86%]">
            {/* macOS Window Title Bar */}
            <div className="flex h-12 items-center justify-between border-b border-white/8 bg-[#0A0E15] px-5">
              {/* Apple 3-dots window controls */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]" />
                <div className="ml-4 hidden items-center gap-2 text-white/40 sm:flex">
                  <ChevronLeft className="h-4 w-4 cursor-pointer hover:text-white/80" />
                  <ChevronRight className="h-4 w-4 cursor-pointer hover:text-white/80" />
                </div>
              </div>

              {/* Safari URL Bar */}
              <div className="mx-4 flex max-w-md flex-1 items-center justify-center gap-2 rounded-lg border border-white/6 bg-[#141A24] px-4 py-1.5 font-mono text-xs text-[#AAB2C0]/90">
                <Lock className="h-3.5 w-3.5 text-emerald-400" />
                <span className="truncate">app.drishx.com/home</span>
                <RotateCw className="ml-auto h-3.5 w-3.5 text-white/30" />
              </div>

              {/* Sync Status */}
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#F0A132]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F0A132]" />
                <span className="hidden sm:inline">LIVE SYNC: CONNECTED</span>
              </div>
            </div>

            {/* Browser Content Canvas */}
            <div className="space-y-8 bg-[#0B0F14] p-7 sm:p-10">
              {/* Greeting Bar */}
              <div className="flex flex-col justify-between gap-4 border-b border-white/6 pb-6 sm:flex-row sm:items-center">
                <div>
                  <div className="font-mono text-xs text-[#F0A132]">OPTICAL DISPENSARY PORTAL</div>
                  <h3 className="font-heading mt-1 text-2xl font-bold text-[#EAF0FA] sm:text-3xl">
                    VisionCraft Optics #02
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/4 px-4 py-1.5 font-mono text-xs text-[#AAB2C0]">
                    Account: Wholesaler Pro
                  </span>
                  <span className="rounded-full border border-[#F0A132]/40 bg-[#F0A132]/15 px-4 py-1.5 font-mono text-xs font-semibold text-[#F0A132]">
                    Quick Order +
                  </span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0F1620] px-4 py-3 text-sm text-[#AAB2C0]/80">
                <Search className="h-4 w-4 text-[#F0A132]" />
                <span>Search power ranges, coatings, or index (e.g. -2.50 SPH 1.67 BlueCut)...</span>
              </div>

              {/* Shop by Category (6-tile grid) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#EAF0FA] uppercase">
                    Shop by Category
                  </span>
                  <span className="font-mono text-[11px] text-[#AAB2C0]">Direct Factory Blanks</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
                  {[
                    { id: "sv", label: "Single Vision", icon: Eye },
                    { id: "prog", label: "Progressive", icon: Compass },
                    { id: "kt", label: "Kryptok / Bifocal", icon: Layers },
                    { id: "rx", label: "Rx Custom Lab", icon: Sparkles },
                    { id: "blue", label: "Blue-Cut Shield", icon: SunMedium },
                    { id: "color", label: "Color Tints", icon: Palette },
                  ].map((cat) => {
                    const Icon = cat.icon
                    return (
                      <div
                        key={cat.id}
                        className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/7 bg-[#0F1620] p-4 text-center transition-all hover:border-[#F0A132]/50 hover:bg-[#151D2A]"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0A132]/10 text-[#F0A132]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="truncate font-sans text-xs font-semibold text-[#EAF0FA]">
                          {cat.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* At a Glance Stats Cards */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#EAF0FA] uppercase">
                    At a Glance
                  </span>
                  <span className="text-xs font-semibold text-[#F0A132]">View All Orders →</span>
                </div>
                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
                  {[
                    { label: "Total Orders", val: "148", icon: Package, accent: "#5B9BF0" },
                    { label: "In Progress", val: "12", icon: TrendingUp, accent: "#D782E0" },
                    { label: "Ready to Ship", val: "6", icon: Truck, accent: "#F0A132" },
                    { label: "Completed", val: "130", icon: CheckCircle2, accent: "#4CC38A" },
                  ].map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="flex flex-col gap-2.5 rounded-2xl border border-white/7 bg-[#0F1620] p-4.5 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${stat.accent}20`, color: stat.accent }}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-mono text-[11px] text-emerald-400">+12%</span>
                        </div>
                        <div className="mt-1 font-mono text-2xl font-bold text-[#EAF0FA]">
                          {stat.val}
                        </div>
                        <div className="font-sans text-xs text-[#AAB2C0]">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Actions & Recent Batch Strip */}
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {/* Quick Actions */}
                <div className="rounded-2xl border border-white/6 bg-[#0F1620] p-4">
                  <div className="mb-3 text-xs font-bold text-[#EAF0FA] uppercase tracking-wider">
                    Dispensary Quick Actions
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Place Order", icon: ShoppingCart },
                      { label: "My Orders", icon: Receipt },
                      { label: "Invoices", icon: FileText },
                      { label: "Returns", icon: RotateCcw },
                    ].map((act) => {
                      const Icon = act.icon
                      return (
                        <div
                          key={act.label}
                          className="flex items-center gap-2.5 rounded-xl border border-white/6 bg-[#0B0F14] p-2.5 text-left text-xs transition-colors hover:border-[#F0A132]/40"
                        >
                          <Icon className="h-3.5 w-3.5 text-[#F0A132]" />
                          <span className="font-semibold text-[#EAF0FA]">{act.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Live Order Status Strip */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/6 bg-[#0F1620] p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#EAF0FA] uppercase tracking-wider">
                      Active Lab Surfacing
                    </span>
                    <span className="font-mono text-[10px] text-[#F0A132]">BATCH #9403</span>
                  </div>
                  <div className="my-2 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-[#EAF0FA]">Progressive Freeform 1.67 MR-8</div>
                      <div className="text-[11px] text-[#AAB2C0]">Digital Cut + Hydrophobic AR</div>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                      ON TRACK
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#AAB2C0]">
                    <span>Expected Dispatch: Today, 5:30 PM</span>
                    <span className="text-[#F0A132] flex items-center gap-1 cursor-pointer">
                      Track Batch <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. REAL SMARTPHONE FRAME (Taller & Proportional Device) */}
          {/* ========================================================= */}
          <div className="relative z-20 mt-10 w-84 rounded-[52px] border-[5px] border-[#222A36] bg-[#000000] p-4 shadow-[0_40px_95px_rgba(0,0,0,0.98)] sm:w-96 lg:mt-0 lg:-ml-28">
            {/* Phone Screen Bezel */}
            <div className="relative flex flex-col overflow-hidden rounded-[38px] border border-white/10 bg-[#0B0F14]">
              {/* iPhone Dynamic Island Header */}
              <div className="flex h-11 items-center justify-between px-6 pt-2.5 text-xs font-semibold text-white">
                <span>9:41</span>
                <div className="h-4.5 w-24 rounded-full bg-black" />
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span>5G</span>
                  <div className="h-2.5 w-4 rounded-sm border border-white" />
                </div>
              </div>

              {/* Mobile App Header Bar */}
              <div className="flex items-center justify-between border-b border-white/6 bg-[#0F1620] px-4.5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#F0A132] font-mono text-xs font-black text-[#0B0F14]">
                    VC
                  </div>
                  <div>
                    <div className="text-[10px] text-[#AAB2C0]">Welcome,</div>
                    <div className="text-xs font-bold text-[#EAF0FA]">VisionCraft Shop</div>
                  </div>
                </div>
                <div className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/10 bg-[#161D27]">
                  <Bell className="h-4 w-4 text-[#F0A132]" />
                  <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
              </div>

              {/* Mobile App Viewport Body (Extended height and spacing) */}
              <div className="space-y-4 p-5">
                {/* Mobile Search Bar */}
                <div className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-[#141A24] px-4 py-3 text-xs text-[#AAB2C0]/70">
                  <Search className="h-4 w-4 text-[#F0A132]" />
                  <span className="text-xs">Search lens powers (-2.00 SPH)...</span>
                </div>

                {/* Mobile Quick Diopter Matrix Widget */}
                <div className="rounded-2xl border border-white/8 bg-[#0F1620] p-4">
                  <div className="mb-2.5 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-[#AAB2C0]">INSTANT DISPENSARY CART</span>
                    <span className="text-[#F0A132]">STOCK BLANKS</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                    <div className="rounded-lg border border-[#F0A132]/30 bg-[#141A24] py-2.5 font-semibold text-[#F0A132]">
                      -2.25 D
                    </div>
                    <div className="rounded-lg border border-white/6 bg-[#141A24] py-2.5 font-semibold text-[#EAF0FA]">
                      90° AXIS
                    </div>
                    <button className="rounded-lg bg-[#F0A132] py-2.5 font-bold text-[#0B0F14] transition-colors hover:bg-[#E8941F]">
                      + Add
                    </button>
                  </div>
                </div>

                {/* Live Dispatch Courier Progress Pill */}
                <div className="rounded-2xl border border-[#F0A132]/30 bg-[#0F1620] p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-semibold text-[#EAF0FA]">
                      <span className="h-2 w-2 animate-ping rounded-full bg-[#F0A132]" />
                      Courier Dispatched
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#F0A132]">ETA: 24m</span>
                  </div>
                  <div className="text-[11px] text-[#AAB2C0]">
                    Batch #4802 · 18 Pairs (CR-39 BlueCut)
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#141A24]">
                    <div className="h-full w-[80%] bg-[#F0A132]" />
                  </div>
                </div>

                {/* Recent Invoices Quick Card */}
                <div className="flex items-center justify-between rounded-xl border border-white/6 bg-[#0F1620] p-4 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Receipt className="h-4.5 w-4.5 text-[#F0A132]" />
                    <div>
                      <div className="font-semibold text-[#EAF0FA]">Invoice #DX-9402</div>
                      <div className="text-[10px] text-[#AAB2C0]">18 Pairs &middot; Same-Day Dispatch</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                    PAID
                  </span>
                </div>

                {/* Customer Rewards / Status Chip */}
                <div className="flex items-center justify-between rounded-xl border border-white/6 bg-[#0F1620] px-4 py-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#F0A132]" />
                    <span className="text-[11px] text-[#AAB2C0]">Wholesale Tier: Level 3 (Gold)</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#F0A132]">5% OFF</span>
                </div>

                {/* Urgent Lens Request / Notification Banner */}
                <div className="flex items-center justify-between rounded-xl border border-white/6 bg-[#0B0F14] p-3.5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-[#F0A132]" />
                    <div>
                      <div className="text-[11px] font-semibold text-[#EAF0FA]">Evening Cut-Off in 45m</div>
                      <div className="text-[10px] text-[#AAB2C0]">Order before 6 PM for 8 PM delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Native Mobile Bottom Navigation Bar */}
              <div className="flex items-center justify-around border-t border-white/8 bg-[#0A0E15] py-3.5">
                <div className="flex flex-col items-center text-[#F0A132]">
                  <Home className="h-4.5 w-4.5" />
                  <span className="text-[9px] font-semibold">Home</span>
                </div>
                <div className="flex flex-col items-center text-[#AAB2C0]">
                  <ShoppingBag className="h-4.5 w-4.5" />
                  <span className="text-[9px]">Shop</span>
                </div>
                <div className="flex flex-col items-center text-[#AAB2C0]">
                  <Receipt className="h-4.5 w-4.5" />
                  <span className="text-[9px]">Orders</span>
                </div>
                <div className="relative flex flex-col items-center text-[#AAB2C0]">
                  <ShoppingCart className="h-4.5 w-4.5" />
                  <span className="absolute -top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#F0A132] text-[8px] font-bold text-[#0B0F14]">
                    3
                  </span>
                  <span className="text-[9px]">Cart</span>
                </div>
                <div className="flex flex-col items-center text-[#AAB2C0]">
                  <User className="h-4.5 w-4.5" />
                  <span className="text-[9px]">Profile</span>
                </div>
              </div>

              {/* iPhone Home Swipe Bar */}
              <div className="flex h-5.5 items-center justify-center bg-[#0A0E15]">
                <div className="h-1 w-32 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
