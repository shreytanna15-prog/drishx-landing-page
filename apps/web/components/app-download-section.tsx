import * as React from "react"
import { Smartphone, DownloadCloud } from "lucide-react"

export function AppDownloadSection() {
  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12" id="dock">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ GET THE APPS ]
          </div>
          <h2 className="font-heading mb-4 text-4xl font-normal tracking-tight text-[#EAF0FA] sm:text-5xl">
            Take Your Counter Anywhere.
          </h2>
          <p className="text-base text-[#AAB2C0]">
            Fast order entry on Android &amp; iOS, synced in real time with your desktop billing desk.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Info & Badges */}
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0A132]/30 bg-[#0F1620] px-3.5 py-1 font-mono text-xs tracking-wider text-[#F0A132] uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F0A132]" />
              NATIVE STOREFRONT SUITE
            </div>

            <h3 className="font-heading mb-4 text-3xl font-medium text-[#EAF0FA]">
              Point, Tap, and Restock in Between Consultations
            </h3>

            <p className="mb-8 max-w-lg text-sm leading-relaxed text-[#AAB2C0]">
              Equip optometrists, sales opticians, and lab runners with lightning-fast diopter matrix selection, real-time courier tracking, and instant optical surfacing desk chat.
            </p>

            {/* Official Store Buttons */}
            <div className="mb-6 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#0F1620] px-5 py-3 shadow-md transition-all hover:border-[#F0A132]/40 hover:bg-[#0F1620]/60"
                href="#"
              >
                {/* Android Icon */}
                <svg className="h-6 w-6 fill-[#F0A132]" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.12 12 8.12s-3.5902.2916-5.1368.8307L4.8409 5.4477a.416.416 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] leading-tight tracking-wider text-[#AAB2C0] uppercase">
                    Get it on
                  </div>
                  <div className="text-sm leading-tight font-semibold text-[#EAF0FA]">
                    Google Play
                  </div>
                </div>
              </a>

              <a
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#0F1620] px-5 py-3 shadow-md transition-all hover:border-[#F0A132]/40 hover:bg-[#0F1620]/60"
                href="#"
              >
                {/* Apple Icon */}
                <svg className="h-6 w-6 fill-[#F0A132]" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.92.04-2.05.62-2.7 1.39-.57.66-.99 1.72-.94 2.76 1.04.08 2.02-.53 2.63-1.28" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] leading-tight tracking-wider text-[#AAB2C0] uppercase">
                    Download on the
                  </div>
                  <div className="text-sm leading-tight font-semibold text-[#EAF0FA]">
                    App Store
                  </div>
                </div>
              </a>
            </div>

            {/* Direct APK Link */}
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-[#F0A132]/30 bg-white/[0.05] px-4 py-2.5 font-mono text-xs text-[#F0A132] transition-all hover:border-[#F0A132]"
              href="#"
            >
              <DownloadCloud className="h-4 w-4" />
              <span>Download Direct Android APK (v2.4) · 14.8 MB</span>
            </a>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex items-center justify-center lg:col-span-6">
            <div className="relative z-10 w-72 rounded-[32px] border-[3px] border-[#F0A132]/40 bg-[#0B0F14] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:w-80">
              <div className="w-full rounded-[24px] border border-white/[0.08] bg-[#0F1620] p-4">
                <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F0A132]/40 bg-[#F0A132]/20">
                      <span className="text-[9px] font-bold text-[#F0A132]">DX</span>
                    </div>
                    <span className="font-heading text-sm font-bold text-[#EAF0FA]">
                      DrishX Mobile
                    </span>
                  </div>
                  <span className="rounded bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                    LIVE SYNC
                  </span>
                </div>

                <div className="mb-3 rounded-xl border border-white/[0.06] bg-[#0B0F14] p-3">
                  <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-[#AAB2C0]">
                    <span>QUICK RE-ORDER</span>
                    <span className="text-[#F0A132]">LEFT / RIGHT</span>
                  </div>
                  <div className="flex items-center justify-between text-center">
                    <div className="rounded border border-[#F0A132]/30 bg-[#0F1620] px-2.5 py-1 font-mono text-xs font-semibold text-[#F0A132]">
                      -2.25 D
                    </div>
                    <span className="font-mono text-xs text-[#AAB2C0]">x</span>
                    <div className="rounded border border-[#F0A132]/30 bg-[#0F1620] px-2.5 py-1 font-mono text-xs font-semibold text-[#F0A132]">
                      90° AXIS
                    </div>
                    <button className="rounded bg-[#F0A132] px-3 py-1.5 text-[10px] font-bold text-[#0B0F14] transition-colors hover:bg-[#E8941F]">
                      Add
                    </button>
                  </div>
                </div>

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
      </div>
    </section>
  )
}
