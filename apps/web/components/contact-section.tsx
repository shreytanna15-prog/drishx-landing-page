"use client"

import * as React from "react"
import { MessageCircle, Phone, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    shopName: "",
    contactPerson: "",
    city: "",
    volume: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Inquiry submitted! We will contact your optical dispensary shortly.")
  }

  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12" id="wholesale-contact">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ REACH THE DESK ]
          </div>
          <h2 className="font-heading mb-4 text-4xl font-normal tracking-tight text-[#EAF0FA] sm:text-5xl">
            Direct Wholesale Inquiries.
          </h2>
          <p className="text-base text-[#AAB2C0]">
            Need custom lab pricing or bulk shop onboarding? Connect directly with our team.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#F0A132]/25 bg-[#0F1620] p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F0A132]/10 blur-3xl" />

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            {/* Left Column: Direct channels */}
            <div className="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:pr-10 lg:pb-0">
              <div>
                {/* WhatsApp CTA */}
                <a
                  className="group mb-5 flex items-center gap-4 rounded-2xl border border-[#F0A132]/30 bg-[#0B0F14] p-5 shadow-lg transition-all hover:border-[#F0A132]"
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
                    <MessageCircle className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAF0FA] transition-colors group-hover:text-[#F0A132]">
                      Chat on WhatsApp Desk
                    </div>
                    <div className="mt-0.5 text-xs text-[#AAB2C0]">
                      Instant Response under 5 mins
                    </div>
                  </div>
                </a>

                {/* Direct info cards */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0B0F14]/60 p-4">
                    <Phone className="h-5 w-5 text-[#F0A132]" />
                    <div>
                      <div className="text-[10px] text-[#AAB2C0] uppercase">
                        Direct Wholesale Hotline
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#EAF0FA]">
                        +1 (800) 492-DRISHX
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#AAB2C0]/70">
                        Mon–Sat, 9:00 AM – 9:00 PM EST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0B0F14]/60 p-4">
                    <Mail className="h-5 w-5 text-[#F0A132]" />
                    <div>
                      <div className="text-[10px] text-[#AAB2C0] uppercase">
                        Optical Support Email
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#EAF0FA]">
                        orders@drishx.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#F0A132]/30 bg-[#F0A132]/[0.07] p-3 font-mono text-xs text-[#F0A132]">
                <span className="h-2 w-2 rounded-full bg-[#F0A132]" />
                <span>Dispensary desk active for same-day cutoffs</span>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[#AAB2C0] uppercase">
                      Optical Shop / Store Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0B0F14] px-4 py-3 text-sm text-[#EAF0FA] placeholder:text-[#AAB2C0]/40 outline-none transition-colors focus:border-[#F0A132]"
                      placeholder="e.g. VisionCraft Optics #02"
                      required
                      type="text"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[#AAB2C0] uppercase">
                      Contact Person &amp; Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0B0F14] px-4 py-3 text-sm text-[#EAF0FA] placeholder:text-[#AAB2C0]/40 outline-none transition-colors focus:border-[#F0A132]"
                      placeholder="e.g. David Lin (+1 555-0192)"
                      required
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[#AAB2C0] uppercase">
                      City / State
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0B0F14] px-4 py-3 text-sm text-[#EAF0FA] placeholder:text-[#AAB2C0]/40 outline-none transition-colors focus:border-[#F0A132]"
                      placeholder="e.g. Chicago, IL"
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[#AAB2C0] uppercase">
                      Estimated Monthly Pairs Volume
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0B0F14] px-4 py-3 text-sm text-[#EAF0FA] placeholder:text-[#AAB2C0]/40 outline-none transition-colors focus:border-[#F0A132]"
                      placeholder="e.g. 150 – 300 Pairs / month"
                      required
                      type="text"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A132] py-4 text-sm font-bold tracking-wide text-[#0B0F14] shadow-[0_4px_20px_rgba(240,161,50,0.25)] transition-all hover:bg-[#E8941F]"
                  type="submit"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Catalog &amp; Price List</span>
                </button>

                <p className="mt-2 text-center font-mono text-[11px] text-[#AAB2C0]/70">
                  Verified wholesale optical accounts only · Zero minimum commitments
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
